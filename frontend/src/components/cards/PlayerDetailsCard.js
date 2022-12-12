import LoadingErrorCard from './LoadingErrorCard'
import PlayerStatsCard from './PlayerStatsCard'
import '../../styles/PlayerDetailCard.css'
import { usePlayer } from '../../hooks/usePlayer'
import CloseButton from '../CloseButton'

export default function PlayerDetails({ playerID }) {
  const { loading, error, player } = usePlayer(playerID)

  if (error || loading) {
    return <LoadingErrorCard loading={loading} error={error} />
  } else {
    const { id, firstname, lastname, country, data, picture } = player

    return (
      <span className='dark-filter'>
        <CloseButton />
        <div className='card--full-width'>
          <div className='img-player'>
            <img src={picture} alt={`${firstname} ${lastname}`}></img>
          </div>
          <div className='container-stats-details'>
            <div className='title-flag--flex'>
              <div className='title-big--container'>
                <h2 className='title-stroke-big'>{firstname}</h2>
                <h1 className='title-x-big'>{lastname}</h1>
              </div>
              <div className='title-flag-image'>
                <img src={country.picture} alt={country.code}></img>
                <h4 className='sub-title--card'>{country.code}</h4>
              </div>
            </div>
            <PlayerStatsCard
              stats={{
                rank: `#${data.rank}`,
                points: data.points,
                country: country.code,
              }}
            />
            <PlayerStatsCard
              stats={{
                birthday: new Date().getFullYear() - Number(data.age),
                age: data.age,
              }}
            />
            <PlayerStatsCard
              stats={{
                weight: `${data.weight / 1000} kg`,
                height: `${data.height} cm`,
              }}
            />
          </div>
        </div>
      </span>
    )
  }
}
