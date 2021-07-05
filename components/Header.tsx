import Head from 'next/head'
import Link from 'next/link'
import { Row } from 'react-bootstrap'

export default function Header() {
    return (
        <Row>
            <Head>
                <title>Automation or Bust</title>
                <meta name="description" content="A blog by on software and automation by Michael LoPresti" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
            </Head>
            <header>
                <Link href="/">
                    <a>
                        <h1>Automation or Bust</h1>
                    </a>
                </Link>
            </header>
        </Row>

    )
}
