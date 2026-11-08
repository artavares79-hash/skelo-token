# Inselwachstum und SKELO-Tokenbedarf (Szenarien)

Alle Zahlen sind **Szenarien, keine Prognosen und keine erzielten Einnahmen**. Annahmen: Referenzpreis Phase 1 0.02 USDC, 30 % der Grundstueckskaeufer kaufen zusaetzlich ein Haus (15 USDC), Grundstueckspreis 25 USDC, Verkaufsquote 25 % bzw. 100 %.

## Bedarf ohne Kontingentgrenzen (alle Kaeufer zum Phase-1-Preis)

| Grundstuecke | Quote | USDC (Szenario) | Bonus 20 % | Bonus 50 % | Bonus 100 % | Anteil Bonus 100 % an Gesamtmenge |
|---:|---:|---:|---:|---:|---:|---:|
| 100 | 25 % | 738 | 7.375 | 18.438 | 36.875 | 0.4 % |
| 100 | 100 % | 2.950 | 29.500 | 73.750 | 147.500 | 1.5 % |
| 500 | 25 % | 3.688 | 36.875 | 92.188 | 184.375 | 1.8 % |
| 500 | 100 % | 14.750 | 147.500 | 368.750 | 737.500 | 7.4 % |
| 2.000 | 25 % | 14.750 | 147.500 | 368.750 | 737.500 | 7.4 % |
| 2.000 | 100 % | 59.000 | 590.000 | 1.475.000 | 2.950.000 | 29.5 % |
| 10.000 | 25 % | 73.750 | 737.500 | 1.843.750 | 3.687.500 | 36.9 % |
| 10.000 | 100 % | 295.000 | 2.950.000 | 7.375.000 | 14.750.000 | 147.5 % |

Wo der Bedarf 10.000.000 SKELO (die gesamte Menge) erreicht oder uebersteigt, ist das Modell bei grosser Insel nicht tragfaehig.

## Beschlossenes Modell: wie viele Kaeufer werden bedient? (Grundstueck 25 USDC, Kontingent gesamt 60.000 SKELO)

| Grundstuecke | Quote | Kaeufer | mit Zuteilung | ohne Zuteilung | SKELO verbraucht |
|---:|---:|---:|---:|---:|---:|
| 100 | 25 % | 25 | 25 | 0 | 5.688 |
| 100 | 100 % | 100 | 100 | 0 | 16.400 |
| 500 | 25 % | 125 | 125 | 0 | 18.367 |
| 500 | 100 % | 500 | 500 | 0 | 42.846 |
| 2.000 | 25 % | 500 | 500 | 0 | 42.846 |
| 2.000 | 100 % | 2.000 | 877 | 1.122 | 60.000 |
| 10.000 | 25 % | 2.500 | 877 | 1.622 | 60.000 |
| 10.000 | 100 % | 10.000 | 877 | 9.122 | 60.000 |

Kaeufer ohne Zuteilung erhalten ihr Grundstueck trotzdem; die Zuteilung ist ein begrenzter Bonus, kein Anspruch auf unbegrenzte Tokens. Rohdaten: `reports/growth_scenarios.json`.
