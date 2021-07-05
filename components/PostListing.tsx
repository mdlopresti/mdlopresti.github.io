import Link from 'next/link'
import { Row } from 'react-bootstrap'

interface ListItemProps {
    slug: string,
    title: string,
    excerpt: string
}

interface ListProps {
    posts: Array<ListItemProps>
}

function ListItem(props: ListItemProps): JSX.Element {
    return (
        <Row key={props.slug}>
            <article>
                <Link href={`/posts/${props.slug}`}>
                    <a>
                        <h3>{props.title}</h3>
                    </a>
                </Link>
                <p>{props.excerpt}</p>
            </article>
        </Row>
    )
}

export default function PostListing(props: ListProps): JSX.Element {
    return (
        <div>
            {props.posts.map(item => ListItem(item))}
        </div>
    )
}
