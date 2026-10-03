# Bet Record Kit

A one-page static store for a paper record of bets you already placed. The sample week on the page is made up. It is down $87. The pages do not tell you what to bet.

## Offers

| Offer | Price | What it is |
| --- | --- | --- |
| Bet Record Kit | $37 | Bet log, bankroll page, and week result sheet |
| Bet Log | $17 | Stake, odds, and how it settled |
| Bankroll Page | $12 | What you set aside, and what is left |
| Week Result Sheet | $15 | The week on one page |

The three files apart are $17 + $12 + $15 = $44. The only solid buy button is the $37 kit.

## Run

Open `index.html`, or serve this folder:

```bash
python3 -m http.server 8080
```

There is no build step. `.nojekyll` is included.

## Checkout

`checkout.config.js` holds one URL string per offer. All four start as empty strings. This page has no card form. When `kit` is an `http` or `https` URL, the kit button goes there. Until then, the button says checkout is not connected.

## Files

- `index.html` — the page
- `styles.css` — layout
- `store.js` — the kit button
- `checkout.config.js` — empty checkout URLs
- `images/` — filled sample pages, labeled as made-up
- `.nojekyll` — turn off Jekyll processing
