# Deployment-Plan Base Sepolia (VORBEREITET - nichts gesendet)

Erstellt von Felix Brandt (Infrastruktur). Es wurde **keine Transaktion gesendet**, es existiert kein Schluessel in diesem Projekt.

## Zustand
- Reproduzierbarer Build: ja (zweimal kompiliert, Bytecode identisch)
- Bytecode SHA-256: `9dfd125e10a0854622f2da5bb628b1e2501a0a487e38220a542111a198fe310d`
- Deploy-Gas laut EVM-Test: 502330
- Tests: 25/25 bestanden
- Offene Sicherheitsbefunde (>= low): 0

## Skript-Absicherungen (Textpruefung von `script/DeploySkeloTestnet.s.sol`)
- [x] chainid-Pruefung (nur 84532)
- [ ] Schluessel nur aus Umgebungsvariable
- [x] Mainnet im Skript ausgeschlossen

## Schritte
1. Betreiber legt die 7 Verteilungsadressen fest und traegt sie in `deploy/constructor_args.json` ein (Vorlage: `constructor_args.template.json`).
2. Betreiber erzeugt einen NEUEN Testnet-Schluessel (nur Base-Sepolia-ETH vom Faucet; nie die Insel-Wallet) und setzt ihn nur auf der isolierten Deploy-Maschine als Umgebungsvariable.
3. Quelltext mit gleichem Compiler bauen (solc 0.8.28) und Bytecode-SHA-256 `9dfd125e10a08546...` vergleichen.
4. Deployment ueber `script/DeploySkeloTestnet.s.sol` auf Base Sepolia (84532) - erst nach Betreiberfreigabe.
5. Quelltext auf dem Testnet-Explorer verifizieren (Standard-JSON `deploy/standard-input.json`).
6. Verteilung on-chain gegen `docs/TOKEN_PARAMETERS.md` abgleichen (Summe = 10.000.000).

## BLOCKIERT bis Betreiberangaben
- Verteilungsadressen, Testnet-Schluessel, Freigabe zum Testnet-Deployment. Mainnet ist ausgeschlossen.
