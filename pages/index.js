import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/type/[type]" as="/type/films"><a>Films</a></Link>
        <Link href="/type/[type]" as="/type/people"><a>People</a></Link>
        <Link href="/type/[type]" as="/type/species"><a>Species</a></Link>
      </main>

      <footer className={styles.footer}>
        <a>SZ</a>
      </footer>
    </div>
  )
}
