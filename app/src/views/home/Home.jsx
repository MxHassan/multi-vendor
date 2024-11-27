// import { useNavigate } from 'react-router-dom'

import Hero from '../../components/Route/Hero/Hero'
import BestDeals from '../../components/Route/best-deals/BestDeals'
import EventsSection from '../../components/Route/events/EventsSection'
import FeaturedProducts from '../../components/Route/featured-products/FeaturedProducts'
import Sponseres from '../../components/Route/sponsers/Sponseres'

const Home = () => {
  window.scrollTo(0, 0)
  // if (isError) toast.error(error.data.message)
  // const navigate = useNavigate()
  return (
    <div className=''>
      <Hero />
      <BestDeals />
      <EventsSection />
      <FeaturedProducts />
      <Sponseres />
    </div>
  )
}

export default Home
