import React, { useEffect, useMemo, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function TypingArea({
  mode,
  codingProblem,
  codingLanguage,
  codingProblemLoading,
  codingHeader,
  testText,
  typed,
  onType,
  onRestart,
  finished,
  secondsLeft,
  timeOption,
  stats
}) {
  const inputRef = useRef(null)
  const wordsRef = useRef(null)
  const codeEditorRef = useRef(null)
  const scrollAnimationRef = useRef(0)
  const currentLineRef = useRef(null)
  const progress =
    mode === 'words'
      ? (typed.length / Math.max(1, testText.length)) * 100
      : ((timeOption - secondsLeft) / Math.max(1, timeOption)) * 100

  const lineData = useMemo(() => {
    if (mode !== 'coding' || !testText) {
      return []
    }

    const rawLines = testText.split('\n')
    let cursor = 0

    return rawLines.map((text, index) => {
      const start = cursor
      const end = cursor + text.length
      cursor = end + 1

      const typedSlice = typed.slice(start, start + text.length)
      let correct = 0
      let wrong = 0

      for (let charIndex = 0; charIndex < typedSlice.length; charIndex += 1) {
        if (typedSlice[charIndex] === text[charIndex]) {
          correct += 1
        } else {
          wrong += 1
        }
      }

      return {
        index,
        text,
        start,
        end,
        correct,
        wrong,
        typedCount: typedSlice.length,
        errorDensity: text.length > 0 ? (wrong / text.length) * 100 : 0
      }
    })
  }, [mode, testText, typed])

  const currentLineIndex = useMemo(() => {
    if (mode !== 'coding' || lineData.length === 0) {
      return -1
    }

    const cursor = typed.length
    for (const line of lineData) {
      if (cursor <= line.end) {
        return line.index
      }
    }

    return lineData.length - 1
  }, [lineData, mode, typed.length])

  const liveErrorIndex = useMemo(() => {
    if (!typed.length) return -1
    const index = typed.length - 1
    return typed[index] !== testText[index] ? index : -1
  }, [testText, typed])

  const smoothScrollContainer = (container, target, align = 'center') => {
    if (!container || !target) {
      return
    }

    const containerRect = container.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const currentTop = container.scrollTop
    const containerHeight = container.clientHeight
    const targetOffsetTop = target.offsetTop
    const targetHeight = target.offsetHeight

    let desiredTop = currentTop

    if (align === 'start') {
      desiredTop = targetOffsetTop - 24
    } else if (align === 'end') {
      desiredTop = targetOffsetTop - containerHeight + targetHeight + 24
    } else {
      desiredTop = targetOffsetTop - containerHeight / 2 + targetHeight / 2
    }

    const visibleTop = currentTop + 24
    const visibleBottom = currentTop + containerHeight - 24
    const targetTop = targetRect.top - containerRect.top + currentTop
    const targetBottom = targetTop + targetHeight

    if (targetTop >= visibleTop && targetBottom <= visibleBottom) {
      return
    }

    const maxScroll = Math.max(0, container.scrollHeight - containerHeight)
    const clampedTarget = Math.max(0, Math.min(maxScroll, desiredTop))
    const start = container.scrollTop
    const delta = clampedTarget - start

    if (Math.abs(delta) < 1) {
      return
    }

    const duration = Math.min(320, Math.max(160, Math.abs(delta) * 0.35))
    const startTime = performance.now()

    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current)
    }

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(1, elapsed / duration)
      const eased = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2
      container.scrollTop = start + delta * eased

      if (progress < 1) {
        scrollAnimationRef.current = requestAnimationFrame(tick)
      } else {
        scrollAnimationRef.current = 0
      }
    }

    scrollAnimationRef.current = requestAnimationFrame(tick)
  }

  const handleCodingKeyDown = (event) => {
    if (event.key !== 'Tab') {
      return
    }

    event.preventDefault()
    const target = event.currentTarget
    const start = target.selectionStart ?? typed.length
    const end = target.selectionEnd ?? typed.length
    const lineStart = testText.lastIndexOf('\n', Math.max(0, start - 1)) + 1
    const nextLineBreak = testText.indexOf('\n', lineStart)
    const lineEnd = nextLineBreak === -1 ? testText.length : nextLineBreak
    const lineText = testText.slice(lineStart, lineEnd)
    const firstNonWhitespaceOffset = lineText.search(/\S/)

    let indentChunk = '\t'
    if (firstNonWhitespaceOffset > 0 && start >= lineStart && start <= lineStart + firstNonWhitespaceOffset) {
      const indentEnd = lineStart + firstNonWhitespaceOffset
      const from = Math.min(start, indentEnd)
      indentChunk = testText.slice(from, indentEnd) || '\t'
    }

    const nextValue = `${typed.slice(0, start)}${indentChunk}${typed.slice(end)}`
    onType(nextValue)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [testText])

  useEffect(() => {
    if (mode === 'coding') {
      if (currentLineIndex < 0) {
        return
      }
      const activeLine = currentLineRef.current
      if (!activeLine) {
        return
      }
      smoothScrollContainer(codeEditorRef.current, activeLine, 'center')
      return
    }

    const activeChar = wordsRef.current?.querySelector('.char.current')
    if (!activeChar) {
      return
    }
    smoothScrollContainer(wordsRef.current, activeChar, 'center')
  }, [currentLineIndex, mode, typed.length])

  // flash current line briefly when a new problem is loaded
  useEffect(() => {
    if (mode !== 'coding') return
    const el = currentLineRef.current
    if (!el) return
    el.classList.add('flash-line')
    const id = window.setTimeout(() => {
      el.classList.remove('flash-line')
    }, 800)
    return () => window.clearTimeout(id)
  }, [codingProblem?.id])

  const typedLength = typed.length

  const animatedMetric = (value) => (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={String(value)}
        initial={{ y: 12, opacity: 0, filter: 'blur(2px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        exit={{ y: -10, opacity: 0, filter: 'blur(2px)' }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  )

  return (
    <div className="typing-area" onClick={() => inputRef.current?.focus()}>
      {mode === 'coding' ? (
        <textarea
          ref={inputRef}
          className="hidden-input"
          value={typed}
          onChange={(event) => onType(event.target.value)}
          onKeyDown={handleCodingKeyDown}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          rows={1}
        />
      ) : (
        <input
          ref={inputRef}
          className="hidden-input"
          value={typed}
          onChange={(event) => onType(event.target.value)}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />
      )}

      <div className="mini-stats">
        <span>{mode === 'words' ? `${typed.length} / ${testText.length}` : `${secondsLeft}s / ${timeOption}s`}</span>
        <span className="metric-odometer">{animatedMetric(Math.round(stats.wpm))} wpm</span>
        <span>{animatedMetric(Math.round(stats.cpm))} cpm</span>
        <span>{animatedMetric(Math.round(stats.accuracy))}%</span>
      </div>

      <div className="progress-track" aria-hidden>
        <span className="progress-fill" style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} />
      </div>

      {mode === 'coding' ? (
        <div className="problem-head coding-head">
          <div className="problem-title">
            {codingProblem?.id ?? ''}. {codingProblem?.name ?? 'LeetCode Problem'}
          </div>
          <div className="problem-subhead">
            {codingProblemLoading ? 'loading problem...' : `${codingProblem?.difficulty ?? 'unknown'} • ${codingProblem?.lineCounts?.[codingLanguage] ?? 0} lines • ${codingLanguage}`}
          </div>
        </div>
      ) : (
        <div className="language">english</div>
      )}

      {mode === 'coding' ? (
        <>
          {codingHeader ? (
            <div className="comment-header" aria-hidden>
              {codingHeader}
            </div>
          ) : null}
          {codingProblemLoading ? (
            <div className="code-loading">loading problem data...</div>
          ) : (
            <div className="code-editor" ref={codeEditorRef} role="presentation" aria-hidden>
              {lineData.map((line) => {
                const isActive = line.index === currentLineIndex
                const isPast = line.index < currentLineIndex
                const isLiveError = isActive && liveErrorIndex >= line.start && liveErrorIndex <= line.end
                const isCompleted = typedLength > line.end || (finished && typedLength >= line.end)
                const isCleanLine = isCompleted && line.wrong === 0 && line.typedCount >= line.text.length
                const hasLineError = isCompleted && line.wrong > 0

                return (
                  <motion.div
                    key={`${codingProblem?.id ?? 'problem'}-${line.index}`}
                    className={`code-line ${isActive ? 'active' : ''} ${isPast ? 'past' : ''} ${hasLineError ? 'has-errors' : ''} ${isLiveError ? 'shake-line' : ''}`}
                    ref={isActive ? currentLineRef : null}
                    layout
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  >
                    <span className={`code-line-number ${isCleanLine ? 'done' : ''} ${hasLineError ? 'error' : ''}`}>
                      {String(line.index + 1).padStart(2, '0')}
                    </span>
                    <span className="code-line-text">
                      {line.text.length === 0 ? (
                        <span className="code-empty-line">&nbsp;</span>
                      ) : (
                        line.text.split('').map((char, charIndex) => {
                          const absoluteIndex = line.start + charIndex
                          let className = 'char'

                          if (absoluteIndex < typedLength) {
                            className = typed[absoluteIndex] === char ? 'char correct' : 'char wrong'
                          } else if (absoluteIndex === typedLength && !finished) {
                            className = 'char current'
                          }

                          if (className === 'char current') {
                            return (
                              <motion.span
                                key={`${codingProblem?.id ?? 'problem'}-${line.index}-${charIndex}`}
                                className={className}
                                layout
                                transition={{ type: 'spring', stiffness: 520, damping: 34 }}
                              >
                                {char}
                              </motion.span>
                            )
                          }

                          return (
                            <span key={`${codingProblem?.id ?? 'problem'}-${line.index}-${charIndex}`} className={className}>
                              {char}
                            </span>
                          )
                        })
                      )}
                    </span>
                    <span
                      className="code-line-heat"
                      style={{ width: `${Math.max(4, Math.min(100, line.errorDensity))}%` }}
                      title={`${line.wrong} mistakes`}
                    />
                  </motion.div>
                )
              })}
            </div>
          )}
        </>
      ) : (
        <div ref={wordsRef} className={`words ${liveErrorIndex >= 0 ? 'shake-line' : ''}`} role="presentation" aria-hidden>
          {testText.split('').map((char, idx) => {
            let className = 'char'
            if (idx < typedLength) {
              className = typed[idx] === char ? 'char correct' : 'char wrong'
            } else if (idx === typedLength && !finished) {
              className = 'char current'
            }

            if (className === 'char current') {
              return (
                <motion.span
                  key={`${char}-${idx}`}
                  className={className}
                  layout
                  transition={{ type: 'spring', stiffness: 520, damping: 34 }}
                >
                  {char}
                </motion.span>
              )
            }

            return <span key={`${char}-${idx}`} className={className}>{char}</span>
          })}
        </div>
      )}

      {finished ? (
        <div className="result result-full">
          <div className="result-main">
            <section>
              <h4>wpm</h4>
              <strong>{Math.round(stats.wpm)}</strong>
            </section>
            <section>
              <h4>raw</h4>
              <strong>{Math.round(stats.raw)}</strong>
            </section>
            <section>
              <h4>accuracy</h4>
              <strong>{Math.round(stats.accuracy)}%</strong>
            </section>
            <section>
              <h4>consistency</h4>
              <strong>{Math.round(stats.consistency)}%</strong>
            </section>
          </div>

          <div className="result-sub">
            <span>
              <b>{Math.round(stats.cpm)}</b> cpm
            </span>
            <span>
              <b>{stats.correct}</b> correct chars
            </span>
            <span>
              <b>{stats.wrong}</b> wrong chars
            </span>
            <span>
              <b>{stats.missed}</b> missed chars
            </span>
            <span>
              <b>{Math.round(stats.errorRate)}%</b> error rate
            </span>
            <span>
              <b>{stats.duration}s</b> test time
            </span>
            <span>
              <b>{mode === 'coding' && codingProblem ? `#${codingProblem.id}` : mode}</b> mode
            </span>
            {mode === 'coding' && codingProblem ? (
              <span>
                <b>{codingProblem.name}</b> problem
              </span>
            ) : null}
            {mode === 'coding' && codingLanguage ? (
              <span>
                <b>{codingLanguage}</b> language
              </span>
            ) : null}
            {mode === 'time' ? (
              <span>
                <b>{timeOption}s</b> time limit
              </span>
            ) : null}
          </div>

          {mode === 'coding' ? (
            <div className="heatmap-panel">
              <div className="heatmap-title">mistake heatmap</div>
              <div className="heatmap-list">
                {lineData.slice(0, 16).map((line) => (
                  <div key={`heat-${codingProblem?.id ?? 'problem'}-${line.index}`} className="heatmap-row">
                    <span className="heatmap-line">{String(line.index + 1).padStart(2, '0')}</span>
                    <div className="heatmap-bar">
                      <span style={{ width: `${Math.max(8, Math.min(100, line.errorDensity))}%` }} />
                    </div>
                    <span className="heatmap-count">{line.wrong}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="result-actions">
            <button type="button" onClick={onRestart}>
              restart test
            </button>
            <p>{mode === 'coding' ? 'press esc for new test' : 'press tab, enter or esc for new test'}</p>
          </div>
        </div>
      ) : (
        <div className="helper">{mode === 'coding' ? 'esc to restart' : 'tab / enter / esc to restart'}</div>
      )}
    </div>
  )
}
