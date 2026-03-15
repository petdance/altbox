import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { remarkScreenshots } from '../plugins/remark-screenshots.js'

export async function renderMarkdown(content) {
    if (!content) return ''
    const result = await unified()
        .use(remarkParse)
        .use(remarkScreenshots)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(content)
    return String(result)
}
