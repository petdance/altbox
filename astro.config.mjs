import { defineConfig } from 'astro/config'
import sitemapIntegration from './src/integrations/sitemap.js'
import { remarkScreenshots } from './src/plugins/remark-screenshots.js'

export default defineConfig({
    site: 'https://altbox.dev',
    integrations: [sitemapIntegration({ site: 'https://altbox.dev' })],
    markdown: {
        remarkPlugins: [remarkScreenshots],
    },
})
