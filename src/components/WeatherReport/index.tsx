import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import Card from './Card'
import styles from './styles.module.scss'
import Typography from '@components/Typography';

const WeatherReport = ({ tabsContent }: IProps) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={styles.weatherReport}>
      <nav>
        <ul className={styles.tabs}>
          {tabsContent.map((data, idx) => (
            <li onClick={() => setActiveTab(idx)} key={idx}>
              <Typography
                variant='body'
                size='sm'
                weight='bold'
                classes={`${styles.tabTitle} ${activeTab === idx ? styles.active : ''}`}
              >
                {data.tabName}
              </Typography>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.content}>
        <Swiper spaceBetween={20} slidesPerView={3.5} className={styles.swiper}>
          {tabsContent[activeTab].content.map((data, idx) => (
            <SwiperSlide key={idx}>
              <Card {...data} key={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

interface IProps {
  tabsContent: ITabData[]
}

interface IContent {
  upperText: string
  icon: WeatherMainType
  lowerText: string
}

interface ITabData {
  tabName: string
  content: IContent[]
}

export default WeatherReport
