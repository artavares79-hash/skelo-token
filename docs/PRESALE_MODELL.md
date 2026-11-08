# SKELO Presale- und Zuteilungsmodell (VORGESCHLAGEN)

Entwurf von **David** (Blockchain Labs), beschlossen von **Skelo** (Buergermeister), 2026-11-08. **Status: vorgeschlagenes Modell. Es gibt keinen Verkauf, keine Tokenzuteilung, keine Freigabe fuer Mainnet, echten Presale oder DEX. Rechtliche Pruefung (MiCA, Verbraucherschutz, Steuer) steht aus.**

Grundstueck bzw. Haus (digitales Nutzungsrecht) und SKELO-Zuteilung sind zwei verschiedene Leistungen. Die Zuteilung ist kein garantierter Geldwert; der Referenzpreis ist ein Zuteilungsmassstab, kein Marktpreis und keine Zusicherung eines spaeteren Kurses.

**Modell:** Vier gedeckelte Phasen, 20.000 Grundstuecke, 2.245.000 SKELO Kontingent, Bauamt-Freigabe je Phase, 3 bonusberechtigte Kaeufe je Wallet

## Phasen

Preiseinheit: micro-USDC je 1 ganzem SKELO (1 USDC = 1.000.000); Zuteilung = Kaufpreis x Bonus / Referenzpreis.

| Phase | Referenzpreis (USDC je SKELO) | Kontingent (SKELO) | Bonus (% des Kaufpreises) | Freigabe (Vesting ab Tokenstart) |
|---|---:|---:|---:|---|
| Phase 1 - Early Founders | 0.020000 | 290.000 | 20.00 | 20 % bei Start, Rest Cliff 3 / Dauer 12 Monate |
| Phase 2 - Island Expansion | 0.030000 | 800.000 | 15.00 | 30 % bei Start, Rest Cliff 2 / Dauer 9 Monate |
| Phase 3 - Community Growth | 0.045000 | 535.000 | 12.00 | 40 % bei Start, Rest Cliff 1 / Dauer 6 Monate |
| Phase 4 - Final Phase | 0.065000 | 620.000 | 10.00 | 50 % bei Start, Rest Cliff 1 / Dauer 6 Monate |

Grenze je Wallet: 900 SKELO. Ende: Jede Phase endet bei Ausschoepfung ihres Kontingents oder durch Abschlussbeschluss, spaetestens mit Abschluss von Phase 4. Phasen 2 bis 4 oeffnen erst nach dokumentierter Bauamt-Freigabe und Abschluss der Vorphase. Nicht verteilte SKELO einer abgeschlossenen Phase bucht die Software auf die Stadtkasse. Keine Nachpraegung, keine Nachzuteilung.

## Beispielrechnungen (exakt, Ganzzahlmathematik)

| Kaufpreis (USDC) | Phase 1 - Early Founders | Phase 2 - Island Expansion | Phase 3 - Community Growth | Phase 4 - Final Phase |
|---|---:|---:|---:|---:|
| 12.17 | 121.70 SKELO (ausverkauft nach 2383 Kaeufen) | 60.85 SKELO (ausverkauft nach 13148 Kaeufen) | 32.45 SKELO (ausverkauft nach 16486 Kaeufen) | 18.72 SKELO (ausverkauft nach 33115 Kaeufen) |
| 18.82 | 188.20 SKELO (ausverkauft nach 1541 Kaeufen) | 94.10 SKELO (ausverkauft nach 8502 Kaeufen) | 50.19 SKELO (ausverkauft nach 10661 Kaeufen) | 28.95 SKELO (ausverkauft nach 21414 Kaeufen) |
| 50 | 500.00 SKELO (ausverkauft nach 580 Kaeufen) | 250.00 SKELO (ausverkauft nach 3200 Kaeufen) | 133.33 SKELO (ausverkauft nach 4013 Kaeufen) | 76.92 SKELO (ausverkauft nach 8061 Kaeufen) |
| 100 | 1000.00 SKELO (ausverkauft nach 290 Kaeufen) | 500.00 SKELO (ausverkauft nach 1600 Kaeufen) | 266.67 SKELO (ausverkauft nach 2007 Kaeufen) | 153.85 SKELO (ausverkauft nach 4031 Kaeufen) |
| 500 | 5000.00 SKELO (ausverkauft nach 58 Kaeufen) | 2500.00 SKELO (ausverkauft nach 320 Kaeufen) | 1333.33 SKELO (ausverkauft nach 402 Kaeufen) | 769.23 SKELO (ausverkauft nach 807 Kaeufen) |

