import EventCard from '../../components/Route/events/event-card/EventCard'
import EventsCarousel from '../../components/Route/events/events-carousel/EventsCarousel'
import { eventsData } from '../../static/data'
const Events = () => {
  window.scrollTo(0, 0)
  return (
    <div className='mb-12 '>
      {eventsData &&
        eventsData.map((i, index) => (
          <div key={index} className='py-2 bg-light-background-secondary dark:bg-inherit'>
            <EventCard data={i} />
          </div>
        ))}
    </div>
  )
}

export default Events
