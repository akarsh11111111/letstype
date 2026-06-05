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
      '--wrong': '#ff8b8b',
      '--bg-spot-1': 'rgba(245, 196, 107, 0.18)',
      '--bg-spot-2': 'rgba(124, 247, 255, 0.08)',
      '--bg-spot-3': 'rgba(255, 255, 255, 0.04)'
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
      '--wrong': '#ff7bcb',
      '--bg-spot-1': 'rgba(124, 247, 255, 0.18)',
      '--bg-spot-2': 'rgba(255, 123, 203, 0.16)',
      '--bg-spot-3': 'rgba(255, 255, 255, 0.05)'
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
      '--wrong': '#ff7373',
      '--bg-spot-1': 'rgba(114, 248, 124, 0.14)',
      '--bg-spot-2': 'rgba(52, 255, 173, 0.08)',
      '--bg-spot-3': 'rgba(255, 255, 255, 0.035)'
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
      '--wrong': '#ff8d8d',
      '--bg-spot-1': 'rgba(143, 230, 255, 0.16)',
      '--bg-spot-2': 'rgba(134, 124, 255, 0.12)',
      '--bg-spot-3': 'rgba(255, 255, 255, 0.045)'
    }
  },
  obsidian: {
    id: 'obsidian',
    label: 'Obsidian',
    description: 'sharp graphite blacks with molten amber edges',
    vars: {
      '--bg': '#030405',
      '--panel': '#0b0d10',
      '--panel-soft': '#0f1217',
      '--muted': '#97a0ab',
      '--accent': '#ffb45e',
      '--text': '#f4f6f8',
      '--correct': '#e6fff3',
      '--wrong': '#ff6f7d',
      '--bg-spot-1': 'rgba(255, 180, 94, 0.20)',
      '--bg-spot-2': 'rgba(255, 111, 125, 0.10)',
      '--bg-spot-3': 'rgba(255, 255, 255, 0.03)'
    }
  },
  dusk: {
    id: 'dusk',
    label: 'Dusk Bloom',
    description: 'soft twilight violet with cinematic haze',
    vars: {
      '--bg': '#05040a',
      '--panel': '#10101a',
      '--panel-soft': '#151525',
      '--muted': '#b0adc9',
      '--accent': '#d39bff',
      '--text': '#f7f3ff',
      '--correct': '#f0e6ff',
      '--wrong': '#ff87b5',
      '--bg-spot-1': 'rgba(211, 155, 255, 0.18)',
      '--bg-spot-2': 'rgba(255, 135, 181, 0.12)',
      '--bg-spot-3': 'rgba(255, 255, 255, 0.04)'
    }
  }
}

export const DEFAULT_THEME = 'obsidian'