## Reales Inventar vs. Kontingent
Alle freien Grundstuecke zusammen (374.8 USDC Listenpreise) reichen fuer:

- p1: noetig fuer Ausverkauf 29000.00 USDC; ausgeschoepft 1.29 %
- p2: noetig fuer Ausverkauf 160000.00 USDC; ausgeschoepft 0.0 %
- p3: noetig fuer Ausverkauf 200625.00 USDC; ausgeschoepft 0.0 %
- p4: noetig fuer Ausverkauf 403000.00 USDC; ausgeschoepft 0.0 %

## Verwendung der bestaetigten USDC-Einnahmen
- Liquiditaetsreserve (rechnerisch vorgemerkt): 40.00 %; Betrieb: 40.00 %; Steuern/Gebuehren: 20.00 %.
- Fuer einen spaeteren SKELO/USDC-Pool sind 10.000 SKELO aus der Liquiditaetsreserve vorgesehen. Anfangspreis = USDC-Reserve / SKELO-Menge; bei geringen Erloesen entsteht nur ein sehr flacher Pool (hohe Preisschwankung, Risiko grosser Verkaeufe).
- Erwartete Verkaeufe werden NICHT als Kapital verbucht. Nur bestaetigte, echte Einnahmen zaehlen; simulierte Buchungen werden getrennt ausgewiesen. Ein Pool braucht echte Mittel.

## Verteilung (neu bewertet)

| Kategorie | SKELO | Anteil |
|---|---:|---:|
| Betreiberanteil | 1.000.000 | 10.00 % |
| Stadtkasse (SKELO STADTKASSE) | 1.700.000 | 17.00 % |
| Marketing | 400.000 | 4.00 % |
| Weiterentwicklung (Technik, Betrieb, Audit) | 1.200.000 | 12.00 % |
| KI-Agenten und Leistungspraemien | 745.000 | 7.45 % |
| Langfristige Reserve | 1.900.000 | 19.00 % |
| Community und Inselwirtschaft | 760.000 | 7.60 % |
| DEX-Liquiditaet | 50.000 | 0.50 % |
| Presale-Zuteilung an Grundstuecks- und Hauskaeufer | 2.245.000 | 22.45 % |

Beschluss v1 (zum Vergleich): operator 1.200.000, stadtkasse 2.000.000, marketing 500.000, entwicklung 1.500.000, agenten_praemien 800.000, reserve 2.000.000, community_insel 760.000, dex_liquiditaet 1.240.000

## Skelos Beschluss
Entscheidung: **aendern**

Davids Modell ist rechnerisch sauber: Die Verteilung summiert sich auf 10.000.000, die Phasenkontingente ergeben 2.245.000, die Preise steigen strikt, die Zuteilung je USDC faellt strikt, und alle Schutzminima sind eingehalten. Die Kontingente sind per Formel auch bei 100 % Verkauf gedeckt, und nicht verteilte SKELO fallen an die Stadtkasse. Ich uebernehme daher Preise, Boni, Kappen, Zielmengen und die Verteilung unveraendert. Drei Punkte aendere ich. (1) Das Pool-Vesting fuer presale_kaeufer (Cliff 1, 6 Monate) wuerde die TGE-Auszahlungen der Kaeufer blockieren, weil die Vesting-Instanz unveraenderlich ist. Der Pool wird deshalb ohne eigenen Cliff gehalten (0/1), das Vesting der Kaeufer regeln allein die Phasen. Das Betreiberrisiko begrenze ich ueber Multisig, oeffentliche Pool-Adresse und die Rueckbuchung an die Stadtkasse. (2) Das Limit von 5 bonusberechtigten Kaeufen je Wallet senke ich auf 3. Es gibt nur 26 verkaufbare Grundstuecke, und ein Wallet soll die fruehe Zuteilung nicht dominieren. Ein Bewohner mit Grundstueck plus Haus bleibt voll bedient. (3) Phasen 2 bis 4 oeffnen nur nach schriftlicher Bauamt-Freigabe. Der Zielwert von 20.000 Grundstuecken ist nicht durch Bestand belegt, und es gibt keine USDC-Einnahmen, deshalb darf er nichts vorwegnehmen.

