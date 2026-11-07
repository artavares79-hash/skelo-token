# Abgrenzung: interne Test-Inselwirtschaft und Blockchain-Token

Die Insel fuehrt intern ein isoliertes Test-Hauptbuch (Konfiguration `skelo.total_supply`, Betriebsart "inaktiv"/"test"). Es ist ein **Kontenrahmen fuer Tests**, kein Token und keine Grundlage der Tokenverteilung.

- **Massgeblich fuer den Blockchain-Token** sind ausschliesslich die Gesamtmenge von 10.000.000 SKELO und die Verteilung in `deploy/distribution.json` (Beschluss des Buergermeisters, siehe `docs/TOKENOMICS_BESCHLUSS.md` und `docs/PRESALE_MODELL.md`).
- Der interne Test-Kontenrahmen (aktuell 100.000.000 Test-Einheiten) wird **nicht** durch zehn geteilt oder umgerechnet; historische Buchungen bleiben unveraendert. Er ist im Live-Betrieb "inaktiv" und hat keinen Bezug zu on-chain Bestaenden.
- Eine Anbindung (Anspruchsbuchung bei Grundstueckskaeufen) erfolgt ueber das Presale-Buch (`/api/presale`), nicht ueber diesen Test-Kontenrahmen.
- Vor einer echten Verwendung muss der Betreiber entscheiden, ob der Test-Kontenrahmen abgeschaltet oder auf den Token abgebildet wird. Das ist noch nicht entschieden.
