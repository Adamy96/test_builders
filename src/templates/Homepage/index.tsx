import { Typography, WeatherIcon, WeatherReport } from '@components'
import { useUser } from '@hooks'
import { parseTemperature, parseTimestamp } from '@helper'
import styles from './styles.module.scss'

const Homepage = () => {
  const { userState } = useUser()

  const { weather } = userState
  const currentWeather = weather?.current


  if (!weather) return <div className={styles.homepage}></div>

  const tabsContent = [
    {
      tabName: 'Next 48 hours',
      content: weather.hourly.map(data => ({
        upperText: `${parseTimestamp(data.dt).hours}:00`,
        icon: data.weather[0].main,
        lowerText: `${parseTemperature(data.temp)} °C`
      }))
    },
    {
      tabName: 'Next 7 days',
      content: weather.daily.map(data => {
        return ({
          upperText: `
          ${('0' + parseTimestamp(data.dt).day).slice(-2)}/${('0' + parseTimestamp(data.dt).month).slice(-2)}
          `,
          icon: data.weather[0].main,
          lowerText: `${parseTemperature(data.temp.eve)} °C`
        })
      })
    }
  ]

  return (
    <div className={styles.homepage}>
      <WeatherIcon weather={currentWeather.weather[0].main} classes={styles.weatherIcon} />
      <h3 className={styles.temperature}>{
        Math.round(parseTemperature(currentWeather.temp))
      }</h3>
      <Typography variant='body' size='sm' weight='bold' classes={styles.cityName}>
        Placeholder (London, UK)
      </Typography>
      <div className={styles.information}>
        <Typography variant='caption' size='md'>
          Feels like {(parseTemperature(currentWeather.feels_like))} °C
        </Typography>
        <Typography variant='caption' size='md'>
          Sunset {parseTimestamp(currentWeather.sunset).hours}:
          {parseTimestamp(currentWeather.sunset).minutes}
        </Typography>
      </div>
      <WeatherReport tabsContent={tabsContent} />
    </div>
  )
}

export default Homepage
