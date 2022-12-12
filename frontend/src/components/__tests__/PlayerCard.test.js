import { render, screen, waitFor } from '@testing-library/react'
import PlayerCard from '../cards/PlayerCard'
import { BrowserRouter } from 'react-router-dom'

describe('Player Card', () => {
  const props = {
    id: '1',
    firstname: 'Novak',
    lastname: 'Djoko',
    country: 'SRB',
    rank: '1',
    points: '1000',
    picture:
      'https://data.latelier.co/training/tennis_stats/resources/Serbie.png',
  }

  beforeEach(() => {})

  test('render player card', () => {
    render(
      <BrowserRouter>
        <PlayerCard {...props} />{' '}
      </BrowserRouter>
    )
    const firstName = screen.getByText('Novak Djoko')
    expect(firstName).toBeInTheDocument()
  })
})
