# Tokenomics-Beschluss (Buergermeister Skello)

Beschlossen von **Skello (Buergermeister) auf Grundlage des Vorschlags von David, Modell claude-sonnet-5-5** am 2026-11-08. Der Beschluss ist ein Entwurf fuer die technische Umsetzung; er ist kein Angebot, kein Verkauf und keine Anlageempfehlung. SKELO ist nicht ausgegeben und nicht handelbar.

**Gesamtmenge: 10.000.000 SKELO** (fest. keine Neupraegung)

| Kategorie | Menge | Anteil | Sperre/Freigabe |
|---|---:|---:|---|
| Betreiberanteil | 1.200.000 | 12.00 % | linear, Cliff 12 Monate, Dauer 48 Monate |
| Stadtkasse (SKELO STADTKASSE) | 2.000.000 | 20.00 % | linear, Cliff 6 Monate, Dauer 36 Monate |
| Marketing | 500.000 | 5.00 % | linear, Cliff 3 Monate, Dauer 24 Monate |
| Weiterentwicklung (Technik. Betrieb. Audit) | 1.500.000 | 15.00 % | linear, Cliff 6 Monate, Dauer 36 Monate |
| KI-Agenten und Leistungspraemien | 800.000 | 8.00 % | linear, Cliff 0 Monate, Dauer 24 Monate |
| Langfristige Reserve | 3.183.450 | 31.83 % | linear, Cliff 12 Monate, Dauer 48 Monate |
| Community und Inselwirtschaft | 760.000 | 7.60 % | linear, Cliff 3 Monate, Dauer 24 Monate |
| DEX-Liquiditaet | 50.000 | 0.50 % | linear, Cliff 0 Monate, Dauer 6 Monate |
| Presale-Zuteilung an Grundstuecks- und Hauskaeufer | 6.550 | 0.07 % | linear, Cliff 0 Monate, Dauer 1 Monate |

## Begruendung je Kategorie
### Betreiberanteil
Unveraendert zu v1. Der Betreiber traegt das Betreiberrisiko, 12 Monate Cliff und 48 Monate linear binden ihn an den langfristigen Erfolg der Stadt und verhindern frueheres Abstossen.
### Stadtkasse (SKELO STADTKASSE)
Unveraendert zu v1. Langfristiger Haushalt der Stadt in SKELO. Die Kasse hat 0 USDC, deshalb sind die Token kein Bargeld. 6 Monate Cliff und 36 Monate linear vermeiden Marktdruck.
### Marketing
Unveraendert zu v1. Mittel fuer Bekanntheit und Aktionen, gestreckt ueber 24 Monate nach 3 Monaten Cliff, damit Ausgaben an echte Ergebnisse gekoppelt bleiben.
### Weiterentwicklung (Technik, Betrieb, Audit)
Unveraendert zu v1. Finanziert die technische Weiterentwicklung der Insel ueber drei Jahre. Der Cliff von 6 Monaten sichert Kontinuitaet und verhindert, dass Entwicklungsanteile frueh verkauft werden.
### KI-Agenten und Leistungspraemien
Unveraendert zu v1. Praemien fuer die Agenten der Stadt fliessen sofort linear ueber 24 Monate, damit laufende Leistung belohnt wird, ohne dass auf einmal grosse Mengen frei werden.
### Langfristige Reserve
Erhoeht von 2.000.000 auf 3.183.450, weil der DEX-Anteil sinkt und P3/P4 verkleinert wurden. Lange Sperre (12/48) puffert Liquiditaetsbedarf und schuetzt Bewohner vor Ueberhang. Ausgabe nur per Multisig.
### Community und Inselwirtschaft
Unveraendert zu v1. Anteil fuer die Bewohner und Community-Aktionen. 3 Monate Cliff und 24 Monate linear sorgen fuer faire, planbare Verteilung statt einmaliger Ausschuettung.
### DEX-Liquiditaet
Von 1.240.000 auf 50.000 gesenkt. Ein Pool kann nur so gross werden wie die echten, bestaetigten USDC (wenige hundert). 10.000 SKELO fuer den Start, Rest als Nachschuss. Vesting 6 Monate gegen Ueberhang.
### Presale-Zuteilung an Grundstuecks- und Hauskaeufer
Summe der Phasenkontingente 4000+2000+450+100. Das phasenspezifische Vesting je Kaeufer ist on-chain mit OperatorVesting nicht abbildbar und braucht einen Presale-/Claim-Mechanismus. Nicht vergebene Menge wird nicht neu verteilt.

