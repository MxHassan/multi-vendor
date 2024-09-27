import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography
} from '@material-tailwind/react'
import { Box, Button as MuiButton } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'
import { useGetUserMutation } from '../../features/user/userApiSlice'
import { PUBLIC_URL } from '../../constants'
import { XMarkIcon, CameraIcon, PencilSquareIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline'
import styles from '../../styles/styles'
import { selectUser } from '../../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const ProfileContent = () => {
  const ref = useRef()
  // const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const [editPicture, setEditPicture] = useState(false)
  // const [user, setUser] = useState()
  const user = useSelector(selectUser)

  const [userInfo, setUserInfo] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    address1: user?.addresses[0]?.address1,
    address2: user?.addresses[0]?.address2
  })
  const onUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    // let result = !ValidiateProps(e.target.name, e.target.value)
    // updateError(e.target.name, result)
  }

  const [avatar, setAvatar] = useState(null)

  const handleOpen = () => {
    setOpen((cur) => !cur)
    setAvatar(null)
    setEditPicture(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('user info update requested')
  }
  window.scrollTo(0, 0)
  let content

  content = (
    <div className={`flex justify-center w-full  `}>
      <div className='items-center flex flex-col gap-2 justify-center'>
        <div className='relative bg-light-background-main dark:bg-dark-background-secondary p-4  rounded-lg'>
          <Card
            className=' rounded-full bg-transparent cursor-pointer overflow-hidden transition-opacity hover:opacity-90'
            onClick={() => setOpen(true)}
          >
            <img
              src={PUBLIC_URL + (user ? `${user?.avatar}` : 'noAvatar.png')}
              alt='profile picture'
              className='w-40 h-40 object-cover rounded-full '
            />
          </Card>
          <div className='absolute bottom-4 right-3 '>
            <Button
              variant='text'
              className={`${styles.iconButton} text-gray-600 dark:text-white  `}
              onClick={() => setOpen(true)}
            >
              <CameraIcon onClick={() => setEditPicture(true)} width={25} />
            </Button>
          </div>
          <Dialog
            size='md'
            // animate={{
            //   mount: { scale: 1, y: 0 },
            //   unmount: { scale: 0.9, y: -100 }
            // }}
            className='bg-light-background-main dark:bg-dark-background-main'
            open={open}
            handler={handleOpen}
          >
            <DialogHeader className='relative p-0 m-0 '>
              <div className='absolute top-2 right-3 z-10 '>
                <IconButton
                  ref={ref}
                  variant='filled'
                  color='brown'
                  size='sm'
                  onClick={() => {
                    handleOpen()
                    ref.current.classList.add('animate-spin-out')
                  }}
                >
                  <XMarkIcon width={25} />
                </IconButton>
              </div>
            </DialogHeader>
            <DialogBody>
              <img
                alt=''
                className='h-[36rem]  mx-auto rounded-lg object-cover object-center'
                src={
                  editPicture && avatar !== null
                    ? URL.createObjectURL(avatar)
                    : PUBLIC_URL + (user ? `${user?.avatar}` : 'noAvatar.png')
                }
              />
            </DialogBody>
            {editPicture && (
              <DialogFooter className='justify-around'>
                <MuiButton
                  sx={{ textTransform: 'none', borderRadius: 3, ml: 1.5 }}
                  startIcon={<CloudArrowUpIcon width={30} />}
                  tabIndex={-1}
                  variant='contained'
                  color='primary'
                  component='label'
                >
                  Upload Picture
                  <input
                    type='file'
                    name='profilePicture'
                    id='file-input'
                    className='sr-only'
                    accept='image/*'
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </MuiButton>
                {/* make it fuctional ****** */}
                <Button variant='outlined' color='blue' className=' flex items-center capitalize'>
                  Save
                </Button>
              </DialogFooter>
            )}
          </Dialog>
        </div>

        <div className='w-full px-5 sm:mt-8  '>
          <form noValidate className=' flex flex-col gap-4 items-start'>
            {/* User Name */}
            <div className='flex flex-col sm:flex-row w-full gap-4 '>
              <div className='flex flex-col md:flex-row w-full md:items-center md:gap-3'>
                <label htmlFor='firstName' className='w-full  lg:w-2/5'>
                  <Typography className='text-xl lg:text-2xl font-extrabold text-nowrap'>First Name</Typography>
                </label>
                <div className='w-full  lg:w-3/5'>
                  <input
                    className='disabled:bg-light-background-main duration-200 disabled:dark:bg-dark-background-third appearance-none capitalize dark:text-light-text-primary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    type='text'
                    name='firstName'
                    disabled={!edit}
                    id='firstName'
                    value={userInfo.firstName}
                    onChange={(e) => onUserInfoChange(e)}
                    autoComplete='text'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-col md:flex-row w-full md:items-center md:gap-3'>
                <label htmlFor='lastName' className='w-full  lg:w-2/5'>
                  <Typography className='text-xl lg:text-2xl font-extrabold text-nowrap'>Last Name</Typography>
                </label>
                <div className='w-full  lg:w-3/5'>
                  <input
                    className='duration-200 disabled:bg-light-background-main disabled:dark:bg-dark-background-third appearance-none capitalize block w-full px-3 py-2 border dark:text-light-text-primary border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    type='text'
                    name='lastName'
                    id='lastName'
                    disabled={!edit}
                    value={userInfo.lastName}
                    onChange={(e) => onUserInfoChange(e)}
                    autoComplete='current-text'
                    required
                  />
                </div>
              </div>
            </div>
            {/* email */}
            <div className='flex flex-col md:flex-row w-full'>
              <label htmlFor='email' className='w-full md:w-1/4 lg:w-1/5'>
                <Typography className='text-xl lg:text-2xl font-extrabold text-nowrap'>Email</Typography>
              </label>
              <div className='w-full md:w-3/4 lg:w-4/5'>
                <input
                  className='duration-200 disabled:bg-light-background-main disabled:dark:bg-dark-background-third  w-full px-3 py-2 border dark:text-light-text-primary border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  type='email'
                  name='email'
                  id='email'
                  disabled={!edit}
                  value={userInfo.email}
                  onChange={(e) => onUserInfoChange(e)}
                  autoComplete='email'
                  required
                />
              </div>
            </div>
            {/* phone number and zip code*/}
            <div className='flex flex-col md:flex-row w-full '>
              <label htmlFor='phoneNumber' className='w-full md:w-1/4 lg:w-1/5'>
                <Typography className='text-xl lg:text-2xl font-extrabold text-nowrap'>Phone </Typography>
              </label>
              <div className='w-full md:w-3/4 lg:w-4/5 '>
                <input
                  className='duration-200 disabled:bg-light-background-main disabled:dark:bg-dark-background-third w-full px-3 py-2 border dark:text-light-text-primary border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  type='tel'
                  name='phoneNumber'
                  id='phoneNumber'
                  disabled={!edit}
                  value={userInfo.phoneNumber}
                  onChange={(e) => onUserInfoChange(e)}
                  autoComplete='tel'
                  required
                />
              </div>
            </div>
            {/* addresses */}
            <div className='flex flex-col md:flex-row w-full'>
              <label htmlFor='address1' className='w-full md:w-1/4 lg:w-1/5'>
                <Typography className='text-xl lg:text-2xl font-extrabold text-nowrap'>Address 1</Typography>
              </label>
              <div className='w-full md:w-3/4 lg:w-4/5'>
                <input
                  className='duration-200  disabled:bg-light-background-main disabled:dark:bg-dark-background-third w-full px-3 py-2 border dark:text-light-text-primary border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  type='text'
                  name='address1'
                  id='address1'
                  disabled={!edit}
                  value={userInfo.address1}
                  onChange={(e) => onUserInfoChange(e)}
                  autoComplete='text'
                  required
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full'>
              <label htmlFor='address2' className='w-full md:w-1/4 lg:w-1/5'>
                <Typography className='text-xl lg:text-2xl font-extrabold text-nowrap '>Address 2</Typography>
              </label>
              <div className='w-full md:w-3/4 lg:w-4/5'>
                <input
                  // variant='outlined'
                  // color='white'
                  className='duration-200  disabled:bg-light-background-main disabled:dark:bg-dark-background-third w-full px-3 py-2 border dark:text-light-text-primary border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  type='text'
                  name='address2'
                  id='address2'
                  disabled={!edit}
                  value={userInfo.address2}
                  onChange={(e) => onUserInfoChange(e)}
                  autoComplete='text'
                  required
                />
              </div>
            </div>
            {/* edit buttons */}
            <div className='flex  w-full gap-1 justify-end '>
              <Button
                type='submit'
                variant='outlined'
                color='blue'
                disabled={!edit}
                className={` ${!edit && 'hidden'} capitalize text-sm  py-2 px-4 `}
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
              <Button
                type='reset'
                variant='filled'
                color='teal'
                disabled={!edit}
                className={` ${!edit && 'hidden'} capitalize text-sm  py-2 px-4 `}
                onClick={() => {
                  setEdit(!edit)
                  // navigate('/profile')
                  // setUserInfo({ ...user })
                  window.location.reload()
                }}
              >
                Cancel
              </Button>
              <Button
                variant='text'
                disabled={edit}
                className={`${styles.iconButton} ${edit && 'hidden'} text-gray-600 dark:text-white  `}
                onClick={() => setEdit(!edit)}
              >
                <PencilSquareIcon width={30} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

  return content
}
export default ProfileContent
