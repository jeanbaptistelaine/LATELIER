import { Link } from 'react-router-dom'
import LoadingErrorCard from '../components/cards/LoadingErrorCard'

const ErrorPage = () => {
  return (
    <main>
      <section className='container'>
        <LoadingErrorCard error='404 Page not found'>
          <Link to='/'>Back home</Link>
        </LoadingErrorCard>
      </section>
    </main>
  )
}
export default ErrorPage
