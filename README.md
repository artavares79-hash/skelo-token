# SKELO Token

ERC-20-Entwurf fuer die Stadtwaehrung von SKELO ISLAND (Base). **Status: Entwicklung. Nicht auditiert, nicht auf dem Mainnet, nicht handelbar, kein Verkauf.**

## Inhalt
- `contracts/SkeloToken.sol`: feste Gesamtmenge 10.000.000 SKELO (18 Dezimalstellen), einmalig im Konstruktor auf Verteilungsadressen gepraegt; kein Mint, kein Owner, keine Pause, keine Sperrliste, keine Gebuehren, kein Upgrade.
- `contracts/OperatorVesting.sol`: Entwurf eines linearen Vestings mit Cliff (nicht deployed, nicht auditiert).
- `tests/`: deklarative EVM-Testspezifikationen (JSON), ausgefuehrt gegen den kompilierten Bytecode.
- `reports/`: Test-, Sicherheits- (Mustersuche) und Architekturberichte; `docs/`: Parameter, offene Entscheidungen, Architektur.
- `tools/`: Compiler- und Testlauf (solc-js, EVM-Bibliothek), gepinnte Abhaengigkeiten.

## Nachweise (Stand der Berichte)
- solc 0.8.28, Optimizer 200, EVM cancun; SkeloToken-Bytecode-SHA-256 `be4134ecfa6dbe204a273d9745abc895183540cdf13a905ecbfd5cf038075047`
- OperatorVesting-Bytecode-SHA-256 `93f57ec3c34713410ef2f32fcf44a3fbcdc2c25193ba52d5195288a08295fe1c`
- EVM-Tests SkeloToken: 25/25 Schritte; OperatorVesting: 40/40 Schritte
- Statische Mustersuche: 0 offene Befunde (kein Audit)
- Testnet: noch kein Deployment

## Beschlossene Verteilung (Entwurf, nicht deployed)
Gesamtmenge **10.000.000 SKELO**, beschlossen vom Buergermeister der Insel (Begruendung: `docs/TOKENOMICS_BESCHLUSS.md`, maschinenlesbar: `deploy/distribution.json`). Summe der Kategorien: 10.000.000.

| Kategorie | SKELO | Anteil | Sperre |
|---|---:|---:|---|
| Betreiberanteil | 1.200.000 | 12.0 % | linear, Cliff 6 Mon., Dauer 36 Mon. |
| Stadtkasse | 2.000.000 | 20.0 % | keine im Vertrag |
| Marketing | 500.000 | 5.0 % | linear, Cliff 3 Mon., Dauer 24 Mon. |
| Weiterentwicklung | 1.500.000 | 15.0 % | linear, Cliff 6 Mon., Dauer 36 Mon. |
| KI-Agenten und Leistungspraemien | 800.000 | 8.0 % | linear, Cliff 3 Mon., Dauer 24 Mon. |
| Langfristige Reserve | 2.760.000 | 27.6 % | linear, Cliff 12 Mon., Dauer 48 Mon. |
| Community und Inselwirtschaft | 760.000 | 7.6 % | keine im Vertrag |
| DEX-Liquiditaet | 50.000 | 0.5 % | keine im Vertrag |
| Presale-Zuteilung an Kaeufer | 430.000 | 4.3 % | keine im Vertrag |

Die Halter- und Beguenstigten-Adressen fuer ein spaeteres Mainnet sind **nicht festgelegt** und werden nicht erfunden (Multisig-Adressen des Betreibers noetig). Auf dem Testnet kommen gekennzeichnete Testadressen zum Einsatz.

## Presale-/Zuteilungsmodell (VORGESCHLAGEN, kein Verkauf)
Grundstuecks-/Hauskaeufer koennten gemaess Modell zusaetzlich SKELO zugeteilt bekommen (Details, Beispielrechnungen, Risiken: `docs/PRESALE_MODELL.md`, Zahlen: `deploy/presale_model.json`, `reports/presale_scenarios.json`). Das ist **kein Angebot**, keine Zuteilung hat stattgefunden, es gibt keinen Verkauf und keine Handelbarkeit; der Referenzpreis ist kein Marktpreis. Die Backend-Logik (Buch, Idempotenz, Erstattung) liegt im Insel-Backend und ist hier nicht enthalten.

| Phase | Referenzpreis (USDC je SKELO) | Kontingent (SKELO) | Bonus |
|---|---:|---:|---:|
| Phase 1 - Early Founders | 0.020 | 6.500 | 20 % |
| Phase 2 - Island Expansion | 0.030 | 62.500 | 15 % |
| Phase 3 - Community Growth | 0.045 | 166.700 | 12 % |
| Phase 4 - Final Phase | 0.065 | 194.300 | 10 % |

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
