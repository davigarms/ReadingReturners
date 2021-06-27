import { useCallback, useState } from 'react'

export function getURL(path = '') {
  return `${
    process.env.APP_URL || 'http://localhost:3000'
  }/api${path}`
}

export function useGetData(path, id) {
  const [data, setData] = useState()

  const getData = useCallback(async () => {
    const loadedData = (await fetchData(`${path}/${id}`)) || {}
    loadedData && loadedData.length === 0
      ? setData(loadedData)
      : setData(loadedData[0])
  }, [path, id])

  return [data, getData]
}

export async function fetchData(path) {
  const requestUrl = getURL(path)
  try {
    const response = await fetch(requestUrl)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
