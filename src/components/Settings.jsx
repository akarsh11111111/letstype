import React from 'react'

export default function Settings({ isOpen, onClose, punctuation, setPunctuation, numbers, setNumbers }) {
  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="settings-overlay" onClick={onClose} />
      <div className="settings-modal">
        <header>
          <h3>advanced settings</h3>
          <button type="button" onClick={onClose} className="close-btn">
            ✕
          </button>
        </header>

        <div className="settings-content">
          <label className="setting-toggle">
            <input
              type="checkbox"
              checked={punctuation}
              onChange={(e) => setPunctuation(e.target.checked)}
            />
            <span>Include Punctuation ( , . ; ! ? )</span>
          </label>

          <label className="setting-toggle">
            <input
              type="checkbox"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            <span>Include Numbers ( 0 - 9 )</span>
          </label>
        </div>

        <footer className="settings-footer">
          <p>these settings apply to words mode</p>
          <button type="button" onClick={onClose} className="settings-ok">
            done
          </button>
        </footer>
      </div>
    </>
  )
}
