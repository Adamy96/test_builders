interface IUser {
  lat: number
  lon: string
  weather: IUserWeather
}

interface IUserWeather {
  current: IWeatherInfo
  hourly: IWeatherInfo[]
  daily: IDailyWeatherInfo[]
}