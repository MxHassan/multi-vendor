// import { useNavigate } from 'react-router-dom'

import Hero from '../../components/Route/Hero/Hero'
import BestDeals from '../../components/Route/best-deals/BestDeals'

const Home = () => {
  // const navigate = useNavigate()
  return (
    <>
      <Hero />
      <BestDeals />
    </>
  )
}

export default Home
