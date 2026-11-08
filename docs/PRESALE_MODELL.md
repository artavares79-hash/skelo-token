# SKELO Presale- und Zuteilungsmodell (VORGESCHLAGEN)

Entwurf von **David** (Blockchain Labs), beschlossen von **Skelo** (Buergermeister), 2026-11-08. **Status: vorgeschlagenes Modell. Es gibt keinen Verkauf, keine Tokenzuteilung, keine Freigabe fuer Mainnet, echten Presale oder DEX. Rechtliche Pruefung (MiCA, Verbraucherschutz, Steuer) steht aus.**

Grundstueck bzw. Haus (digitales Nutzungsrecht) und SKELO-Zuteilung sind zwei verschiedene Leistungen. Die Zuteilung ist kein garantierter Geldwert; der Referenzpreis ist ein Zuteilungsmassstab, kein Marktpreis und keine Zusicherung eines spaeteren Kurses.

**Modell:** Vier feste Phasen, harte Kontingentdeckel, 20/15/12/10 % Bonus, 1:1 Haus je Grundstueck

## Phasen

Preiseinheit: micro-USDC je 1 ganzem SKELO (1 USDC = 1.000.000); Zuteilung = Kaufpreis x Bonus / Referenzpreis.

| Phase | Referenzpreis (USDC je SKELO) | Kontingent (SKELO) | Bonus (% des Kaufpreises) | Freigabe (Vesting ab Tokenstart) |
|---|---:|---:|---:|---|
| Phase 1 - Early Founders | 0.020000 | 400.000 | 20.00 | 20 % bei Start, Rest Cliff 3 / Dauer 12 Monate |
| Phase 2 - Island Expansion | 0.030000 | 800.000 | 15.00 | 30 % bei Start, Rest Cliff 2 / Dauer 9 Monate |
| Phase 3 - Community Growth | 0.045000 | 600.000 | 12.00 | 40 % bei Start, Rest Cliff 1 / Dauer 6 Monate |
| Phase 4 - Final Phase | 0.065000 | 800.000 | 10.00 | 50 % bei Start, Rest Cliff 1 / Dauer 6 Monate |

Grenze je Wallet: 2.000 SKELO. Ende: Nach endgueltigem Abschluss der Phase 4 (oder Beschluss, dass keine weitere Phase geoeffnet wird) bucht die Software alle nicht zugeteilten Phasenkontingente an die Stadtkasse. Keine Nachpraegung, keine Nachzuteilung. Neue Gebiete erhalten nur Kontingent innerhalb der Phasendeckel.

## Beispielrechnungen (exakt, Ganzzahlmathematik)

| Kaufpreis (USDC) | Phase 1 - Early Founders | Phase 2 - Island Expansion | Phase 3 - Community Growth | Phase 4 - Final Phase |
|---|---:|---:|---:|---:|
| 12.17 | 121.70 SKELO (ausverkauft nach 3287 Kaeufen) | 60.85 SKELO (ausverkauft nach 13148 Kaeufen) | 32.45 SKELO (ausverkauft nach 18489 Kaeufen) | 18.72 SKELO (ausverkauft nach 42729 Kaeufen) |
| 18.82 | 188.20 SKELO (ausverkauft nach 2126 Kaeufen) | 94.10 SKELO (ausverkauft nach 8502 Kaeufen) | 50.19 SKELO (ausverkauft nach 11956 Kaeufen) | 28.95 SKELO (ausverkauft nach 27631 Kaeufen) |
| 50 | 500.00 SKELO (ausverkauft nach 800 Kaeufen) | 250.00 SKELO (ausverkauft nach 3200 Kaeufen) | 133.33 SKELO (ausverkauft nach 4501 Kaeufen) | 76.92 SKELO (ausverkauft nach 10401 Kaeufen) |
| 100 | 1000.00 SKELO (ausverkauft nach 400 Kaeufen) | 500.00 SKELO (ausverkauft nach 1600 Kaeufen) | 266.67 SKELO (ausverkauft nach 2251 Kaeufen) | 153.85 SKELO (ausverkauft nach 5201 Kaeufen) |
| 500 | 5000.00 SKELO (ausverkauft nach 80 Kaeufen) | 2500.00 SKELO (ausverkauft nach 320 Kaeufen) | 1333.33 SKELO (ausverkauft nach 451 Kaeufen) | 769.23 SKELO (ausverkauft nach 1041 Kaeufen) |

## Reales Inventar vs. Kontingent
Alle freien Grundstuecke zusammen (374.8 USDC Listenpreise) reichen fuer:

