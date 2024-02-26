import { Button, Carousel, Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import { selectNavActive } from '../../../../features/nav/navSlice'
import { Link } from 'react-router-dom'

const CarouselWithActions = () => {
  const navActive = useSelector(selectNavActive)

  return (
    <Carousel
      transition={{ duration: 0.7, ease: 'anticipate' }}
      autoplay={true}
      autoplayDelay={5 * 1000}
      loop={true}
      className={`rounded-b-lg h-[calc(80vh-160px)] 800px:h-[calc(90vh-160px)] bg-no-repeat mb-[20vh] 800px:mb-[10vh]  ${
        navActive && 'mt-[70px]'
      } `}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-4 left-2/4 z-[8] flex -translate-x-2/4 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className='relative h-full w-full'>
        <img
          src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
          alt='image 1'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
          <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography variant='h1' color='white' className='mb-4 text-3xl md:text-4xl lg:text-5xl'>
              The Beauty of Nature
            </Typography>
            <Typography variant='lead' color='white' className='mb-12 opacity-80'>
              It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle
              something, that quality of air that emanation from old trees, that so wonderfully changes and renews a
              weary spirit.
            </Typography>
            <div className='flex gap-2'>
              <Link to='/products'>
                <Button className='outline-none hover:opacity-100 opacity-80 duration-300 capitalize text-lg '>
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img
          src='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
          alt='image 2'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
          <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography variant='h1' color='white' className='mb-4 text-3xl md:text-4xl lg:text-5xl'>
              The Beauty of Nature
            </Typography>
            <Typography variant='lead' color='white' className='mb-12 opacity-80'>
              It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle
              something, that quality of air that emanation from old trees, that so wonderfully changes and renews a
              weary spirit.
            </Typography>
            <div className='flex gap-2'>
              <Link to='/products'>
                <Button className='outline-none hover:opacity-100 opacity-80 duration-300 capitalize text-lg '>
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img
          src='https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80'
          alt='image 3'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
          <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography variant='h1' color='white' className='mb-4 text-3xl md:text-4xl lg:text-5xl'>
              The Beauty of Nature
            </Typography>
            <Typography variant='lead' color='white' className='mb-12 opacity-80'>
              It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle
              something, that quality of air that emanation from old trees, that so wonderfully changes and renews a
              weary spirit.
            </Typography>
            <div className='flex gap-2'>
              <Link to='/products'>
                <Button className='outline-none hover:opacity-100 opacity-80 duration-300 capitalize text-lg '>
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
export default CarouselWithActions
