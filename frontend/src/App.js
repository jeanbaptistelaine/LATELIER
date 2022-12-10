import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/HomePage'
import PlayerPage from './pages/PlayerPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='player/:playerID' element={<PlayerPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
