import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Carousel, IconButton, Typography } from '@material-tailwind/react'
import { eventsData } from '../../../../static/data'
import EventCard from '../event-card/EventCard'
import Loader from '../../../loader/Loader'
import { useGetEventsQuery } from '../../../../features/events/eventsApiSlice'

const EventsCarousel = () => {
  const { data: events, isSuccess, isLoading, isError, error } = useGetEventsQuery()

  let content

  if (isLoading) {
    content = (
      <div className='flex justify-center items-center h-[50vh]'>
        <Loader />
      </div>
    )
  }

  if (isError) {
    content = (
      <div className='flex justify-center items-center h-[50vh]'>
        <Typography variant='h2' color='red'>
          Something went wrong {error?.data?.message}
        </Typography>
      </div>
    )
  }

  if (isSuccess) {
    const { ids } = events

    if (ids?.length) {
      content = ids.map((eventId, index) => <EventCard eventId={eventId} key={index} />)
    } else
      content = (
        <div className='flex h-[40vh]  justify-center'>
          <Typography variant='h1' className='text-center'>
            No Events Found
          </Typography>
        </div>
      )
  }
  return (
    <Carousel
      transition={{ duration: 0.7, ease: 'anticipate' }}
      autoplay={true}
      autoplayDelay={10 * 1000}
      loop={true}
      prevArrow={({ handlePrev }) => (
        <IconButton variant='text' onClick={handlePrev} className='!absolute top-2/4 left-1 -translate-y-2/4'>
          <ChevronLeftIcon className='text-light-text-secondary dark:text-dark-text-primary w-12 h-12' />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton variant='text' onClick={handleNext} className='!absolute top-2/4 !right-1 -translate-y-2/4'>
          <ChevronRightIcon className='text-light-text-secondary dark:text-dark-text-primary w-12 h-12' />
        </IconButton>
      )}
      className={`rounded-b-lg  bg-no-repeat `}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-2 left-2/4 z-[8] flex -translate-x-2/4 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-black dark:bg-white' : 'w-4 bg-black/50 dark:bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {content}
    </Carousel>
  )
}
export default EventsCarousel
