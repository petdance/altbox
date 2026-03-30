import { visit } from 'unist-util-visit'

const SCREENSHOT_RE = /^\{\{screenshot:\s*([^,]+),\s*([^,}]*?)(?:,\s*(.+?))?\}\}$/

export function remarkScreenshots() {
    return (tree) => {
        visit(tree, 'paragraph', (node, index, parent) => {
            if (node.children.length === 1 && node.children[0].type === 'text') {
                const match = node.children[0].value.trim().match(SCREENSHOT_RE)
                if (match) {
                    const file = match[1].trim()
                    const caption = match[2].trim()
                    const url = match[3] ? match[3].trim() : null
                    const img = `<img src="/${file}" alt="${caption}"><figcaption>${caption}</figcaption>`
                    const content = url
                        ? `<a href="${url}" target="_blank" rel="noopener">${img}</a>`
                        : img
                    parent.children[index] = {
                        type: 'html',
                        value: `<figure class="screenshot">${content}</figure>`,
                    }
                }
            }
        })
    }
}