## Gesamtbegruendung
Die Stadtkasse hat 0 USDC, gesichert sind nur 374,8 USDC aus 26 Grundstuecken. Haeuser (4/8/15/20/40 USDC) sind Potenzial, aber unbestaetigt. Darum bleiben die Quoten klein und exakt an USDC-Kapazitaet gemessen: 400+400+202,5+130 = 1.132,5 USDC. Der Bonus ist ein SKELO-Anteil am Kaufpreis zum Referenzpreis, weder Geldwert noch Kurszusage. Erloese gehen zu 40 % in spaetere Liquiditaet, 40 % in den Betrieb, 20 % in Steuern. Pool nur nach Multisig-Freigabe und bestaetigten USDC, SKELO-Menge hoechstens 10.000. Die Gesamtmenge bleibt 10.000.000: 1.200.000+2.000.000+500.000+1.500.000+800.000+3.183.450+760.000+50.000+6.550 = 10.000.000. Wallet-Limit 1.000 SKELO verhindert Konzentration in einer Hand.

## Risiken (laut Beschluss)
- Reale USDC-Einnahmen koennen unter der Kapazitaet bleiben; nicht vergebene Quoten bleiben gesperrt und werden nicht neu verteilt
- Ein Pool mit nur wenigen hundert USDC ist anfaellig fuer starke Preisschwankungen und Manipulation; kein Preis- oder Gewinnversprechen
- Rechtliche Einstufung des Bonus als Wertpapier/Krypto-Asset und der Steuerquote ist ungeklaert
- Vesting je Kaeufer ist ohne zusaetzlichen Vertrag nicht on-chain durchsetzbar; nach Deployment nicht aenderbar
- Wallet-Limit ist durch mehrere Wallets umgehbar (Sybil); Hausverkaeufe und damit Phasen 2 bis 4 sind unbestaetigt

## Offene Punkte fuer den Betreiber (laut Beschluss)
- Multisig-Adressen fuer Halter und Beguenstigte vom Betreiber festlegen (nicht erfinden)
- Zahl und Preise der verkaufbaren Haeuser/Erweiterungen bestaetigen
- Rechtliche Pruefung von Bonus, Steuerquote und Kaeuferhinweisen
- Mechanismus fuer Vesting je Kaeufer klaeren (Presale-/Claim-Vertrag oder Multisig-Auszahlung nach Zeitplan)
- Freigabeprozess und Schwellen der Multisig fuer die Pool-Erstellung festlegen

## Grundlagen
Finanzgrundlagen (Elena) und Umsetzbarkeit (David) liegen in `reports/tokenomics_grundlagen.json`. Es gibt keinen Marktpreis; keine Zahl in diesem Dokument ist eine Bewertung oder Renditeaussage.

## Umsetzung
- Ein Vesting-Vertrag je gesperrter Kategorie (`OperatorVesting`), Adresse vorab aus der Deployer-Nonce berechnet, dann Token-Konstruktor mit den Haltern.
- Mainnet: alle Halter/Beguenstigten sind Multisig-Adressen des Betreibers; sie sind NICHT festgelegt und werden nicht erfunden (siehe `deploy/distribution.json`, `mainnet_requirements`).
- Testnet: gekennzeichnete Testadressen.
