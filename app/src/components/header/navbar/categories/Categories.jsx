import { useState } from 'react'
import {
  Bars3BottomLeftIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { Menu, MenuHandler, MenuList, Button } from '@material-tailwind/react'
import { categoriesData } from '../../../../static/data'

const Categories = () => {
  const [dropDown, setDropDown] = useState(false)
  const handleDropMenu = () => {
    setDropDown(!dropDown)
  }
  return (
    <>
      <div className='h-[60px] mt-[10px] w-[270px] '>
        <Menu open={dropDown} handler={handleDropMenu}>
          <MenuHandler>
            <Button
              className=' focus:opacity-[1] active:opacity-[1] focus:outline-0 h-full flex items-center justify-between font-Poppins text-lg font-[500] capitalize rounded-b-none '
              ripple={false}
              color='white'
              fullWidth
            >
              {/* <BiMenuAltLeft size={28} /> */}
              <Bars3BottomLeftIcon className='h-7 w-7 -mr-5' />
              All Categories{' '}
              <ChevronDownIcon
                className={` w-5 transition-transform duration-300 ${
                  dropDown ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className='hidden w-[270px] grid-cols-7 gap-3 overflow-visible lg:grid'>
            {/* {children} */}
            {/* drop menu */}
            <div onClick={handleDropMenu} className='pb-4 w-full  '>
              {categoriesData &&
                categoriesData.map((categorie, index) => (
                  <div className='' key={index}></div>
                ))}
            </div>
          </MenuList>
        </Menu>
      </div>
    </>
  )
}

export default Categories
{
  /* <Card
color='gray'
shadow={false}
className='col-span-3 flex h-full w-full items-center justify-center rounded-2xl p-4'
>
<Typography className='mt-5 text-center' variant='h5'>
  Material Tailwind PRO
</Typography>
</Card> */
}
{
  /* <ul className='col-span-4 flex w-full flex-col gap-1'>
{menuItems.map(({ title, description }) => (
  <a href={`/categories/${title}`} key={title}>
    <MenuItem>
      <Typography variant='h6' color='blue-gray' className='mb-1'>
        {title}
      </Typography>
      <Typography
        variant='small'
        color='gray'
        className='font-normal'
      >
        {description}
      </Typography>
    </MenuItem>
  </a>
))}
</ul> */
}
