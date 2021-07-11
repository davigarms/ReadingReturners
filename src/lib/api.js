import { useCallback, useState } from 'react'

export function getURL(path = '') {
  return `${process.env.APP_URL || 'http://localhost:3000'}/api${path}`
}

export function useGetData(path) {
  const [data, setData] = useState()

  const getData = useCallback(async () => {
    const requestUrl = getURL(path)
    try {
      const response = await fetch(requestUrl)
      const loadedData = await response.json()
      loadedData && setData(loadedData)
    } catch (error) {
      //error treatment
    }
  }, [path])

  return [data, getData]
}
