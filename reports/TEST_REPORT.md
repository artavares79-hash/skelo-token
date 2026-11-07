# Testbericht SKELO-Token

Ausgefuehrt in: ethereumjs/vm cancun (Cancun). Erzeugt von Ines Lindqvist (QA). Testspezifikation: `tests/skelo_erc20.json` (deklarativ; nur Bytecode wird in der EVM ausgefuehrt).

**25 von 25 Schritten bestanden, 0 fehlgeschlagen.** Deploy-Gas: 502130.

| # | Schritt | Ergebnis | Gas | Hinweis |
|---|---|---|---|---|
| 1 | Deploy mit 3 Haltern (60/30/10 Prozent der Gesamtmenge) | PASS | 502130 |  |
| 2 | name | PASS | 1086 |  |
| 3 | symbol | PASS | 1129 |  |
| 4 | decimals | PASS | 265 |  |
| 5 | Gesamtmenge = 10.000.000 SKELO | PASS | 325 |  |
| 6 | TOTAL_SUPPLY_WHOLE | PASS | 216 |  |
| 7 | Anfangsbestand alice | PASS | 537 |  |
| 8 | Anfangsbestand carol | PASS | 537 |  |
| 9 | Transfer sendet Event | PASS | 8881 |  |
| 10 | Bestand bob nach Transfer | PASS | 537 |  |
| 11 | Transfer ueber Guthaben schlaegt fehl | PASS | 892 | ERC20InsufficientBalance |
| 12 | Transfer an Nulladresse schlaegt fehl | PASS | 554 | ERC20InvalidReceiver |
| 13 | Approve sendet Event | PASS | 24734 |  |
| 14 | allowance | PASS | 810 |  |
| 15 | transferFrom im Rahmen der Freigabe | PASS | 12554 |  |
| 16 | Freigabe sinkt nach transferFrom | PASS | 810 |  |
| 17 | transferFrom ueber Freigabe schlaegt fehl | PASS | 956 | ERC20InsufficientAllowance |
| 18 | Unbegrenzte Freigabe setzen | PASS | 5534 |  |
| 19 | transferFrom mit unbegrenzter Freigabe | PASS | 9317 |  |
| 20 | Unbegrenzte Freigabe bleibt unbegrenzt | PASS | 810 |  |
| 21 | Gesamtmenge nach allen Transfers unveraendert | PASS | 325 |  |
| 22 | Konstruktor: falsche Summe -> Revert | PASS | 93947 | summe |
| 23 | Konstruktor: Laengen verschieden -> Revert | PASS | 46690 | laenge |
| 24 | Konstruktor: Nulladresse als Halter -> Revert | PASS | 46728 | holder=0 |
| 25 | Konstruktor: leere Liste -> Revert | PASS | 46374 | laenge |

## ABI-Negativpruefungen (kein privilegierter Zugriff)

- [x] ABI enthaelt keine Funktion mint()
- [x] ABI enthaelt keine Funktion burn()
- [x] ABI enthaelt keine Funktion pause()
- [x] ABI enthaelt keine Funktion owner()
- [x] ABI enthaelt keine Funktion blacklist()
- [x] ABI enthaelt keine Funktion setFee()
- [x] ABI enthaelt keine Funktion upgradeTo()
- [x] ABI enthaelt keine Funktion transferOwnership()
