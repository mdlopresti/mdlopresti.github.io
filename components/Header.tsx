import Head from 'next/head'
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <Head>
                <title>Automation or Bust</title>
                <meta name="description" content="A blog by on software and automation by Michael LoPresti" />
            </Head>
            <header>
                <Link href="/">
                    <a>
                        <h1>Automation or Bust</h1>
                    </a>
                </Link>
            </header>
        </div>

    )
}
