import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectEventsTime } from '../../../../features/events/eventsSlice'
import { selectEventById } from '../../../../features/events/eventsApiSlice'

const Countdown = ({ eventId }) => {
  const event = useSelector((state) => selectEventById(state, eventId))
  const [eventTime, setEventTime] = useState(Date.now() + 1000 * 60 * 60 * event?.eventTime)
  // useEffect(() => {
  //   setEventTime()
  // }, [event])
  let content
  const calculateTimeLeft = () => {
    const difference = +new Date(eventTime) - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  })
  if (event) {
    const timerComponents = Object.keys(timeLeft).map((interval, index) => {
      return (
        <div
          key={index}
          className='flex text-lg flex-col p-2 bg-light-background-secondary dark:bg-dark-background-third rounded-box text-light-primary-dark dark:text-dark-primary-dark'
        >
          <span className='countdown font-Roboto text-5xl'>
            <span style={{ '--value': timeLeft[interval] }}>%1</span>
          </span>
          {timeLeft[interval] < 2 ? interval.slice(0, -1) : interval}{' '}
        </div>
      )
    })
    content = (
      <div className=' mx-auto grid grid-flow-col gap-5 text-center auto-cols-max'>
        {timerComponents?.length ? timerComponents : <span className='text-6xl text-error'>Time&apos;s Up</span>}
      </div>
    )
  } else return null

  return content
}
export default Countdown
