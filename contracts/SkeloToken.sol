// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title SKELO - Stadtwaehrung von SKELO ISLAND (kompiliert und in einer EVM getestet in SKELO Blockchain Labs; NICHT auditiert, NICHT deployed)
/// @notice Feste Gesamtmenge, einmalig im Konstruktor auf vorab festgelegte Verteilungsadressen gepraegt.
///         KEINE Mint-Funktion, KEIN Owner, KEINE Sperrliste, KEINE Gebuehren, KEINE Pausierung, KEIN Upgrade, kein Burn-Recht Dritter.
///         Inflation ist technisch ausgeschlossen. Die Verteilung (Stadtkasse, Reserven) entspricht docs/SKELO_TOKEN.md.
///         Mainnet-Deployment, Verteilung und Handel nur nach Tests, Pruefung, regulatorischer Klaerung (MiCA) und Betreiberfreigabe.
contract SkeloToken is ERC20 {
    uint256 public constant TOTAL_SUPPLY_WHOLE = 100_000_000;

    /// @param holders Verteilungsadressen (z. B. Stadtkasse, Entwicklungsreserve, Arbeitsreserve, ...)
    /// @param wholeAmounts Mengen in ganzen SKELO; Summe MUSS exakt TOTAL_SUPPLY_WHOLE sein
    constructor(address[] memory holders, uint256[] memory wholeAmounts) ERC20("SKELO", "SKELO") {
        require(holders.length == wholeAmounts.length && holders.length > 0, "laenge");
        uint256 sum;
        for (uint256 i = 0; i < holders.length; i++) {
            require(holders[i] != address(0), "holder=0");
            sum += wholeAmounts[i];
            _mint(holders[i], wholeAmounts[i] * 10 ** decimals());
        }
        require(sum == TOTAL_SUPPLY_WHOLE, "summe");
    }
}
