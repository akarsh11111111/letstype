export const PREMIUM_THEMES = {
  gold: {
    id: 'gold',
    label: 'Gold Noir',
    description: 'warm luxury with subtle gold glow',
    vars: {
      '--bg': '#05070b',
      '--panel': '#0d1218',
      '--panel-soft': '#111821',
      '--muted': '#9aa6b2',
      '--accent': '#f5c46b',
      '--text': '#eef4fb',
      '--correct': '#dffcf1',
      '--wrong': '#ff8b8b'
    }
  },
  synthwave: {
    id: 'synthwave',
    label: 'Synthwave',
    description: 'cyan + magenta neon with deep space contrast',
    vars: {
      '--bg': '#050816',
      '--panel': '#10152a',
      '--panel-soft': '#151d36',
      '--muted': '#a3b0d2',
      '--accent': '#7cf7ff',
      '--text': '#f5f7ff',
      '--correct': '#d9f7ee',
      '--wrong': '#ff7bcb'
    }
  },
  matrix: {
    id: 'matrix',
    label: 'Matrix',
    description: 'dark noir with electric green focus',
    vars: {
      '--bg': '#020402',
      '--panel': '#07110a',
      '--panel-soft': '#0a1710',
      '--muted': '#8ca894',
      '--accent': '#72f87c',
      '--text': '#edf6ef',
      '--correct': '#d7ffd9',
      '--wrong': '#ff7373'
    }
  },
  aurora: {
    id: 'aurora',
    label: 'Aurora',
    description: 'icy blue with a clean editorial feel',
    vars: {
      '--bg': '#06101a',
      '--panel': '#101a25',
      '--panel-soft': '#152230',
      '--muted': '#97adbe',
      '--accent': '#8fe6ff',
      '--text': '#eef7ff',
      '--correct': '#dcf7ff',
      '--wrong': '#ff8d8d'
    }
  }
}

export const DEFAULT_THEME = 'gold'
