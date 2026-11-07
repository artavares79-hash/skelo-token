# Entscheidungsvorlage fuer den Betreiber (Token SKELO)

Erstellt von Clara Mendes (Architektur) und Mira Sandoval (Token) aus Werkzeugmessungen. Es wurde keine Entscheidung getroffen.

## 1. Vesting des Betreiberanteils (5 Mio. SKELO)
- Stand: Ein Vesting-Vertragsentwurf `OperatorVesting` existiert (KI-Sitzungen), kompiliert reproduzierbar, 40/40 EVM-Tests, nicht deployed, nicht auditiert.
- Offen (nur Betreiber): Beguenstigter (Multisig), Start, Cliff, Gesamtdauer; ob der Anteil beim Deployment direkt an den Vesting-Vertrag geht (empfohlen, damit er nie ungesperrt beim Betreiber liegt).
- Wirkung: Ohne Vesting liegen 5 Mio. SKELO sofort frei verfuegbar beim Halter - ein Vertrauensthema fuer spaetere Nutzer.

## 2. Berechtigungen (heute: keine)
- Kein Owner heisst: nach dem Deployment kann niemand pausieren, sperren, minten oder Fehler beheben. Das ist die staerkste Vertrauenseigenschaft und zugleich ein Risiko: Eine falsche Verteilungsadresse ist unwiderruflich.
- Falsch an den Token-Vertrag gesendete Token sind nicht rettbar (kein Rescue). Bewusste Entscheidung noetig.
- Folge: Verteilungsadressen vor dem Deployment mehrfach pruefen; Testnet-Probelauf ist Pflicht.

## 3. EIP-2612 permit (gemessen)
- Laufzeitgroesse: 1785 -> 3775 Bytes (+1990); Deploy-Gas: 451150 -> 850779 (+399629). Messung in der EVM mit `ERC20Permit` aus OpenZeppelin 5.1.0.
- Nutzen: Genehmigung per Signatur ohne eigene Transaktion (ein Schritt statt zwei bei Protokollen, die permit nutzen); hilfreich fuer Wallet-Kaufablaeufe und spaetere DEX-Anbindung.
- Kosten/Risiken: mehr Code und Gas beim Deployment, Phishing-Risiko durch Signaturaufforderungen, mehr Testaufwand (Signaturtests fehlen im Testwerkzeug).
- Einordnung: Der Token ist unveraenderlich - permit kann spaeter NICHT nachgeruestet werden. Gegenoption: Standard-Approve funktioniert ueberall.
- Empfehlung (Einschaetzung auf Basis der Messung, keine Entscheidung): Fuer V1 nicht aufnehmen, ausser die Wallet-Kaufablaeufe sollen ohne Doppelschritt auskommen; dann VOR dem Deployment aufnehmen und Signaturtests ergaenzen.

## 4. Weitere offene Punkte
- Adressen der 7 Verteilungskonten, Testnet-Schluessel und Testmittel, unabhaengiges Audit, MiCA/Steuer, Lizenz und Repository-Ziel fuer die Veroeffentlichung.
