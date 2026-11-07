# SKELO Presale- und Zuteilungsmodell (VORGESCHLAGEN)

Entwurf von **David** (Blockchain Labs), beschlossen von **Skello** (Buergermeister), 2026-11-08. **Status: vorgeschlagenes Modell. Es gibt keinen Verkauf, keine Tokenzuteilung, keine Freigabe fuer Mainnet, echten Presale oder DEX. Rechtliche Pruefung (MiCA, Verbraucherschutz, Steuer) steht aus.**

Grundstueck bzw. Haus (digitales Nutzungsrecht) und SKELO-Zuteilung sind zwei verschiedene Leistungen. Die Zuteilung ist kein garantierter Geldwert; der Referenzpreis ist ein Zuteilungsmassstab, kein Marktpreis und keine Zusicherung eines spaeteren Kurses.

**Modell:** Bonus-Presale 4 Phasen, realistisch gedeckelt, Pool nur aus echten USDC

## Phasen

Preiseinheit: micro-USDC je 1 ganzem SKELO (1 USDC = 1.000.000); Zuteilung = Kaufpreis x Bonus / Referenzpreis.

| Phase | Referenzpreis (USDC je SKELO) | Kontingent (SKELO) | Bonus (% des Kaufpreises) | Freigabe (Vesting ab Tokenstart) |
|---|---:|---:|---:|---|
| Phase 1 Fruehkaeufer | 0.020000 | 4.000 | 20.00 | 20 % bei Start, Rest Cliff 3 / Dauer 12 Monate |
| Phase 2 | 0.030000 | 2.000 | 15.00 | 30 % bei Start, Rest Cliff 2 / Dauer 9 Monate |
| Phase 3 | 0.045000 | 450 | 10.00 | 50 % bei Start, Rest Cliff 1 / Dauer 6 Monate |
| Phase 4 Abschluss | 0.065000 | 100 | 5.00 | 100 % bei Start, Rest Cliff 0 / Dauer 1 Monate |

Grenze je Wallet: 1.000 SKELO. Ende: Presale endet, wenn alle Phasenkontingente vergeben sind oder keine verkaufbaren Grundstuecke/Haeuser mehr verfuegbar sind. Nicht vergebene Kontingente werden nicht neu verteilt, es gibt keine Neupraegung. Ein Pool entsteht nur nach Multisig-Freigabe und nur mit bestaetigten echten USDC-Erloesen, SKELO-Menge hoechstens lp_skelo_whole.

## Beispielrechnungen (exakt, Ganzzahlmathematik)

| Kaufpreis (USDC) | Phase 1 Fruehkaeufer | Phase 2 | Phase 3 | Phase 4 Abschluss |
|---|---:|---:|---:|---:|
| 12.17 | 121.70 SKELO (ausverkauft nach 33 Kaeufen) | 60.85 SKELO (ausverkauft nach 33 Kaeufen) | 27.04 SKELO (ausverkauft nach 17 Kaeufen) | 9.36 SKELO (ausverkauft nach 11 Kaeufen) |
| 18.82 | 188.20 SKELO (ausverkauft nach 22 Kaeufen) | 94.10 SKELO (ausverkauft nach 22 Kaeufen) | 41.82 SKELO (ausverkauft nach 11 Kaeufen) | 14.48 SKELO (ausverkauft nach 7 Kaeufen) |
| 50 | 500.00 SKELO (ausverkauft nach 8 Kaeufen) | 250.00 SKELO (ausverkauft nach 8 Kaeufen) | 111.11 SKELO (ausverkauft nach 5 Kaeufen) | 38.46 SKELO (ausverkauft nach 3 Kaeufen) |
| 100 | 1000.00 SKELO (ausverkauft nach 4 Kaeufen) | 500.00 SKELO (ausverkauft nach 4 Kaeufen) | 222.22 SKELO (ausverkauft nach 3 Kaeufen) | 76.92 SKELO (ausverkauft nach 2 Kaeufen) |
| 500 | 5000.00 SKELO (ausverkauft nach 1 Kaeufen) | 2500.00 SKELO (ausverkauft nach 1 Kaeufen) | 1111.11 SKELO (ausverkauft nach 1 Kaeufen) | 384.62 SKELO (ausverkauft nach 1 Kaeufen) |

