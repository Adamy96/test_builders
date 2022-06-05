const parseTemperature = (temp: number) => {
  return +(temp - 273.15).toFixed(1)
}

export default parseTemperature