// import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
import Hero from '../../components/Route/Hero/Hero'
import BestDeals from '../../components/Route/best-deals/BestDeals'
import EventsSection from '../../components/Route/events/EventsSection'
import FeaturedProducts from '../../components/Route/featured-products/FeaturedProducts'
import Sponseres from '../../components/Route/sponsers/Sponseres'
import { setUser } from '../../features/user/userSlice'
import { useGetUserMutation } from '../../features/user/userApiSlice'
import { toast } from 'react-toastify'

const Home = () => {
  
  
  window.scrollTo(0, 0)
  // if (isError) toast.error(error.data.message)
  // const navigate = useNavigate()
  return (
    <div className='pt-[30px] 800px:pt-0'>
      <Hero />
      <BestDeals />
      <EventsSection />
      <FeaturedProducts />
      <Sponseres />
    </div>
  )
}

export default Home
