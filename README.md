# Study Bloom — Flashcards

A responsive, pink-accented flashcard website for GitHub Pages. Includes a 46-card deck for Investor Relations / Corporate Finance.

## Files
- `index.html` — page structure
- `style.css` — styling and responsive layout
- `script.js` — flashcard data and study interactions

## Publish with GitHub Pages
1. Create a new repository on GitHub (for example, `study-bloom-flashcards`).
2. Upload `index.html`, `style.css`, and `script.js` to the repository's root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for GitHub Pages to publish the site. The Pages section will show its URL.

## Add another subject/deck
For a simple next step, add another deck to `script.js` and a subject selector in `index.html`. The current starter uses one deck so it's easy to study immediately. Each card is an object with `term` and `definition` fields in the `initialCards` array.

## Features
- Click/tap card to flip
- Previous/next navigation
- Shuffle
- Search terms and definitions
- Mark cards as mastered or needing review
- Progress saved in the browser's local storage
- Keyboard: Space flips; left/right arrows navigate

## Notes
- Google Fonts are loaded from the internet; system fonts are used as fallbacks.
- Progress is saved in the browser on the device where you study. It is not synced across devices.
- Definitions are study summaries, not legal advice. For compliance-related details, consult current SEC rules and company policies.
