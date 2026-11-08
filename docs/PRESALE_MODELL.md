# SKELO Presale- und Zuteilungsmodell (VORGESCHLAGEN)

Entwurf von **David** (Blockchain Labs), beschlossen von **Skello** (Buergermeister), 2026-11-08. **Status: vorgeschlagenes Modell. Es gibt keinen Verkauf, keine Tokenzuteilung, keine Freigabe fuer Mainnet, echten Presale oder DEX. Rechtliche Pruefung (MiCA, Verbraucherschutz, Steuer) steht aus.**

Grundstueck bzw. Haus (digitales Nutzungsrecht) und SKELO-Zuteilung sind zwei verschiedene Leistungen. Die Zuteilung ist kein garantierter Geldwert; der Referenzpreis ist ein Zuteilungsmassstab, kein Marktpreis und keine Zusicherung eines spaeteren Kurses.

**Modell:** Begrenzte Tranchen: 4 Phasen, 60.000 SKELO, Bonus fallend von 20 % auf 10 %

## Phasen

Preiseinheit: micro-USDC je 1 ganzem SKELO (1 USDC = 1.000.000); Zuteilung = Kaufpreis x Bonus / Referenzpreis.

| Phase | Referenzpreis (USDC je SKELO) | Kontingent (SKELO) | Bonus (% des Kaufpreises) | Freigabe (Vesting ab Tokenstart) |
|---|---:|---:|---:|---|
| Phase 1 Fruehkaeufer (Bestandsgrundstuecke) | 0.020000 | 4.000 | 20.00 | 20 % bei Start, Rest Cliff 3 / Dauer 12 Monate |
| Phase 2 Baugebiet-Tranche A | 0.030000 | 12.000 | 15.00 | 30 % bei Start, Rest Cliff 2 / Dauer 9 Monate |
| Phase 3 Baugebiet-Tranche B | 0.045000 | 20.000 | 12.00 | 40 % bei Start, Rest Cliff 1 / Dauer 6 Monate |
| Phase 4 Abschluss-Tranche | 0.065000 | 24.000 | 10.00 | 50 % bei Start, Rest Cliff 1 / Dauer 6 Monate |

Grenze je Wallet: 1.000 SKELO. Ende: Der Presale endet, wenn alle vier Tranchen ausverkauft sind oder der Betreiber/die Multisig ihn per Stichtag schliesst. Eine Tranche wird erst nach Ausverkauf oder Schliessung der Vorphase und mit Multisig-Freigabe geoeffnet. Nicht zugeteilte Mengen werden nie neu verteilt und bleiben gesperrt (keine Neupraegung, kein Burn). Ist eine Tranche ausverkauft, gibt es dafuer keinen Bonus mehr. Nur bestaetigte, echte USDC-Eingaenge zaehlen.

## Beispielrechnungen (exakt, Ganzzahlmathematik)

| Kaufpreis (USDC) | Phase 1 Fruehkaeufer (Bestandsgrundstuecke) | Phase 2 Baugebiet-Tranche A | Phase 3 Baugebiet-Tranche B | Phase 4 Abschluss-Tranche |
|---|---:|---:|---:|---:|
| 12.17 | 121.70 SKELO (ausverkauft nach 33 Kaeufen) | 60.85 SKELO (ausverkauft nach 198 Kaeufen) | 32.45 SKELO (ausverkauft nach 617 Kaeufen) | 18.72 SKELO (ausverkauft nach 1282 Kaeufen) |
| 18.82 | 188.20 SKELO (ausverkauft nach 22 Kaeufen) | 94.10 SKELO (ausverkauft nach 128 Kaeufen) | 50.19 SKELO (ausverkauft nach 399 Kaeufen) | 28.95 SKELO (ausverkauft nach 829 Kaeufen) |
| 50 | 500.00 SKELO (ausverkauft nach 8 Kaeufen) | 250.00 SKELO (ausverkauft nach 48 Kaeufen) | 133.33 SKELO (ausverkauft nach 151 Kaeufen) | 76.92 SKELO (ausverkauft nach 313 Kaeufen) |
| 100 | 1000.00 SKELO (ausverkauft nach 4 Kaeufen) | 500.00 SKELO (ausverkauft nach 24 Kaeufen) | 266.67 SKELO (ausverkauft nach 76 Kaeufen) | 153.85 SKELO (ausverkauft nach 157 Kaeufen) |
| 500 | 5000.00 SKELO (ausverkauft nach 1 Kaeufen) | 2500.00 SKELO (ausverkauft nach 5 Kaeufen) | 1333.33 SKELO (ausverkauft nach 16 Kaeufen) | 769.23 SKELO (ausverkauft nach 32 Kaeufen) |

