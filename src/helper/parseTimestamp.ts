const parseTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  return {
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    month: date.getMonth() + 1
  }
}

export default parseTimestamp