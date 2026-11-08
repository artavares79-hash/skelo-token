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
| operator | 1.000.000 | 10.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| stadtkasse | 1.700.000 | 17.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| marketing | 400.000 | 4.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| entwicklung | 1.200.000 | 12.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| agenten_praemien | 745.000 | 7.5 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| reserve | 1.900.000 | 19.0 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| community_insel | 760.000 | 7.6 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| dex_liquiditaet | 50.000 | 0.5 % | OFFEN: Adresse festlegen (Multisig empfohlen) |
| presale_kaeufer | 2.245.000 | 22.4 % | OFFEN: Adresse festlegen (Multisig empfohlen) |

## Fehlende Parameter und Rechte (blockieren ein echtes Deployment)
- Adressen aller 9 Verteilungskonten (Betreiber; alle als Multisig)
- Beguenstigte (Multisig) der Vesting-Instanzen gemaess Beschluss; Parameter sind festgelegt
- Testnet-Deployer-Schluessel (frisch, nur Testnet; NIE die Insel-Wallet)
- Verifizierungs-Zugang (BaseScan-API-Key) fuer die Veroeffentlichung des Quelltexts
- Rechtliche Klaerung (MiCA, Steuer) vor jedem oeffentlichen Angebot
- Entscheidung ueber EIP-2612 permit (derzeit nicht enthalten)

## Rechte nach Deployment
- Kein privilegiertes Recht im Vertrag (kein Owner): nach dem Deployment kann niemand mehr minten, pausieren oder sperren.
- Praktische Rechte liegen bei den Inhabern der 9 Verteilungsadressen; deren Schluesselverwaltung ist die eigentliche Sicherheitsfrage.
