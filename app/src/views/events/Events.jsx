import { Typography } from '@material-tailwind/react'
import EventCard from '../../components/Route/events/event-card/EventCard'
import EventsCarousel from '../../components/Route/events/events-carousel/EventsCarousel'
import Loader from '../../components/loader/Loader'
import { eventsData } from '../../static/data'
import { useGetEventsQuery } from '../../features/events/eventsApiSlice'
const Events = () => {
  window.scrollTo(0, 0)
  const { data: events, isSuccess, isLoading, isError, error } = useGetEventsQuery()

  let content

  if (isLoading) {
    content = (
      <div className='flex justify-center items-center h-[calc(100vh-160px)]'>
        <Loader />
      </div>
    )
  }

  if (isError) {
    content = (
      <div className='flex justify-center items-center h-[calc(100vh-160px)]'>
        <Typography variant='h2' color='red'>
          Something went wrong {error?.data?.message}
        </Typography>
      </div>
    )
  }

  if (isSuccess) {
    const { ids } = events

    if (ids?.length) {
      content = ids.map((eventId, index) => (
        <div key={index} className='py-2 bg-light-background-secondary dark:bg-inherit'>
          <EventCard eventId={eventId} />
        </div>
      ))
    } else
      content = (
        <div className='flex  mt-60 justify-center'>
          <Typography variant='h1' className='text-center'>
            No Eventss Found
          </Typography>
        </div>
      )
  }
  return <div className='mb-12 '>{content}</div>
}

export default Events
