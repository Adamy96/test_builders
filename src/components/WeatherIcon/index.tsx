import {
  ClearSvg,
  RainSvg,
  ThunderSvg,
  SnowSvg,
  DrizzleSvg,
  CloudySvg,
  MistSvg,
  HazeSvg,
  SmokeSvg,
  DustSvg,
  FogSvg,
  TornadoSvg
} from '@assets/svgs'

const WeatherIcon = ({ weather, classes = '' }: WeatherIconProps) => {
  const content = {
    Rain: <RainSvg />,
    Thunderstorm: <ThunderSvg />,
    Squall: <ThunderSvg />,
    Drizzle: <DrizzleSvg />,
    Snow: <SnowSvg />,
    Mist: <MistSvg />,
    Haze: <HazeSvg />,
    Smoke: <SmokeSvg />,
    Dust: <DustSvg />,
    Fog: <FogSvg />,
    Sand: <CloudySvg />,
    Ash: <CloudySvg />,
    Clouds: <CloudySvg />,
    Tornado: <TornadoSvg />,
    Clear: <ClearSvg />
  }

  if (!weather) return null

  return (
    <div className={classes}>
      {content[weather]}
    </div>
  )
}

type WeatherIconProps = {
  weather: WeatherMainType,
  classes?: string
}

export default WeatherIcon