## Reales Inventar vs. Kontingent
Alle freien Grundstuecke zusammen (374.8 USDC Listenpreise) reichen fuer:

- p1: noetig fuer Ausverkauf 400.00 USDC; ausgeschoepft 93.7 %
- p2: noetig fuer Ausverkauf 400.00 USDC; ausgeschoepft 0.0 %
- p3: noetig fuer Ausverkauf 202.50 USDC; ausgeschoepft 0.0 %
- p4: noetig fuer Ausverkauf 130.00 USDC; ausgeschoepft 0.0 %

## Verwendung der bestaetigten USDC-Einnahmen
- Liquiditaetsreserve (rechnerisch vorgemerkt): 40.00 %; Betrieb: 40.00 %; Steuern/Gebuehren: 20.00 %.
- Fuer einen spaeteren SKELO/USDC-Pool sind 10.000 SKELO aus der Liquiditaetsreserve vorgesehen. Anfangspreis = USDC-Reserve / SKELO-Menge; bei geringen Erloesen entsteht nur ein sehr flacher Pool (hohe Preisschwankung, Risiko grosser Verkaeufe).
- Erwartete Verkaeufe werden NICHT als Kapital verbucht. Nur bestaetigte, echte Einnahmen zaehlen; simulierte Buchungen werden getrennt ausgewiesen. Ein Pool braucht echte Mittel.

## Verteilung (neu bewertet)

| Kategorie | SKELO | Anteil |
|---|---:|---:|
| Betreiberanteil | 1.200.000 | 12.00 % |
| Stadtkasse (SKELO STADTKASSE) | 2.000.000 | 20.00 % |
| Marketing | 500.000 | 5.00 % |
| Weiterentwicklung (Technik, Betrieb, Audit) | 1.500.000 | 15.00 % |
| KI-Agenten und Leistungspraemien | 800.000 | 8.00 % |
| Langfristige Reserve | 3.183.450 | 31.83 % |
| Community und Inselwirtschaft | 760.000 | 7.60 % |
| DEX-Liquiditaet | 50.000 | 0.50 % |
| Presale-Zuteilung an Grundstuecks- und Hauskaeufer | 6.550 | 0.07 % |

Beschluss v1 (zum Vergleich): operator 1.200.000, stadtkasse 2.000.000, marketing 500.000, entwicklung 1.500.000, agenten_praemien 800.000, reserve 2.000.000, community_insel 760.000, dex_liquiditaet 1.240.000

## Skellos Beschluss
Entscheidung: **aendern**

Davids Grundstruktur uebernehme ich: Quoten an realer USDC-Kapazitaet gemessen, Referenzpreise strikt steigend, Bonus sinkend, keine Neupraegung, Pool nur nach Multisig-Freigabe und mit bestaetigten echten USDC. Die Rechnung stimmt (400/400/405/260 USDC, Summe Quoten 7.100, Verteilung = 10.000.000). Ich aendere aus fuenf Gruenden: (1) Gesichert sind nur 374,8 USDC aus Grundstuecken, Phase 1 wird damit nicht einmal voll. Phase 3 und 4 haengen komplett an unbestaetigten Hausverkaeufen. Nicht verkaufte Quote bliebe dauerhaft gesperrt, weil es kein Burn-Recht gibt, und wuerde die ausgewiesene Menge verzerren. Daher halbiere ich P3 und P4. (2) 300.000 SKELO ohne Vesting als DEX-Halter sind ein Ueberhang- und Manipulationsrisiko, der Pool braucht nur rund 10.000 SKELO. DEX sinkt auf 50.000, der Rest geht in die Reserve mit langem Vesting. (3) Max. 2.000 SKELO je Wallet entspricht der halben Phase-1-Quote in einer Hand. Ich senke auf 1.000, das schuetzt die Verteilung vor Einzelaufkaeufern. (4) Die Stadtkasse hat 0 USDC und der Betrieb muss laufen. Ich verschiebe die Erloesaufteilung zu 40/40/20, weil ein Pool mit unter 200 USDC ohnehin kaum Tiefe bietet. (5) Vesting je Kaeufer ist mit OperatorVesting nicht abbildbar und bleibt offen. Der Bonus ist kein Geldwert und keine Kurszusage.

