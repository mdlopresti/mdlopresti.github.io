import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mdlopresti.dev</title>
        <meta name="description" content="A blog by on software and automation by Michael LoPresti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
