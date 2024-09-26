import {
  UserIcon,
  Cog8ToothIcon,
  InboxIcon,
  LifebuoyIcon,
  ArrowLeftStartOnRectangleIcon
} from '@heroicons/react/24/solid'
import { Menu, MenuHandler, MenuList, MenuItem, Avatar, Typography } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'
import Switcher from '../../theme-toggler/Switcher'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentTheme, toggleThemeMode } from '../../../features/theme/themeSlice'
import { useSendLogoutMutation } from '../../../features/auth/authApiSlice'
import { useEffect, useState } from 'react'
import { selectUser } from '../../../features/user/userSlice'
import { PUBLIC_URL } from '../../../constants'
import { ArrowRightEndOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'
import { selectNavActive } from '../../../features/nav/navSlice'
const ProfileMenu = () => {
  const navigate = useNavigate()
  const navActive = useSelector(selectNavActive)

  const [sendLogout, { isSuccess }] = useSendLogoutMutation()
  const [dropMenu, setDropMenu] = useState(false)
  const handleDropMenu = () => {
    setDropMenu((cur) => !cur)
  }
  useEffect(() => {
    isSuccess && navigate('/welcome')
  }, [isSuccess, navigate])
  const user = useSelector(selectUser)
  const theme = useSelector(selectCurrentTheme)
  const dispatch = useDispatch()
  const toggleDarkTheme = () => {
    dispatch(toggleThemeMode())
  }
  return (
    <Menu open={dropMenu} handler={handleDropMenu}>
      <MenuHandler>
        <Avatar
          variant='circular'
          alt='tania andrew'
          className='cursor-pointer'
          src={PUBLIC_URL + (user ? `${user?.avatar}` : 'noAvatar.png')}
        />
      </MenuHandler>
      <MenuList className='bg-light-background-secondary dark:bg-dark-background-secondary text-light-text-primary dark:text-dark-text-primary'>
        {/* user related items */}
        {user && (
          <>
            <MenuItem onClick={handleDropMenu}>
              <Link to='/profile' className='flex items-center gap-1'>
                <UserIcon width={22} />
                <Typography className='font-medium'>My Profile</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleDropMenu}>
              <Link to='/user/profile' className='flex items-center gap-1'>
                <Cog8ToothIcon width={22} />
                <Typography className='font-medium'>Edit Profile</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleDropMenu}>
              <Link to='/user/inbox' className='flex items-center gap-1'>
                <InboxIcon width={22} />
                <Typography className='font-medium'>Inbox</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleDropMenu}>
              <Link to='/help' className='flex items-center gap-1'>
                <LifebuoyIcon width={22} />
                <Typography className='font-medium'>Help</Typography>
              </Link>
            </MenuItem>
          </>
        )}

        <MenuItem
          onClick={toggleDarkTheme}
          className={`${navActive ? ' flex' : 'flex 800px:hidden '}  items-center flex-col  `}
        >
          <Typography variant='lead' className='text-nowrap font-medium text-base'>
            Switch To {theme ? 'Light' : 'Dark'}
          </Typography>
          <Switcher profileMenu={true} />
        </MenuItem>
        <hr className='my-2 border-light-background-third ' />

        {user && (
          <>
            <MenuItem
              onClick={async () =>
                await sendLogout()
                  .unwrap()
                  .then((data) => {
                    if (data.success) toast.success('User logged out successfully')
                  })
              }
              className='flex items-center gap-1'
            >
              <ArrowLeftStartOnRectangleIcon width={22} />
              <Typography className='font-medium'>Sign Out</Typography>
            </MenuItem>
          </>
        )}
        {!user && (
          <>
            <MenuItem onClick={() => navigate('/login')} className='flex items-center gap-1'>
              <ArrowRightEndOnRectangleIcon width={22} className='mr-2 -ml-1' />
              <Typography className='font-medium'>Log In</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate('/signup')} className='flex items-center gap-1'>
              <UserPlusIcon width={22} className='mr-2 -ml-1' />
              <Typography className='font-medium'>Sign Up</Typography>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  )
}

export default ProfileMenu
