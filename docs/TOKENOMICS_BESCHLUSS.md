# Tokenomics-Beschluss (Buergermeister Skello)

Beschlossen von **Skello (Buergermeister) auf Grundlage des Vorschlags von David, Modell claude-sonnet-5-5** am 2026-11-08. Der Beschluss ist ein Entwurf fuer die technische Umsetzung; er ist kein Angebot, kein Verkauf und keine Anlageempfehlung. SKELO ist nicht ausgegeben und nicht handelbar.

**Gesamtmenge: 10.000.000 SKELO** (fest. keine Neupraegung)

| Kategorie | Menge | Anteil | Sperre/Freigabe |
|---|---:|---:|---|
| Betreiberanteil | 1.200.000 | 12.00 % | linear, Cliff 6 Monate, Dauer 36 Monate |
| Stadtkasse (SKELO STADTKASSE) | 2.000.000 | 20.00 % | keine Sperre im Vertrag |
| Marketing | 500.000 | 5.00 % | linear, Cliff 3 Monate, Dauer 24 Monate |
| Weiterentwicklung (Technik. Betrieb. Audit) | 1.500.000 | 15.00 % | linear, Cliff 6 Monate, Dauer 36 Monate |
| KI-Agenten und Leistungspraemien | 800.000 | 8.00 % | linear, Cliff 3 Monate, Dauer 24 Monate |
| Langfristige Reserve | 2.760.000 | 27.60 % | linear, Cliff 12 Monate, Dauer 48 Monate |
| Community und Inselwirtschaft | 760.000 | 7.60 % | keine Sperre im Vertrag |
| DEX-Liquiditaet | 50.000 | 0.50 % | keine Sperre im Vertrag |
| Presale-Zuteilung an Grundstuecks- und Hauskaeufer | 430.000 | 4.30 % | keine Sperre im Vertrag |

## Begruendung je Kategorie
### Betreiberanteil
Unveraendert zu v1. Betreiberanteil linear gesperrt (Cliff 6 Monate, 36 Monate Laufzeit), damit Betreiber und Kaeufer gleichgerichtete Interessen haben. Mainnet-Halter ist eine vom Betreiber festgelegte Multisig.
### Stadtkasse (SKELO STADTKASSE)
Unveraendert. Die Stadtkasse bleibt Auffangbecken fuer unverteilte Presale-Kontingente und finanziert den Betrieb der Insel. Sie wird per Multisig verwaltet, Buchung nicht verteilter Mengen durch die Software.
### Marketing
Unveraendert. Marketingmittel werden gestreckt freigegeben, damit keine Kampagnenmenge frueh in den Markt gelangt und die Ausgaben an den tatsaechlichen Fortschritt der Insel gebunden bleiben.
### Weiterentwicklung (Technik, Betrieb, Audit)
Unveraendert. Entwicklung der Insel, Vertraege und Werkzeuge ist ein langfristiger Aufwand und wird deshalb ueber 36 Monate mit 6 Monaten Cliff freigegeben.
### KI-Agenten und Leistungspraemien
Unveraendert. Praemien fuer KI-Agenten laufen linear ueber 24 Monate, damit Leistung langfristig belohnt wird und kein Einmalabfluss entsteht.
### Langfristige Reserve
Reduziert von 3.130.000 um 370.000, die in den Presale gehen. Die Reserve bleibt mit 27,6 % die zweitgroesste Kategorie, gesperrt mit 12 Monaten Cliff. Sie ist strikt getrennt von der USDC-Liquiditaet.
### Community und Inselwirtschaft
Unveraendert. Mittel fuer Community und Inselaktionen. Die Menge ist klar begrenzt und wird per Multisig nach offen dokumentierten Regeln ausgegeben.
### DEX-Liquiditaet
Unveraendert. 10.000 SKELO sind fuer einen moeglichen Pool vorgesehen, paarbar nur mit echten, bestaetigten USDC-Erloesen (reserve_bps). Ein Pool entsteht nur durch bewusste Multisig-Freigabe; es gibt keinen Kurs- oder Handelsanspruch.
### Presale-Zuteilung an Grundstuecks- und Hauskaeufer
Summe der vier Phasenkontingente (6.500 + 62.500 + 166.700 + 194.300 = 430.000) statt 60.000. Die 60.000 reichten nur fuer das Kleinszenario. Die Vesting-Regeln je Phase setzt ein Claim-Mechanismus um, nicht der Token.

## Gesamtbegruendung
Die v1-Reserve von 6.550 SKELO war nur fuer 26 Grundstuecke kalkuliert. Bonusvergleich: Bei 1.000 Grundstuecken, 25 % Absatz und 10 USDC Grundstueck ergeben sich 36.250 (20 %), 90.625 (50 %) und 181.250 SKELO (100 %). Bei 20.000 Grundstuecken und 60 USDC waeren 100 % rechnerisch ueber 600 % der Gesamtmenge. Ein 100-%-Bonus wuerde einen Geldwert nahelegen und ist nicht tragbar; auch 50 % sprengt grosse Kapazitaeten. Gewaehlt sind 20 % fallend auf 10 % mit festen Deckeln. Maximalexposure ist 430.000 SKELO (4,3 %). Verteilung: Reserve -370.000, alle anderen Kategorien unveraendert. Jede Phase ist per target_buyers belegt; spaetere Kaeufer ueber den Zielzahlen erhalten keinen Bonus. Die Kapazitaeten 1.000/5.000/10.000/20.000 sind bei Absatzquoten von rund 50/50/50/25 % gedeckt. Die USDC-Liquiditaet (reserve_bps) bleibt getrennt von der Token-Reserve. Kein Kursversprechen.

## Risiken (laut Beschluss)
- Wird die Zielkaeuferzahl ueberschritten, erhalten weitere Kaeufer keinen Bonus; das kann Unmut erzeugen.
- Mit nur 374,8 USDC Bestandsinventar und ohne reale Einnahmen ist die USDC-Liquiditaet moeglicherweise sehr klein.
- Bonus-SKELO koennten als Wertversprechen missverstanden werden; klare Hinweise sind noetig.
- Wallet-Grenze 250 gilt ueber alle Phasen; Sybil-Wallets sind nur mit Kauf- und Identitaetspruefung begrenzbar.
- Der Token kann kein bedingtes Vesting; die Phasen-Vesting-Regeln haengen von einem separaten Claim-Vertrag ab.

## Offene Punkte fuer den Betreiber (laut Beschluss)
- Claim-/Vesting-Vertrag je Phase muss entworfen, getestet und auditiert werden.
- Multisig-Adressen fuer alle Halter muss der Betreiber festlegen.
- Referenzkaufpreis 25 USDC mit Bauamt/Finanzabteilung gegen reale Haus- und Grundstuecksmixe pruefen.
- Rechtliche Pruefung der Bonus-Kommunikation (kein Geldwert, keine Kursaussage).
- Freigabeprozess fuer neue Baugebiete und Oeffnung der Phasen festlegen.

## Grundlagen
Finanzgrundlagen (Elena) und Umsetzbarkeit (David) liegen in `reports/tokenomics_grundlagen.json`. Es gibt keinen Marktpreis; keine Zahl in diesem Dokument ist eine Bewertung oder Renditeaussage.

## Umsetzung
- Ein Vesting-Vertrag je gesperrter Kategorie (`OperatorVesting`), Adresse vorab aus der Deployer-Nonce berechnet, dann Token-Konstruktor mit den Haltern.
- Mainnet: alle Halter/Beguenstigten sind Multisig-Adressen des Betreibers; sie sind NICHT festgelegt und werden nicht erfunden (siehe `deploy/distribution.json`, `mainnet_requirements`).
- Testnet: gekennzeichnete Testadressen.
