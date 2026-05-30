import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import ModeSelector from './components/ModeSelector'
import SettingsPanel from './components/SettingsPanel'
import TypingArea from './components/TypingArea'
import { ALGORITHMS_PROBLEMS } from './generated/algorithms'
import { DEFAULT_THEME, PREMIUM_THEMES } from './lib/premiumThemes'
import { createTypingSound } from './lib/typingSound'

const WORD_BANK = [
  'into', 'public', 'system', 'develop', 'problem', 'through', 'school', 'might', 'other', 'about', 'place', 'small', 'great', 'sound', 'house', 'again', 'world', 'change', 'study', 'found',
  'point', 'group', 'while', 'begin', 'every', 'right', 'think', 'three', 'state', 'still', 'never', 'under', 'water', 'thing', 'after', 'write', 'where', 'those', 'being', 'build', 'first',
  'light', 'learn', 'value', 'power', 'order', 'logic', 'array', 'class', 'event', 'input', 'focus', 'style', 'theme', 'print', 'query', 'clear', 'react', 'hooks', 'timer', 'speed'
]

const QUOTES = [
  'The best way to improve typing is to type with intent, not with panic.',
  'Discipline in practice turns seconds into skill.',
  'Fast fingers matter less than consistent accuracy.',
  'Code reads like thought, and thought needs rhythm.'
]

const STORAGE_KEY = 'letstype_recent_scores_v1'
const SETTINGS_KEY = 'letstype_ui_settings_v1'
const CODING_PROBLEM_LOADERS = import.meta.glob('./generated/algorithms/problems/*.js')
const MILESTONES = [50, 80, 100]

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function buildWordText(count, variant) {
  const punctuation = [',', '.', ';', ':', '!', '?']
  const words = []
  for (let i = 0; i < count; i += 1) {
    let value = randomFrom(WORD_BANK)
    if ((variant === 'numbers' || variant === 'both') && i % 4 === 0) {
      value = `${Math.floor(10 + Math.random() * 89)}`
    }
    if ((variant === 'punctuation' || variant === 'both') && i % 5 === 0) {
      value = `${value}${randomFrom(punctuation)}`
    }
    if ((variant === 'numbers' || variant === 'both') && i % 6 === 0) {
      value = `${value}${Math.floor(Math.random() * 10)}`
    }
    words.push(value)
  }
  return words.join(' ')
}

