import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { Avatar, Button, Typography } from '@material-tailwind/react'

const ProductDetailsCard = ({ product }) => {
  return (
    <>
      <div className='w-full 800px:w-1/2 bg-white 800px:border-r-2 '>
        <img alt='nature' className=' object-contain  ' src={product.image_Url[0].url} />
        <div className='mx-4'>
          <div className='w-full flex items-center gap-2 mb-2'>
            <Avatar className='object-fill' src={product.shop.shop_avatar.url} alt='' />
            <div className='flex flex-col place-items-center'>
              <Typography variant='small' color='blue'>
                {product.shop.name}
              </Typography>
              <Typography variant='paragraph' className='font-normal' color='black'>
                ({product.shop.ratings}) Ratings
              </Typography>
            </div>
          </div>
          <Button variant='filled' className='capitalize text-base flex items-center gap-2 my-4' size='md'>
            Send Message
            <ChatBubbleOvalLeftEllipsisIcon className='-mr-2' width={23} />
          </Button>
          <Typography variant='paragraph' color='red'>
            ({product.total_sell}) Sold
          </Typography>
        </div>
      </div>
      <hr className='800px:hidden border-2 my-3' />
      <div className='w-full 800px:w-1/2 800px:border-l-2  '>
        <img alt='nature' className=' object-contain  ' src={product.image_Url[0].url} />
        <div className='mx-4'>
          <div className='w-full flex items-center gap-2 mb-2'>
            <Avatar className='object-fill' src={product.shop.shop_avatar.url} alt='' />
            <div className='flex flex-col place-items-center'>
              <Typography variant='small' color='blue'>
                {product.shop.name}
              </Typography>
              <Typography variant='paragraph' className='font-normal' color='black'>
                ({product.shop.ratings}) Ratings
              </Typography>
            </div>
          </div>
          <Button variant='filled' className='capitalize text-base flex items-center gap-2 my-4' size='md'>
            Send Message
            <ChatBubbleOvalLeftEllipsisIcon className='-mr-2' width={23} />
          </Button>
          <Typography variant='paragraph' color='red'>
            ({product.total_sell}) Sold
          </Typography>
        </div>
      </div>
    </>
  )
}
export default ProductDetailsCard
