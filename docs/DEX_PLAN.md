# DEX- und Liquiditaetsplan (PLAN - nichts umgesetzt)

Erstellt von Oskar Lindholm (Web3/DEX). **Es werden bewusst KEINE Router-/Pool-Adressen genannt**: sie muessen vor jeder Nutzung aus der offiziellen Dokumentation des jeweiligen Protokolls geprueft werden (nicht offline verifizierbar).

## Ausgangslage
- Fuer Liquiditaet vorgesehen: 10.000.000 SKELO (Konto res:liquiditaet. laut Spezifikation 'zurueckgehalten. kein DEX-Pool ohne Freigabe').
- Der Vertrag hat keine Handelssperre und keine Gebuehren: Transfers sind sofort frei; ein Pool-Start ist daher eine bewusste Betreiberentscheidung.

## Entscheidungen, die der Betreiber treffen muss
- Handelspaar (z. B. SKELO/USDC auf Base) und Protokoll (konzentrierte Liquiditaet oder Standard-AMM)
- Startpreis und Einlagemenge; ein selbst gesetzter Poolpreis ist kein Gewinn (siehe Regeln der Stadt)
- Liquiditaets-Lock/Treuhand (Sperrfrist) gegen Rug-Pull-Verdacht
- Rechtliche Freigabe (MiCA, Steuer) vor jedem oeffentlichen Handel

## Technische Schritte (Reihenfolge)
1. Testnet-Deployment des Tokens (Betreiberfreigabe)
2. Testnet-Pool mit Testmengen; Swap-Tests (Slippage, Gebuehren, Rundung)
3. Router/Factory-Adressen aus offizieller Doku pruefen und im Konfigurationsfile festhalten (mit Quelle und Datum)
4. Preis-/Mengenparameter vom Betreiber
5. Mainnet nur nach: Audit, rechtlicher Klaerung, ausdruecklicher Freigabe

## Risiken
- Preismanipulation bei geringer Liquiditaet, Sandwich-Angriffe (Slippage-Limits), Impermanent Loss, regulatorische Einordnung, Verwechslung mit Testguthaben (SKELO-Testguthaben ist KEIN Token).
