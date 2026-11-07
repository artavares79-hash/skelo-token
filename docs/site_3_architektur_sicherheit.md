# SKELO: Architektur und Sicherheit (Stand der Prüfung)

Stand: 2026-11-07. Es gibt keinen ausgegebenen SKELO-Token. Beschrieben ist der Entwurfsstand.

## Blockchain
- Vorgesehenes Testnetz: Base Sepolia (Chain-ID 84532). Nichts ist dort deployed.
- Vorgesehenes Produktionsnetz: Base Mainnet (Chain-ID 8453), gesperrt bis zur Betreiberfreigabe. Nichts ist auf Mainnet deployed.

## Technische Architektur
- Token-Entwurf: ERC-20 auf Basis von OpenZeppelin Contracts 5.1.0, Solidity 0.8.28.
- Feste Gesamtmenge 10.000.000 SKELO, 18 Dezimalstellen. Die Verteilung erfolgt einmalig im Konstruktor; die Summe wird geprueft.
- Nicht enthalten: Mint-Funktion, Owner, Pausierung, Sperrliste, Gebuehren, Upgrade-Mechanik.

## Interner Pruefstand
Durchgefuehrt:
- solc-Build mit Version 0.8.28.
- 65 von 65 EVM-Schritten bestanden (JSON-Tests, mit warp).
- Statische Mustersuche und Bytecode-Opcode-Scan.
- Automatische Auswertung der ABI gegen die Spezifikation.
- Versionierung mit git.

Ergebnis: 0 offene Befunde im internen Pruefstand. Dies ist kein Sicherheitsnachweis durch Dritte.

NICHT geprueft:
- Kein externes Audit.
- Kein Testnet-Deployment.
- Kein Mainnet-Deployment.
- Keine rechtliche Pruefung (MiCA, Steuer).

## Offene Punkte
- Adressen der acht Halter/Beguenstigten sind nicht festgelegt; Multisig empfohlen, Adressen werden nicht erfunden.
- Sperren gemaess Beschluss: acht Kategorien je in einer OperatorVesting-Instanz (Betreiber 1.200.000 SKELO: Cliff 12, linear 48 Monate). Die Vertraege sind getestet (40 EVM-Schritte, lokale Generalprobe), aber nicht deployed und nicht auditiert.
- EIP-2612 (permit) ist nicht enthalten; die Entscheidung ist offen. Da der Token unveraenderlich ist, kann es spaeter nicht nachgeruestet werden.
- Es gibt keine Rettungsfunktion fuer versehentlich gesendete Token. Verteilungsadressen werden daher vor dem Deployment mehrfach geprueft und in einem Testnet-Probelauf erprobt (geplant).

## Ausblick DEX (nur geplant)
Eine spaetere Anbindung an eine dezentrale Boerse (DEX) ist geplant, nicht beschlossen und nicht umgesetzt. Voraussetzungen sind unter anderem eine Mainnet-Freigabe, ein externes Audit, die rechtliche Klaerung und eine Entscheidung ueber die Liquiditaetsreserve (50.000 SKELO, zurueckgehalten, kein Pool ohne Freigabe). Derzeit gibt es keinen Handelspool und keine Handelbarkeit.
