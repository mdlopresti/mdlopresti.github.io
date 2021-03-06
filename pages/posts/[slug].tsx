import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Row } from 'react-bootstrap';
import Breadcrumb from '../../components/Breadcrumb';
import marked from 'marked';

type PostPageProps = {
    frontmatter: {
        title: string
    },
    content: string
}

function setContent(content:string) {
    return {
        __html: marked(content)
    }
}

export default function PostPage(props: PostPageProps) {
    return (
        <>
            <Breadcrumb />
            <Row>
                <article>
                    <h3>{props.frontmatter.title}</h3>
                    <div dangerouslySetInnerHTML={setContent(props.content)} />
                </article>
            </Row>
        </>
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
