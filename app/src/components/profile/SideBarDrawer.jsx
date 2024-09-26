import { IconButton, Tabs, TabsHeader, Tab } from '@material-tailwind/react'
import { Drawer  } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { createElement } from 'react'
import { selectSideBar, setCloseSideBar } from '../../features/profile/profileSlice'
import { profileItems } from '../../static/data'
import { useNavigate } from 'react-router-dom'

// const CartSingle = ({ cartItem }) => {
//   const [count, setCount] = useState(1)
//   const handleIncrement = () => {
//     setCount((prev) => prev + 1)
//   }
//   const handleDecrement = () => {
//     setCount((prev) => {
//       if (prev > 1) {
//         return prev - 1
//       } else {
//         return prev
//       }
//     })
//   }
//   const totalPrice = cartItem.price * count

//   return (
//     <div className='border-b w-full  border-light-common-black dark:border-dark-common-white'>
//       <div className=' py-5 flex items-center'>
//         <div className='flex-col gap-2 flex items-center'>
//           {/* <div className='flex items-center'> */}
//           <IconButton size='sm' onClick={handleIncrement} variant='gradient' color='red' className='rounded-full'>
//             <PlusIcon width={30} />
//           </IconButton>
//           <IconButton
//             variant='filled'
//             size='sm'
//             className='bg-light-background-third dark:bg-dark-background-third text-inherit text-lg rounded-full'
//             ripple={false}
//           >
//             {count}
//           </IconButton>
//           <IconButton size='sm' onClick={handleDecrement} variant='gradient' color='white' className='rounded-full'>
//             <MinusIcon width={30} />
//           </IconButton>
//           {/* </div> */}
//         </div>
//         <img src={cartItem.image_Url[0].url} className='h-20 w-20 ml-2 rounded-lg' />
//         <div className='pl-4'>
//           <Typography variant='h5'>{cartItem.name}</Typography>
//           <div className='flex items-center  justify-between'>
//             <Typography>
//               {cartItem.price} * {count}
//             </Typography>
//             <Typography>total price is {totalPrice}</Typography>
//           </div>
//         </div>
//         <IconButton variant='text' className='rounded-full'>
//           <XMarkIcon width={25} />
//         </IconButton>
//       </div>
//     </div>
//   )
// }

const SideBarDrawer = () => {
  const sideBar = useSelector(selectSideBar)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCloseSideBar = () => dispatch(setCloseSideBar())

  return (
    <>
      <Drawer anchor='left' open={sideBar} onClose={handleCloseSideBar}>
        <div className='p-4 flex flex-col w-full sm:w-[70vw] md:w-[50vw] 1100px:w-[35vw] 1300px:w-[30vw] h-screen bg-light-background-main dark:bg-dark-background-main text-light-text-primary dark:text-dark-text-primary '>
          <div className='mb-6 p-4 flex items-center w-full justify-end'>
            <IconButton variant='gradient' onClick={handleCloseSideBar}>
              <XMarkIcon width={35} />
            </IconButton>
          </div>
          <div className='w-full flex items-center bg-light-background-paper dark:bg-dark-background-paper rounded-xl py-8 '>
            <Tabs
              orientation='vertical'
              value={
                location.pathname.split('/').length > 2
                  ? location.pathname.split('/')[2]
                  : location.pathname.split('/')[1]
              }
            >
              <div className=' px-4 '>
                <TabsHeader
                  indicatorProps={{
                    className: ` bg-light-warning-light dark:bg-dark-erwarningror-main  `
                  }}
                  className='  px-4 bg-opacity-100 flex z-0 bg-light-background-secondary dark:bg-dark-background-main mx-auto text-nowrap  '
                >
                  {profileItems.map((navItem, index) => (
                    <Tab
                      key={index}
                      className='font-normal py-4 my-1 font-Poppins  text-light-common-black dark:text-light-common-white hover:bg-light-action-hover dark:hover:bg-dark-action-hover duration-200 rounded-lg'
                      onClick={() => {
                        navigate(`${navItem.url}`)
                      }}
                      value={navItem.value}
                    >
                      <div className='flex items-center gap-2'>
                        {createElement(navItem.icon, { className: 'w-8 h-8 shrink-0' })}
                        <p className='800px:flex  hidden'>{navItem.title}</p>
                      </div>
                    </Tab>
                  ))}
                </TabsHeader>
              </div>
            </Tabs>
          </div>
        </div>
      </Drawer>
    </>
  )
}
export default SideBarDrawer
