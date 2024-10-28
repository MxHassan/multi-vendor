import { Typography } from '@material-tailwind/react'
import Loader from '../loader/Loader'
import RefundsTable from './RefundsTable'

const Refund = () => {
  const isLoading = false
  const isError = false
  const isSuccess = true
  let content
  const orders = [
    {
      id: '7463hvbfbhfbrtr21820221',
      orderItems: [
        {
          name: 'Iphone 14 pro max'
        }
      ],
      totalPrice: 120,
      orderStatus: 'Processing'
    },
    {
      id: '7463hvbfbhfbrtr28120221',
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
      totalPrice: 420,
      orderStatus: 'Success'
    },
    {
      id: '7463hvbfbhfbrtr28821221',
      orderItems: [
        {
          name: 'Iphone 16 pro max'
        }
      ],
      totalPrice: 180,
      orderStatus: 'Success'
    },
    {
      id: '7463hvbfbhfbrtr21820221',
      orderItems: [
        {
          name: 'Iphone 14 pro max'
        }
      ],
      totalPrice: 120,
      orderStatus: 'Faild'
    }
  ]
  const rows = []
  orders &&
    orders.forEach((order) => {
      if (order.orderStatus === 'Success') {
        rows.push({
          id: order.id,
          itemsQty: order.orderItems.length,
          total: 'US $' + order.totalPrice,
          status: order.orderStatus
        })
      }
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
        <div className='items-center  w-full flex flex-col gap-2 justify-center'>
          <div className='relative bg-light-background-main dark:bg-dark-background-secondary py-3 sm:py-6 px-4 sm:px-8 rounded-lg w-full 1000px:w-11/12  mx-0 1000px:mx-auto'>
            {/* <OrdersTableMui rows={rows} /> */}
            <RefundsTable rows={rows} />
          </div>
        </div>
      </div>
    )
  }
  return content
}
export default Refund
