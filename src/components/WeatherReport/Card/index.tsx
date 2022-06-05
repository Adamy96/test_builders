import { Typography, WeatherIcon } from '@components'
import styles from './styles.module.scss'

const Card = ({ upperText, icon, lowerText }: IProps) => {
  return (
    <div className={styles.card}>
      <Typography variant='caption' size='md' classes={styles.upperText}>
        {upperText}
      </Typography>
      <WeatherIcon weather={icon} classes={styles.weatherIcon} />
      <Typography variant='caption' size='md' classes={styles.lowerText}>
        {lowerText}
      </Typography>
    </div>
  )
}

interface IProps {
  upperText: string
  icon: WeatherMainType
  lowerText: string
}

export default Card