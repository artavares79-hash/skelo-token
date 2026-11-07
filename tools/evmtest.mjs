// SKELO EVM-Testlauf. Aufruf: node evmtest.mjs <projektordner> [specdatei]
// Fuehrt deklarative JSON-Testspezifikationen (<projekt>/tests/*.json) gegen den kompilierten Bytecode (<projekt>/build/*.json) in einer EVM-Bibliothek (@ethereumjs/vm, Cancun) aus.
// KEIN agenteneigener Code wird ausgefuehrt: nur Bytecode in der EVM und feste Vergleiche dieses Skripts. Ergebnis: <projekt>/build/test_report.json.
import fs from 'node:fs';
import path from 'node:path';
import { createVM } from '@ethereumjs/vm';
import { Common, Mainnet, Hardfork } from '@ethereumjs/common';
import { createAccount, createAddressFromString, hexToBytes, bytesToHex } from '@ethereumjs/util';
import { Interface } from 'ethers';
import { createBlock } from '@ethereumjs/block';

const proj = path.resolve(process.argv[2] || '.');
const only = process.argv[3];
const arts = {};
for (const f of fs.existsSync(path.join(proj, 'build')) ? fs.readdirSync(path.join(proj, 'build')) : []) {
  if (f.endsWith('.json') && !f.startsWith('compile_') && !f.startsWith('test_')) { const a = JSON.parse(fs.readFileSync(path.join(proj, 'build', f), 'utf8')); if (a.abi) arts[a.contractName] = Object.assign(a, { iface: new Interface(a.abi) }); }
}
const specs = fs.readdirSync(path.join(proj, 'tests')).filter(f => f.endsWith('.json') && (!only || f === only)).sort();
const common = new Common({ chain: Mainnet, hardfork: Hardfork.Cancun });
const report = { ok: true, evm: 'ethereumjs/vm cancun', specs: [], total: 0, passed: 0, failed: 0 };

function sameVal(got, want) { return JSON.stringify(norm(got)) === JSON.stringify(norm(want)); }
function norm(v) { if (typeof v === 'bigint') return v.toString(); if (typeof v === 'boolean') return String(v); if (Array.isArray(v)) return v.map(norm); if (v && typeof v === 'object' && typeof v.toArray === 'function') return v.toArray().map(norm); if (typeof v === 'string') return v.toLowerCase(); if (typeof v === 'number') return String(v); return v; }

