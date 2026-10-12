# CNG Deal Desk — Illustrative Alpha Demo

**ILLUSTRATIVE — NOT A LIVE TRANSACTION.**

A static 5-screen walkthrough (no backend, no build step) for the ~90-second demo:

1. Buyer requirement
2. Supply / batch (REPORTED)
3. Evidence & blockers
4. Approval decision
5. Reconciliation

Each screen shows the "You say" line beside the phone. Use the **90-second arc** and **Control lines** buttons for the spoken arc and challenge answers.

## Publish on GitHub Pages

1. Create a new repository (e.g. `cng-deal-desk-demo`) and upload all files in this folder to the repo root.
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. After a minute the demo is live at `https://<your-username>.github.io/cng-deal-desk-demo/`.

## Offline

Open the link once with a connection; the service worker then caches the app so it works offline. For the fallback in the script, screenshot each screen (deep links: `#1` … `#5`).

## Controls

- Next / Back buttons, dots, ← → keys, or swipe on the phone.
- Screen 3: Buyer fee YES / NO / COUNTER can be tapped; the deal stays BLOCKED.
- Screen 4: actions can be selected; status stays REPORTED (illustrative only).

## Control lines

- No live Amuru batch claimed
- No bank/escrow live
- No fee collected
- REPORTED ≠ VERIFIED
- Commodity ≠ CNG income
