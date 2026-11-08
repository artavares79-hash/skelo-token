# SKELO Property Market (owner-to-owner resale) - design and status

**Status: SANDBOX ONLY. The market is not open. No real payment, no on-chain transfer and no real revenue exist.** Real settlement needs an on-chain escrow contract, signing authority, legal review (MiCA, consumer protection, tax) and an independent audit.

## Rules

- Every lawful owner of a transferable plot (with house) can list it at **their own price**, change the price or cancel the listing. There is **no maximum price**. Technical limits only: a whole number of micro-USDC, at least 0.01 USDC.
- Currency: USDC on Base. SKELO prices are not offered (token not deployed, no exchange rate; a rate is never invented).
- Marketplace fee: **2.0 %** of the sale price on completed resales, decided by the mayor (Skelo), shown before listing. Sandbox fees are never counted as real treasury revenue.
- A plot with a house is traded as **one property**; building rights, house, extensions and placement go with the plot. Houses under construction cannot be traded.
- The three protected reward villas are not tradable.

## Safety design

- Every list/update/cancel action carries an EIP-191 signature of the owner wallet over a canonical message (action, plot, price, currency, nonce, expiry, chain); verified by ECDSA recovery.
- Replay protection: one-time nonces per seller, expiry, versioned listings.
- Buy: expected price must equal the listing price (price manipulation protection); idempotent payment reference (no double payment, no double transfer); two simultaneous buyers: exactly one wins.
- Payment and ownership transfer run in one locked operation with rollback (atomic in the sandbox model). True atomicity needs the on-chain escrow contract.
- Hash-chained market ledger and per-plot ownership history.

## Founder SKELO allocation

The allocation belongs to the first purchase from the island, per the phase open at that time. **Resales never create a new allocation**, and existing claims stay with the original buyer.
