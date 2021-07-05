import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function PostPage({ frontmatter, content }) {
    return (
        <div>
            <h3>{frontmatter.title}</h3>
            {content}
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownFileContent = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const postData = matter(markdownFileContent);

    return {
        props: {
            frontmatter: postData.data,
            content: postData.content
        }
    }
}
