# Bet Record Kit

A one-page static store for a paper record of bets you already place. It logs the bet, the stake, the result, and the bankroll. It is not a picks service and it does not promise a profit.

## Offers

| Offer | Price | What it is |
| --- | --- | --- |
| Bet Record Kit | $37 | Bet log, bankroll page, and a weekly result sheet |
| Bet Log | $17 | Every bet, stake, and result in one place |
| Bankroll Page | $12 | What you set aside, what is left |
| Week Result Sheet | $15 | The week's record on one page |

The three pages sold separately are $17 + $12 + $15 = $44. The kit is $37.

## Run

Open `index.html` in a browser, or serve this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`. There is no build step. `.nojekyll` is included so GitHub Pages serves the files as they are.

## Checkout

`checkout.config.js` holds one URL string per offer. All four start as empty strings. The page has no card form. When a value is a full `http` or `https` URL, that offer’s button sends the visitor there. Until then, the button says checkout is not connected.

## Files

- `index.html` — the page
- `styles.css` — night scoreboard layout
- `store.js` — checkout buttons
- `checkout.config.js` — empty checkout URLs
- `images/bet-log.png` — the blank bet log
- `images/bet-log-pencil.png` — the same log with a pencil
- `fonts/` — Barlow, under the SIL Open Font License (`fonts/OFL.txt`)
- `.nojekyll` — turn off Jekyll processing
