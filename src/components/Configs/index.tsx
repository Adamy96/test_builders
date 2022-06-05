import { useEffect } from 'react'
import { useWeather } from '@hooks'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Configs = () => {
  const { fetchWeather } = useWeather()

  useEffect(() => {
    fetchWeather()
  }, [])

  return null
}

export default Configs