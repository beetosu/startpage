import styles from '../styles.module.css'
import Title from '../components/title'
import Panels from '../components/panels'
import Head from 'next/head'
import secrets from '../secrets'
import agenda from '../agenda'

export default function Home({cards, classes, forecast}) {
  return (
    <div className={styles.app}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <script async defer src="https://apis.google.com/js/api.js"></script>
        <Title />
        <Panels cards={cards} classes={classes} forecast={forecast}/>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const cardres = await fetch('https://api.trello.com/1/boards/5e2dd4a6c080b050676a4a84/cards?key='+secrets.trello.key+"&token="+secrets.trello.token)
  const cards = await cardres.json()
  const classes = agenda.classes

  const weatherres = await fetch('https://api.weather.gov/gridpoints/'+ secrets.weather.coords +'/forecast/hourly')
  let forecast = await weatherres.json()
  forecast["location"] = secrets.weather.name
  return {
    props: {
      cards,
      classes,
      forecast
    },
  }
}