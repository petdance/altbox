import { visit } from 'unist-util-visit'

export function rehypeExternalLinks() {
    return (tree) => {
        visit(tree, 'element', (node) => {
            if (node.tagName === 'a' && node.properties.href) {
                const href = String(node.properties.href)
                // Check if the link is external (starts with http/https)
                if (href.startsWith('http://') || href.startsWith('https://')) {
                    node.properties.target = '_blank'
                    node.properties.rel = 'noopener noreferrer'
                }
            }
        })
    }
}
