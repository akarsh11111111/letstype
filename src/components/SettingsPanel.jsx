import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PREMIUM_THEMES } from '../lib/premiumThemes'

const SOUND_PRESETS = [
  { id: 'classic', label: 'Classic' },
  { id: 'blue', label: 'Blue' },
  { id: 'brown', label: 'Brown' },
  { id: 'red', label: 'Red' }
]

export default function SettingsPanel({
  open,
  onClose,
  theme,
  onThemeChange,
  soundEnabled,
  onSoundEnabledChange,
  soundProfile,
  onSoundProfileChange,
  onResetTheme,
  onCopyPromo,
  onCopySummary
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="settings-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="settings-panel"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="settings-head">
              <div>
                <div className="settings-title">Premium Studio</div>
                <div className="settings-subtitle">Theme, sound, and motion controls</div>
              </div>
              <button type="button" className="settings-close" onClick={onClose}>
                ×
              </button>
            </div>

            <section className="settings-section">
              <div className="section-label">Themes</div>
              <div className="theme-grid">
                {Object.values(PREMIUM_THEMES).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`theme-card ${theme === item.id ? 'active' : ''}`}
                    onClick={() => onThemeChange(item.id)}
                  >
                    <span className="theme-dot" style={{ background: item.vars['--accent'] }} />
                    <span className="theme-name">{item.label}</span>
                    <span className="theme-desc">{item.description}</span>
                  </button>
                ))}
              </div>
              <button type="button" className="settings-link" onClick={onResetTheme}>
                reset to default premium look
              </button>
            </section>

            <section className="settings-section">
              <div className="section-label">Typing sound</div>
              <label className="setting-row">
                <span>enable keyboard audio</span>
                <input type="checkbox" checked={soundEnabled} onChange={(event) => onSoundEnabledChange(event.target.checked)} />
              </label>
              <div className="sound-grid">
                {SOUND_PRESETS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`sound-chip ${soundProfile === item.id ? 'active' : ''}`}
                    onClick={() => onSoundProfileChange(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="settings-section">
              <div className="section-label">Share card template</div>
              <div className="promo-card">
                <span className="promo-kicker">premium typing playground</span>
                <div className="promo-title">LetsType</div>
                <div className="promo-copy">
                  A premium typing playground with addictive motion, keyboard ASMR, coding mode, live stats, and handcrafted dark themes.
                </div>
                <div className="promo-badges">
                  <span>React + Vite</span>
                  <span>coding mode</span>
                  <span>keyboard sound</span>
                </div>
              </div>
              <div className="share-card">This is the text vibe you can reuse as a compact promotion card for social posts or sharing.</div>
              <button type="button" className="settings-link" onClick={onCopyPromo}>
                copy promo caption
              </button>
              <button type="button" className="settings-link" onClick={onCopySummary}>
                copy current vibe summary
              </button>
            </section>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
