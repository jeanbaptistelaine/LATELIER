import { useFetch } from '../../hooks/useFetch'
import LoadingErrorCard from './LoadingErrorCard'

export default function Stats() {
  const { loading, fetchedData: stats, error } = useFetch('/api/v1/stats')
  const { medianPlayerHeight, averagePlayersBMI, countryStats } = stats

  if (error || loading) {
    return <LoadingErrorCard loading={loading} error={error} />
  }

  return (
    <div className='card' data-testid='stats'>
      <h2>World Stats</h2>
      <ul className='stats'>
        <li>
          <h4>Higher victories ratio country</h4>
          <strong>{countryStats[0].country}</strong>
        </li>
        <li>
          <h4>Average player height</h4>
          <strong>{medianPlayerHeight}</strong>
        </li>
        <li>
          <h4>Average player BMI</h4>
          <strong>{Math.round(averagePlayersBMI * 10) / 10}</strong>
        </li>
      </ul>
    </div>
  )
}
