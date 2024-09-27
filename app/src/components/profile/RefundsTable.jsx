// import { ArrowDownTrayIcon, MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/24/outline'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import {
  // Avatar,
  // Button,
  Card,
  CardBody,
  // CardFooter,
  // CardHeader,
  Chip,
  IconButton,
  // Input,
  // Tooltip,
  Typography
} from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const RefundsTable = ({ rows }) => {
  const columns = ['Order ID', 'Status', 'Items Qty', 'Total', 'Refund']
  return (
    <Card className='h-full w-full   '>
      <CardBody className='small-scrollbar 1000px:overflow-hidden overflow-x-scroll px-0 bg-light-background-secondary dark:bg-dark-background-main rounded-md duration-200'>
        <table className='w-full min-w-max  table-auto text-left bg-light-background-main dark:bg-dark-background-secondary text-light-text-secondary dark:text-dark-text-primary duration-200'>
          <thead>
            <tr>
              {columns.map((head) => (
                <th
                  key={head}
                  className='border-b duration-200 border-blue-gray-100 bg-light-background-secondary dark:bg-dark-background-main p-4'
                >
                  <Typography
                    variant='h6'
                    className='font-normal leading-none opacity-80 dark:opacity-95 duration-200  text-light-text-primary dark:text-dark-text-primary'
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ id, itemsQty, total, status }, index) => {
              const isLast = index === rows.length - 1
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

              return (
                <tr key={id}>
                  <td className={classes}>
                    <Typography variant='small' className='font-normal'>
                      {id}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <div className='w-max'>
                      <Chip
                        className='-ml-1 dark:brightness-200 '
                        size='md'
                        variant='ghost'
                        value={status}
                        color={status === 'Success' ? 'green' : status === 'Processing' ? 'amber' : 'red'}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant='small' className='font-normal'>
                      {itemsQty}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant='small' className='font-normal'>
                      {total}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Link to={`/user/orders/${id}/refund`}>
                      <IconButton
                        variant='text'
                        className='text-light-text-primary dark:text-dark-text-primary capitalize text-sm py-2 px-4 font-medium italic'
                      >
                        <BanknotesIcon width={25} />
                      </IconButton>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </CardBody>
      {/* functionality for the pages */}
      {/* <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
        <Button variant='outlined' size='sm'>
          Previous
        </Button>
        <div className='flex items-center gap-2'>
          <IconButton variant='outlined' size='sm'>
            1
          </IconButton>
          <IconButton variant='text' size='sm'>
            2
          </IconButton>
          <IconButton variant='text' size='sm'>
            3
          </IconButton>
          <IconButton variant='text' size='sm'>
            ...
          </IconButton>
          <IconButton variant='text' size='sm'>
            8
          </IconButton>
          <IconButton variant='text' size='sm'>
            9
          </IconButton>
          <IconButton variant='text' size='sm'>
            10
          </IconButton>
        </div>
        <Button variant='outlined' size='sm'>
          Next
        </Button>
      </CardFooter> */}
    </Card>
  )
}

export default RefundsTable