for (const sf of specs) {
  const spec = JSON.parse(fs.readFileSync(path.join(proj, 'tests', sf), 'utf8'));
  const sr = { file: sf, name: spec.name || sf, steps: [], passed: 0, failed: 0 };
  const vm = await createVM({ common });
  const acct = {}; let n = 0;
  for (const [nm, hex] of Object.entries(spec.accounts || { deployer: '0x00000000000000000000000000000000000d0001', alice: '0x00000000000000000000000000000000000a0001', bob: '0x00000000000000000000000000000000000b0001', carol: '0x00000000000000000000000000000000000c0001', spender: '0x00000000000000000000000000000000000e0001' })) {
    acct[nm] = hex.toLowerCase(); await vm.stateManager.putAccount(createAddressFromString(acct[nm]), createAccount({ balance: 10n ** 21n })); n++;
  }
  const deployed = {}, aliasArt = {}; let ts = null, bn = 1n;   // Zeitsprung: {"warp": <unix-sekunden>} setzt block.timestamp fuer folgende Schritte
  const res = a => (typeof a === 'string' && a.startsWith('@')) ? (acct[a.slice(1)] || deployed[a.slice(1)]) : Array.isArray(a) ? a.map(res) : a;
  for (const [i, st] of (spec.steps || []).entries()) {
    const rec = { step: i + 1, title: st.title || st.fn || st.deploy || st.call || ('warp ' + st.warp), pass: false };
    try {
      if (st.warp !== undefined) { ts = BigInt(st.warp); bn += 1n; rec.pass = true; sr.steps.push(rec); sr.passed++; continue; }
      const from = createAddressFromString(acct[st.from || 'deployer']);
      let data, to, art;
      if (st.deploy) { art = arts[st.deploy]; if (!art) throw new Error('Artefakt fehlt: ' + st.deploy); data = art.bytecode + art.iface.encodeDeploy(res(st.args || [])).slice(2); data = hexToBytes(data.startsWith('0x') ? data : '0x' + data); to = undefined; }
      else { art = arts[st.call] || arts[aliasArt[st.call]]; if (!art) throw new Error('Artefakt fehlt: ' + st.call + ' (call = Vertragsname oder Alias aus "as")'); const addr = deployed[st.at || st.call] || deployed[art.contractName]; if (!addr) throw new Error('Vertrag nicht deployed: ' + st.call); data = hexToBytes(art.iface.encodeFunctionData(st.fn, res(st.args || []))); to = createAddressFromString(addr); }
      const call = { caller: from, to, data, gasLimit: 30_000_000n, value: 0n }; if (ts !== null) call.block = createBlock({ header: { timestamp: ts, number: bn } }, { common });
      const r = await vm.evm.runCall(call);
      const ex = r.execResult, failed = !!ex.exceptionError, ret = bytesToHex(ex.returnValue), exp = st.expect || { success: true };
      rec.gas = Number(ex.executionGasUsed);
      if (exp.revert !== undefined) {
        if (!failed) throw new Error('Revert erwartet, Aufruf war erfolgreich');
        let dec = ''; try { const pe = art.iface.parseError(ret); dec = pe ? (pe.name === 'Error' ? String(pe.args[0]) : pe.name === 'Panic' ? 'Panic(' + pe.args[0] + ')' : pe.name) : ''; } catch { /* unbekannt */ }
        if (!dec && ret.startsWith('0x08c379a0')) { try { dec = new Interface(['error Error(string)']).parseError(ret).args[0]; } catch { /* */ } }
        rec.revert = dec || ret.slice(0, 18);
        if (exp.revert && !(dec.includes(exp.revert) || rec.revert.includes(exp.revert))) throw new Error('Revert-Grund ' + rec.revert + ' != ' + exp.revert);
      } else {
        if (failed) { let dec = ''; try { const pe = art.iface.parseError(ret); dec = pe ? (pe.name === 'Error' ? String(pe.args[0]) : pe.name) : ''; } catch { /* */ } throw new Error('Unerwarteter Revert: ' + (dec || String(ex.exceptionError.error))); }
        if (st.deploy) { deployed[st.as || st.deploy] = r.createdAddress.toString(); if (st.as) aliasArt[st.as] = st.deploy; rec.address = deployed[st.as || st.deploy]; }
        if (exp.returns !== undefined) { const out = art.iface.decodeFunctionResult(st.fn, ret); const got = [...out]; if (!sameVal(got, exp.returns.map(res))) throw new Error('Rueckgabe ' + JSON.stringify(norm(got)) + ' != ' + JSON.stringify(norm(exp.returns))); }
        if (exp.events) {
          const evs = (ex.logs || []).map(l => { try { const p = art.iface.parseLog({ topics: l[1].map(bytesToHex), data: bytesToHex(l[2]) }); return p ? { name: p.name, args: [...p.args].map(norm) } : null; } catch { return null; } }).filter(Boolean);
          for (const w of exp.events) { const hit = evs.find(e => e.name === w.name && (!w.args || sameVal(e.args, w.args.map(res)))); if (!hit) throw new Error('Event fehlt: ' + w.name + ' (vorhanden: ' + evs.map(e => e.name).join(',') + ')'); }
          if (exp.events.length === 0 && evs.length) throw new Error('Keine Events erwartet, aber ' + evs.length + ' gefunden');
        }
      }
      rec.pass = true;
    } catch (e) { rec.error = String(e.message || e).slice(0, 300); }
    sr.steps.push(rec); rec.pass ? sr.passed++ : sr.failed++;
  }
  report.specs.push(sr); report.total += sr.steps.length; report.passed += sr.passed; report.failed += sr.failed;
}
report.ok = report.failed === 0 && report.total > 0;
fs.mkdirSync(path.join(proj, 'build'), { recursive: true });
fs.writeFileSync(path.join(proj, 'build', 'test_report.json'), JSON.stringify(report, null, 1));
console.log(JSON.stringify(report));
process.exit(report.ok ? 0 : 1);
