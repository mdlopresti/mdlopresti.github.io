import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type PostPageProps = {
    frontmatter: {
        title: string
    },
    content: string
}

export default function PostPage(props: PostPageProps) {
    return (
        <div>
            <h3>{props.frontmatter.title}</h3>
            {props.content}
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

type StaticProps = {
    params: {
        slug: string
    }
}

export async function getStaticProps(props: StaticProps) {
    const markdownFileContent = fs.readFileSync(path.join('posts', props.params.slug + '.md'), 'utf-8')

    const postData = matter(markdownFileContent);

    return {
        props: {
            frontmatter: postData.data,
            content: postData.content
        }
    }
}
