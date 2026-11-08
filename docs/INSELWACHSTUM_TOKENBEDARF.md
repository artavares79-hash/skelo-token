# Inselwachstum und SKELO-Tokenbedarf (Szenarien)

Alle Zahlen sind **Szenarien, keine Prognosen und keine erzielten Einnahmen**. Annahmen: Referenzpreis Phase 1 0.02 USDC, 30 % der Grundstueckskaeufer kaufen zusaetzlich ein Haus (15 USDC), Grundstueckspreis 25 USDC, Verkaufsquote 25 % bzw. 100 %.

## Bedarf ohne Kontingentgrenzen (alle Kaeufer zum Phase-1-Preis)

| Grundstuecke | Quote | USDC (Szenario) | Bonus 20 % | Bonus 50 % | Bonus 100 % | Anteil Bonus 100 % an Gesamtmenge |
|---:|---:|---:|---:|---:|---:|---:|
| 1.000 | 25 % | 7.375 | 73.750 | 184.375 | 368.750 | 3.7 % |
| 1.000 | 100 % | 29.500 | 295.000 | 737.500 | 1.475.000 | 14.8 % |
| 5.000 | 25 % | 36.875 | 368.750 | 921.875 | 1.843.750 | 18.4 % |
| 5.000 | 100 % | 147.500 | 1.475.000 | 3.687.500 | 7.375.000 | 73.8 % |
| 10.000 | 25 % | 73.750 | 737.500 | 1.843.750 | 3.687.500 | 36.9 % |
| 10.000 | 100 % | 295.000 | 2.950.000 | 7.375.000 | 14.750.000 | 147.5 % |
| 20.000 | 25 % | 147.500 | 1.475.000 | 3.687.500 | 7.375.000 | 73.8 % |
| 20.000 | 100 % | 590.000 | 5.900.000 | 14.750.000 | 29.500.000 | 295.0 % |

Wo der Bedarf 10.000.000 SKELO (die gesamte Menge) erreicht oder uebersteigt, ist das Modell bei grosser Insel nicht tragfaehig.

## Beschlossenes Modell: wie viele Kaeufer werden bedient? (Grundstueck 25 USDC, Kontingent gesamt 430.000 SKELO)

| Grundstuecke | Quote | Kaeufer | mit Zuteilung | ohne Zuteilung | SKELO verbraucht |
|---:|---:|---:|---:|---:|---:|
| 1.000 | 25 % | 250 | 250 | 0 | 39.540 |
| 1.000 | 100 % | 1.000 | 1.000 | 0 | 112.288 |
| 5.000 | 25 % | 1.250 | 1.250 | 0 | 131.955 |
| 5.000 | 100 % | 5.000 | 5.000 | 0 | 346.039 |
| 10.000 | 25 % | 2.500 | 2.500 | 0 | 230.288 |
| 10.000 | 100 % | 10.000 | 6.849 | 3.150 | 430.000 |
| 20.000 | 25 % | 5.000 | 5.000 | 0 | 346.039 |
| 20.000 | 100 % | 20.000 | 6.849 | 13.150 | 430.000 |

Kaeufer ohne Zuteilung erhalten ihr Grundstueck trotzdem; die Zuteilung ist ein begrenzter Bonus, kein Anspruch auf unbegrenzte Tokens. Rohdaten: `reports/growth_scenarios.json`.
