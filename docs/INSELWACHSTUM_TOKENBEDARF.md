# Capacity coverage of the buyer allocation (worst case, 100 % sales)

All figures are scenarios, not forecasts and not revenue. Method: capacity first, then maximum allocation per purchase, then the quota (quota = purchases x maximum allocation). A purchase never receives more than its phase maximum, whatever it costs.

Declared capacity: **20.000 properties**, at most one eligible house per property. Per-wallet limit: 10 bonus-eligible purchases.

| Phase | Properties | House purchases | Max SKELO per property | Max SKELO per house | Quota (SKELO) | Reference price (USDC) | Bonus % |
|---|---:|---:|---:|---:|---:|---:|---:|
| Phase 1 - Early Founders | 1.000 | 1.000 | 200 | 200 | 400.000 | 0.020 | 20.0 |
| Phase 2 - Island Expansion | 4.000 | 4.000 | 100 | 100 | 800.000 | 0.030 | 15.0 |
| Phase 3 - Community Growth | 5.000 | 5.000 | 60 | 60 | 600.000 | 0.045 | 12.0 |
| Phase 4 - Final Phase | 10.000 | 10.000 | 40 | 40 | 800.000 | 0.065 | 10.0 |

## Coverage at 100 % sales (each property plus one house)

| Properties sold | SKELO needed (worst case) | Unserved properties | All covered |
|---:|---:|---:|---|
| 1.000 | 400.000 | 0 | yes |
| 5.000 | 1.200.000 | 0 | yes |
| 10.000 | 1.800.000 | 0 | yes |
| 20.000 | 2.600.000 | 0 | yes |

## Allocation per purchase at different prices (formula vs. cap), SKELO

| Price (USDC) | Phase 1 - Early Founders | Phase 2 - Island Expansion | Phase 3 - Community Growth | Phase 4 - Final Phase |
|---:|---:|---:|---:|---:|
| 10 | 100.00 | 50.00 | 26.67 | 15.38 |
| 25 | 200.00 | 100.00 | 60.00 | 38.46 |
| 60 | 200.00 | 100.00 | 60.00 | 40.00 |
| 150 | 200.00 | 100.00 | 60.00 | 40.00 |
| 500 | 200.00 | 100.00 | 60.00 | 40.00 |

Unallocated SKELO of a permanently closed phase return to the City Treasury (backend ledger until the on-chain mechanism exists). Raw data: `reports/growth_scenarios.json`.
