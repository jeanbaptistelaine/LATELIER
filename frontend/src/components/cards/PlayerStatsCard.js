export default function PlayerStatsCard({ stats }) {
  return (
    <ul className='stats'>
      {Object.keys(stats).map((stat) => {
        return (
          <li key={stat}>
            <h4 className='sub-title--card'>{stat}</h4>
            <p className='text--card'>{stats[stat]}</p>
          </li>
        )
      })}
    </ul>
  )
}
