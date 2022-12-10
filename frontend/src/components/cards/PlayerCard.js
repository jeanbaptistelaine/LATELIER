import { useNavigate } from 'react-router-dom'
import PlayerStatsCard from './PlayerStatsCard'

export default function Player({
  id,
  firstname,
  lastname,
  country,
  rank,
  points,
  picture,
}) {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/player/${id}`)
  }

  return (
    <div className='player-card' onClick={handleNavigate}>
      {picture && (
        <img
          className='thumbnail'
          src={picture}
          alt={`${firstname} ${lastname}`}
        ></img>
      )}
      <div className='content'>
        <h2 className='title--card'>
          {firstname} {lastname}
        </h2>
        {/* <PlayerStatsRPC rank={rank} points={points} country={country} /> */}
        <PlayerStatsCard
          stats={{ rank: `#${rank}`, points: points, country: country }}
        />
      </div>
    </div>
  )
}
