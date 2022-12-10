import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

test('renders without crashing', () => {
  render(<App />)
})

test('check if players list is loaded', async () => {
  render(<App />)
  const playersList = await waitFor(() => screen.findByTestId('player-list'))
  expect(playersList).toBeInTheDocument()
})

test('check if stats panel is loaded', async () => {
  render(<App />)
  const stats = await waitFor(() => screen.findByTestId('stats'))
  expect(stats).toBeInTheDocument()
})
