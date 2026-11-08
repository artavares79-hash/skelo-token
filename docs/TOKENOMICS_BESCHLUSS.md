# Tokenomics-Beschluss (Buergermeister Skelo)

Beschlossen von **Skelo (Buergermeister) auf Grundlage des Vorschlags von David, Modell claude-sonnet-5-5** am 2026-11-08. Der Beschluss ist ein Entwurf fuer die technische Umsetzung; er ist kein Angebot, kein Verkauf und keine Anlageempfehlung. SKELO ist nicht ausgegeben und nicht handelbar.

**Gesamtmenge: 10.000.000 SKELO** (fest. keine Neupraegung)

| Kategorie | Menge | Anteil | Sperre/Freigabe |
|---|---:|---:|---|
| Betreiberanteil | 1.000.000 | 10.00 % | linear, Cliff 12 Monate, Dauer 48 Monate |
| Stadtkasse (SKELO STADTKASSE) | 1.700.000 | 17.00 % | linear, Cliff 6 Monate, Dauer 36 Monate |
| Marketing | 400.000 | 4.00 % | linear, Cliff 3 Monate, Dauer 24 Monate |
| Weiterentwicklung (Technik. Betrieb. Audit) | 1.200.000 | 12.00 % | linear, Cliff 6 Monate, Dauer 36 Monate |
| KI-Agenten und Leistungspraemien | 745.000 | 7.45 % | linear, Cliff 0 Monate, Dauer 24 Monate |
| Langfristige Reserve | 1.900.000 | 19.00 % | linear, Cliff 12 Monate, Dauer 48 Monate |
| Community und Inselwirtschaft | 760.000 | 7.60 % | linear, Cliff 0 Monate, Dauer 36 Monate |
| DEX-Liquiditaet | 50.000 | 0.50 % | linear, Cliff 0 Monate, Dauer 1 Monate |
| Presale-Zuteilung an Grundstuecks- und Hauskaeufer | 2.245.000 | 22.45 % | linear, Cliff 0 Monate, Dauer 1 Monate |

## Begruendung je Kategorie
### Betreiberanteil
Operator-Anteil gegenueber v1 um 200.000 gekuerzt, um das Presale-Kontingent zu finanzieren. Cliff 12 und 48 Monate Vesting binden den Betreiber langfristig an die Insel und begrenzen das Betreiberrisiko.
### Stadtkasse (SKELO STADTKASSE)
Stadtkasse ueber dem Schutzminimum von 1,5 Mio. Nicht verteilte Phasenkontingente kommen bei Abschluss hinzu. Das Vesting sichert den Betrieb ueber drei Jahre, auch ohne realisierte USDC-Einnahmen.
### Marketing
Marketing-Budget gegenueber v1 reduziert, da der Absatz durch das reale Inventar begrenzt ist. Cliff 3 und 24 Monate Vesting verhindern fruehe Abfluesse und koppeln Ausgaben an den Inselausbau.
### Weiterentwicklung (Technik, Betrieb, Audit)
Entwicklung bleibt der drittgroesste Block, um Ausbau, Werkzeuge und Sicherheit der Insel zu finanzieren. Cliff 6 und 36 Monate Vesting halten die Anreize ueber den Ausbau hinweg.
### KI-Agenten und Leistungspraemien
Praemien fuer KI-Agenten bleiben deutlich ueber dem Minimum von 500.000. Lineare Freigabe ueber 24 Monate ohne Cliff ermoeglicht laufende Leistungen, ohne dass alles auf einmal verfuegbar wird.
### Langfristige Reserve
Reserve bleibt ueber dem Minimum von 1 Mio. SKELO, trotz Kuerzung gegenueber v1. Cliff 12 und 48 Monate Vesting schuetzen das Vertrauen der Bewohner und sichern KI-Dienste und Liquiditaet langfristig.
### Community und Inselwirtschaft
Anteil fuer Bewohner und Inselgemeinschaft bleibt gegenueber v1 unveraendert. Lineare Freigabe ueber 36 Monate ohne Cliff stellt sicher, dass Bewohner von Beginn an Zugang erhalten.
### DEX-Liquiditaet
Minimale Liquiditaetsausstattung unveraendert, davon hoechstens 10.000 SKELO als erster Pool. Ein Pool entsteht nur durch bewusste Multisig-Handlung mit Freigabe. Keine Kurs- oder Boersenzusage.
### Presale-Zuteilung an Grundstuecks- und Hauskaeufer
Summe der vier Phasenkontingente. Ein zusaetzlicher Pool-Cliff wuerde die TGE-Auszahlungen der Kaeufer blockieren. Das Vesting regeln die Phasen. Pool-Adresse oeffentlich, Rest nach Abschluss an die Stadtkasse.

