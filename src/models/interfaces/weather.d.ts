// todo
interface IWeatherResponse {
  lat: number
  lon: number
}

type WeatherMainType =
  'Thunderstorm' |
  'Drizzle' |
  'Rain' |
  'Snow' |
  'Mist' |
  'Smoke' |
  'Haze' |
  'Dust' |
  'Fog' |
  'Sand' |
  'Ash' |
  'Squall' |
  'Tornado' |
  'Clouds' |
  'Clear'

interface IWeather {
  id: number
  main: WeatherMainType
  description: string
  icon: string
}

interface IWeatherInfo {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pressure: number
  sunrise: number
  sunset: number
  temp: number
  uvi: number
  visibility: number
  weather: IWeather[]
  wind_deg: number
  wind_speed: number
}

interface ITemp {
  day: number
  eve: number
  min: number
  morn: number
  night: number
}

interface IDailyWeatherInfo extends IWeatherInfo {
  temp: ITemp
}