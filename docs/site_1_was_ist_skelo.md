# Was ist SKELO – Stand und offene Punkte

## Stand in einem Satz
SKELO ist **nicht ausgegeben**. Es ist **nichts deployed** und **nichts auditiert** (weder Testnet, Mainnet noch externes Audit). Es existiert ein Vertragsentwurf, der lokal kompiliert und in einer EVM getestet wurde.

## Was belegt ist
- Token-Entwurf: ERC-20, OpenZeppelin 5.1.0, Solidity 0.8.28.
- Feste Gesamtmenge: 100.000.000 SKELO, einmalig im Konstruktor verteilt; die Summe wird geprüft.
- Keine Mint-Funktion, kein Owner, keine Pausierung, keine Sperrliste, keine Gebühr, kein Upgrade (laut Architekturprüfung des ABI).
- Tests: 25 von 25 EVM-Schritten bestanden. Offene Befunde: 0.

## Was nicht belegt ist
- Kein Audit durch Dritte.
- Kein Testnet-Deployment und kein Mainnet-Deployment.
- Keine Ausgabe, kein Verkauf, keine Handelbarkeit (kein DEX-Pool, keine Börsenlistung).

## Geplant / Offen (nicht umgesetzt)
Diese vier Punkte sind offene Entscheidungen des Betreibers:
1. **Verteilungsadressen** (7 Konten) sind nicht festgelegt. Für die Stadtkasse ist eine Multisig vorgesehen.
2. **Vesting** des Betreiberanteils (5 Mio. SKELO) ist im Token-Vertrag nicht abgebildet; es wäre ein separater Vesting-Vertrag nötig.
3. **EIP-2612 (permit)** ist nicht enthalten; die Entscheidung ist offen.
4. **Chain-Parameter** Base Mainnet (8453) sind nur dokumentiert; nichts wurde deployed.

Zusätzlich vor einem öffentlichen Angebot offen: rechtliche Klärung (MiCA, Steuer).
