import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  Typography
} from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectMobileNav,
  setMobileNav
} from '../../../../features/nav/navSlice'
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  PowerIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { categoriesData } from '../../../../static/data'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  const dispatch = useDispatch()

  const mobileNav = useSelector(selectMobileNav)
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }
  const closeDrawer = () => dispatch(setMobileNav(false))
  return (
    <Drawer open={mobileNav} onClose={closeDrawer}>
      <Card
        color='transparent'
        shadow={false}
        className='h-[calc(100vh-2rem)] w-full p-4'
      >
        <div className='mb-2 flex items-center gap-4 p-4'>
          <img
            src='https://docs.material-tailwind.com/img/logo-ct-dark.png'
            alt='brand'
            className='h-8 w-8'
          />
          <Typography variant='h5' color='blue-gray'>
            Sidebar
          </Typography>
        </div>
        {/* <div className='p-2'>
          <Input
            icon={<MagnifyingGlassIcon className='h-5 w-5' />}
            label='Search'
          />
        </div> */}
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            <ListItem className='p-0' selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className='border-b-0 p-3'
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className='h-5 w-5' />
                </ListItemPrefix>
                <Typography color='blue-gray' className='mr-auto font-normal'>
                  Categories
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className='py-1'>
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
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            <ListItem className='p-0' selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className='border-b-0 p-3'
              >
                <ListItemPrefix>
                  <ShoppingBagIcon className='h-5 w-5' />
                </ListItemPrefix>
                <Typography color='blue-gray' className='mr-auto font-normal'>
                  E-Commerce
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className='py-1'>
              <List className='p-0'>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className='my-2 border-blue-gray-50' />

          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className='h-5 w-5' />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className='h-5 w-5' />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className='h-5 w-5' />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>

        {/* <Alert
            open={openAlert}
            className="mt-auto"
            onClose={() => setOpenAlert(false)}
          >
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography variant="h6" className="mb-1">
              Upgrade to PRO
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
              Upgrade to Material Tailwind PRO and get even more components,
              plugins, advanced features and premium.
            </Typography>
            <div className="mt-4 flex gap-3">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium opacity-80"
                onClick={() => setOpenAlert(false)}
              >
                Dismiss
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium"
              >
                Upgrade Now
              </Typography>
            </div>
          </Alert> */}
      </Card>
    </Drawer>
  )
}

export default MobileNavbar
