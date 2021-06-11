export function getURL(path = '') {
  return `${process.env.APP_URL || 'http://localhost:3000'}/api${path}`
}

// Helper to make GET requests
export async function fetchAPI(path) {
  const requestUrl = getURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}
