import { writeFileSync } from 'fs'
import { join } from 'path'
import { getAllTools, getSidebarItems } from '../lib/tools.js'

function escapeXml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}

function generateSiteMap(site) {
    const tools = getAllTools()
    const sidebarItems = getSidebarItems(tools)

    const baseUrl = site || 'https://altbox.dev'
    const today = new Date().toISOString().split('T')[0]

    const entries = [
        { loc: '/', lastmod: today },
    ]

    // Tool pages - update based on last_updated
    tools.forEach(tool => {
        const lastmod = tool.last_updated instanceof Date
            ? tool.last_updated.toISOString().split('T')[0]
            : String(tool.last_updated)
        entries.push({ loc: `/tool/${tool.name}/`, lastmod })
    })

    // Alternative-to pages — lastmod is the most recent last_updated among tools on that page,
    // so the sitemap reflects when the page content actually changed.
    sidebarItems.forEach(item => {
        const dates = tools
            .filter(t => t.alternativeto.includes(item.name))
            .map(t => t.last_updated instanceof Date
                ? t.last_updated.toISOString().split('T')[0]
                : String(t.last_updated))
        const lastmod = dates.length ? dates.sort().at(-1) : today
        entries.push({ loc: `/alternative-to/${item.name}/`, lastmod })
    })

    // Language pages — lastmod is the most recent last_updated among tools in that language.
    const languages = [...new Set(tools.filter(t => t.language).map(t => t.language.toLowerCase()))]
    languages.forEach(lang => {
        const dates = tools
            .filter(t => t.language && t.language.toLowerCase() === lang)
            .map(t => t.last_updated instanceof Date
                ? t.last_updated.toISOString().split('T')[0]
                : String(t.last_updated))
        const lastmod = dates.length ? dates.sort().at(-1) : today
        entries.push({ loc: `/language/${lang}/`, lastmod })
    })

    // Works-with pages — lastmod is the most recent last_updated among tools on that page.
    const workswith = [...new Set(tools.flatMap(t => t.workswith).map(w => w.toLowerCase()))]
    workswith.forEach(slug => {
        const dates = tools
            .filter(t => t.workswith.map(w => w.toLowerCase()).includes(slug))
            .map(t => t.last_updated instanceof Date
                ? t.last_updated.toISOString().split('T')[0]
                : String(t.last_updated))
        const lastmod = dates.length ? dates.sort().at(-1) : today
        entries.push({ loc: `/works-with/${slug}/`, lastmod })
    })

    // Generate XML
    const urls = entries.map(entry => {
        return `  <url>
    <loc>${baseUrl}${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`
    }).join('\n')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

    return xml
}

export default function sitemapIntegration(options = {}) {
    const siteUrl = options.site || 'https://altbox.dev'
    return {
        name: 'custom-sitemap',
        hooks: {
            'astro:build:done': async ({ dir }) => {
                const sitemapXml = generateSiteMap(siteUrl)
                const sitemapPath = join(dir.pathname, 'sitemap.xml')
                writeFileSync(sitemapPath, sitemapXml, 'utf-8')
                console.log(`✓ Sitemap generated at ${sitemapPath}`)
            },
        },
    }
}
