# Tokenomics-Beschluss (Buergermeister Skello)

Beschlossen von **Skello (Buergermeister) auf Grundlage des Vorschlags von David, Modell claude-sonnet-5-5** am 2026-11-08. Der Beschluss ist ein Entwurf fuer die technische Umsetzung; er ist kein Angebot, kein Verkauf und keine Anlageempfehlung. SKELO ist nicht ausgegeben und nicht handelbar.

**Gesamtmenge: 10.000.000 SKELO** (fest. keine Neupraegung)

| Kategorie | Menge | Anteil | Sperre/Freigabe |
|---|---:|---:|---|
| Betreiberanteil | 1.200.000 | 12.00 % | linear, Cliff 6 Monate, Dauer 36 Monate |
| Stadtkasse (SKELO STADTKASSE) | 2.000.000 | 20.00 % | linear, Cliff 3 Monate, Dauer 24 Monate |
| Marketing | 500.000 | 5.00 % | linear, Cliff 0 Monate, Dauer 12 Monate |
| Weiterentwicklung (Technik. Betrieb. Audit) | 1.500.000 | 15.00 % | linear, Cliff 6 Monate, Dauer 24 Monate |
| KI-Agenten und Leistungspraemien | 800.000 | 8.00 % | linear, Cliff 0 Monate, Dauer 24 Monate |
| Langfristige Reserve | 3.130.000 | 31.30 % | linear, Cliff 12 Monate, Dauer 36 Monate |
| Community und Inselwirtschaft | 760.000 | 7.60 % | linear, Cliff 0 Monate, Dauer 12 Monate |
| DEX-Liquiditaet | 50.000 | 0.50 % | linear, Cliff 0 Monate, Dauer 1 Monate |
| Presale-Zuteilung an Grundstuecks- und Hauskaeufer | 60.000 | 0.60 % | linear, Cliff 0 Monate, Dauer 1 Monate |

## Begruendung je Kategorie
### Betreiberanteil
Unveraendert aus v1. Der Betreiber traegt das Betriebsrisiko. 6 Monate Cliff und 36 Monate lineares Vesting binden ihn langfristig und verhindern kurzfristige Verkaeufe.
### Stadtkasse (SKELO STADTKASSE)
Unveraendert aus v1. Die Stadtkasse sichert den laufenden Betrieb. Gestaffelte Freigabe ueber 24 Monate schuetzt die Bewohner vor einem Verkaufsdruck der Kasse.
### Marketing
Unveraendert aus v1. Marketing braucht frueh nutzbare Mittel. 12 Monate lineare Freigabe halten die Menge am Markt dosiert und planbar.
### Weiterentwicklung (Technik, Betrieb, Audit)
Unveraendert aus v1. Entwicklung wird ueber Cliff und Vesting an laufende Lieferung gebunden. Das schuetzt das Vertrauen der Bewohner in den Betrieb.
### KI-Agenten und Leistungspraemien
Unveraendert aus v1. Praemien fuer Agenten und Beitragende werden ueber 24 Monate gleichmaessig freigegeben. So bleibt der Anreiz dauerhaft und es entsteht kein Sofortverkauf.
### Langfristige Reserve
Reserve sinkt von 3.183.450 auf 3.130.000, weil 53.450 SKELO in die Presale-Tranchen gehen. 12 Monate Cliff und 36 Monate Vesting halten sie langfristig gebunden und begrenzen die Verwaesserung.
### Community und Inselwirtschaft
Unveraendert aus v1. Die Community-Menge kommt den Bewohnern der Insel direkt zugute. Die Freigabe ueber 12 Monate vermeidet einen Schock und stuetzt das Vertrauen.
### DEX-Liquiditaet
Unveraendert aus v1. Davon sind hoechstens 10.000 SKELO fuer einen Pool vorgesehen. Ein Pool entsteht nur durch bewusste Multisig-Handlung. Es gibt keine Kurs- oder Preiszusage.
### Presale-Zuteilung an Grundstuecks- und Hauskaeufer
Summe der vier Phasenkontingente (4000+12000+20000+24000). Phasenvesting der Kaeufer wird bei der Zuteilung angewendet. Unverkaufte Mengen bleiben gesperrt und werden nie neu verteilt.

