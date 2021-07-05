import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostListing from '../components/PostListing'
import { Row } from 'react-bootstrap'

type PostData = {
  slug: string,
  title: string
  excerpt: string
}[]

type IndexProps = {
  postData: PostData
}

export default function Home(props: IndexProps) {
  return (
    <PostListing posts={props.postData} />
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const slugs = files.map(filename =>
    filename.replace('.md', '')
  )

  const markdownFileContent = slugs.map(slug => fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8'))

  const postData: PostData = markdownFileContent.map(fileContent => {
    const greyMatter = matter(fileContent)

    return {
      slug: greyMatter.data.slug,
      title: greyMatter.data.title,
      excerpt: greyMatter.data.excerpt
    }
  });

  return {
    props: {
      postData
    }
  }
}