- p1: noetig fuer Ausverkauf 40000.00 USDC; ausgeschoepft 0.94 %
- p2: noetig fuer Ausverkauf 160000.00 USDC; ausgeschoepft 0.0 %
- p3: noetig fuer Ausverkauf 225000.00 USDC; ausgeschoepft 0.0 %
- p4: noetig fuer Ausverkauf 520000.00 USDC; ausgeschoepft 0.0 %

## Verwendung der bestaetigten USDC-Einnahmen
- Liquiditaetsreserve (rechnerisch vorgemerkt): 40.00 %; Betrieb: 40.00 %; Steuern/Gebuehren: 20.00 %.
- Fuer einen spaeteren SKELO/USDC-Pool sind 100.000 SKELO aus der Liquiditaetsreserve vorgesehen. Anfangspreis = USDC-Reserve / SKELO-Menge; bei geringen Erloesen entsteht nur ein sehr flacher Pool (hohe Preisschwankung, Risiko grosser Verkaeufe).
- Erwartete Verkaeufe werden NICHT als Kapital verbucht. Nur bestaetigte, echte Einnahmen zaehlen; simulierte Buchungen werden getrennt ausgewiesen. Ein Pool braucht echte Mittel.

## Verteilung (neu bewertet)

| Kategorie | SKELO | Anteil |
|---|---:|---:|
| Betreiberanteil | 1.000.000 | 10.00 % |
| Stadtkasse (SKELO STADTKASSE) | 1.800.000 | 18.00 % |
| Marketing | 400.000 | 4.00 % |
| Weiterentwicklung (Technik, Betrieb, Audit) | 1.100.000 | 11.00 % |
| KI-Agenten und Leistungspraemien | 700.000 | 7.00 % |
| Langfristige Reserve | 1.500.000 | 15.00 % |
| Community und Inselwirtschaft | 800.000 | 8.00 % |
| DEX-Liquiditaet | 100.000 | 1.00 % |
| Presale-Zuteilung an Grundstuecks- und Hauskaeufer | 2.600.000 | 26.00 % |

Beschluss v1 (zum Vergleich): operator 1.200.000, stadtkasse 2.000.000, marketing 500.000, entwicklung 1.500.000, agenten_praemien 800.000, reserve 2.000.000, community_insel 760.000, dex_liquiditaet 1.240.000

## Skelos Beschluss
Entscheidung: **annehmen**

Davids Modell erfuellt alle Regeln. Die vier Phasen haben die festen Namen. Die Referenzpreise steigen strikt (0,02/0,03/0,045/0,065 USDC). Die Zuteilung je USDC faellt strikt (10 / 5 / 2,67 / 1,54). Die Grundstuecke ergeben 1.000+4.000+5.000+10.000 = 20.000, und target_houses entspricht in jeder Phase target_properties. Die Kontingente 400.000 + 800.000 + 600.000 + 800.000 = 2.600.000 sind bei 100 % Verkauf von Grundstueck und Haus voll gedeckt. Die Verteilung summiert sich exakt auf 10.000.000. Alle Schutzminima sind eingehalten: Stadtkasse 1,8 Mio., Community 0,8 Mio., Agenten 0,7 Mio., Reserve 1,5 Mio., DEX 0,1 Mio. presale_kaeufer liegt mit 2,6 Mio. unter 4 Mio. Die Liquiditaet ist konsistent: 4000+4000+2000 = 10000 bps, und LP 100.000 entspricht der DEX-Kategorie. Die Verwaesserung bleibt begrenzt: Nicht verteilte SKELO fallen an die Stadtkasse, es gibt keine Nachpraegung, und Operator, Entwicklung und Reserve sind mit Cliff und linearem Vesting gebunden. Das Betreiberrisiko sinkt, weil der Operator unveraendert 1 Mio. mit 12 Monaten Cliff haelt. Das Vertrauen der Bewohner stuetzen die harten Deckel, das Wallet-Limit und der Hinweis, dass der Bonus kein Geldwert ist. Die Phasen sind an Bauamt-Freigaben gebunden. Die reale Einnahmebasis ist mit 374,80 USDC Inventar sehr klein. Das ist aber kein Mangel des Modells, denn ungenutztes Kontingent bleibt reserviert und fliesst an die Stadtkasse. Es werden keine Einnahmen als vorhanden behandelt und keine Kurse zugesagt.

Aenderungen gegenueber David:

