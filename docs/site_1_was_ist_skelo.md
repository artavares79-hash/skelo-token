# Was ist SKELO – Stand und offene Punkte

## Stand in einem Satz
SKELO ist **nicht ausgegeben**. Es ist **nichts deployed** und **nichts auditiert** (weder Testnet, Mainnet noch externes Audit). Es existiert ein Vertragsentwurf, der lokal kompiliert und in einer EVM getestet wurde.

## Was belegt ist
- Token-Entwurf: ERC-20, OpenZeppelin 5.1.0, Solidity 0.8.28.
- Feste Gesamtmenge: 10.000.000 SKELO (Beschluss des Buergermeisters), einmalig im Konstruktor verteilt; die Summe wird geprüft.
- Keine Mint-Funktion, kein Owner, keine Pausierung, keine Sperrliste, keine Gebühr, kein Upgrade (laut Architekturprüfung des ABI).
- Tests: 25 von 25 EVM-Schritten bestanden. Offene Befunde: 0.

## Was nicht belegt ist
- Kein Audit durch Dritte.
- Kein Testnet-Deployment und kein Mainnet-Deployment.
- Keine Ausgabe, kein Verkauf, keine Handelbarkeit (kein DEX-Pool, keine Börsenlistung).

## Beschlossene Verteilung
Die Verteilung ist beschlossen und mit dem Presale-Modell neu bewertet (Buergermeister Skelo auf Vorschlag von David, `docs/TOKENOMICS_BESCHLUSS.md`, `docs/PRESALE_MODELL.md`, `deploy/distribution.json`): Betreiberanteil 1.200.000, Stadtkasse 2.000.000, Marketing 500.000, Weiterentwicklung 1.500.000, KI-Agenten und Leistungspraemien 800.000, Langfristige Reserve 3.183.450, Community und Inselwirtschaft 760.000, Liquiditaetsreserve 50.000, Zuteilung an Grundstueckskaeufer (Presale-Modell, vorgeschlagen) 6.550 (Summe exakt 10.000.000). Acht Kategorien sind je in einer OperatorVesting-Instanz gesperrt vorgesehen; nur die Zuteilung an Grundstueckskaeufer liegt (bis zu einem noch zu bauenden Anspruchsvertrag) in einem Halter ohne Sperre.

## Geplant / Offen (nicht umgesetzt)
Diese Punkte sind offene Entscheidungen des Betreibers:
1. **Verteilungsadressen** (8 Halter/Beguenstigte) sind nicht festgelegt. Fuer alle ist eine Multisig vorgesehen; sie werden nicht erfunden.
2. **Vesting:** Betreiberanteil 1.200.000 SKELO (12 %, Cliff 12 Monate, linear ueber 48 Monate) und sechs weitere Kategorien liegen gemaess Beschluss in `OperatorVesting`-Instanzen; Vertrag und Parameter sind getestet, aber nicht deployed und nicht auditiert.
3. **EIP-2612 (permit)** ist nicht enthalten; die Entscheidung ist offen.
4. **Chain-Parameter** Base Mainnet (8453) sind nur dokumentiert; nichts wurde deployed.

Zusätzlich vor einem öffentlichen Angebot offen: rechtliche Klärung (MiCA, Steuer).
