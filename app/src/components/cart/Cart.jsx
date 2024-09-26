import { Button, Typography, IconButton } from '@material-tailwind/react'
import { Drawer as CartDrawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenCart, setCloseCart } from '../../features/nav/navSlice'
import { MinusIcon, PlusIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const CartSingle = ({ cartItem }) => {
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
  const totalPrice = cartItem.price * count

  return (
    <div className='border-b w-full  border-light-common-black dark:border-dark-common-white'>
      <div className=' py-5 flex items-center'>
        <div className='flex-col gap-2 flex items-center'>
          {/* <div className='flex items-center'> */}
          <IconButton size='sm' onClick={handleIncrement} variant='gradient' color='red' className='rounded-full'>
            <PlusIcon width={30} />
          </IconButton>
          <IconButton
            variant='filled'
            size='sm'
            className='bg-light-background-third dark:bg-dark-background-third text-inherit text-lg rounded-full'
            ripple={false}
          >
            {count}
          </IconButton>
          <IconButton size='sm' onClick={handleDecrement} variant='gradient' color='white' className='rounded-full'>
            <MinusIcon width={30} />
          </IconButton>
          {/* </div> */}
        </div>
        <img src={cartItem.image_Url[0].url} className='h-20 w-20 ml-2 rounded-lg' />
        <div className='pl-4'>
          <Typography variant='h5'>{cartItem.name}</Typography>
          <div className='flex items-center  justify-between'>
            <Typography>
              {cartItem.price} * {count}
            </Typography>
            <Typography>total price is {totalPrice}</Typography>
          </div>
        </div>
        <IconButton variant='text' className='rounded-full'>
          <XMarkIcon width={25} />
        </IconButton>
      </div>
    </div>
  )
}

const Cart = () => {
  const openCart = useSelector(selectOpenCart)
  const dispatch = useDispatch()
  const handleCloseCart = () => dispatch(setCloseCart())

  const cartData = [
    {
      category: 'Mobile and Tablets',
      name: 'Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour',
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: 'test',
          url: 'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg'
        },
        {
          public_id: 'test',
          url: 'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg'
        }
      ],
      shop: {
        name: 'Amazon Ltd',
        shop_avatar: {
          public_id: 'test',
          url: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png'
        },
        ratings: 4.2
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 80,
      stock: 10,
      price: 1099
    },
    {
      category: 'Others',
      name: 'New Fashionable Watch for men 2023 with multiple colors',
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: 'test',
          url: 'https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1'
        },
        {
          public_id: 'test',
          url: 'https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1'
        }
      ],
      shop: {
        name: 'Shahriar Watch House',
        shop_avatar: {
          public_id: 'test',
          url: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png'
        },
        ratings: 4.2,
        category: 'Others'
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 12,
      stock: 10
    },
    {
      name: 'Gaming Headphone Asus with mutiple color and free delivery',
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: 'test',
          url: 'https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg'
        },
        {
          public_id: 'test',
          url: 'https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg'
        }
      ],
      shop: {
        name: 'Asus Ltd',
        shop_avatar: {
          public_id: 'test',
          url: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png'
        },
        ratings: 4.2
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5
        }
      ],
      total_sell: 20,
      stock: 10,
      category: 'Music and Gaming'
    }
  ]

  return (
    <>
      <CartDrawer anchor='right' open={openCart} onClose={handleCloseCart}>
        <div className='p-4 flex flex-col w-full sm:w-[70vw] md:w-[50vw] 1100px:w-[35vw] 1300px:w-[30vw] h-screen bg-light-background-main dark:bg-dark-background-main text-light-text-primary dark:text-dark-text-primary '>
          <div className='mb-6 p-4 flex items-center justify-between'>
            <Button ripple={false} className='text-inherit flex gap-3 items-center capitalize ' variant='text'>
              <ShoppingCartIcon width={35} />
              <Typography variant='h5' className='font-normal'>
                {cartData.length} items
              </Typography>
            </Button>
            <IconButton variant='gradient' onClick={handleCloseCart}>
              <XMarkIcon width={35} />
            </IconButton>
          </div>
          <div className=' border-t  dark:border-dark-common-white '>
            <div className='border-light-common-black flex mt-4 flex-col items-center p-4 bg-light-background-secondary dark:bg-dark-background-secondary rounded-lg'>
              {cartData.map((cartItem, index) => (
                <CartSingle cartItem={cartItem} key={index} />
              ))}
            </div>
          </div>

          <Button fullWidth variant='gradient' color='red' className='capitalize mt-10 text-base '>
            Check out
          </Button>
        </div>
      </CartDrawer>
    </>
  )
}
export default Cart
