# Tokenparameter SKELO

| Parameter | Wert | Stand |
|---|---|---|
| Name / Symbol | SKELO / SKELO | festgelegt (Vertrag) |
| Dezimalstellen | 18 | festgelegt (OpenZeppelin-Standard) |
| Gesamtmenge | 100.000.000 SKELO | festgelegt (Konstante. Konstruktor prueft Summe) |
| Mint / Owner / Pause / Sperrliste / Gebuehren / Upgrade | keine | festgelegt (nicht im ABI) |
| Netz Test | Base Sepolia (84532) | vorbereitet, nichts deployed |
| Netz Produktion | Base Mainnet (8453) | GESPERRT bis Betreiberfreigabe |

## Verteilung (Konstruktor-Argumente)

| Konto | SKELO | Anteil | Adresse |
|---|---|---|---|
| res:stadtkasse | 30.000.000 | 30.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| res:entwicklung | 15.000.000 | 15.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| res:arbeit | 20.000.000 | 20.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| res:bonus | 5.000.000 | 5.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| res:liquiditaet | 10.000.000 | 10.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| res:betreiber | 5.000.000 | 5.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| res:oekosystem | 15.000.000 | 15.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |

## Fehlende Parameter und Rechte (blockieren ein echtes Deployment)
- Adressen aller 7 Verteilungskonten (Betreiber; Stadtkasse/Reserven als Multisig)
- Vesting-/Lock-Mechanik fuer den Betreiberanteil (5 Mio.) - separater Vertrag noetig
- Testnet-Deployer-Schluessel (frisch, nur Testnet; NIE die Insel-Wallet)
- Verifizierungs-Zugang (BaseScan-API-Key) fuer die Veroeffentlichung des Quelltexts
- Rechtliche Klaerung (MiCA, Steuer) vor jedem oeffentlichen Angebot
- Entscheidung ueber EIP-2612 permit (derzeit nicht enthalten)

## Rechte nach Deployment
- Kein privilegiertes Recht im Vertrag (kein Owner): nach dem Deployment kann niemand mehr minten, pausieren oder sperren.
- Praktische Rechte liegen bei den Inhabern der 7 Verteilungsadressen; deren Schluesselverwaltung ist die eigentliche Sicherheitsfrage.
