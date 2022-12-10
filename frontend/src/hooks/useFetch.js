import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [fetchedData, setfetchedData] = useState([])

  const getfetchedData = useCallback(async () => {
    try {
      const response = await axios(url)
      setfetchedData(response.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    getfetchedData()
  }, [url, getfetchedData])
  return { loading, fetchedData, error }
}
