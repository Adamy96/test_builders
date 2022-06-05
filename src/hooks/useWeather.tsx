import axios from 'axios'
import { useUser, useLoading } from '@hooks'

const useWeather = () => {
  const { updateUserState } = useUser()
  const { updateWeatherLoading } = useLoading()

  const fetchWeatherData = async (lat: number, lon: number) => {
    updateWeatherLoading(true)
    await axios.get(`${process.env.NextUrl}/api/getWeather?lat=${lat}&lon=${lon}`)
      .then((res) => {
        const { weather } = res.data
        updateWeatherLoading(false)
        updateUserState({
          lat: weather.lat,
          lon: weather.lon,
          weather: {
            current: {
              ...weather.current
            },
            hourly: [
              ...weather.hourly
            ],
            daily: [
              ...weather.daily
            ]
          },
        })
      })
      .catch(err => updateWeatherLoading(false))
  }

  const fetchWeather = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchWeatherData(pos.coords.latitude, pos.coords.longitude),
      (err) => err
    )
  }

  return {
    fetchWeather
  }
}

export default useWeather