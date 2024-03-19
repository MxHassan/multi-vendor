import { Button, Typography, IconButton } from '@material-tailwind/react'
import { Drawer as WishlistDrawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenWishlist, setCloseWishlist } from '../../features/nav/navSlice'
import {
  MinusIcon,
  PlusIcon,
  HeartIcon,
  XMarkIcon,
  ShoppingBagIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

const WishlistSingle = ({ wishlistItem }) => {
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
  const totalPrice = wishlistItem.price * count

  return (
    <div className='border-b w-full  border-light-common-black dark:border-dark-common-white'>
      <div className=' py-5 flex items-center'>
        <IconButton variant='text' className='rounded-full text-light-common-black dark:text-dark-common-white'>
          <XMarkIcon width={25} />
        </IconButton>
        <img src={wishlistItem.image_Url[0].url} className='h-20 w-20 ml-2 rounded-lg' />
        <div className='pl-4'>
          <Typography variant='h5'>{wishlistItem.name}</Typography>
          <div className='flex items-center  justify-between'>
            <Typography>
              {wishlistItem.price} * {count}
            </Typography>
            <Typography>total price is {totalPrice}</Typography>
          </div>
        </div>
        <IconButton variant='text' className='rounded-full text-light-common-black dark:text-dark-common-white'>
          <ShoppingCartIcon width={25} />
        </IconButton>
      </div>
    </div>
  )
}

const Wishlist = () => {
  const openWishlist = useSelector(selectOpenWishlist)
  const dispatch = useDispatch()
  const handleCloseWishlist = () => dispatch(setCloseWishlist())

  const wishlistData = [
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
      <WishlistDrawer anchor='right' open={openWishlist} onClose={handleCloseWishlist}>
        <div className='p-4 w-[25vw] h-screen bg-light-background-main dark:bg-dark-background-main text-light-text-primary dark:text-dark-text-primary '>
          <div className='mb-6 p-4 flex items-center justify-between'>
            <Button ripple={false} className='text-inherit flex gap-3 items-center capitalize ' variant='text'>
              <HeartIcon width={35} />
              <Typography variant='h5' className='font-normal'>
                {wishlistData.length} items
              </Typography>
            </Button>
            <IconButton variant='gradient' onClick={handleCloseWishlist}>
              <XMarkIcon width={35} />
            </IconButton>
          </div>
          <div className=' border-t  dark:border-dark-common-white '>
            <div className='border-light-common-black flex mt-4 flex-col items-center p-4 bg-light-background-secondary dark:bg-dark-background-secondary rounded-lg'>
              {wishlistData.map((wishlistItem, index) => (
                <WishlistSingle wishlistItem={wishlistItem} key={index} />
              ))}
            </div>
          </div>
        </div>
      </WishlistDrawer>
    </>
  )
}
export default Wishlist
