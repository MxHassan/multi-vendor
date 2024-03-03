import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectEventsTime } from '../../../../features/events/eventsSlice'

const Countdown = () => {
  const eventTime = useSelector(selectEventsTime)
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

  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval]) return null
    return (
      <span key={index} className='text-[25px] text-light-primary-dark dark:text-dark-primary-dark'>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })
  return (
    <div>
      {timerComponents.length ? timerComponents : <span className='text-red-400 text-[25px]'>Time&apos;s Up</span>}
    </div>
  )
}
export default Countdown
