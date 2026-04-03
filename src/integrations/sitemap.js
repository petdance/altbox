import { writeFileSync } from 'fs'
import { join } from 'path'
import { getAllTools, getSidebarItems, getSidebarLanguages, getSidebarWorksWith } from '../lib/tools.js'

function escapeXml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}

function generateSiteMap(site) {
    const tools = getAllTools()
    const sidebarItems = getSidebarItems(tools)
    const languages = getSidebarLanguages(tools)
    const workswith = getSidebarWorksWith(tools)

    const baseUrl = site || 'https://altbox.dev'
    const today = new Date().toISOString().split('T')[0]

    const entries = [
        { loc: '/', priority: 1.0, changefreq: 'monthly', lastmod: today },
    ]

    // Tool pages - highest priority, update based on last_updated
    tools.forEach(tool => {
        const lastmod = tool.last_updated instanceof Date
            ? tool.last_updated.toISOString().split('T')[0]
            : String(tool.last_updated)
        entries.push({
            loc: `/tool/${tool.name}/`,
            priority: 0.8,
            changefreq: 'yearly',
            lastmod,
        })
    })

    // Alternative-to pages
    sidebarItems.forEach(item => {
        entries.push({
            loc: `/alternative-to/${item.name}/`,
            priority: 0.6,
            changefreq: 'monthly',
            lastmod: today,
        })
    })

    // Language pages
    languages.forEach(lang => {
        entries.push({
            loc: `/language/${lang.name.toLowerCase()}/`,
            priority: 0.5,
            changefreq: 'monthly',
            lastmod: today,
        })
    })

    // Works-with pages
    workswith.forEach(item => {
        entries.push({
            loc: `/works-with/${item.name.toLowerCase()}/`,
            priority: 0.5,
            changefreq: 'monthly',
            lastmod: today,
        })
    })

    // Generate XML
    const urls = entries.map(entry => {
        return `  <url>
    <loc>${baseUrl}${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <priority>${entry.priority}</priority>
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
