import type { AppProps } from 'next/app'
import { Configs, Loading } from '@components'
import AppContextProvider from '../AppContextProvider'
import '@styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Configs />
      <div style={{ height: '100%', position: 'relative' }}>
        <Loading />
        <Component {...pageProps} />
      </div>
    </AppContextProvider>
  )
}

export default MyApp