## Reales Inventar vs. Kontingent
Alle freien Grundstuecke zusammen (374.8 USDC Listenpreise) reichen fuer:

- p1: noetig fuer Ausverkauf 400.00 USDC; ausgeschoepft 93.7 %
- p2: noetig fuer Ausverkauf 2400.00 USDC; ausgeschoepft 0.0 %
- p3: noetig fuer Ausverkauf 7500.00 USDC; ausgeschoepft 0.0 %
- p4: noetig fuer Ausverkauf 15600.00 USDC; ausgeschoepft 0.0 %

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
| Langfristige Reserve | 3.130.000 | 31.30 % |
| Community und Inselwirtschaft | 760.000 | 7.60 % |
| DEX-Liquiditaet | 50.000 | 0.50 % |
| Presale-Zuteilung an Grundstuecks- und Hauskaeufer | 60.000 | 0.60 % |

Beschluss v1 (zum Vergleich): operator 1.200.000, stadtkasse 2.000.000, marketing 500.000, entwicklung 1.500.000, agenten_praemien 800.000, reserve 2.000.000, community_insel 760.000, dex_liquiditaet 1.240.000

## Skellos Beschluss
Entscheidung: **aendern**

Davids Grundidee ist richtig: kein fester Bonus fuer alle, sondern ein fallender Bonus bei steigendem Referenzpreis und festen Deckeln. Das schuetzt vor offener Verwaesserung. Zwei Dinge uebernehme ich nicht. Erstens: reale Einnahmen sind nur ein Szenario. Die Stadtkasse hat 0 USDC, das Inventar bringt maximal 374,8 USDC. Phase 1 (400 USDC) ist damit gedeckt. Die Phasen 5 und 6 setzen 33.750 bzw. 57.600 USDC Kaufpreis voraus und haben keine Datenbasis. Ihre 54.000 SKELO blieben ohne Burn dauerhaft gesperrt und fehlten der Reserve. Zweitens: Phase 5 und 6 haben 70 % bzw. 100 % TGE, also fast sofort freie Token fuer die spaetesten Kaeufer. Das erhoeht den Verkaufsdruck, ohne Vertrauen zu schaffen. Ich beschliesse 4 Tranchen mit 60.000 SKELO (0,6 %). Das deckt rechnerisch 25.900 USDC Kaufpreis ab. Das Wallet-Limit sinkt auf 1000, weil Phase 1 sonst durch einen Kaeufer zu 50 % belegt werden koennte. Der Betreiber behaelt die Kontrolle ueber das Oeffnen jeder Tranche. Die Gesamtmenge bleibt 10.000.000. Es gibt keine Geldwert-, Kurs- oder Gewinnzusage. Bestaetigte USDC-Eingaenge werden strikt von der Tokenreserve getrennt.

Aenderungen gegenueber David:
- Phasen von 6 auf 4 reduziert: Phase 5 (90.000 micro-USDC) und Phase 6 (120.000 micro-USDC) entfallen
- Gesamtkontingent von 120.000 auf 60.000 SKELO halbiert (0,6 % statt 1,2 %)
- Phase 4 von 30.000 auf 24.000 SKELO verkleinert, Bonus 10 %, Vesting 50 % TGE, 1 Monat Cliff, 6 Monate Dauer
- Wallet-Limit von 2000 auf 1000 SKELO gesenkt (Sybil- und Konzentrationsrisiko)
- Reserve von 3.070.000 auf 3.130.000 SKELO erhoeht, weil presale_kaeufer von 120.000 auf 60.000 sinkt
- Tranchen werden nur nach ausdruecklicher Multisig-Freigabe geoeffnet, jeweils erst nach Ausverkauf oder Schliessung der Vorphase
- Preise, Boni und Vesting der Phasen 1 bis 3 sowie Liquiditaetsaufteilung 40/40/20 und LP 10.000 SKELO unveraendert uebernommen