Aenderungen gegenueber David:
- max_eligible_purchases_per_wallet von 5 auf 3 gesenkt (Konzentrationsschutz bei nur 26 Grundstuecken)
- Vesting der Kategorie presale_kaeufer von Cliff 1/Dauer 6 auf Cliff 0/Dauer 1 geaendert, damit die Phasen-TGE-Auszahlungen nicht blockiert werden
- unlock_milestone aller Phasen um die Bedingung ergaenzt: Oeffnung nur nach dokumentierter Bauamt-Freigabe und Abschluss der Vorphase
- end_bedingung ergaenzt: Phasen 2 bis 4 oeffnen erst nach Freigabe, und die Pool-Adresse wird oeffentlich deklariert
- Preise, Boni, Kappen, Zielmengen, Kontingente (2.245.000), Liquiditaet und alle uebrigen Verteilungsmengen unveraendert uebernommen

Aenderungen gegenueber Beschluss v1:
- presale_kaeufer von 430.000 auf 2.245.000 SKELO (+1.815.000), verteilt auf vier gedeckelte Phasen mit fallender Zuteilung je USDC
- reserve von 2.760.000 auf 1.900.000 (-860.000), Minimum 1.000.000 gewahrt
- stadtkasse von 2.000.000 auf 1.700.000 (-300.000), Minimum 1.500.000 gewahrt
- entwicklung von 1.500.000 auf 1.200.000 (-300.000)
- operator von 1.200.000 auf 1.000.000 (-200.000), Cliff 12 und 48 Monate Vesting bleiben
- marketing von 500.000 auf 400.000 (-100.000) und agenten_praemien von 800.000 auf 745.000 (-55.000), Minimum 500.000 gewahrt
- community_insel (760.000) und dex_liquiditaet (50.000) unveraendert
- Begrenzung der bonusberechtigten Kaeufe je Wallet auf 3 und Bindung der Phasen an Bauamt-Meilensteine neu eingefuehrt

## Gesamtbegruendung
Das v1-Kontingent von 430.000 SKELO war fuer 26 Grundstuecke kalkuliert und deckt keine Insel mit bis zu 20.000 Grundstuecken. David kalkuliert das Kontingent per Formel aus Zielmengen und Kappen, sodass es auch bei 100 % Verkauf gedeckt ist. Die Boni fallen von 20 % auf 10 %, fruehe Kaeufer erhalten mehr SKELO je USDC, und das Vesting wird mit spaeteren Phasen kuerzer. Die Gesamtmenge bleibt fix bei 10.000.000. Alle Schutzminima sind gewahrt, die Kuerzungen tragen Reserve, Stadtkasse, Entwicklung, Operator, Marketing und Agentenpraemien. Real sind nur 374,8 USDC Inventar und 0 USDC in der Stadtkasse vorhanden. Nicht ausgeschoepfte Kontingente kehren deshalb bei Abschluss an die Stadtkasse zurueck. Ich begrenze Wallet-Konzentration (3 Kaeufe), entferne den Pool-Cliff und binde die Oeffnung der Phasen an Bauamt-Freigaben. Ein Bonus ist kein Geldwert, es gibt keine Kurs- oder Gewinnzusage.

## Risiken
- Teure Kaeufe werden gekappt, die effektive Zuteilung je USDC liegt dann unter den Formelwerten.
- Unverkaufte Kontingente bleiben bis zum Phasenabschluss gebunden und erhoehen erst danach die Stadtkasse.
- Bei geringem Absatz entstehen kaum USDC-Einnahmen, die Stadtkasse hat aktuell 0 USDC.
- Vesting-Instanzen sind unveraenderlich, Fehlparameter koennen nach dem Deployment nicht korrigiert werden.
- Der Pool presale_kaeufer ist frei verfuegbar und haengt an der Sicherheit des Betreiber-Multisigs.

## Offene Punkte / fehlende Freigaben
- Multisig-Adressen fuer Mainnet-Halter und Beguenstigte muss der Betreiber festlegen.
- Das Bauamt muss die Ausbaumeilensteine je Phase schriftlich freigeben.
- Kappen, das Limit von 3 bonusberechtigten Kaeufen je Wallet und die Pool-Adresse sind oeffentlich zu deklarieren.
- Zeitpunkt und Umfang eines spaeteren USDC-Liquiditaetspools sind getrennt von der Tokenreserve zu entscheiden.
- Der Zielwert von 20.000 Grundstuecken ist durch Bestand zu belegen (derzeit nur 26 verkaufbar).
- Betreiberfreigabe fuer echten Presale (presale.open), Verkaufsfreigabe (land.sales_open + legal_confirmed), Mainnet-Deployment, Liquiditaetsbereitstellung.
- Rechtliche Pruefung des Tokenbonus (MiCA, Verbraucherschutz, Steuer).
- Technisch noch offen: on-chain Anspruchsvertrag (Claim/Vesting je Kaeufer); bis dahin sind Zuteilungen Buchungen im Backend.