export default function App() {
  const [mode, setMode] = useState('words')
  const [theme, setTheme] = useState(DEFAULT_THEME)
  const [backgroundMode, setBackgroundMode] = useState('normal')
  const [backgroundPreset, setBackgroundPreset] = useState('nebula')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [soundProfile, setSoundProfile] = useState('classic')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [codingProblemIndex, setCodingProblemIndex] = useState(0)
  const [codingProblemData, setCodingProblemData] = useState(null)
  const [codingLanguage, setCodingLanguage] = useState('cpp')
  const [problemListOpen, setProblemListOpen] = useState(false)
  const [problemSearch, setProblemSearch] = useState('')
  const [wordOption, setWordOption] = useState(25)
  const [timeOption, setTimeOption] = useState(60)
  const [customText, setCustomText] = useState('')
  const [testText, setTestText] = useState('')
  const [codingHeader, setCodingHeader] = useState('')
  const [typed, setTyped] = useState('')
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [recentResults, setRecentResults] = useState([])
  const [includePunctuation, setIncludePunctuation] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [shareToast, setShareToast] = useState('')
  const lastSavedIdRef = useRef('')
  const startStampRef = useRef(0)
  const typingSoundRef = useRef(null)
  const celebratedMilestonesRef = useRef(new Set())
  const codingProblemMeta = ALGORITHMS_PROBLEMS[codingProblemIndex] || ALGORITHMS_PROBLEMS[0]
  const filteredProblems = useMemo(() => {
    const query = problemSearch.trim().toLowerCase()
    if (!query) {
      return ALGORITHMS_PROBLEMS
    }

    return ALGORITHMS_PROBLEMS.filter((problem) => {
      const haystack = `${problem.id} ${problem.name} ${problem.difficulty} ${problem.topic}`.toLowerCase()
      return haystack.includes(query)
    })
  }, [problemSearch])

  const secondsLeft = Math.max(0, timeOption - elapsedSeconds)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(SETTINGS_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.theme && PREMIUM_THEMES[parsed.theme]) setTheme(parsed.theme)
        if (parsed.backgroundMode === 'premium') setBackgroundMode('premium')
        if (parsed.backgroundPreset) setBackgroundPreset(parsed.backgroundPreset)
        if (typeof parsed.soundEnabled === 'boolean') setSoundEnabled(parsed.soundEnabled)
        if (parsed.soundProfile) setSoundProfile(parsed.soundProfile)
      }
    } catch {
      // ignore invalid settings
    }
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme
    document.body.dataset.bgMode = backgroundMode
    document.body.dataset.bg = backgroundPreset
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify({ theme, backgroundMode, backgroundPreset, soundEnabled, soundProfile }))
  }, [backgroundMode, backgroundPreset, soundEnabled, soundProfile, theme])

  useEffect(() => {
    typingSoundRef.current = createTypingSound()
    return () => typingSoundRef.current?.close?.()
  }, [])

  useEffect(() => {
    let cancelled = false
    const loadCodingProblem = async () => {
      if (!codingProblemMeta?.modulePath) {
        setCodingProblemData(null)
        return
      }

      const loader = CODING_PROBLEM_LOADERS[codingProblemMeta.modulePath]
      if (!loader) {
        setCodingProblemData(null)
        return
      }

      const module = await loader()
      if (cancelled) {
        return
      }

      const problem = module.default
      setCodingProblemData(problem)
      setCodingLanguage((currentLanguage) => {
        const available = problem.availableLanguages || []
        if (available.includes(currentLanguage)) {
          return currentLanguage
        }
        return problem.defaultLanguage || available[0] || 'cpp'
      })
    }

    loadCodingProblem()

    return () => {
      cancelled = true
    }
  }, [codingProblemMeta?.modulePath])

  useEffect(() => {
    try {
      const fromStore = window.localStorage.getItem(STORAGE_KEY)
      if (fromStore) {
        const parsed = JSON.parse(fromStore)
        if (Array.isArray(parsed)) {
          setRecentResults(parsed)
        }
      }
    } catch {
      setRecentResults([])
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recentResults))
  }, [recentResults])

  const generateText = useCallback(() => {
    if (mode === 'coding') {
      if (!codingProblemData) {
        return ''
      }
      return codingProblemData.languages?.[codingLanguage] || codingProblemData.languages?.[codingProblemData.defaultLanguage] || ''
    }
    if (mode === 'custom') {
      return customText.trim() || 'Paste or type your custom text above to practice exactly what you want.'
    }
    let variant = 'plain'
    if (includePunctuation && includeNumbers) variant = 'both'
    else if (includePunctuation) variant = 'punctuation'
    else if (includeNumbers) variant = 'numbers'

    if (mode === 'time') {
      return buildWordText(Math.max(200, timeOption * 5), variant)
    }

    return buildWordText(wordOption, variant)
  }, [codingLanguage, codingProblemData, customText, includePunctuation, includeNumbers, mode, timeOption, wordOption])

  const nextCodingProblem = useCallback(() => {
    setCodingProblemIndex((current) => (current + 1) % ALGORITHMS_PROBLEMS.length)
  }, [])

  const previousCodingProblem = useCallback(() => {
    setCodingProblemIndex((current) => (current - 1 + ALGORITHMS_PROBLEMS.length) % ALGORITHMS_PROBLEMS.length)
  }, [])

  const openProblemFromIndex = useCallback((index) => {
    setCodingProblemIndex(index)
    setProblemListOpen(false)
  }, [])

  const flashMilestone = useCallback((value) => {
    if (value < 50) return
    const crossed = MILESTONES.find((milestone) => value >= milestone && !celebratedMilestonesRef.current.has(milestone))
    if (!crossed) return
    celebratedMilestonesRef.current.add(crossed)
    confetti({
      particleCount: crossed >= 100 ? 120 : crossed >= 80 ? 90 : 60,
      spread: crossed >= 100 ? 85 : 65,
      startVelocity: crossed >= 100 ? 42 : 32,
      origin: { y: 0.72 },
      colors: [PREMIUM_THEMES[theme].vars['--accent'], '#ffffff', PREMIUM_THEMES[theme].vars['--wrong']]
    })
  }, [theme])

  const resetTest = useCallback(
    (preserveText = false) => {
      // special-case coding: extract a leading comment/header line to display but not require typing
      if (!preserveText && mode === 'coding' && codingProblemData) {
        const raw = codingProblemData.languages?.[codingLanguage] || codingProblemData.languages?.[codingProblemData.defaultLanguage] || ''
        const normalizedRaw = raw.replace(/\r\n?/g, '\n')
        const lines = normalizedRaw.split('\n')
        let header = ''
        let body = normalizedRaw
        if (lines.length > 0) {
          const first = lines[0].trim()
          if (first.startsWith('//') || first.startsWith('/*') || first.startsWith('#')) {
            header = lines[0]
            body = lines.slice(1).join('\n')
          }
        }
        while (body.startsWith('\n')) {
          body = body.slice(1)
        }
        setCodingHeader(header)
        setTestText(body)
      } else {
        setTestText((prev) => (preserveText ? prev : generateText()))
        if (!preserveText && mode !== 'coding') setCodingHeader('')
      }

      setTyped('')
      setStarted(false)
      setFinished(false)
      setElapsedSeconds(0)
      setShareToast('')
      startStampRef.current = 0
      celebratedMilestonesRef.current = new Set()
    },
    [generateText, codingProblemData, codingLanguage, mode]
  )

  useEffect(() => {
    resetTest(false)
  }, [codingLanguage, codingProblemData, codingProblemIndex, includeNumbers, includePunctuation, mode, resetTest, timeOption, wordOption])

  useEffect(() => {
    if (!started || finished || mode !== 'time') {
      return undefined
    }

    const id = window.setInterval(() => {
      setElapsedSeconds((prev) => {
        const next = prev + 1
        if (next >= timeOption) {
          window.clearInterval(id)
          setFinished(true)
          setStarted(false)
          return timeOption
        }
        return next
      })
    }, 1000)

    return () => window.clearInterval(id)
  }, [finished, mode, started, timeOption])

  useEffect(() => {
    const onKeys = (event) => {
      if (event.altKey && event.key.toLowerCase() === 'l') {
        event.preventDefault()
        setProblemListOpen((open) => !open)
        return
      }

      if (event.key === 'Escape' && settingsOpen) {
        event.preventDefault()
        setSettingsOpen(false)
        return
      }

      if (mode === 'coding') {
        if (event.key === 'Escape') {
          event.preventDefault()
          resetTest(false)
        }
        return
      }

      if (event.key === 'Tab' || event.key === 'Enter' || event.key === 'Escape') {
        event.preventDefault()
        resetTest(false)
      }
    }
    window.addEventListener('keydown', onKeys)

    // Allow starting typing directly by capturing printable keys when in coding mode
    const onGlobalTyping = (event) => {
      if (settingsOpen || mode !== 'coding' || finished) return

      const active = document.activeElement
      const tag = active && active.tagName ? active.tagName.toLowerCase() : ''
      // If a real input/textarea is focused, let it handle events
      if (tag === 'input' || tag === 'textarea') return

      if (event.key === 'Backspace') {
        event.preventDefault()
        handleType(typed.slice(0, -1))
        return
      }

      if (event.key === 'Enter') {
        event.preventDefault()
        handleType(`${typed}\n`)
        return
      }

      if (event.key.length === 1) {
        // printable character
        event.preventDefault()
        handleType(`${typed}${event.key}`)
      }
    }

    window.addEventListener('keydown', onGlobalTyping)

    return () => {
      window.removeEventListener('keydown', onKeys)
      window.removeEventListener('keydown', onGlobalTyping)
    }
  }, [mode, resetTest, finished, settingsOpen, typed])

  const handleType = (nextValue) => {
    if (finished) {
      return
    }

    const previousLength = typed.length
    if (!started && nextValue.length > 0) {
      setStarted(true)
      startStampRef.current = Date.now()
    }

    if (soundEnabled) {
      const kind = nextValue.length < previousLength ? 'delete' : nextValue[nextValue.length - 1] === ' ' ? 'space' : 'tap'
      if (nextValue.length !== previousLength) {
        typingSoundRef.current?.play?.(soundProfile, { kind })
      }
    }

    let activeText = testText
    if (mode === 'time' && nextValue.length >= testText.length - 25) {
      const variant = includePunctuation && includeNumbers ? 'both' : includePunctuation ? 'punctuation' : includeNumbers ? 'numbers' : 'plain'
      const extension = buildWordText(Math.max(50, timeOption * 2), variant)
      activeText = `${testText} ${extension}`
      setTestText(activeText)
    }

    const clamped = nextValue.slice(0, activeText.length)
    setTyped(clamped)

    if (clamped.length >= activeText.length) {
      setFinished(true)
      setStarted(false)
      if (startStampRef.current > 0) {
        setElapsedSeconds(Math.max(1, Math.round((Date.now() - startStampRef.current) / 1000)))
      }
    }
  }

  const stats = useMemo(() => {
    let correct = 0
    let wrong = 0
    for (let i = 0; i < typed.length; i += 1) {
      if (typed[i] === testText[i]) {
        correct += 1
      } else {
        wrong += 1
      }
    }
    const duration = Math.max(1, elapsedSeconds)
    const errors = Math.max(0, typed.length - correct)
    const missed = mode === 'time' ? 0 : Math.max(0, testText.length - typed.length)
    const accuracy = typed.length > 0 ? (correct / typed.length) * 100 : 100
    const wpm = (correct / 5) * (60 / duration)
    const raw = (typed.length / 5) * (60 / duration)
    const cpm = correct * (60 / duration)
    const consistency = raw > 0 ? Math.max(0, Math.min(100, (wpm / raw) * 100)) : 100
    const errorRate = typed.length > 0 ? (errors / typed.length) * 100 : 0

    return {
      duration,
      correct,
      wrong,
      missed,
      errors,
      accuracy,
      wpm,
      raw,
      cpm,
      consistency,
      errorRate,
      totalTyped: typed.length,
      textLength: testText.length
    }
  }, [elapsedSeconds, mode, testText, typed])

  useEffect(() => {
    flashMilestone(Math.round(stats.wpm))
  }, [flashMilestone, stats.wpm])

  useEffect(() => {
    if (!finished || typed.length === 0) {
      return
    }
    if (stats.wpm < 50) {
      return
    }
    flashMilestone(Math.round(stats.wpm))
  }, [finished, flashMilestone, stats.wpm, typed.length])

  useEffect(() => {
    if (!finished || typed.length === 0) {
      return
    }

    const id = `${mode}-${codingProblemMeta?.id ?? 'none'}-${codingLanguage}-${typed.length}-${Math.round(stats.wpm)}-${stats.duration}`
    if (lastSavedIdRef.current === id) {
      return
    }
    lastSavedIdRef.current = id

    const entry = {
      createdAt: new Date().toISOString(),
      mode,
      codingProblemId: mode === 'coding' ? codingProblemMeta?.id ?? null : null,
      codingProblemTitle: mode === 'coding' ? codingProblemMeta?.name ?? null : null,
      codingLanguage: mode === 'coding' ? codingLanguage : null,
      timeOption: mode === 'time' ? timeOption : null,
      wpm: Math.round(stats.wpm),
      raw: Math.round(stats.raw),
      cpm: Math.round(stats.cpm),
      accuracy: Math.round(stats.accuracy),
      consistency: Math.round(stats.consistency),
      errors: stats.errors,
      duration: stats.duration
    }

    setRecentResults((prev) => [entry, ...prev].slice(0, 8))
  }, [codingLanguage, codingProblemMeta, finished, mode, stats, timeOption, typed.length])

  return (
    <div className="app-root">
      <header className="top">
        <div className="brand">
          <div className="logo" aria-hidden>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <rect x="1" y="1" width="44" height="44" rx="10" fill="rgba(255,255,255,0.03)" stroke="url(#g1)" strokeWidth="1" />
              <g transform="translate(8,9)">
                <text x="0" y="18" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="20" fill="#fff">L</text>
                <text x="16" y="18" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="20" fill="#fff" opacity="0.95">T</text>
                <path d="M28 6c-3 2-6 3-9 4" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.2" fill="none" />
              </g>
            </svg>
          </div>
          <div>
            <div className="title">LetsType</div>
            <div className="byline">Akarsh</div>
          </div>
        </div>
        <div className="controls">
          <button type="button" className="settings-icon premium-settings" onClick={() => setSettingsOpen(true)} title="open premium studio">
            ⚙
          </button>
          <ModeSelector
            mode={mode}
            setMode={setMode}
            wordOption={wordOption}
            setWordOption={setWordOption}
            timeOption={timeOption}
            setTimeOption={setTimeOption}
            codingProblem={codingProblemMeta}
            codingProblemLoading={mode === 'coding' && codingProblemData == null}
            codingLanguage={codingLanguage}
            setCodingLanguage={setCodingLanguage}
            codingProblemIndex={codingProblemIndex}
            codingProblemCount={ALGORITHMS_PROBLEMS.length}
            onPreviousProblem={previousCodingProblem}
            onNextProblem={nextCodingProblem}
            setProblemListOpen={setProblemListOpen}
            includePunctuation={includePunctuation}
            setIncludePunctuation={setIncludePunctuation}
            includeNumbers={includeNumbers}
            setIncludeNumbers={setIncludeNumbers}
          />
        </div>
      </header>

      {mode === 'coding' ? (
        <div className="coding-shell">
          <aside className={`problem-drawer ${problemListOpen ? 'open' : ''}`} aria-hidden={!problemListOpen}>
            <div className="problem-drawer-head">
              <div>
                <div className="problem-drawer-title">Problem List</div>
                <div className="problem-drawer-subtitle">{ALGORITHMS_PROBLEMS.length} problems</div>
              </div>
              <button type="button" className="problem-drawer-close" onClick={() => setProblemListOpen(false)}>
                ×
              </button>
            </div>

            <div className="problem-drawer-search">
              <input
                value={problemSearch}
                onChange={(event) => setProblemSearch(event.target.value)}
                placeholder="Search questions"
                aria-label="Search questions"
              />
            </div>

            <div className="problem-drawer-list">
              {filteredProblems.map((problem, index) => {
                const actualIndex = ALGORITHMS_PROBLEMS.findIndex((item) => item.id === problem.id)
                const active = actualIndex === codingProblemIndex
                return (
                  <button
                    key={problem.slug}
                    type="button"
                    className={`problem-row ${active ? 'active' : ''}`}
                    onClick={() => openProblemFromIndex(actualIndex)}
                  >
                    <span className="problem-row-check">{active ? '✓' : ''}</span>
                    <span className="problem-row-title">
                      {problem.id}. {problem.name}
                    </span>
                    <span className={`problem-row-difficulty difficulty-${problem.difficulty}`}>{problem.difficulty}</span>
                  </button>
                )
              })}
            </div>
          </aside>

          <button type="button" className="problem-list-toggle" onClick={() => setProblemListOpen(true)}>
            Problem List
          </button>
        </div>
      ) : null}

      {mode === 'custom' ? (
        <section className="custom-row">
          <label htmlFor="customText">custom text</label>
          <textarea
            id="customText"
            value={customText}
            onChange={(event) => setCustomText(event.target.value)}
            placeholder="Paste text to practice..."
            rows={2}
          />
          <button type="button" onClick={() => resetTest(false)}>
            apply
          </button>
        </section>
      ) : null}

      <main className="main-area">
        <TypingArea
          mode={mode}
          codingProblem={codingProblemData || codingProblemMeta}
          codingLanguage={codingLanguage}
          codingProblemLoading={mode === 'coding' && codingProblemData == null}
          codingHeader={codingHeader}
          testText={testText}
          typed={typed}
          onType={handleType}
          onRestart={() => resetTest(false)}
          finished={finished}
          secondsLeft={secondsLeft}
          timeOption={timeOption}
          stats={stats}
        />
      </main>

      <section className="history-panel">
        <h3>recent runs</h3>
        {recentResults.length === 0 ? (
          <p>no runs yet. finish one test to see history.</p>
        ) : (
          <div className="history-grid">
            {recentResults.map((entry) => (
              <article key={`${entry.createdAt}-${entry.wpm}-${entry.mode}`}>
                <header>
                  <span>{entry.mode}</span>
                  {entry.codingProblemId ? <span>#{entry.codingProblemId}</span> : null}
                  {entry.codingLanguage ? <span>{entry.codingLanguage}</span> : null}
                </header>
                <div className="history-metrics">
                  <span>{entry.wpm} wpm</span>
                  <span>{entry.accuracy}% acc</span>
                  <span>{entry.consistency}% cons</span>
                  {entry.codingProblemTitle ? <span>{entry.codingProblemTitle}</span> : null}
                  {entry.timeOption ? <span>{entry.timeOption}s</span> : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <SettingsPanel
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        theme={theme}
        onThemeChange={setTheme}
        backgroundMode={backgroundMode}
        onBackgroundModeChange={setBackgroundMode}
        backgroundPreset={backgroundPreset}
        onBackgroundPresetChange={setBackgroundPreset}
        soundEnabled={soundEnabled}
        onSoundEnabledChange={setSoundEnabled}
        soundProfile={soundProfile}
        onSoundProfileChange={setSoundProfile}
        onResetTheme={() => setTheme(DEFAULT_THEME)}
        onCopyPromo={async () => {
          const promo = 'LetsType — a premium typing playground with addictive motion, live stats, keyboard ASMR, coding mode, and theme presets.'
          await navigator.clipboard.writeText(promo)
          setShareToast('promo copied')
          window.setTimeout(() => setShareToast(''), 1800)
        }}
        onCopySummary={async () => {
          const summary = `LetsType | theme: ${theme} | sound: ${soundEnabled ? soundProfile : 'off'} | best wpm: ${Math.round(stats.wpm)}`
          await navigator.clipboard.writeText(summary)
          setShareToast('summary copied')
          window.setTimeout(() => setShareToast(''), 1800)
        }}
      />

      <footer className="foot">
        <span>esc / tab / enter - restart test</span>
        <span>mode: {mode}</span>
        <span className="contact-row">
          <span className="contact">contact: vidyarthiakarsh@gmail.com</span>
          <a className="contact-button" href="mailto:vidyarthiakarsh@gmail.com?subject=LetsType%20contact">
            contact me
          </a>
        </span>
      </footer>
      {shareToast ? <div className="share-toast">{shareToast}</div> : null}
    </div>
  )
}
