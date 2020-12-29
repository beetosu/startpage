import styles from '../styles.module.css'
import Title from '../components/title'
import Panels from '../components/panels'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <Title />
        <Panels />
      </main>
    </div>
  )
}