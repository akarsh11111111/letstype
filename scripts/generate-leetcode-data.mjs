import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const frontendRoot = resolve(process.cwd())
const sourceDir = resolve(frontendRoot, '..', 'leetcode_problems')
const outputFile = resolve(frontendRoot, 'src', 'data', 'leetcodeProblems.js')

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
}

function extractCode(lines) {
  let startIndex = 0
  while (startIndex < lines.length) {
    const line = lines[startIndex]
    if (line.trim() === '') {
      startIndex += 1
      continue
    }
    if (line.trim().startsWith('//')) {
      startIndex += 1
      continue
    }
    break
  }

  let codeLines = lines.slice(startIndex)
  const mainIndex = codeLines.findIndex((line) => /^\s*int\s+main\s*\(/.test(line))
  if (mainIndex !== -1) {
    codeLines = codeLines.slice(0, mainIndex)
  }

  return codeLines.join('\n').trimEnd()
}

function parseFile(fileName) {
  const fullPath = join(sourceDir, fileName)
  const raw = readFileSync(fullPath, 'utf8')
  const lines = raw.split(/\r?\n/)
  const metaMatch = raw.match(/\/\/\s*LeetCode\s*#(\d+):\s*(.+)$/m)

  if (!metaMatch) {
    return null
  }

  const id = Number(metaMatch[1])
  const rawTitle = metaMatch[2].trim()
  const title = rawTitle.replace(/\s*\(([^)]+)\)\s*$/, '')
  const variantMatch = rawTitle.match(/\(([^)]+)\)\s*$/)
  const code = extractCode(lines)

  return {
    id,
    title,
    variant: variantMatch ? variantMatch[1].trim() : null,
    fileName,
    code,
    lineCount: code ? code.split('\n').length : 0
  }
}

const files = readdirSync(sourceDir).filter((fileName) => fileName.endsWith('.cpp') && !fileName.includes('copy')).sort(naturalSort)
const problems = files.map(parseFile).filter(Boolean).sort((a, b) => a.id - b.id)

const output = `export const LEETCODE_PROBLEMS = ${JSON.stringify(problems, null, 2)}\n`
writeFileSync(outputFile, output, 'utf8')
console.log(`Generated ${problems.length} LeetCode problems at ${outputFile}`)