# OperatorVesting

Erstellt von Nadia Petrova (Dokumentation) aus ABI, Auftrag und Testbericht. **Nicht deployed, nicht auditiert.**

## Auftrag (David)
- Linearer Vesting-Vertrag mit Cliff fuer den gesperrte Verteilungskategorien (Betreiberanteil 1.200.000 SKELO; Beschluss in `TOKENOMICS_BESCHLUSS.md`)
- Ein kleiner, eigenstaendiger, unveraenderlicher Vesting-Vertrag haelt SKELO-Token fuer einen festen Beguenstigten und gibt sie nach Cliff linear bis zum Vesting-Ende frei. Der Token-Vertrag bleibt unveraendert. Testbar in einer EVM ohne Netz (JSON-Tests mit warp). Kein Deployment, keine Echtgeldtransaktion.

## Anforderungen
- Konstruktor(token, beneficiary, start, cliffDuration, duration): Adressen != 0, cliffDuration <= duration, duration > 0; alle Werte immutable.
- Kein Owner, kein Admin, kein Upgrade, kein Widerruf, kein Mint, keine Rueckholung: Token koennen nur an den Beguenstigten fliessen.
- vestedAmount(timestamp) = 0 vor Cliff, danach linear (gesamt = aktueller Saldo + bereits released), nach Ende 100 %; Rundung zugunsten des Vertrags.
- release(): oeffentlich aufrufbar, zahlt releasable() ausschliesslich an den Beguenstigten, aktualisiert released vor dem Transfer (Checks-Effects-Interactions) und emittiert Released(amount).
- Ansicht: token(), beneficiary(), start(), cliff(), end(), released(), releasable(); Nachzahlungen (direkte Token-Transfers an den Vertrag) werden korrekt in den Zeitplan einbezogen.
- SafeERC20 aus OpenZeppelin 5.1.0 verwenden, solc 0.8.28, keine Reentrancy-Angriffsflaeche, kein selfdestruct/delegatecall.

## Konstruktor

- `address token_`
- `address beneficiary_`
- `uint256 start_`
- `uint256 cliffDuration_`
- `uint256 duration_`

## Funktionen

- `beneficiary()` view -> `address`
- `cliff()` view -> `uint256`
- `end()` view -> `uint256`
- `releasable()` view -> `uint256`
- `release()` nonpayable
- `released()` view -> `uint256`
- `start()` view -> `uint256`
- `token()` view -> `address`
- `vestedAmount(uint256)` view -> `uint256`

## Nachweise
- Build: reproduzierbar, Bytecode-SHA-256 `93f57ec3c34713410ef2f32fcf44a3fbcdc2c25193ba52d5195288a08295fe1c` (solc 0.8.28)
- EVM-Tests: 40/40 bestanden (`tests/operatorvesting.json`, `reports/test_operatorvesting.json`)
- Statische Pruefung: offene Befunde 0; Autor-Akzeptanzen: SEC-TIMESTAMP: Vesting-Zeitplan ist fachlich an block.timestamp gebunden; Validator-Drift von S

## Betriebshinweise (vor jedem Einsatz)
- Der Beguenstigte sollte eine Multisig sein; die Adresse legt der Betreiber fest (nicht in diesem Projekt festgelegt).
- Es gibt KEIN Deployment: weder Testnet noch Mainnet. Dafuer fehlen Testnet-Schluessel/Testmittel und die Betreiberfreigabe.
- Ein unabhaengiges Audit ist Voraussetzung vor Mainnet; die Mustersuche ersetzt es nicht.
- Vesting-Parameter (Cliff, Dauer, Start) sind Entscheidungen des Betreibers.
