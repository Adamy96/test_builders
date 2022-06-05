import { ThemeDarkSvg, ThemeLightSvg } from '@assets/svgs'
import { Typography } from '@components'
import { useTheme } from '@hooks'
import styles from './styles.module.scss'

const Navbar = () => {
  const { setTheme, themeState } = useTheme()

  const getActiveClass = (value: ThemeType) => {
    return themeState.theme === value ? styles.active : ''
  }

  return (
    <nav className={styles.navbar}>
      <Typography variant='body' size='xsm' weight='bold' classes={styles.text}>
        Weather App
      </Typography>

      <div className={styles.theme}>
        <button onClick={() => setTheme('default')} className={getActiveClass('default')}>
          <ThemeLightSvg />
        </button>
        <button onClick={() => setTheme('dark')} className={getActiveClass('dark')}>
          <ThemeDarkSvg />
        </button>
      </div>
    </nav>
  )
}

export default Navbar