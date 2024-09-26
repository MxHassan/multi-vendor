import { Typography } from '@material-tailwind/react'
import OrdersTable from './OrdersTable'
import Loader from '../loader/Loader'
// import OrdersTableMui from './OrdersTableMui'

const Orders = () => {
  const isLoading = false
  const isError = false
  const isSuccess = true
  let content
  const orders = [
    {
      id: '7463hvbfbhfbrtr28820231',
      orderItems: [
        {
          name: 'Iphone 14 pro max'
        }
      ],
      totalPrice: 120,
      orderStatus: 'Processing'
    },
    {
      id: '7463hvbfbhfbrtr28840221',
      orderItems: [
        {
          name: 'Iphone 14 pro max'
        },
        {
          name: 'Iphone 14 pro max'
        },
        {
          name: 'Iphone 14 pro max'
        }
      ],
      totalPrice: 120,
      orderStatus: 'Failed'
    },
    {
      id: '7463hvbfbhfbrtr21820221',
      orderItems: [
        {
          name: 'Iphone 16 pro max'
        }
      ],
      totalPrice: 180,
      orderStatus: 'Success'
    },
    {
      id: '7463hvbfbhfbrtr28920221',
      orderItems: [
        {
          name: 'Iphone 14 pro max'
        }
      ],
      totalPrice: 120,
      orderStatus: 'Processing'
    }
  ]
  const rows = []
  orders &&
    orders.forEach((order) => {
      rows.push({
        id: order.id,
        itemsQty: order.orderItems.length,
        total: 'US $' + order.totalPrice,
        status: order.orderStatus
      })
    })
  if (isLoading) {
    content = (
      <div className='flex justify-center items-center h-full '>
        <Loader />
      </div>
    )
  }

  if (isError) {
    content = (
      <div className='flex justify-center items-center h-full'>
        <Typography variant='h2' color='red'>
          Something went wrong {error?.data?.message}
        </Typography>
      </div>
    )
  }
  if (isSuccess) {
    content = (
      <div className={`flex justify-center w-full `}>
        <div className='items-center flex flex-col gap-2 justify-center w-full'>
          <div className='relative bg-light-background-main dark:bg-dark-background-secondary p-4 rounded-lg w-5/6 mx-auto'>
            {/* <OrdersTableMui rows={rows} /> */}
            <OrdersTable rows={rows} />
          </div>
        </div>
      </div>
    )
  }
  return content
}
export default Orders