## Gesamtbegruendung
Das v1-Kontingent von 430.000 SKELO war fuer 26 Grundstuecke kalkuliert und deckt keine Insel mit bis zu 20.000 Grundstuecken. David kalkuliert das Kontingent per Formel aus Zielmengen und Kappen, sodass es auch bei 100 % Verkauf gedeckt ist. Die Boni fallen von 20 % auf 10 %, fruehe Kaeufer erhalten mehr SKELO je USDC, und das Vesting wird mit spaeteren Phasen kuerzer. Die Gesamtmenge bleibt fix bei 10.000.000. Alle Schutzminima sind gewahrt, die Kuerzungen tragen Reserve, Stadtkasse, Entwicklung, Operator, Marketing und Agentenpraemien. Real sind nur 374,8 USDC Inventar und 0 USDC in der Stadtkasse vorhanden. Nicht ausgeschoepfte Kontingente kehren deshalb bei Abschluss an die Stadtkasse zurueck. Ich begrenze Wallet-Konzentration (3 Kaeufe), entferne den Pool-Cliff und binde die Oeffnung der Phasen an Bauamt-Freigaben. Ein Bonus ist kein Geldwert, es gibt keine Kurs- oder Gewinnzusage.

## Risiken (laut Beschluss)
- Teure Kaeufe werden gekappt, die effektive Zuteilung je USDC liegt dann unter den Formelwerten.
- Unverkaufte Kontingente bleiben bis zum Phasenabschluss gebunden und erhoehen erst danach die Stadtkasse.
- Bei geringem Absatz entstehen kaum USDC-Einnahmen, die Stadtkasse hat aktuell 0 USDC.
- Vesting-Instanzen sind unveraenderlich, Fehlparameter koennen nach dem Deployment nicht korrigiert werden.
- Der Pool presale_kaeufer ist frei verfuegbar und haengt an der Sicherheit des Betreiber-Multisigs.

## Offene Punkte fuer den Betreiber (laut Beschluss)
- Multisig-Adressen fuer Mainnet-Halter und Beguenstigte muss der Betreiber festlegen.
- Das Bauamt muss die Ausbaumeilensteine je Phase schriftlich freigeben.
- Kappen, das Limit von 3 bonusberechtigten Kaeufen je Wallet und die Pool-Adresse sind oeffentlich zu deklarieren.
- Zeitpunkt und Umfang eines spaeteren USDC-Liquiditaetspools sind getrennt von der Tokenreserve zu entscheiden.
- Der Zielwert von 20.000 Grundstuecken ist durch Bestand zu belegen (derzeit nur 26 verkaufbar).

## Grundlagen
Finanzgrundlagen (Elena) und Umsetzbarkeit (David) liegen in `reports/tokenomics_grundlagen.json`. Es gibt keinen Marktpreis; keine Zahl in diesem Dokument ist eine Bewertung oder Renditeaussage.

## Umsetzung
- Ein Vesting-Vertrag je gesperrter Kategorie (`OperatorVesting`), Adresse vorab aus der Deployer-Nonce berechnet, dann Token-Konstruktor mit den Haltern.
- Mainnet: alle Halter/Beguenstigten sind Multisig-Adressen des Betreibers; sie sind NICHT festgelegt und werden nicht erfunden (siehe `deploy/distribution.json`, `mainnet_requirements`).
- Testnet: gekennzeichnete Testadressen.
