import ListPlayers from '../components/ListPlayers'
import Stats from '../components/cards/StatsCard'

export default function Home() {
  return (
    <main>
      <section className='container'>
        <ListPlayers />
      </section>
      <section className='container'>
        <Stats />
      </section>
    </main>
  )
}
