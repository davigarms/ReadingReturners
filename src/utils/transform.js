export function remToInt(value) {
  return (
    parseFloat(value) *
    parseFloat(getComputedStyle(document.documentElement).fontSize)
  )
}
