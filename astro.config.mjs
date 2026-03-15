import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { remarkScreenshots } from './src/plugins/remark-screenshots.js'

export default defineConfig({
    site: 'https://altbox.dev',
    integrations: [sitemap()],
    markdown: {
        remarkPlugins: [remarkScreenshots],
    },
})
