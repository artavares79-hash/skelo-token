# SKELO Presale- und Zuteilungsmodell (VORGESCHLAGEN)

Entwurf von **David** (Blockchain Labs), beschlossen von **Skello** (Buergermeister), 2026-11-08. **Status: vorgeschlagenes Modell. Es gibt keinen Verkauf, keine Tokenzuteilung, keine Freigabe fuer Mainnet, echten Presale oder DEX. Rechtliche Pruefung (MiCA, Verbraucherschutz, Steuer) steht aus.**

Grundstueck bzw. Haus (digitales Nutzungsrecht) und SKELO-Zuteilung sind zwei verschiedene Leistungen. Die Zuteilung ist kein garantierter Geldwert; der Referenzpreis ist ein Zuteilungsmassstab, kein Marktpreis und keine Zusicherung eines spaeteren Kurses.

**Modell:** Vier feste Tranchen mit 20-%-Bonus-Start, degressiv bis 10 %, Gesamtdeckel 430.000 SKELO

## Phasen

Preiseinheit: micro-USDC je 1 ganzem SKELO (1 USDC = 1.000.000); Zuteilung = Kaufpreis x Bonus / Referenzpreis.

| Phase | Referenzpreis (USDC je SKELO) | Kontingent (SKELO) | Bonus (% des Kaufpreises) | Freigabe (Vesting ab Tokenstart) |
|---|---:|---:|---:|---|
| Phase 1 - Early Founders | 0.020000 | 6.500 | 20.00 | 20 % bei Start, Rest Cliff 3 / Dauer 12 Monate |
| Phase 2 - Island Expansion | 0.030000 | 62.500 | 15.00 | 30 % bei Start, Rest Cliff 2 / Dauer 9 Monate |
| Phase 3 - Community Growth | 0.045000 | 166.700 | 12.00 | 40 % bei Start, Rest Cliff 1 / Dauer 6 Monate |
| Phase 4 - Final Phase | 0.065000 | 194.300 | 10.00 | 50 % bei Start, Rest Cliff 1 / Dauer 6 Monate |

Grenze je Wallet: 250 SKELO. Ende: Jede Phase endet bei ausverkauftem Kontingent oder per Beschluss nach Ende der Baugebietsfreigabe. Nach endgueltigem Abschluss der Phase 4 gehen alle nicht zugeteilten SKELO der Phasen an die Stadtkasse. Es gibt keine Nachpraegung und keine Kontingenterhoehung.

## Beispielrechnungen (exakt, Ganzzahlmathematik)

| Kaufpreis (USDC) | Phase 1 - Early Founders | Phase 2 - Island Expansion | Phase 3 - Community Growth | Phase 4 - Final Phase |
|---|---:|---:|---:|---:|
| 12.17 | 121.70 SKELO (ausverkauft nach 54 Kaeufen) | 60.85 SKELO (ausverkauft nach 1028 Kaeufen) | 32.45 SKELO (ausverkauft nach 5137 Kaeufen) | 18.72 SKELO (ausverkauft nach 10378 Kaeufen) |
| 18.82 | 188.20 SKELO (ausverkauft nach 35 Kaeufen) | 94.10 SKELO (ausverkauft nach 665 Kaeufen) | 50.19 SKELO (ausverkauft nach 3322 Kaeufen) | 28.95 SKELO (ausverkauft nach 6711 Kaeufen) |
| 50 | 500.00 SKELO (ausverkauft nach 13 Kaeufen) | 250.00 SKELO (ausverkauft nach 250 Kaeufen) | 133.33 SKELO (ausverkauft nach 1251 Kaeufen) | 76.92 SKELO (ausverkauft nach 2526 Kaeufen) |
| 100 | 1000.00 SKELO (ausverkauft nach 7 Kaeufen) | 500.00 SKELO (ausverkauft nach 125 Kaeufen) | 266.67 SKELO (ausverkauft nach 626 Kaeufen) | 153.85 SKELO (ausverkauft nach 1263 Kaeufen) |
| 500 | 5000.00 SKELO (ausverkauft nach 2 Kaeufen) | 2500.00 SKELO (ausverkauft nach 25 Kaeufen) | 1333.33 SKELO (ausverkauft nach 126 Kaeufen) | 769.23 SKELO (ausverkauft nach 253 Kaeufen) |

## Reales Inventar vs. Kontingent
Alle freien Grundstuecke zusammen (374.8 USDC Listenpreise) reichen fuer:

- p1: noetig fuer Ausverkauf 650.00 USDC; ausgeschoepft 57.66 %
- p2: noetig fuer Ausverkauf 12500.00 USDC; ausgeschoepft 0.0 %
- p3: noetig fuer Ausverkauf 62512.50 USDC; ausgeschoepft 0.0 %
- p4: noetig fuer Ausverkauf 126295.00 USDC; ausgeschoepft 0.0 %

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
| Langfristige Reserve | 2.760.000 | 27.60 % |
| Community und Inselwirtschaft | 760.000 | 7.60 % |
| DEX-Liquiditaet | 50.000 | 0.50 % |
| Presale-Zuteilung an Grundstuecks- und Hauskaeufer | 430.000 | 4.30 % |

Beschluss v1 (zum Vergleich): operator 1.200.000, stadtkasse 2.000.000, marketing 500.000, entwicklung 1.500.000, agenten_praemien 800.000, reserve 2.000.000, community_insel 760.000, dex_liquiditaet 1.240.000

## Skellos Beschluss
Entscheidung: **annehmen**

