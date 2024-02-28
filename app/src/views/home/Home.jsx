// import { useNavigate } from 'react-router-dom'

import Hero from '../../components/Route/Hero/Hero'
import BestDeals from '../../components/Route/best-deals/BestDeals'
import FeaturedProducts from '../../components/Route/featured-products/FeaturedProducts'

const Home = () => {
  // const navigate = useNavigate()
  return (
    <>
      <Hero />
      <BestDeals />
      <FeaturedProducts />
    </>
  )
}

export default Home
