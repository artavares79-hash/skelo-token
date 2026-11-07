// SKELO Compile-Lauf. Aufruf: node compile.mjs <projektordner>
// Liest <projekt>/contracts/*.sol, loest Imports NUR aus dem Projekt (relativ) und aus @openzeppelin/contracts (gepinnt in diesem Ordner) auf,
// kompiliert mit solc-js (WASM, deterministisch, optimizer 200 Laeufe, evm cancun) ZWEIMAL und vergleicht die Bytecode-Hashes (reproduzierbarer Build).
// Schreibt <projekt>/build/<Vertrag>.json (abi, bytecode, deployedBytecode, Hashes) und <projekt>/build/compile_report.json. Fuehrt keinen Projektcode aus.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const solc = require('solc');
const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(process.argv[2] || '.');
const cdir = path.join(proj, 'contracts');
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const sources = {};
for (const f of fs.readdirSync(cdir)) if (f.endsWith('.sol')) sources['contracts/' + f] = { content: fs.readFileSync(path.join(cdir, f), 'utf8') };
if (!Object.keys(sources).length) { console.log(JSON.stringify({ ok: false, error: 'keine .sol-Dateien in contracts/' })); process.exit(2); }
const ozRoot = path.join(here, 'node_modules');
function findImports(p) {
  try {
    let full;
    if (p.startsWith('@openzeppelin/contracts/')) full = path.join(ozRoot, p);
    else if (p.startsWith('contracts/')) full = path.join(proj, p);
    else return { error: 'Import nicht erlaubt (nur @openzeppelin/contracts und Projektdateien): ' + p };
    full = path.resolve(full);
    const okRoot = p.startsWith('@openzeppelin/') ? path.resolve(ozRoot, '@openzeppelin') : path.resolve(proj, 'contracts');
    if (!full.startsWith(okRoot)) return { error: 'Pfad ausserhalb der erlaubten Wurzel' };
    return { contents: fs.readFileSync(full, 'utf8') };
  } catch (e) { return { error: 'nicht gefunden: ' + p }; }
}
const input = { language: 'Solidity', sources, settings: { optimizer: { enabled: true, runs: 200 }, evmVersion: 'cancun', outputSelection: { '*': { '*': ['abi', 'evm.bytecode.object', 'evm.deployedBytecode.object', 'metadata'] } } } };
function once() { return JSON.parse(solc.compile(JSON.stringify(input), { import: findImports })); }
const o1 = once(), o2 = once();
const errs = (o1.errors || []).map(e => ({ severity: e.severity, code: e.errorCode, message: e.formattedMessage.split('\n')[0], file: e.sourceLocation && e.sourceLocation.file }));
const fatal = errs.filter(e => e.severity === 'error');
const report = { ok: fatal.length === 0, solc: solc.version(), settings: input.settings, sources: Object.fromEntries(Object.entries(sources).map(([k, v]) => [k, sha(v.content)])), errors: fatal, warnings: errs.filter(e => e.severity !== 'error'), contracts: {} };
if (report.ok) {
  fs.mkdirSync(path.join(proj, 'build'), { recursive: true });
  for (const [file, cs] of Object.entries(o1.contracts)) for (const [name, c] of Object.entries(cs)) {
    if (!file.startsWith('contracts/')) continue;          // nur Projektvertraege; OZ-Basisvertraege sind im Bytecode enthalten
    const c2 = o2.contracts[file][name], bc = c.evm.bytecode.object, bc2 = c2.evm.bytecode.object;
    const art = { contractName: name, source: file, abi: c.abi, bytecode: '0x' + bc, deployedBytecode: '0x' + c.evm.deployedBytecode.object, bytecodeSha256: sha(bc), deployedBytecodeSha256: sha(c.evm.deployedBytecode.object), reproducible: bc === bc2 && c.evm.deployedBytecode.object === c2.evm.deployedBytecode.object, solc: solc.version() };
    if (bc.length) { fs.writeFileSync(path.join(proj, 'build', name + '.json'), JSON.stringify(art, null, 1)); }
    report.contracts[name] = { source: file, bytecodeBytes: bc.length / 2, deployedBytes: c.evm.deployedBytecode.object.length / 2, bytecodeSha256: art.bytecodeSha256, reproducible: art.reproducible, functions: c.abi.filter(x => x.type === 'function').map(x => x.name + '(' + x.inputs.map(i => i.type).join(',') + ')') };
  }
}
fs.mkdirSync(path.join(proj, 'build'), { recursive: true });
fs.writeFileSync(path.join(proj, 'build', 'compile_report.json'), JSON.stringify(report, null, 1));
console.log(JSON.stringify(report));
process.exit(report.ok ? 0 : 1);
