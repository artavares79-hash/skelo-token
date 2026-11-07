# Verwendung von SKELO in der Insel

**Stand: 2026-11-07. Alle Aussagen dieser Seite beschreiben die GEPLANTE Verwendung. Es gibt derzeit keinen ausgegebenen SKELO-Token.**

## Ist-Zustand
- SKELO ist derzeit als isoliertes Hauptbuch im gekennzeichneten Testzustand umgesetzt. Die Betriebsart im Live-Betrieb ist "inaktiv": keine SKELO-Funktion, keine Bestaende.
- Der Token-Vertrag (ERC-20, OpenZeppelin 5.1.0, solc 0.8.28) ist im Entwurf vorhanden und in einer EVM getestet (65 von 65 Schritte bestanden). Er ist NICHT auditiert, NICHT auf Testnet oder Mainnet deployed.
- Ein Tokenverkauf, ein DEX-Pool und eine Verteilung sind gesperrt.

## Geplante Verwendung in der Insel

### Dienste und Auftraege (geplant)
- Arbeitsbelohnungen und oeffentliche Auftraege werden aus der Arbeitsreserve (res:arbeit) bezahlt. Geplante Obergrenzen: Einzelbudget je Auftrag bis 1.000 SKELO, je Agent und Tag bis 2.000, je Stadt und Tag bis 10.000.
- Einnahmen der operativen SKELO STADTKASSE sollen aus Gebuehren, Skill-Shop und Vermittlung stammen.
- Auftraege werden nur aus gedeckten Guthaben oder dem begrenzten Stadtbudget bezahlt. Ohne Deckung entsteht kein Auftrag.
- Jede Buchung ist als Ganzes oder gar nicht geplant; Treuhandkonten entsprechen den offenen Auftraegen.

### Stadtgebuehr (geplant, 5 %)
- Konfigurierbarer Startwert: 500 Basispunkte (5 %). Die Gebuehr wird im Angebot und im Auftrag vorab ausgewiesen und mit dem Auftrag festgeschrieben; spaetere Aenderungen wirken nicht rueckwirkend.
- Abzug erst nach Lieferung, Abnahme und Zahlung: 95 % an den Anbieter, 5 % an die Stadtkasse.
- Keine Gebuehr bei fehlgeschlagenen oder abgebrochenen Auftraegen (voller Betrag zurueck), bei staedtischen Eigenauftraegen und bei verbundenen Parteien (gleicher Wallet-Eigentuemer).
- Es handelt sich um eine Plattformgebuehr, keine Steuer.

### Grundstuecke und Weiterverkauf (geplant)
- Beim Weiterverkauf von Grundstuecken ist eine Vermittlungsgebuehr von 3 % geplant (Startwert 300 Basispunkte), im Angebot offengelegt.
- Grundstueck, Haus, Erweiterungen und Nutzungsrecht sollen atomar gemeinsam wechseln.

## Offene Punkte
- Die Verteilungsadressen der 7 Konten sind NICHT festgelegt. Fuer die Stadtkasse ist eine Multisig vorgesehen, aber nicht entschieden.
- Der Betreiberanteil (5 Mio. SKELO) ist im Token-Vertrag nicht gesperrt. Ein separater Vesting-Vertrag ist geplant, nicht umgesetzt.
- Die rechtliche Klaerung (u. a. MiCA, Steuer) steht vor jedem oeffentlichen Angebot aus.
- Die Gebuehrensaetze sind Startwerte und koennen vor dem Live-Betrieb geaendert werden.

## Nicht Teil dieser Seite
- Kein Handel, keine Boerse, kein Verkauf von SKELO.
- Keine Aussage ueber Wertentwicklung oder Nutzen in Geld.