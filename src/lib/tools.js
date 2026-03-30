import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'

const __dirname = dirname(fileURLToPath(import.meta.url))
const toolsDir = join(__dirname, '../../tools')

export function getAllTools() {
    const dirs = readdirSync(toolsDir, { withFileTypes: true })
        .filter(d => d.isDirectory())
    return dirs
        .map(dir => {
            const slug = dir.name
            const indexPath = join(toolsDir, slug, 'index.yaml')
            const tool = yaml.load(readFileSync(indexPath, 'utf8'))

            if (!Array.isArray(tool.alternativeto)) {
                tool.alternativeto = [tool.alternativeto]
            }

            if (tool.workswith && !Array.isArray(tool.workswith)) {
                tool.workswith = [tool.workswith]
            } else if (!tool.workswith) {
                tool.workswith = []
            }

            if (!tool.links) {
                tool.links = []
            }

            // Resolve screenshot file paths to web-accessible URLs
            if (tool.screenshots) {
                tool.screenshots = tool.screenshots.map(s => ({
                    ...s,
                    file: `tool/${slug}/${s.file}`,
                }))
            }

            // Resolve paths in body: {{screenshot: file, ...}} and ![alt](file)
            if (tool.body) {
                // Build a map of screenshot files to their URLs for quick lookup
                const screenshotUrls = {}
                if (tool.screenshots) {
                    tool.screenshots.forEach(s => {
                        screenshotUrls[s.file.split('/').pop()] = s.url
                    })
                }
                tool.body = tool.body
                    .replace(
                        /\{\{screenshot:\s*([^/,][^,]*),\s*([^}]+)\}\}/g,
                        (match, file, rest) => {
                            const url = screenshotUrls[file]
                            const suffix = url ? `, ${rest}, ${url}` : `, ${rest}`
                            return `{{screenshot: tool/${slug}/${file}${suffix}}}`
                        }
                    )
                    .replace(
                        /!\[([^\]]*)\]\(([^/h][^)]*)\)/g,
                        (_, alt, src) => `![${alt}](/tool/${slug}/${src})`
                    )
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
    tools.filter(t => t.language).forEach(t => { counts[t.language] = (counts[t.language] || 0) + 1 })
    return Object.keys(counts).sort().map(name => ({ name, count: counts[name] }))
}

export function getSidebarWorksWith(tools) {
    const counts = {}
    tools.flatMap(t => t.workswith).forEach(w => { counts[w] = (counts[w] || 0) + 1 })
    return Object.keys(counts).sort().map(name => ({ name, count: counts[name] }))
}

export function getArticles() {
    const linksPath = join(__dirname, '../../links.yaml')
    return yaml.load(readFileSync(linksPath, 'utf8'))
}
