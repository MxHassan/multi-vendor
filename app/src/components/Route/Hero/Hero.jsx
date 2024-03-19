import CategoriesSection from '../catagoriessection/CategoriesSection'
import Branding from '../catagoriessection/branding/Branding'
import CarouselWithActions from './carousel/CarouselWithActions'

const Hero = () => {
  return (
    <>
      <CarouselWithActions />
      <div className='w-11/12 mx-auto '>
        <Branding />
        <CategoriesSection />
      </div>
    </>
  )
}
export default Hero
