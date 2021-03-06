export interface Blog {
    data: {
        markdownRemark: BlogPost
    }
}

export interface Blogs {
    data: {
        allMarkdownRemark: {
            edges: Node[]
        }
    }
}

interface BlogPost {
        id: string
        html: string
        frontmatter: {
            title: string
            path: string,
            date: string,
            author: string
            categories: string
            tags: string
            image: string
        }
        excerpt: string
}

interface Node {
    node: BlogPost
}