Aenderungen gegenueber Beschluss v1:
- Presale-Kontingent von 6.550 auf 60.000 SKELO erhoeht (+53.450)
- Reserve von 3.183.450 auf 3.130.000 SKELO gesenkt (-53.450)
- Von einem kleinen Einzelkontingent auf 4 gestaffelte Tranchen mit fallendem Bonus (20/15/12/10 %) und steigendem Referenzpreis umgestellt
- Das Kontingent ist nicht mehr nur auf die 26 Bestandsgrundstuecke (374,8 USDC) kalkuliert, sondern deckt Baugebiets-Erweiterungen mit festem Deckel
- Wallet-Limit 1000 SKELO und gestaffeltes Vesting je Phase neu eingefuehrt
- Alle anderen Kategorien (operator, stadtkasse, marketing, entwicklung, agenten_praemien, community_insel, dex_liquiditaet) und deren Vesting unveraendert
- Gesamtmenge 10.000.000 unveraendert

## Gesamtbegruendung
Die reale Einnahmemoeglichkeit ist klein: 26 Grundstuecke bringen hoechstens 374,8 USDC, die Stadtkasse hat 0 USDC. Ein fester Bonus fuer alle waere gefaehrlich, weil die Menge bei grossem Wachstum nicht mehr reichen wuerde. Deshalb beschliesse ich begrenzte Tranchen mit fallendem Bonus (20/15/12/10 %) und steigendem Referenzpreis (0,02/0,03/0,045/0,065 USDC). Das Gesamtkontingent betraegt 60.000 SKELO (0,6 %) und deckt rechnerisch 25.900 USDC Kaufpreis ab. Gegenueber David entfallen zwei Tranchen, deren Vorbedingung (33.750 und 57.600 USDC) nicht belegt ist. Das spart 60.000 SKELO fuer die Reserve. Die USDC-Erloese werden 40/40/20 auf Reserve, Betrieb und Steuer verteilt und bleiben strikt von der Tokenreserve getrennt. Die Zuteilung ist kein Geldwertversprechen, es gibt keine Kurs- oder Gewinnzusage.

## Risiken
- Alle Einnahmen sind nur ein Szenario: Stadtkasse 0 USDC, keine realisierten Verkaeufe. Tranchen koennen unverkauft bleiben, die Mengen bleiben ohne Burn dauerhaft gesperrt.
- Wallet-Limit 1000 ist per Sybil-Aufteilung auf mehrere Adressen umgehbar. Gegenmittel sind Kaeuferbindung ueber den Grundstueckskauf und Pruefung.
- Der Bonus koennte als Geldwert- oder Kurszusage missverstanden werden. Klare Hinweise sind noetig, dass nichts garantiert wird.
- Kleine Phase-1-Quote (4000) kann rasch ausverkauft sein und spaetere Kaeufer benachteiligen.
- Mehrere Vesting-Instanzen je Phase und Kategorie erhoehen Deploy-Gas und Komplexitaet. Meilenstein-Vesting und Widerruf sind ohne neuen Vertrag nicht moeglich.

## Offene Punkte / fehlende Freigaben
- Mainnet-Multisig-Adressen fuer alle Halter und Beguenstigten muss der Betreiber festlegen. Sie duerfen nicht erfunden werden.
- Freigabe der Tranchengrenzen: Welche Baugebiete (Anzahl, Preise) gehoeren zu welcher Phase und wer bestaetigt das?
- Preise der Haeuser und neuen Grundstuecke sind ungeprueft. Die Szenarien (10/25/60 USDC) sind Annahmen, keine Daten.
- Rechtliche und steuerliche Pruefung der Bonus-Zuteilung (Tax-Anteil 20 % ist nur ein Planwert).
- Entscheidung, ob unverkaufte Tranchen nach Presale-Ende bewusst gesperrt bleiben oder die Vertraege neu geplant werden.
- Betreiberfreigabe fuer echten Presale (presale.open), Verkaufsfreigabe (land.sales_open + legal_confirmed), Mainnet-Deployment, Liquiditaetsbereitstellung.
- Rechtliche Pruefung des Tokenbonus (MiCA, Verbraucherschutz, Steuer).
- Technisch noch offen: on-chain Anspruchsvertrag (Claim/Vesting je Kaeufer); bis dahin sind Zuteilungen Buchungen im Backend.
