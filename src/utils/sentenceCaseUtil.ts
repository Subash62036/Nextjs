
export const sentenceCase = (word) => {
  return ((word.replace(/([A-Z])/g,' $1')).charAt(0).toUpperCase()+(word.replace(/([A-Z])/g,' $1')).slice(1))
}
