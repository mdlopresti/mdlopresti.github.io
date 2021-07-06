import Head from 'next/head'
import Link from 'next/link'
import { Row } from 'react-bootstrap'
// import '../styles/Header.css'

type NavBarProps = {
    items: {
        name: string,
        slug: string
    }[]
}

const NavbarItems: NavBarProps["items"] = [
    {
        name: "About Me",
        slug: "about"
    }
]

export default function Header() {
    return (
        <>
            <Head>
                <title>Automation or Bust</title>
                <meta name="description" content="A blog by on software and automation by Michael LoPresti" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
            </Head>
            <div className="navbar navbar-expand navbar-light bg-light">
                <Link href="/">
                    <a className="navbar-brand">
                        Automation or Bust
                    </a>
                </Link>
                <div className="navbar-nav">
                    <NavBar items={NavbarItems} />
                </div>
            </div>
        </>

    )
}



function NavBar(NavBarProps: NavBarProps): JSX.Element {
    return (
        <div id="navbarNav">
            <ul className="navbar-nav">
                {NavBarProps.items.map(item => (
                    <Link key={item.slug} href={item.slug} passHref>
                        <li className="nav-item">
                            <a className="nav-link">{item.name}</a>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}