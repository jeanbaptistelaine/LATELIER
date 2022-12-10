import { useEffect, useState } from 'react'

export const useSearch = (searchInput, players) => {
  const [filteredPlayers, setFilteredPlayers] = useState(players)

  useEffect(() => {
    console.log(searchInput)
    if (searchInput) {
      const regex = new RegExp(`${searchInput}(.*)`, 'i')
      setFilteredPlayers(
        players.filter((player) => {
          return player.firstname.match(regex) || player.lastname.match(regex)
        })
      )
    } else setFilteredPlayers(players)
  }, [searchInput, players])

  return { filteredPlayers }
}