Aenderungen gegenueber Beschluss v1:
- presale_kaeufer: 2.245.000 -> 2.600.000 (+355.000), voll gedecktes 1:1-Haus-Modell mit vier Phasen
- stadtkasse: 1.700.000 -> 1.800.000 (+100.000), faengt nicht zugeteilte Kontingente auf
- entwicklung: 1.200.000 -> 1.100.000 (-100.000)
- agenten_praemien: 745.000 -> 700.000 (-45.000), Minimum 500.000 gewahrt
- reserve: 1.900.000 -> 1.500.000 (-400.000), Minimum 1.000.000 gewahrt
- community_insel: 760.000 -> 800.000 (+40.000)
- dex_liquiditaet: 50.000 -> 100.000 (+50.000), LP 100.000
- operator und marketing unveraendert (1.000.000 / 400.000)

## Gesamtbegruendung
Der Vorbeschluss (6.550 SKELO, kalkuliert fuer 26 Grundstuecke) ist fuer eine Insel mit bis zu 20.000 Grundstuecken nicht tragfaehig. Vergleich bei 1.000 Grundstuecken, 100 % Verkauf, 10 USDC: Bonus 20 % = 145.000, 50 % = 362.500, 100 % = 725.000 SKELO. Bei 20.000 Grundstuecken und 60 USDC waeren es 12,9 / 32,25 / 64,5 Mio. und damit weit mehr als die Gesamtmenge. Daher gilt: 20 % nur in der ersten Phase, danach fallend 15/12/10 %, plus harte Deckel je Kauf. Jedes Grundstueck hat ein bonusberechtigtes Haus, das Kontingent ist deshalb voll gedeckt: 400.000 + 800.000 + 600.000 + 800.000 = 2.600.000. Die Kapazitaeten 1.000/5.000/10.000/20.000 ergeben je Phase 1.000/4.000/5.000/10.000 Grundstuecke. Die Mehrmenge von 355.000 gegenueber 2.245.000 wird durch Senkungen bei Reserve, Entwicklung und Agenten finanziert. Alle Schutzminima sind eingehalten. Token-Reserve und USDC-Liquiditaet sind getrennt. Ein Bonus ist kein Geldwert, kein Kurs wird versprochen.

## Risiken
- Reale USDC-Einnahmen sind bisher null; das Inventar (26 Grundstuecke, 374,80 USDC) deckt die hohe Kapazitaet nicht. Spaetere Phasen haengen komplett an Bauamt-Freigaben.
- Bei niedrigen Kaufpreisen wird der Deckel nie erreicht: Das Kontingent ist reserviert, aber nicht verteilt, und fliesst erst nach endgueltigem Phasenabschluss an die Stadtkasse.
- Konzentration und Mehrfach-Wallets: Das Limit von 10 bonusberechtigten Kaeufen je Wallet wird ueber Wallets umgehbar sein (Sybil-Risiko).
- Fruehe Kaeufer erhalten mehr SKELO je USDC; ein gelockertes Vesting oder ein dünner Pool kann zu Verkaufsdruck fuehren. Kein Kurs ist zugesagt.
- Mainnet-Adressen (Multisigs) und die Instanzen von OperatorVesting muessen vor dem Deployment korrekt festgelegt werden; spaeter ist nichts aenderbar.

## Offene Punkte / fehlende Freigaben
- Multisig-Adressen aller Halter und Vesting-Instanzen vom Betreiber benennen lassen (nicht erfinden).
- Bauamt: verbindliche Freigabekriterien fuer die Phasengrenzen 1.000/5.000/10.000/20.000 festlegen.
- Rechtliche Pruefung des oeffentlichen Hinweises: Bonus ist kein Geldwert, Wallet-Limit und Verfall nicht zugeteilter SKELO.
- Regeln fuer den Pool (Verhaeltnis SKELO/USDC, Freigabe) vor einer Pool-Erstellung festlegen.
- Tests: Deckelpruefung bei Preisen ueber der Deckelgrenze, 100 %-Verkauf und Phasenabschluss mit Buchung an die Stadtkasse.
- Betreiberfreigabe fuer echten Presale (presale.open), Verkaufsfreigabe (land.sales_open + legal_confirmed), Mainnet-Deployment, Liquiditaetsbereitstellung.
- Rechtliche Pruefung des Tokenbonus (MiCA, Verbraucherschutz, Steuer).
- Technisch noch offen: on-chain Anspruchsvertrag (Claim/Vesting je Kaeufer); bis dahin sind Zuteilungen Buchungen im Backend.
