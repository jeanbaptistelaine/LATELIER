import { useParams } from 'react-router-dom'
import PlayerDetails from '../components/cards/PlayerDetailsCard'
export default function PlayerPage() {
  const { playerID } = useParams()

  return (
    <main>
      <PlayerDetails playerID={playerID} />
    </main>
  )
}
