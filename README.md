# SKELO Token

ERC-20-Entwurf fuer die Stadtwaehrung von SKELO ISLAND (Base). **Status: Entwicklung. Nicht auditiert, nicht auf dem Mainnet, nicht handelbar, kein Verkauf.**

## Inhalt
- `contracts/SkeloToken.sol`: feste Gesamtmenge 100.000.000 SKELO (18 Dezimalstellen), einmalig im Konstruktor auf Verteilungsadressen gepraegt; kein Mint, kein Owner, keine Pause, keine Sperrliste, keine Gebuehren, kein Upgrade.
- `contracts/OperatorVesting.sol`: Entwurf eines linearen Vestings mit Cliff (nicht deployed, nicht auditiert).
- `tests/`: deklarative EVM-Testspezifikationen (JSON), ausgefuehrt gegen den kompilierten Bytecode.
- `reports/`: Test-, Sicherheits- (Mustersuche) und Architekturberichte; `docs/`: Parameter, offene Entscheidungen, Architektur.
- `tools/`: Compiler- und Testlauf (solc-js, EVM-Bibliothek), gepinnte Abhaengigkeiten.

## Nachweise (Stand der Berichte)
- solc 0.8.28, Optimizer 200, EVM cancun; SkeloToken-Bytecode-SHA-256 `9dfd125e10a0854622f2da5bb628b1e2501a0a487e38220a542111a198fe310d`
- OperatorVesting-Bytecode-SHA-256 `93f57ec3c34713410ef2f32fcf44a3fbcdc2c25193ba52d5195288a08295fe1c`
- EVM-Tests SkeloToken: 25/25 Schritte; OperatorVesting: 40/40 Schritte
- Statische Mustersuche: 0 offene Befunde (kein Audit)
- Testnet: noch kein Deployment

## Selbst nachbauen und testen
```
cd tools && npm ci --ignore-scripts && cd ..
node tools/compile.mjs .
node tools/evmtest.mjs . skelo_erc20.json
node tools/evmtest.mjs . operatorvesting.json
```
Der Build ist reproduzierbar: Er wird zweimal kompiliert und die Bytecode-Hashes werden verglichen (`build/compile_report.json`).

## Offen vor einer Veroeffentlichung auf dem Mainnet
- Unabhaengiges Audit, Verteilungsadressen (Multisig), Vesting-Parameter, Entscheidung zu EIP-2612 permit, rechtliche Klaerung. Details: `docs/OPEN_DECISIONS.md`.

## Lizenz
MIT (siehe `LICENSE`); Abhaengigkeiten siehe `THIRD_PARTY.md`.
