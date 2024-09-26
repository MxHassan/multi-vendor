import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/24/solid'
import {
  Avatar,
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography
} from '@material-tailwind/react'
import styles from '../../styles/styles'
import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { productData } from '../../static/data'
import { useGetProductsQuery } from '../../features/products/productsApiSlice'
import SuggestedProducts from '../../components/suggested-products/SuggestedProducts'
import Loader from '../loader/Loader'
import ProductDetailsTabs from './product-details-tabs/ProductDetailsTabs'

const ProductDetailsCard = ({ productId }) => {
  const { data: products, isSuccess, isLoading, isError, error } = useGetProductsQuery()
  const { productName } = useParams()
  const navigate = useNavigate()
  const ref = useRef()
  const imgRef = useRef()
  const [wishlisted, setWishlisted] = useState(false)
  const [count, setCount] = useState(1)
  const [select, setSelect] = useState(0)
  const [open, setOpen] = useState(false)
  const handleSelect = (index) => {
    setSelect(index)
  }
  const handleOpen = () => setOpen((cur) => !cur)

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

  const handleMsgSubmit = () => {
    navigate('/inbox?conversation=d17eu910e81ye')
  }
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
    const { ids, entities } = products
    if (!ids?.length) {
      return (content = (
        <div className='flex h-[calc(100vh-160px)] items-center justify-center'>
          <Typography variant='h1' className='text-center'>
            No Products Found
          </Typography>
        </div>
      ))
    }
    const data = ids?.length && ids.map((id) => entities[id])
    let product
    if (productName) {
      const product_name = productName?.replace(/-/g, ' ')
      product = data.find((product) => product.name === product_name)
    } else {
      product = entities[productId]
    }
    content = (
      <div className='relative sm:w-11/12 mx-auto md:w-full shadow-lg p-6 rounded-lg  bg-light-background-secondary dark:bg-dark-background-default '>
        <div className='flex flex-col 800px:flex-row'>
          {/* product preview */}
          <div className='w-full 800px:w-1/2  800px:border-r-2 border-r-light-background-third '>
              {/* product images dialog */}
            <div className='flex justify-center'>
              <Card
                className=' h-[50vh] cursor-pointer overflow-hidden transition-opacity hover:opacity-90'
                onClick={handleOpen}
              >
                <img alt='' className='h-full w-full object-cover object-center ' src={product.image_Url[0].url} />
              </Card>
              <Dialog
                size='xl'
                className='bg-light-background-secondary dark:bg-dark-background-secondary'
                open={open}
                handler={handleOpen}
              >
                <DialogHeader className='relative p-0 m-0 '>
                  <div className='absolute top-2 right-3 z-10 '>
                    <IconButton
                      ref={ref}
                      variant='gradient'
                      onClick={() => {
                        handleOpen()
                        ref.current.classList.add('animate-spin-out')
                      }}
                    >
                      <XMarkIcon width={35} />
                    </IconButton>
                  </div>
                </DialogHeader>
                <DialogBody>
                  <img
                    ref={imgRef}
                    alt=''
                    className='h-[36rem]  mx-auto rounded-lg object-cover object-center'
                    src={product.image_Url[select].url}
                  />
                </DialogBody>
                <DialogFooter>
                  <div className='flex items-center gap-4 800px:gap-8  mx-auto'>
                    {product.image_Url.map((img, index) => (
                      <Card
                        key={index}
                        className={`${
                          select === index && 'border-[3px] border-blue-800'
                        }  cursor-pointer aspect-square sm:aspect-video min-w-20 w-full md:w-40 overflow-hidden transition-opacity hover:opacity-90`}
                        onClick={() => {
                          imgRef.current.classList.remove('animate-fade-in-img')
                          setTimeout(() => {
                            handleSelect(index)
                            imgRef.current.classList.add('animate-fade-in-img')
                          }, 1)
                        }}
                      >
                        <img alt='' className='h-full w-full object-contain' src={img.url} />
                      </Card>
                    ))}
                  </div>
                </DialogFooter>
              </Dialog>
            </div>
            {/* shop details */}
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
        </div>
        <div className='w-4/5 mx-auto'>
          <ProductDetailsTabs productId={product.id} />
        </div>
        <SuggestedProducts productCategory={product.category} productId={product.id} />
      </div>
    )
  }

  return content
}
export default ProductDetailsCard