## Gesamtbegruendung
Die reale Einnahmemoeglichkeit ist klein: 26 Grundstuecke bringen hoechstens 374,8 USDC, die Stadtkasse hat 0 USDC. Ein fester Bonus fuer alle waere gefaehrlich, weil die Menge bei grossem Wachstum nicht mehr reichen wuerde. Deshalb beschliesse ich begrenzte Tranchen mit fallendem Bonus (20/15/12/10 %) und steigendem Referenzpreis (0,02/0,03/0,045/0,065 USDC). Das Gesamtkontingent betraegt 60.000 SKELO (0,6 %) und deckt rechnerisch 25.900 USDC Kaufpreis ab. Gegenueber David entfallen zwei Tranchen, deren Vorbedingung (33.750 und 57.600 USDC) nicht belegt ist. Das spart 60.000 SKELO fuer die Reserve. Die USDC-Erloese werden 40/40/20 auf Reserve, Betrieb und Steuer verteilt und bleiben strikt von der Tokenreserve getrennt. Die Zuteilung ist kein Geldwertversprechen, es gibt keine Kurs- oder Gewinnzusage.

## Risiken (laut Beschluss)
- Alle Einnahmen sind nur ein Szenario: Stadtkasse 0 USDC, keine realisierten Verkaeufe. Tranchen koennen unverkauft bleiben, die Mengen bleiben ohne Burn dauerhaft gesperrt.
- Wallet-Limit 1000 ist per Sybil-Aufteilung auf mehrere Adressen umgehbar. Gegenmittel sind Kaeuferbindung ueber den Grundstueckskauf und Pruefung.
- Der Bonus koennte als Geldwert- oder Kurszusage missverstanden werden. Klare Hinweise sind noetig, dass nichts garantiert wird.
- Kleine Phase-1-Quote (4000) kann rasch ausverkauft sein und spaetere Kaeufer benachteiligen.
- Mehrere Vesting-Instanzen je Phase und Kategorie erhoehen Deploy-Gas und Komplexitaet. Meilenstein-Vesting und Widerruf sind ohne neuen Vertrag nicht moeglich.

## Offene Punkte fuer den Betreiber (laut Beschluss)
- Mainnet-Multisig-Adressen fuer alle Halter und Beguenstigten muss der Betreiber festlegen. Sie duerfen nicht erfunden werden.
- Freigabe der Tranchengrenzen: Welche Baugebiete (Anzahl, Preise) gehoeren zu welcher Phase und wer bestaetigt das?
- Preise der Haeuser und neuen Grundstuecke sind ungeprueft. Die Szenarien (10/25/60 USDC) sind Annahmen, keine Daten.
- Rechtliche und steuerliche Pruefung der Bonus-Zuteilung (Tax-Anteil 20 % ist nur ein Planwert).
- Entscheidung, ob unverkaufte Tranchen nach Presale-Ende bewusst gesperrt bleiben oder die Vertraege neu geplant werden.

## Grundlagen
Finanzgrundlagen (Elena) und Umsetzbarkeit (David) liegen in `reports/tokenomics_grundlagen.json`. Es gibt keinen Marktpreis; keine Zahl in diesem Dokument ist eine Bewertung oder Renditeaussage.

## Umsetzung
- Ein Vesting-Vertrag je gesperrter Kategorie (`OperatorVesting`), Adresse vorab aus der Deployer-Nonce berechnet, dann Token-Konstruktor mit den Haltern.
- Mainnet: alle Halter/Beguenstigten sind Multisig-Adressen des Betreibers; sie sind NICHT festgelegt und werden nicht erfunden (siehe `deploy/distribution.json`, `mainnet_requirements`).
- Testnet: gekennzeichnete Testadressen.
