import CategoriesSection from '../catagoriessection/CategoriesSection'
import CarouselWithActions from './carousel/CarouselWithActions'

const Hero = () => {
  return (
    <>
      <CarouselWithActions />
      <div className='w-11/12 mx-auto '>
        <CategoriesSection />
      </div>
    </>
  )
}
export default Hero
