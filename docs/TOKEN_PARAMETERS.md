# Tokenparameter SKELO

| Parameter | Wert | Stand |
|---|---|---|
| Name / Symbol | SKELO / SKELO | festgelegt (Vertrag) |
| Dezimalstellen | 18 | festgelegt (OpenZeppelin-Standard) |
| Gesamtmenge | 10.000.000 SKELO | festgelegt (Konstante. Konstruktor prueft Summe) |
| Mint / Owner / Pause / Sperrliste / Gebuehren / Upgrade | keine | festgelegt (nicht im ABI) |
| Netz Test | Base Sepolia (84532) | vorbereitet, nichts deployed |
| Netz Produktion | Base Mainnet (8453) | GESPERRT bis Betreiberfreigabe |

## Verteilung (Konstruktor-Argumente)

| Konto | SKELO | Anteil | Adresse |
|---|---|---|---|
| operator | 1.200.000 | 12.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| stadtkasse | 2.000.000 | 20.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| marketing | 500.000 | 5.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| entwicklung | 1.500.000 | 15.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| agenten_praemien | 800.000 | 8.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| reserve | 2.000.000 | 20.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| community_insel | 760.000 | 7.6 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| dex_liquiditaet | 1.240.000 | 12.4 % | OFFEN: Adresse festlegen (Multisig empfohlen) |

## Fehlende Parameter und Rechte (blockieren ein echtes Deployment)
- Adressen aller 8 Verteilungskonten (Betreiber; alle als Multisig)
- Beguenstigte (Multisig) der Vesting-Instanzen gemaess Beschluss; Parameter sind festgelegt
- Testnet-Deployer-Schluessel (frisch, nur Testnet; NIE die Insel-Wallet)
- Verifizierungs-Zugang (BaseScan-API-Key) fuer die Veroeffentlichung des Quelltexts
- Rechtliche Klaerung (MiCA, Steuer) vor jedem oeffentlichen Angebot
- Entscheidung ueber EIP-2612 permit (derzeit nicht enthalten)

## Rechte nach Deployment
- Kein privilegiertes Recht im Vertrag (kein Owner): nach dem Deployment kann niemand mehr minten, pausieren oder sperren.
- Praktische Rechte liegen bei den Inhabern der 8 Verteilungsadressen; deren Schluesselverwaltung ist die eigentliche Sicherheitsfrage.
