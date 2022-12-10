import { useState } from 'react'
import { useSearch } from '../hooks/useSearch'

import { useFetch } from '../hooks/useFetch'
import LoadingErrorCard from './cards/LoadingErrorCard'
import Player from './cards/PlayerCard'
import SearchInput from './SearchInput'

export default function ListPlayers() {
  const { loading, fetchedData: players, error } = useFetch('/api/v1/players')
  const [searchInput, setSearchInput] = useState('')
  const { filteredPlayers } = useSearch(searchInput, players)

  if (error || loading) {
    return <LoadingErrorCard loading={loading} error={error} />
  } else {
    return (
      <div data-testid='player-list'>
        <SearchInput
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        {filteredPlayers.map((player) => {
          const { id, firstname, lastname, country, data, picture } = player
          return (
            <Player
              key={id}
              id={id}
              picture={picture}
              firstname={firstname}
              lastname={lastname}
              country={country.code}
              rank={data.rank}
              points={data.points}
            />
          )
        })}
      </div>
    )
  }
}