Davids Modell erfüllt alle formalen Vorgaben und schützt die Interessen der Stadt. Prüfung: (1) Verteilung: neun Kategorien, Summe exakt 10.000.000. Die Phasenkontingente 6.500 + 62.500 + 166.700 + 194.300 ergeben 430.000 und entsprechen presale_kaeufer. lp 10.000 ist kleiner oder gleich 50.000 DEX. (2) Finanzierungsnachweis je Phase gilt: 26 x 250 = 6.500; 500 x 125 = 62.500; 2.500 x 66,67 = 166.667 (<= 166.700); 5.000 x 38,46 = 192.308 (<= 194.300). Es gibt keine unfinanzierte Zusage. (3) Preise 0,02 / 0,03 / 0,045 / 0,065 USDC steigen strikt. Bonus je USDC (1,0 / 0,5 / 0,267 / 0,154 SKELO) fällt strikt. (4) Verwässerung: maximal 4,3 % der Gesamtmenge, fester Deckel, keine Nachprägung. Das ist verkraftbar, ein 50- oder 100-%-Bonus wäre es nicht. (5) Betrieb und Bestandsdeckung: Operator, Entwicklung, Marketing, Agenten, Community, DEX und Stadtkasse bleiben unverändert. Die Reserve sinkt auf 2,76 Mio. und bleibt weiterhin die größte Kategorie mit 12 Monaten Cliff. (6) Liquidität: Bei nur 374,8 USDC Inventar wird nicht einmal Phase 1 (650 USDC) ausverkauft. Nicht vergebene SKELO fallen an die Stadtkasse, es entsteht kein Schaden. Einnahmen werden nicht als vorhanden behandelt, die Erlösaufteilung 40/40/20 ist sachgerecht. (7) Vertrauen: Der Wallet-Deckel von 250 und das frühe, längere Vesting belohnen Risiko ohne Kursversprechen. Eigene Änderungen sind nicht nötig; die Risiken werden über offene Punkte gesteuert.

Aenderungen gegenueber David:
- Keine. Davids Vorschlag wird unverändert beschlossen; Auflagen stehen in den offenen Punkten.

Aenderungen gegenueber Beschluss v1:
- presale_kaeufer: 60.000 -> 430.000 SKELO (+370.000), aufgeteilt in vier feste Tranchen statt des bisherigen Kontingents.
- reserve: 3.130.000 -> 2.760.000 SKELO (-370.000) als einzige Gegenbuchung.
- operator, stadtkasse, marketing, entwicklung, agenten_praemien, community_insel, dex_liquiditaet: unverändert.
- Gesamtmenge bleibt 10.000.000; Vesting der übrigen Kategorien unverändert.
- Neu: Phasenmodell mit 20 % bis 10 % Bonus, Wallet-Grenze 250 SKELO, Phasen-Vesting über einen separaten Claim-Vertrag.
- Neu: Nicht vergebene Phasenmengen fallen nach Abschluss von Phase 4 an die Stadtkasse.

## Gesamtbegruendung
Die v1-Reserve von 6.550 SKELO war nur fuer 26 Grundstuecke kalkuliert. Bonusvergleich: Bei 1.000 Grundstuecken, 25 % Absatz und 10 USDC Grundstueck ergeben sich 36.250 (20 %), 90.625 (50 %) und 181.250 SKELO (100 %). Bei 20.000 Grundstuecken und 60 USDC waeren 100 % rechnerisch ueber 600 % der Gesamtmenge. Ein 100-%-Bonus wuerde einen Geldwert nahelegen und ist nicht tragbar; auch 50 % sprengt grosse Kapazitaeten. Gewaehlt sind 20 % fallend auf 10 % mit festen Deckeln. Maximalexposure ist 430.000 SKELO (4,3 %). Verteilung: Reserve -370.000, alle anderen Kategorien unveraendert. Jede Phase ist per target_buyers belegt; spaetere Kaeufer ueber den Zielzahlen erhalten keinen Bonus. Die Kapazitaeten 1.000/5.000/10.000/20.000 sind bei Absatzquoten von rund 50/50/50/25 % gedeckt. Die USDC-Liquiditaet (reserve_bps) bleibt getrennt von der Token-Reserve. Kein Kursversprechen.

## Risiken
- Wird die Zielkaeuferzahl ueberschritten, erhalten weitere Kaeufer keinen Bonus; das kann Unmut erzeugen.
- Mit nur 374,8 USDC Bestandsinventar und ohne reale Einnahmen ist die USDC-Liquiditaet moeglicherweise sehr klein.
- Bonus-SKELO koennten als Wertversprechen missverstanden werden; klare Hinweise sind noetig.
- Wallet-Grenze 250 gilt ueber alle Phasen; Sybil-Wallets sind nur mit Kauf- und Identitaetspruefung begrenzbar.
- Der Token kann kein bedingtes Vesting; die Phasen-Vesting-Regeln haengen von einem separaten Claim-Vertrag ab.

## Offene Punkte / fehlende Freigaben
- Claim-/Vesting-Vertrag je Phase muss entworfen, getestet und auditiert werden.
- Multisig-Adressen fuer alle Halter muss der Betreiber festlegen.
- Referenzkaufpreis 25 USDC mit Bauamt/Finanzabteilung gegen reale Haus- und Grundstuecksmixe pruefen.
- Rechtliche Pruefung der Bonus-Kommunikation (kein Geldwert, keine Kursaussage).
- Freigabeprozess fuer neue Baugebiete und Oeffnung der Phasen festlegen.
- Betreiberfreigabe fuer echten Presale (presale.open), Verkaufsfreigabe (land.sales_open + legal_confirmed), Mainnet-Deployment, Liquiditaetsbereitstellung.
- Rechtliche Pruefung des Tokenbonus (MiCA, Verbraucherschutz, Steuer).
- Technisch noch offen: on-chain Anspruchsvertrag (Claim/Vesting je Kaeufer); bis dahin sind Zuteilungen Buchungen im Backend.
