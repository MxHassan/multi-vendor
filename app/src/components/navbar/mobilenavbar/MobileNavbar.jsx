import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Typography
} from '@material-tailwind/react'
import { Drawer as MobileDrawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectMobileNav, setMobileNav } from '../../../features/nav/navSlice'
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { categoriesData } from '../../../static/data'
import { Link } from 'react-router-dom'
import ProfileSideBar from '../../profile/ProfileSideBar'
import NavLinks from '../navlinks/NavLinks'
import { useSendLogoutMutation } from '../../../features/auth/authApiSlice'
import { toast } from 'react-toastify'

const MobileNavbar = () => {
  const dispatch = useDispatch()
  const [sendLogout] = useSendLogoutMutation()
  const mobileNav = useSelector(selectMobileNav)
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }
  const closeDrawer = () => dispatch(setMobileNav(false))
  return (
    <MobileDrawer open={mobileNav} onClose={closeDrawer}>
      <div className='w-[320px] h-full bg-light-background-main dark:bg-dark-background-main  '>
        <Card
          color='transparent'
          shadow={false}
          className='h-[calc(100vh-2rem)] w-full p-4 text-light-text-primary dark:text-dark-text-primary'
        >
          <div className='mb-2 flex justify-between items-center gap-4 p-4'>
            <Typography variant='h5'>Sidebar</Typography>
            <IconButton
              variant='text'
              className='-mr-4 bg-light-background-secondary dark:bg-dark-background-secondary text-light-common-black dark:text-dark-common-white'
              onClick={closeDrawer}
            >
              <XMarkIcon width={25} />
            </IconButton>
          </div>
          <List className='text-inherit'>
            <Accordion
              className='bg-light-background-secondary dark:bg-dark-background-secondary rounded-md text-inherit'
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4  transition-transform ${open === 1 ? 'rotate-180' : ''}`}
                />
              }
            >
              <ListItem className='p-0  ' selected={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className='border-b-0 p-3 text-inherit '>
                  <ListItemPrefix>
                    <PresentationChartBarIcon className='h-5 w-5' />
                  </ListItemPrefix>
                  <Typography className='mr-auto font-normal '>Categories</Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className='py-1 text-inherit'>
                <List className='p-2 focus:outline-none max-h-[40vh] overflow-scroll overflow-x-hidden small-scrollbar text-inherit'>
                  {categoriesData &&
                    categoriesData.map((categorie, index) => {
                      const d = categorie.title.toLowerCase()
                      const categorieUrl = d.replace(/\s+/g, '-')
                      return (
                        <Link key={index} to={`/categories/${categorieUrl}`}>
                          <ListItem
                            className='p-0 hover:scale-[1.05]  hover:text-inherit  bg-light-background-secondary dark:bg-dark-background-secondary duration-300'
                            key={index}
                            id={categorie.id}
                          >
                            <ListItemPrefix className='w-16 shrink-0 rounded-lg '>
                              <img src={categorie.image_Url} alt='' className='w-full h-full object-cover ' />
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
              className='block sm:hidden'
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4  transition-transform ${open === 2 ? 'rotate-180' : ''}`}
                />
              }
            >
              <ListItem className='p-0 ' selected={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className='border-b-0 p-3 text-inherit '>
                  <ListItemPrefix>
                    <ShoppingBagIcon className='h-5 w-5' />
                  </ListItemPrefix>
                  <Typography className='mr-auto font-normal'>Pages</Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className='py-1 w-2/3 mx-auto'>
                <div className='flex justify-center bg-light-background-paper dark:bg-dark-background-paper rounded-xl py-4 '>
                  <NavLinks mobileNav={true} />
                </div>
              </AccordionBody>
            </Accordion>
            <hr className='my-2 border-blue-gray-50' />
            <Accordion
              className='flex flex-col lg:hidden'
              open={open === 3}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4  transition-transform ${open === 3 ? 'rotate-180' : ''}`}
                />
              }
            >
              <ListItem className='p-0 ' selected={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)} className='border-b-0 p-3 text-inherit '>
                  <ListItemPrefix>
                    <UserCircleIcon width={25} />
                  </ListItemPrefix>
                  <Typography className='mr-auto font-normal'>Profile</Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className='py-1  '>
                <ProfileSideBar mobileNav={true} closeDrawer={closeDrawer} />
              </AccordionBody>
            </Accordion>

            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className='h-5 w-5' />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem
              onClick={async () =>
                await sendLogout()
                  .unwrap()
                  .then((data) => {
                    if (data.success) toast.success('User logged out successfully')
                    closeDrawer()
                  })
              }
            >
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
      </div>
    </MobileDrawer>
  )
}

export default MobileNavbar
