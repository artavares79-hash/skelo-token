// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/// @title OperatorVesting - linearer Vesting-Vertrag mit Cliff fuer SKELO-Betreiberanteil
/// @notice Kein Owner, kein Upgrade, kein Widerruf, kein Mint. Tokens fliessen nur an den Beguenstigten.
///         Nicht auditiert, nicht deployed. Der Beguenstigte sollte eine Multisig sein.
contract OperatorVesting is ReentrancyGuard {
    using SafeERC20 for IERC20;

    error ZeroAddress();
    error InvalidDuration();
    error CliffExceedsDuration();

    event Released(uint256 amount);

    IERC20 private immutable _token;
    address private immutable _beneficiary;
    uint256 private immutable _start;
    uint256 private immutable _cliff;
    uint256 private immutable _end;
    uint256 private immutable _duration;

    uint256 private _released;

    /// @param token_ SKELO-Token (unveraendert)
    /// @param beneficiary_ Beguenstigter (Multisig empfohlen)
    /// @param start_ Startzeitpunkt (Unix-Sekunden)
    /// @param cliffDuration_ Cliff-Dauer ab start_
    /// @param duration_ Gesamtdauer ab start_
    constructor(IERC20 token_, address beneficiary_, uint256 start_, uint256 cliffDuration_, uint256 duration_) {
        if (address(token_) == address(0) || beneficiary_ == address(0)) revert ZeroAddress();
        if (duration_ == 0) revert InvalidDuration();
        if (cliffDuration_ > duration_) revert CliffExceedsDuration();
        _token = token_;
        _beneficiary = beneficiary_;
        _start = start_;
        _cliff = start_ + cliffDuration_;
        _end = start_ + duration_;
        _duration = duration_;
    }

    function token() external view returns (IERC20) {
        return _token;
    }

    function beneficiary() external view returns (address) {
        return _beneficiary;
    }

    function start() external view returns (uint256) {
        return _start;
    }

    function cliff() external view returns (uint256) {
        return _cliff;
    }

    function end() external view returns (uint256) {
        return _end;
    }

    function released() external view returns (uint256) {
        return _released;
    }

    /// @notice Gesamtmenge = aktueller Saldo + bereits freigegeben (Nachzahlungen eingeschlossen)
    // security-accept: SEC-TIMESTAMP Vesting-Zeitplan ist fachlich an block.timestamp gebunden; Validator-Drift von Sekunden ist irrelevant.
    function vestedAmount(uint256 timestamp) public view returns (uint256) {
        if (timestamp < _cliff) return 0;
        uint256 total = _token.balanceOf(address(this)) + _released;
        if (timestamp >= _end) return total;
        // Abrunden zugunsten des Vertrags
        return (total * (timestamp - _start)) / _duration;
    }

    function releasable() public view returns (uint256) {
        uint256 vested = vestedAmount(block.timestamp);
        return vested > _released ? vested - _released : 0;
    }

    /// @notice Zahlt den freigegebenen Betrag ausschliesslich an den Beguenstigten
    function release() external nonReentrant {
        uint256 amount = releasable();
        if (amount == 0) return;
        _released += amount;
        emit Released(amount);
        _token.safeTransfer(_beneficiary, amount);
    }
}
