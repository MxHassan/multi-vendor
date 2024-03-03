import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/24/solid'
import { Avatar, Button, IconButton, Typography } from '@material-tailwind/react'
import styles from '../../styles/styles'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../../static/data'

const ProductDetailsCard = (props) => {
  const { productName } = useParams()
  const product_name = productName?.replace(/-/g, ' ')
  const foundProduct = productData.filter((product) => product.name === product_name)
  const product = props.product || foundProduct[0]
  const [wishlisted, setWishlisted] = useState(false)
  const [count, setCount] = useState(1)
  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }
  const handleDecrement = () => {
    setCount((prev) => {
      if (prev > 1) {
        return prev - 1
      } else {
        return prev
      }
    })
  }

  const handleMsgSubmit = () => {}
  return (
    <>
      {/* product preview */}
      <div className='w-full 800px:w-1/2  800px:border-r-2 border-r-light-background-third '>
        <div className='flex justify-center'>
          <img alt='nature' className=' object-cover h-[50vh] rounded-3xl ' src={product.image_Url[0].url} />
        </div>
        <div className='mt-5 ml-5'>
          <div className='w-full flex items-center gap-2 mb-2'>
            <Avatar className='object-fill' src={product.shop.shop_avatar.url} alt='' />
            <div className='flex flex-col place-items-center'>
              <Typography variant='small' color='blue'>
                {product.shop.name}
              </Typography>
              <Typography variant='paragraph' className='font-normal'>
                ({product.shop.ratings}) Ratings
              </Typography>
            </div>
          </div>
          <Button
            onClick={handleMsgSubmit}
            variant='gradient'
            color='indigo'
            className='capitalize text-base flex items-center gap-2 my-4'
            size='md'
          >
            Send Message
            <ChatBubbleOvalLeftEllipsisIcon className='-mr-2' width={23} />
          </Button>
          <Typography variant='lead' color='red' className='text-base'>
            ({product.total_sell}) Sold
          </Typography>
        </div>
      </div>
      <hr className='800px:hidden border-light-background-third border-2 my-3' />
      {/* product details */}
      <div className='w-full 800px:w-1/2 800px:border-l-2 border-l-light-background-third  '>
        <div className=' flex items-start flex-col gap-2 p-8'>
          <Typography className='text-inherit' variant='h4'>
            {product.name}
          </Typography>
          <Typography variant='lead' className='text-inherit text-base'>
            {product.description}
          </Typography>
          <div className='relative mt-5 ml-5'>
            <p
              color='red'
              className={`left-11  absolute text-deep-orange-800 line-through -mt-1 text-base font-medium`}
            >
              {product?.price ? product?.price + '$' : null}
            </p>
            <Typography className={`${styles.productDiscountPrice} `}>
              {product?.price === 0 ? product?.price : product?.discount_price}$
            </Typography>
          </div>
          {/* product count and wishlist */}
          <div className='flex  w-full justify-between mt-5'>
            <div className='flex items-center'>
              <IconButton onClick={handleDecrement} variant='gradient' color='teal'>
                <MinusIcon width={30} />
              </IconButton>
              <IconButton
                size='lg'
                variant='filled'
                className='bg-light-background-third dark:bg-dark-background-third text-inherit text-lg'
                ripple={false}
              >
                {count}
              </IconButton>
              <IconButton onClick={handleIncrement} variant='gradient' color='teal'>
                <PlusIcon width={30} />
              </IconButton>
            </div>

            <IconButton
              onClick={() => setWishlisted(!wishlisted)}
              variant='text'
              className='bg-light-background-third dark:bg-dark-background-third'
            >
              {wishlisted ? (
                <FilledHeartIcon color='red' width={30} />
              ) : (
                <HeartIcon className='dark:text-white' width={30} />
              )}
            </IconButton>
          </div>
          <Button variant='gradient' color='amber' className='flex items-center text-base capitalize mt-5'>
            Add to Cart
            <ShoppingCartIcon width={25} className='ml-2' />
          </Button>
        </div>
      </div>
    </>
  )
}
export default ProductDetailsCard
