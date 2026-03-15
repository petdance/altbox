import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'

const __dirname = dirname(fileURLToPath(import.meta.url))
const toolsDir = join(__dirname, '../../content/tools')

export function getAllTools() {
    const files = readdirSync(toolsDir).filter(f => f.endsWith('.yaml'))
    return files
        .map(file => {
            const tool = yaml.load(readFileSync(join(toolsDir, file), 'utf8'))
            if (!Array.isArray(tool.alternativeto)) {
                tool.alternativeto = [tool.alternativeto]
            }
            return tool
        })
        .sort((a, b) => a.name.localeCompare(b.name))
}

export function getSidebarItems(tools) {
    const counts = {}
    tools.flatMap(t => t.alternativeto).forEach(a => { counts[a] = (counts[a] || 0) + 1 })
    return Object.keys(counts).sort().map(name => ({ name, count: counts[name] }))
}

export function getSidebarLanguages(tools) {
    const counts = {}
    tools.forEach(t => { counts[t.language] = (counts[t.language] || 0) + 1 })
    return Object.keys(counts).sort().map(name => ({ name, count: counts[name] }))
}

export function getSidebarLicenses(tools) {
    const counts = {}
    tools.forEach(t => { counts[t.license] = (counts[t.license] || 0) + 1 })
    return Object.keys(counts).sort().map(name => ({ name, count: counts[name] }))
}
