# SKELO Tokenomics and Founder Phases (summary)

**Status: proposed model. Nothing is for sale, no SKELO has been allocated, nothing is deployed to Mainnet or audited, and SKELO cannot be traded. This is not financial advice and no price, profit or exchange value is promised.**

Total supply: **10,000,000 SKELO** (fixed).

## Distribution

| Category | SKELO | Share | Vesting |
|---|---:|---:|---|
| Operator | 1,000,000 | 10.00 % | Locked: 12-month cliff, then linear release until month 36 |
| City Treasury | 1,800,000 | 18.00 % | No lock-up |
| Marketing | 400,000 | 4.00 % | Locked: 3-month cliff, then linear release until month 24 |
| Development | 1,100,000 | 11.00 % | Locked: 6-month cliff, then linear release until month 36 |
| AI Agents & Performance Rewards | 700,000 | 7.00 % | Locked: 0-month cliff, then linear release until month 24 |
| Long-term Reserve | 1,500,000 | 15.00 % | Locked: 12-month cliff, then linear release until month 36 |
| Community & Island Economy | 800,000 | 8.00 % | Locked: 0-month cliff, then linear release until month 24 |
| DEX Liquidity Reserve | 100,000 | 1.00 % | No lock-up |
| Property Buyer Allocations | 2,600,000 | 26.00 % | Locked: 1-month cliff, then linear release until month 12 |

## The four founder phases (property buyers)

| Phase | Reference price (USDC) | Quota (SKELO) | SKELO per 1 USDC | Buyers supported | Vesting |
|---|---:|---:|---:|---:|---|
| Phase 1 - Early Founders | 0.020 | 400,000 | 10.00 | 2,000 | 20% at token launch; the remaining 80% unlocks linearly over 12 months after a 3-month cliff |
| Phase 2 - Island Expansion | 0.030 | 800,000 | 5.00 | 8,000 | 30% at token launch; the remaining 70% unlocks linearly over 9 months after a 2-month cliff |
| Phase 3 - Community Growth | 0.045 | 600,000 | 2.67 | 10,000 | 40% at token launch; the remaining 60% unlocks linearly over 6 months after a 1-month cliff |
| Phase 4 - Final Phase | 0.065 | 800,000 | 1.54 | 20,000 | 50% at token launch; the remaining 50% unlocks linearly over 6 months after a 1-month cliff |

Per-wallet limit: 2,000 SKELO. Allocation = purchase price in USDC x bonus / reference price (integer math in micro-USDC).

Every phase quota is reserved up front, so no phase can allocate more than its quota. SKELO not distributed after a phase is permanently closed stay with the island economy and are assigned to the City Treasury.

## Liquidity

Token reserves and USDC liquidity are kept separate. Only confirmed real revenue counts; no pool exists.
40.0 % of confirmed real revenue is earmarked for later liquidity; up to 100,000 SKELO are reserved for a pool.

## Open items before any sale

- Operator release (`presale.open`, `land.sales_open`, `legal_confirmed`)
- Legal review (MiCA, consumer protection, tax)
- Independent security audit
- Claim contract for buyer allocations
- Multisig addresses for all holders
