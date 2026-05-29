import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const frontendRoot = resolve(process.cwd())
const sourceRootCandidates = [
  resolve(frontendRoot, 'algorithms'),
  resolve(frontendRoot, '..', 'algorithms')
]
const generatedRoot = resolve(frontendRoot, 'src', 'generated', 'algorithms')
const problemsRoot = join(generatedRoot, 'problems')
const generatedIndexPath = join(generatedRoot, 'index.js')

const LANGUAGE_FILES = {
  cpp: '.cpp',
  python: '.py',
  java: '.java',
  javascript: '.js'
}

const LANGUAGE_ORDER = ['cpp', 'java', 'python', 'javascript']

function safeSlug(text) {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function escapeTemplateString(text) {
  return text.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

function countLines(text) {
  return text.length === 0 ? 0 : text.split(/\r?\n/).length
}

function collectProblemDirs(rootDir, segments = []) {
  const items = readdirSync(rootDir, { withFileTypes: true })
  const results = []

  for (const item of items) {
    if (!item.isDirectory()) {
      continue
    }

    const nextSegments = [...segments, item.name]
    const candidateDir = join(rootDir, item.name)
    const infoPath = join(candidateDir, 'info.json')

    try {
      const infoRaw = readFileSync(infoPath, 'utf8')
      const info = JSON.parse(infoRaw)
      results.push({ dir: candidateDir, relativeDir: nextSegments.join('/'), info })
      continue
    } catch {
      // Not a problem leaf; keep traversing.
    }

    results.push(...collectProblemDirs(candidateDir, nextSegments))
  }

  return results
}

function readSolutionFiles(problemDir) {
  const files = readdirSync(problemDir)
  const sources = {}

  for (const [language, extension] of Object.entries(LANGUAGE_FILES)) {
    const fileName = files.find((candidate) => candidate.endsWith(extension) && candidate !== 'README.md' && candidate !== 'info.json')
    if (!fileName) {
      continue
    }
    sources[language] = readFileSync(join(problemDir, fileName), 'utf8').trimEnd()
  }

  return sources
}

function parseTopic(segmentPath) {
  const parts = segmentPath.split('/')
  return parts.length > 0 ? parts[0] : 'algorithms'
}

function clearOutput() {
  mkdirSync(problemsRoot, { recursive: true })
}

function createProblemModule(problem, moduleFilePath) {
  const moduleText = `export default ${JSON.stringify(problem, null, 2)}\n`
  writeFileSync(moduleFilePath, moduleText, 'utf8')
}

function main() {
  const sourceRoot = sourceRootCandidates.find((path) => existsSync(path))
  if (!sourceRoot) {
    if (existsSync(generatedIndexPath)) {
      console.log('Algorithms source folder not found; using existing generated data.')
      return
    }
    throw new Error(
      `Algorithms source folder not found. Checked: ${sourceRootCandidates.join(', ')}`
    )
  }

  clearOutput()

  const problemDirs = collectProblemDirs(sourceRoot)
    .filter(({ info }) => info && info.id && info.name && info.solution)
    .sort((left, right) => Number(left.info.id) - Number(right.info.id))

  const manifest = []

  for (const { dir, relativeDir, info } of problemDirs) {
    const languages = readSolutionFiles(dir)
    const availableLanguages = LANGUAGE_ORDER.filter((language) => Boolean(languages[language]))

    const problem = {
      id: Number(info.id),
      name: info.name,
      difficulty: info.difficulty || 'unknown',
      premium: Boolean(info.premium),
      topic: info.topic || parseTopic(relativeDir),
      url: info.url || '',
      relativeDir,
      slug: `${String(info.id).padStart(4, '0')}-${safeSlug(info.name)}`,
      availableLanguages,
      defaultLanguage: availableLanguages[0] || 'cpp',
      lineCounts: Object.fromEntries(
        availableLanguages.map((language) => [language, countLines(languages[language] || '')])
      ),
      languages
    }

    const moduleFileName = `${problem.slug}.js`
    const moduleFilePath = join(problemsRoot, moduleFileName)
    createProblemModule(problem, moduleFilePath)

    manifest.push({
      id: problem.id,
      name: problem.name,
      difficulty: problem.difficulty,
      premium: problem.premium,
      topic: problem.topic,
      url: problem.url,
      slug: problem.slug,
      relativeDir: problem.relativeDir,
      modulePath: `./generated/algorithms/problems/${moduleFileName}`,
      availableLanguages: problem.availableLanguages,
      defaultLanguage: problem.defaultLanguage,
      lineCounts: problem.lineCounts
    })
  }

  const indexText = `export const ALGORITHMS_PROBLEMS = ${JSON.stringify(manifest, null, 2)}\nexport const ALGORITHM_LANGUAGE_ORDER = ${JSON.stringify(LANGUAGE_ORDER)}\n`
  writeFileSync(join(generatedRoot, 'index.js'), indexText, 'utf8')
  console.log(`Generated ${manifest.length} algorithm problems in ${generatedRoot}`)
}

main()