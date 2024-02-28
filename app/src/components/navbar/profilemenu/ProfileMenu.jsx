import {
  UserIcon,
  Cog8ToothIcon,
  InboxIcon,
  LifebuoyIcon,
  ArrowLeftStartOnRectangleIcon
} from '@heroicons/react/24/solid'
import { Menu, MenuHandler, MenuList, MenuItem, Avatar, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import Switcher from '../../theme-toggler/Switcher'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentTheme, toggleThemeMode } from '../../../features/theme/themeSlice'
const ProfileMenu = () => {
  const theme = useSelector(selectCurrentTheme)
  const dispatch = useDispatch()
  const toggleDarkTheme = () => {
    dispatch(toggleThemeMode())
  }
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant='circular'
          alt='tania andrew'
          className='cursor-pointer'
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
        />
      </MenuHandler>
      <MenuList className='bg-light-background-secondary dark:bg-dark-background-secondary text-light-text-primary dark:text-dark-text-primary'>
        <MenuItem>
          <Link to='/profile' className='flex items-center gap-1'>
            <UserIcon width={22} />
            <Typography className='font-medium'>My Profile</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/user/profile' className='flex items-center gap-1'>
            <Cog8ToothIcon width={22} />
            <Typography className='font-medium'>Edit Profile</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/user/inbox' className='flex items-center gap-1'>
            <InboxIcon width={22} />
            <Typography className='font-medium'>Inbox</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/help' className='flex items-center gap-1'>
            <LifebuoyIcon width={22} />
            <Typography className='font-medium'>Help</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={toggleDarkTheme} className='flex items-center flex-col justify-around '>
          <Typography variant='lead' className='text-nowrap font-medium text-base'>
            Switch To {theme ? 'Light' : 'Dark'}
          </Typography>
          <Switcher profileMenu={true} />
        </MenuItem>

        <hr className='my-2 border-light-background-third ' />
        <MenuItem>
          <Link to='/logout' className='flex items-center gap-1'>
            <ArrowLeftStartOnRectangleIcon width={22} />
            <Typography className='font-medium'>Sign Out</Typography>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProfileMenu
