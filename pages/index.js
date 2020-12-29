import styles from '../styles.module.css'
import Title from '../components/title'
import Panels from '../components/panels'
import Head from 'next/head'
import secrets from '../secrets'

export default function Home({cards}) {
  console.log(cards)
  return (
    <div className={styles.app}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <Title />
        <Panels cards={cards}/>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.trello.com/1/boards/5e2dd4a6c080b050676a4a84/cards?key='+secrets.trello.key+"&token="+secrets.trello.token)
  const cards = await res.json()

  return {
    props: {
      cards,
    },
  }
}