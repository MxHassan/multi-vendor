import { EyeIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import {
  EyeIcon as FilledEyeIcon,
  HeartIcon as FilledHeartIcon,
  ShoppingCartIcon as FilledShoppingCartIcon
} from '@heroicons/react/24/solid'
import { Card, CardHeader, CardBody, CardFooter, Typography, IconButton, Tooltip } from '@material-tailwind/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/styles'
import ProductPreview from '../product-preview/ProductPreview'
import { Rating } from '@mui/material'

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false)
  const [addCart, setAddCart] = useState(false)
  const [open, setOpen] = useState(false)
  // const d = product.name.toLowerCase()
  const productName = product?.name.replace(/\s+/g, '-')
  const handleOpen = () => setOpen((cur) => !cur)
  return (
    <>
      <Card className='min-h-[370px] bg-light-background-main dark:bg-dark-background-secondary dark:text-dark-text-primary'>
        <CardHeader shadow={false} floated={false} className='h-[170px] mx-2 '>
          <div className='relative h-full w-full '>
            <Link to={`/product/${productName}`}>
              <img
                src={product.image_Url[0].url}
                alt='card-image'
                className='h-full w-full object-contain hover:scale-125 duration-300'
              />
            </Link>
            {/* card actions */}
            <div className='absolute flex flex-col top-0 right-0  gap-1  '>
              <Tooltip
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 }
                }}
                content='Add to Wishlist'
              >
                <IconButton onClick={() => setWishlisted(!wishlisted)} variant='text'>
                  {wishlisted ? <FilledHeartIcon color='red' width={25} /> : <HeartIcon width={25} />}
                </IconButton>
              </Tooltip>
              <Tooltip
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 }
                }}
                content='Quick view'
              >
                <IconButton onClick={handleOpen} variant='text'>
                  {open ? <FilledEyeIcon width={25} /> : <EyeIcon width={25} />}
                </IconButton>
              </Tooltip>
              <Tooltip
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 }
                }}
                content='Add to Cart'
              >
                <IconButton onClick={() => setAddCart(!addCart)} variant='text'>
                  {addCart ? <FilledShoppingCartIcon width={25} /> : <ShoppingCartIcon width={25} />}
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Link to='/'>
            <div className='w-full flex items-center gap-2 mb-2'>
              <img className='w-8 h-8 rounded-lg object-cover' src={product.shop.shop_avatar.url} alt='' />
              <Typography variant='small' color='blue'>
                {product.shop.name}
              </Typography>
            </div>
          </Link>
          <Link to={`/product/${productName}`}>
            <Typography className='font-medium hover:text-light-text-primary hover:shadow-sm rounded-md dark:hover:text-dark-text-primary duration-200'>
              {product.name.length > 40 ? product.name.substring(0, 40) + '...' : product.name.substring(0, 40)}
            </Typography>
          </Link>
        </CardBody>
        <CardFooter className='pt-0  md:px-3 800px:px-6'>
          <div className='flex items-center mb-2 '>
            <Rating
              defaultValue={product.rating}
              value={product.rating}
              readOnly
              precision={0.5}
              // onChange={(value) => setRated(value)}
            />
          </div>
          <div className=' flex items-center justify-between '>
            <div className='relative'>
              <p
                color='red'
                className={`left-8    absolute text-deep-orange-800 line-through -mt-2 text-base font-medium`}
              >
                {product?.price ? product?.price + '$' : null}
              </p>
              <Typography className={`${styles.productDiscountPrice} mt-2`}>
                {product?.price === 0 ? product?.price : product?.discount_price}$
              </Typography>
            </div>
            <Typography color='green' className='font-normal '>
              {`${product?.total_sell} sold`}
            </Typography>
          </div>
        </CardFooter>
      </Card>
      <ProductPreview open={open} handleOpen={handleOpen} product={product} />
    </>
  )
}
export default ProductCard
