import React from 'react'

const Option = ({ active, onClick, children }) => (
  <button className={`opt ${active ? 'active' : ''}`} onClick={onClick} type="button">
    {children}
  </button>
)

const MODE_ITEMS = [
  { id: 'words', label: 'words' },
  { id: 'quote', label: 'quote' },
  { id: 'coding', label: 'coding' },
  { id: 'time', label: 'time' }
]

export default function ModeSelector({
  mode,
  setMode,
  wordOption,
  setWordOption,
  timeOption,
  setTimeOption,
  codingProblem,
  codingProblemLoading,
  codingLanguage,
  setCodingLanguage,
  codingProblemIndex,
  codingProblemCount,
  onPreviousProblem,
  onNextProblem,
  setProblemListOpen,
  includePunctuation,
  setIncludePunctuation,
  includeNumbers,
  setIncludeNumbers
}) {
  return (
    <div className="mode-selector">
      <div className="left">
        <button
          className={`toggle-opt ${includePunctuation ? 'active' : ''}`}
          onClick={() => setIncludePunctuation(!includePunctuation)}
          type="button"
          title="punctuation"
        >
          @ punctuation
        </button>
        <button
          className={`toggle-opt ${includeNumbers ? 'active' : ''}`}
          onClick={() => setIncludeNumbers(!includeNumbers)}
          type="button"
          title="numbers"
        >
          # numbers
        </button>
      </div>

      <div className="center">
        {MODE_ITEMS.map((item) => (
          <Option key={item.id} active={mode === item.id} onClick={() => setMode(item.id)}>
            {item.label}
          </Option>
        ))}
      </div>

      <div className="right">
        {mode === 'coding' ? (
          <div className="coding-panel">
            <div className="coding-nav">
              <button className="dur" onClick={onPreviousProblem} type="button">
                prev
              </button>
              <div className="coding-meta">
                <div className="coding-topline">
                  <span>#{codingProblem?.id ?? codingProblemIndex + 1}</span>
                  <span>{codingProblem?.difficulty ?? 'unknown'}</span>
                  <span>{codingProblemCount} problems</span>
                </div>
                <div className="coding-title">{codingProblem?.name ?? 'LeetCode Problem'}</div>
                <div className="coding-lines">
                  {codingProblemLoading ? 'loading problem...' : `${codingProblem?.lineCounts?.[codingLanguage] ?? 0} lines in ${codingLanguage}`}
                </div>
              </div>
              <button className="dur" onClick={onNextProblem} type="button">
                next
              </button>
              <button
                className="dur"
                onClick={() => setProblemListOpen && setProblemListOpen(true)}
                type="button"
                title="open problem list"
              >
                ☰
              </button>
            </div>

            <div className="coding-languages">
              {(codingProblem?.availableLanguages || []).map((language) => (
                <button
                  key={language}
                  className={`dur ${codingLanguage === language ? 'active' : ''}`}
                  onClick={() => setCodingLanguage(language)}
                  type="button"
                >
                  {language}
                </button>
              ))}
            </div>
          </div>
        ) : mode === 'words' ? (
          <div className="durations">
            {[10, 25, 50, 100].map((option) => (
              <button
                key={option}
                className={`dur ${option === wordOption ? 'active' : ''}`}
                onClick={() => setWordOption(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        ) : mode === 'time' ? (
          <div className="durations">
            {[15, 30, 60, 120].map((option) => (
              <button
                key={option}
                className={`dur ${option === timeOption ? 'active' : ''}`}
                onClick={() => setTimeOption(option)}
                type="button"
              >
                {option}s
              </button>
            ))}
          </div>
        ) : (
          <div className="durations neutral">single set</div>
        )}
      </div>
    </div>
  )
}
