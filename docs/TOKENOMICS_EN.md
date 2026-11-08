# SKELO Tokenomics and Founder Phases (summary)

**Status: proposed model. Nothing is for sale, no SKELO has been allocated, nothing is deployed to Mainnet or audited, and SKELO cannot be traded. This is not financial advice and no price, profit or exchange value is promised.**

Total supply: **10,000,000 SKELO** (fixed).

## Distribution

| Category | SKELO | Share | Vesting |
|---|---:|---:|---|
| Operator | 1,200,000 | 12.00 % | Locked: 6-month cliff, then linear release until month 36 |
| City Treasury | 2,000,000 | 20.00 % | No lock-up |
| Marketing | 500,000 | 5.00 % | Locked: 3-month cliff, then linear release until month 24 |
| Development | 1,500,000 | 15.00 % | Locked: 6-month cliff, then linear release until month 36 |
| AI Agents & Performance Rewards | 800,000 | 8.00 % | Locked: 3-month cliff, then linear release until month 24 |
| Long-term Reserve | 2,760,000 | 27.60 % | Locked: 12-month cliff, then linear release until month 48 |
| Community & Island Economy | 760,000 | 7.60 % | No lock-up |
| DEX Liquidity Reserve | 50,000 | 0.50 % | No lock-up |
| Property Buyer Allocations | 430,000 | 4.30 % | No lock-up |

## The four founder phases (property buyers)

| Phase | Reference price (USDC) | Quota (SKELO) | SKELO per 1 USDC | Buyers supported | Vesting |
|---|---:|---:|---:|---:|---|
| Phase 1 - Early Founders | 0.020 | 6,500 | 10.00 | 26 | 20% at token launch; the remaining 80% unlocks linearly over 12 months after a 3-month cliff |
| Phase 2 - Island Expansion | 0.030 | 62,500 | 5.00 | 500 | 30% at token launch; the remaining 70% unlocks linearly over 9 months after a 2-month cliff |
| Phase 3 - Community Growth | 0.045 | 166,700 | 2.67 | 2,500 | 40% at token launch; the remaining 60% unlocks linearly over 6 months after a 1-month cliff |
| Phase 4 - Final Phase | 0.065 | 194,300 | 1.54 | 5,000 | 50% at token launch; the remaining 50% unlocks linearly over 6 months after a 1-month cliff |

Per-wallet limit: 250 SKELO. Allocation = purchase price in USDC x bonus / reference price (integer math in micro-USDC).

Every phase quota is reserved up front, so no phase can allocate more than its quota. SKELO not distributed after a phase is permanently closed stay with the island economy and are assigned to the City Treasury.

## Liquidity

Token reserves and USDC liquidity are kept separate. Only confirmed real revenue counts; no pool exists.
40.0 % of confirmed real revenue is earmarked for later liquidity; up to 10,000 SKELO are reserved for a pool.

## Open items before any sale

- Operator release (`presale.open`, `land.sales_open`, `legal_confirmed`)
- Legal review (MiCA, consumer protection, tax)
- Independent security audit
- Claim contract for buyer allocations
- Multisig addresses for all holders