Aenderungen gegenueber David:
- Quote P3 von 900 auf 450 SKELO (202,5 USDC), Quote P4 von 200 auf 100 SKELO (130 USDC)
- presale_kaeufer von 7.100 auf 6.550 SKELO
- max_skelo_per_wallet von 2.000 auf 1.000
- dex_liquiditaet von 300.000 auf 50.000 SKELO, lp_skelo bleibt 10.000 als Obergrenze
- reserve von 2.932.900 auf 3.183.450 SKELO
- Erloesaufteilung von 50/30/20 auf 40/40/20 (reserve/ops/tax)
- dex_liquiditaet erhaelt Vesting 6 Monate statt 1 Monat
- Vesting je Kaeufer als eigener offener Punkt benannt, Steuerquote nur vorbehaltlich rechtlicher Pruefung

Aenderungen gegenueber Beschluss v1:
- dex_liquiditaet von 1.240.000 auf 50.000 SKELO (-1.190.000)
- reserve von 2.000.000 auf 3.183.450 SKELO (+1.183.450)
- neue Kategorie presale_kaeufer mit 6.550 SKELO
- operator, stadtkasse, marketing, entwicklung, agenten_praemien, community_insel unveraendert
- Gesamtmenge unveraendert 10.000.000
- Neu: Bonus-Presale in 4 Phasen, Pool nur aus bestaetigten echten USDC-Erloesen
- Neu: Erloesaufteilung 40/40/20 in Reserve-Liquiditaet, Betrieb, Steuern
- Neu: Wallet-Limit 1.000 SKELO

## Gesamtbegruendung
Die Stadtkasse hat 0 USDC, gesichert sind nur 374,8 USDC aus 26 Grundstuecken. Haeuser (4/8/15/20/40 USDC) sind Potenzial, aber unbestaetigt. Darum bleiben die Quoten klein und exakt an USDC-Kapazitaet gemessen: 400+400+202,5+130 = 1.132,5 USDC. Der Bonus ist ein SKELO-Anteil am Kaufpreis zum Referenzpreis, weder Geldwert noch Kurszusage. Erloese gehen zu 40 % in spaetere Liquiditaet, 40 % in den Betrieb, 20 % in Steuern. Pool nur nach Multisig-Freigabe und bestaetigten USDC, SKELO-Menge hoechstens 10.000. Die Gesamtmenge bleibt 10.000.000: 1.200.000+2.000.000+500.000+1.500.000+800.000+3.183.450+760.000+50.000+6.550 = 10.000.000. Wallet-Limit 1.000 SKELO verhindert Konzentration in einer Hand.

## Risiken
- Reale USDC-Einnahmen koennen unter der Kapazitaet bleiben; nicht vergebene Quoten bleiben gesperrt und werden nicht neu verteilt
- Ein Pool mit nur wenigen hundert USDC ist anfaellig fuer starke Preisschwankungen und Manipulation; kein Preis- oder Gewinnversprechen
- Rechtliche Einstufung des Bonus als Wertpapier/Krypto-Asset und der Steuerquote ist ungeklaert
- Vesting je Kaeufer ist ohne zusaetzlichen Vertrag nicht on-chain durchsetzbar; nach Deployment nicht aenderbar
- Wallet-Limit ist durch mehrere Wallets umgehbar (Sybil); Hausverkaeufe und damit Phasen 2 bis 4 sind unbestaetigt

## Offene Punkte / fehlende Freigaben
- Multisig-Adressen fuer Halter und Beguenstigte vom Betreiber festlegen (nicht erfinden)
- Zahl und Preise der verkaufbaren Haeuser/Erweiterungen bestaetigen
- Rechtliche Pruefung von Bonus, Steuerquote und Kaeuferhinweisen
- Mechanismus fuer Vesting je Kaeufer klaeren (Presale-/Claim-Vertrag oder Multisig-Auszahlung nach Zeitplan)
- Freigabeprozess und Schwellen der Multisig fuer die Pool-Erstellung festlegen
- Betreiberfreigabe fuer echten Presale (presale.open), Verkaufsfreigabe (land.sales_open + legal_confirmed), Mainnet-Deployment, Liquiditaetsbereitstellung.
- Rechtliche Pruefung des Tokenbonus (MiCA, Verbraucherschutz, Steuer).
- Technisch noch offen: on-chain Anspruchsvertrag (Claim/Vesting je Kaeufer); bis dahin sind Zuteilungen Buchungen im Backend.
