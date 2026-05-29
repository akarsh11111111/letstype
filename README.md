# LetsType Frontend (React + Vite)

LetsType is a Monkeytype-inspired typing frontend with a clean dark interface and focus on speed practice.

## Implemented now

- Monkeytype-style dark layout and top controls
- Submodes: `@ punctuation`, `# numbers`, `</> coding`
- Modes: `time`, `words`, `quote`, `custom`
- No `zen` option (removed as requested)
- Dynamic options:
	- time mode: 15 / 30 / 60 / 120
	- words mode: 10 / 25 / 50 / 100
- Interactive typing engine:
	- live character highlighting (correct/wrong/current)
	- moving caret
	- auto focus typing input
	- restart via `esc`, `tab`, or `enter`
- Result panel:
	- WPM
	- raw WPM
	- accuracy
- Custom mode text input
- Responsive UI for desktop and mobile

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx` - state, mode logic, timer, stats, text generation
- `src/components/ModeSelector.jsx` - top mode/submode controls
- `src/components/TypingArea.jsx` - typing interaction and result UI
- `src/index.css` - full visual styling and responsive behavior

## Next phase ideas

- profile, history and streak charts
- language selector + larger corpus
- code snippet categories (JS, Python, C++)
- keyboard sound and confidence meter
- backend sync for leaderboard and user stats
