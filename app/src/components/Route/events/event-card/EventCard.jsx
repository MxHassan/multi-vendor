import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Button, Typography } from '@material-tailwind/react'
import styles from '../../../../styles/styles'
import { useNavigate } from 'react-router-dom'
import Countdown from '../countdown/Countdown'

const EventCard = ({ data }) => {
  const navigate = useNavigate()
  const d = data.name
  const productName = d.replace(/\s+/g, '-')
  return (
    <div className='1000px:flex items-center h-full divide-y-4 bg-light-background-main dark:bg-dark-background-secondary rounded-xl p-4 divide-light-background-third 1000px:divide-y-0 1000px:divide-x-4 '>
      {/* product preview */}
      <div className='w-full flex justify-center 1000px:w-2/5 mb-10 overflow-hidden  1000px:mb-0'>
        <img
          alt='nature'
          onClick={() => navigate(`/product/${productName}`)}
          className=' h-[40vh] object-cover hover:scale-125 duration-500 cursor-pointer rounded-3xl '
          src={data.image_Url[0].url}
        />
      </div>
      {/* product details */}
      <div className='w-full 1000px:w-3/5   '>
        <div className=' flex items-start flex-col gap-2 p-8'>
          <Typography className='text-inherit' variant='h4'>
            {data.name}
          </Typography>
          <Typography variant='lead' className='text-inherit text-base'>
            {data.description}
          </Typography>
          <div className='flex items-center justify-between w-full'>
            <div className='relative mt-5 ml-5'>
              <p
                color='red'
                className={`left-11  absolute text-deep-orange-800 line-through -mt-1 text-base font-medium`}
              >
                {data?.price ? data?.price + '$' : null}
              </p>
              <Typography className={`${styles.productDiscountPrice} `}>
                {data?.price === 0 ? data?.price : data?.discount_price}$
              </Typography>
            </div>
            <Typography variant='lead' color='green' className='font-normal mr-4'>
              {`${data?.total_sell} sold`}
            </Typography>
          </div>
          <Countdown />
          <div className='flex gap-10 mt-5 ml-5 '>
            <Button
              onClick={() => navigate(`/product/${productName}`)}
              variant='gradient'
              color='amber'
              className='flex items-center text-base capitalize'
            >
              See Details
              {/* <ShoppingCartIcon width={25} className='ml-2' /> */}
            </Button>
            <Button variant='gradient' color='amber' className='flex items-center text-base capitalize'>
              Add to Cart
              <ShoppingCartIcon width={25} className='ml-2' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EventCard
