import { useSelector } from 'react-redux'
import { useGetUserMutation } from '../../features/user/userApiSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Typography } from '@material-tailwind/react'
import Loader from '../../components/loader/Loader'
import styles from '../../styles/styles'
import ProfileSideBar from '../../components/profile/ProfileSideBar'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  const [getUser, { isError, error, isLoading, isSuccess }] = useGetUserMutation()

  const { isAuthenticated } = useSelector((state) => state.auth)
  useEffect(() => {
    const prefetchUser = async () => {
      try {
        await getUser()
      } catch (err) {
        console.log(err)
      }
    }
    if (isAuthenticated) {
      prefetchUser()
      window.scrollTo(0, 0)
    }
  }, [getUser, isAuthenticated])
  useEffect(() => {
    if (isError) toast.error(error?.data?.message)
  }, [isError, error])
  let content

  if (isLoading) {
    content = (
      <div className='flex justify-center items-center h-[calc(100vh-160px)]'>
        <Loader />
      </div>
    )
  }

  if (isError) {
    content = (
      <div className='flex justify-center items-center h-[calc(100vh-160px)]'>
        <Typography variant='h2' color='red'>
          Something went wrong {error?.data?.message}
        </Typography>
      </div>
    )
  }

  if (isSuccess) {
    content = (
      <div className={`${styles.section} gap-10 flex py-10 min-h-screen  800px:min-h-[calc(100vh-160px)]`}>
        <div className='mt-[70px] 800px:mt-0 hidden lg:flex'>
          <ProfileSideBar />
        </div>
        <div className='w-11/12  mx-auto mt-[70px] 800px:mt-0 bg-light-background-paper dark:bg-dark-background-paper py-4 sm:py-8 px-2 sm:px-4 rounded-lg   '>
          <div className='sm:w-11/12 mx-auto 800px:flex   h-full md:w-full  shadow-lg p-2 sm:p-6 rounded-lg  bg-light-background-secondary dark:bg-dark-background-main '>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  return content
}
export default Profile
