import { useCallback, useState } from 'react'

export function getURL(path = '') {
  return `${
    process.env.APP_URL || 'http://localhost:3000'
  }/api${path}`
}

export function useFetchAPI(path, id) {
  const [data, setData] = useState()

  const fetchData = useCallback(async () => {
    const loadedData = (await fetchAPI(`${path}/${id}`)) || {}
    loadedData && loadedData.length === 0
      ? setData(loadedData)
      : setData(loadedData[0])
  }, [path, id])

  return [data, fetchData]
}

export async function fetchAPI(path) {
  const requestUrl = getURL(path)
  try {
    const response = await fetch(requestUrl)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
