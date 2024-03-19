import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography, Avatar, Button } from '@material-tailwind/react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectProductById } from '../../../features/products/productsApiSlice'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
const ProductDetailsTabs = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId))
  const [activeTab, setActiveTab] = useState('details')
  const data = [
    {
      label: 'Product Details',
      value: 'details',
      desc: (
        <>
          <Typography variant='lead' className='text-base'>
            {product.description}
          </Typography>
          <br />
          <Typography variant='lead' className='text-base'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi optio ab dolorem aliquam accusantium amet,
            labore dolore illo rerum cupiditate sunt voluptates incidunt recusandae, voluptatum officiis accusamus ex
            voluptas aliquid.
          </Typography>
          <br />
          <Typography variant='lead' className='text-base'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam incidunt, et quibusdam sapiente consequatur
            quaerat praesentium asperiores dolor officia saepe voluptas, autem optio placeat maiores porro quos rerum
            doloribus fugiat.
          </Typography>
        </>
      )
    },
    {
      label: 'Product Reviews',
      value: 'reviews',
      desc: (
        <div className='w-full justify-center min-h-[40vh] flex items-center'>
          <Typography variant='lead'>No Reviews yet!</Typography>
        </div>
      )
    },
    {
      label: 'Seller Information',
      value: 'seller',
      desc: (
        <div className='flex justify-between items-center flex-col md:flex-row'>
          <div>
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
            <Typography variant='lead' className='text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus sunt maiores modi dignissimos
              dolores. Exercitationem, error velit consequuntur sint ratione impedit rerum quisquam ab debitis
              accusantium, quibusdam, odio nemo.
            </Typography>
          </div>
          <div className='md:w-1/4 p-4 text-nowrap '>
            <Typography variant='h6'>Joined On:29 July,2022</Typography>
            <Typography variant='h6'>Total Products: 1,222</Typography>
            <Typography variant='h6'>Total Reviews: 121 </Typography>
            <Button
              onClick={() => {}}
              variant='gradient'
              color='brown'
              className='capitalize text-base flex flex-nowrap items-center gap-2 my-4  '
            >
              <Typography variant='h6' className=' text-white'>
                Visit Shop{' '}
              </Typography>

              <ShoppingBagIcon color='white' className='-mr-2' width={23} />
            </Button>
          </div>
        </div>
      )
    }
  ]
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className=' rounded-t-lg rounded-b-none bg-opacity-100  bg-light-background-main dark:bg-dark-background-main p-0 '
        indicatorProps={{
          className: 'bg-inherit border-b-2 border-gray-900 dark:border-white shadow-none rounded-none '
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            // className={activeTab === value ? 'text-gray-900' : ''}
            className={`font-normal font-Poppins text-opacity-50 dark:text-opacity-50 text-light-common-black dark:text-light-common-white  duration-200 rounded-t-lg ${
              activeTab === value && 'text-opacity-100 dark:text-opacity-100 '
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel className='text-inherit ' key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
export default ProductDetailsTabs
