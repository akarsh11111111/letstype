const PROFILES = {
  classic: { base: 1200, click: 16, wobble: 26, decay: 0.036, gain: 0.024, noise: 0.014, body: 0.018 },
  blue: { base: 980, click: 19, wobble: 38, decay: 0.042, gain: 0.028, noise: 0.022, body: 0.022 },
  brown: { base: 860, click: 15, wobble: 20, decay: 0.048, gain: 0.024, noise: 0.017, body: 0.02 },
  red: { base: 760, click: 11, wobble: 14, decay: 0.032, gain: 0.018, noise: 0.012, body: 0.016 }
}

// A softer, more soothing profile for celebrations and chimes
PROFILES.soothing = { base: 640, click: 8, wobble: 10, decay: 0.06, gain: 0.012, noise: 0.008, body: 0.01 }

function createNoiseBuffer(audioContext, duration = 0.03) {
  const sampleRate = audioContext.sampleRate
  const frameCount = Math.floor(sampleRate * duration)
  const buffer = audioContext.createBuffer(1, frameCount, sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < frameCount; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / frameCount)
  }
  return buffer
}

export function createTypingSound() {
  let audioContext = null
  let noiseBuffer = null

  const ensureContext = async () => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)()
      noiseBuffer = createNoiseBuffer(audioContext)
    }
    if (audioContext.state === 'suspended') {
      await audioContext.resume()
    }
    return audioContext
  }

  const play = async (profileName = 'classic', options = {}) => {
    const preset = PROFILES[profileName] || PROFILES.classic
    const kind = options.kind || 'tap'
    // default playback volume is reduced to be less intrusive; callers may pass volumeMul to scale
    const volumeMul = typeof options.volumeMul === 'number' ? options.volumeMul : 0.6
    const ctx = await ensureContext()

    const now = ctx.currentTime
    const gain = ctx.createGain()
    const click = ctx.createOscillator()
    const wobble = ctx.createOscillator()
    const body = ctx.createOscillator()
    const filter = ctx.createBiquadFilter()
    const noise = ctx.createBufferSource()
    const noiseGain = ctx.createGain()

    const pitchJitter = (Math.random() - 0.5) * 60
    const durationBoost = kind === 'space' ? 0.01 : kind === 'delete' ? -0.005 : 0
    const attack = kind === 'space' ? 0.008 : 0.004

    click.type = 'square'
    click.frequency.setValueAtTime(preset.base + pitchJitter, now)
    click.frequency.exponentialRampToValueAtTime(Math.max(220, preset.base - preset.wobble + pitchJitter * 0.2), now + preset.decay + durationBoost)

    wobble.type = 'triangle'
    wobble.frequency.setValueAtTime(kind === 'delete' ? 150 : 180, now)
    wobble.frequency.exponentialRampToValueAtTime(kind === 'delete' ? 60 : 72, now + preset.decay + durationBoost)

    body.type = 'sine'
    body.frequency.setValueAtTime(preset.base * 0.34, now)
    body.frequency.exponentialRampToValueAtTime(preset.base * 0.18, now + preset.decay + durationBoost)

    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(preset.base * 1.8, now)
    filter.Q.setValueAtTime(kind === 'space' ? 3 : 6, now)

    // apply optional volume multiplier so celebration sounds can be louder
    const appliedGain = (kind === 'space' ? preset.gain * 1.25 : preset.gain) * volumeMul
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(appliedGain, now + attack)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + preset.decay + durationBoost)

    noise.buffer = noiseBuffer || createNoiseBuffer(ctx)
    noiseGain.gain.value = (preset.noise + (kind === 'delete' ? 0.01 : 0)) * volumeMul
    const bodyGain = ctx.createGain()
    bodyGain.gain.value = preset.body * volumeMul

    click.connect(filter)
    wobble.connect(filter)
    body.connect(bodyGain)
    bodyGain.connect(filter)
    noise.connect(noiseGain)
    noiseGain.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)

    click.start(now)
    wobble.start(now)
    body.start(now)
    noise.start(now)
    click.stop(now + preset.decay + durationBoost)
    wobble.stop(now + preset.decay + durationBoost)
    body.stop(now + preset.decay + durationBoost)
    noise.stop(now + preset.decay + durationBoost)
  }

  const playChime = async (opts = {}) => {
    const ctx = await ensureContext()
    const now = ctx.currentTime
    const gain = ctx.createGain()
    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const duration = typeof opts.duration === 'number' ? opts.duration : 0.28
    const volumeMul = typeof opts.volumeMul === 'number' ? opts.volumeMul : 0.8

    osc1.type = 'sine'
    osc2.type = 'triangle'
    const base = opts.base || 880
    osc1.frequency.setValueAtTime(base, now)
    osc2.frequency.setValueAtTime(base * 1.5, now)

    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(0.06 * volumeMul, now + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

    osc1.connect(gain)
    osc2.connect(gain)
    gain.connect(ctx.destination)

    osc1.start(now)
    osc2.start(now)
    osc1.stop(now + duration)
    osc2.stop(now + duration)
  }

  return { play, playChime, close: () => audioContext?.close() }
}
