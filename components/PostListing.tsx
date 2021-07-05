import Link from 'next/link'

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
        <div key={props.slug}>
            <Link href={`/posts/${props.slug}`}>
                <a>
                    <h3>{props.title}</h3>
                </a>
            </Link>
            <p>{props.excerpt}</p>
        </div>
    )
}

export default function PostListing(props: ListProps): JSX.Element {
    return (
        <div>
            {props.posts.map(item => ListItem(item))}
        </div>
    )
}
