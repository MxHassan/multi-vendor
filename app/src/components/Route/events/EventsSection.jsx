import { Button, Typography } from '@material-tailwind/react'
import styles from '../../../styles/styles'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import EventsCarousel from './events-carousel/EventsCarousel'

const EventsSection = () => {
  const navigate = useNavigate()
  return (
    <div className='w-11/12 mx-auto mb-12'>
      <div className={`${styles.heading}`}>
        <Typography variant='h1'>Popular Events</Typography>
      </div>
      <div className='relative sm:w-11/12 mx-auto md:w-full shadow-lg p-6 rounded-lg  bg-light-background-secondary dark:bg-dark-background-default '>
        <EventsCarousel />
        <div className='absolute bottom-8 right-8'>
          <Button
            onClick={() => navigate('/events')}
            variant='text'
            className='flex items-center capitalize text-light-primary-main dark:text-dark-primary-main'
          >
            <Typography variant='lead' className='text-base font-medium'>
              See More Events
            </Typography>
            <ArrowRightIcon className='text-inherit w-5 h-5 ml-2 -mr-2' />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default EventsSection
