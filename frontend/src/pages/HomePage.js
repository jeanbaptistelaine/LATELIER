import ListPlayers from '../components/ListPlayers'
import Stats from '../components/cards/StatsCard'

export default function Home() {
  return (
    <main className='main-flex'>
      <section className='container'>
        <ListPlayers />
      </section>
      <section className='container'>
        <Stats />
      </section>
    </main>
  )
}
