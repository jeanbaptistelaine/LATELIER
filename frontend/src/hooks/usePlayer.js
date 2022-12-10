import { useFetch } from './useFetch'

export const usePlayer = (playerID) => {
  const {
    loading,
    fetchedData: player,
    error,
  } = useFetch(`/api/v1/players/${playerID}`)

  return { loading, error, player }
}
