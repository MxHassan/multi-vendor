import { useEffect, useState } from 'react'
import {
  Bars3BottomLeftIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import {
  Menu,
  MenuHandler,
  MenuList,
  Button,
  List,
  ListItem,
  ListItemPrefix
} from '@material-tailwind/react'
import { categoriesData } from '../../../../static/data'
import { Link } from 'react-router-dom'

const Categories = () => {
  const [dropDown, setDropDown] = useState(false)
  useEffect(() => {})
  const handleDropMenu = () => {
    setDropDown(!dropDown)
  }
  return (
    <>
      <div className='h-[60px] mt-[10px] w-[270px]  '>
        <Menu open={dropDown} handler={handleDropMenu}>
          <MenuHandler>
            <Button
              className=' focus:opacity-[1] active:opacity-[1] h-full flex items-center justify-between font-Poppins text-lg font-[500] capitalize rounded-b-none '
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
          <MenuList className='hidden 400px:flex 400px:flex-col w-[270px] grid-cols-7 gap-3  lg:grid  p-0'>
            {/* {children} */}
            {/* drop menu */}
            <List className='p-2 focus:outline-none max-h-[40vh] overflow-scroll overflow-x-hidden small-scrollbar'>
              {categoriesData &&
                categoriesData.map((categorie, index) => {
                  const d = categorie.title.toLowerCase()
                  const categorieUrl = d.replace(/\s+/g, '-')
                  return (
                    <Link key={index} to={`/categories/${categorieUrl}`}>
                      <ListItem
                        className='p-0 hover:scale-[1.05] duration-300'
                        key={index}
                        id={categorie.id}
                      >
                        <ListItemPrefix className='w-16 shrink-0 rounded-lg'>
                          <img
                            src={categorie.image_Url}
                            alt=''
                            className='w-full h-full object-cover '
                          />
                        </ListItemPrefix>
                        {categorie.title}
                      </ListItem>
                    </Link>
                  )
                })}
            </List>
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
