import type { NextPage } from 'next'
import { Navigation, Homepage } from '@templates'
const Home: NextPage = () => {
  return (
    <Navigation>
      <Homepage />
    </Navigation>
  )
}

export default Home