import { useEffect } from 'react'
import Loader from '../../components/loader/Loader'
// import { useGetUserQuery } from '../../features/user/userApiSlice'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import { Typography } from '@material-tailwind/react'
import { Backdrop } from '@mui/material'

const Profile = () => {
  // const user = useSelector(selectUser)
  // const { data: user, isLoading, isSuccess, isError, error } = useGetUserQuery()
  // window.scrollTo(0, 0)

  // let content

  // if (isLoading) {
  //   content = (
  //     <Backdrop open={true}>
  //       <Loader />
  //     </Backdrop>
  //   )
  // }

  // if (isError) {
  //   content = (
  //     <div className='flex justify-center items-center h-[calc(100vh-160px)]'>
  //       <Typography variant='h2' color='red'>
  //         Something went wrong {error?.data?.message}
  //       </Typography>
  //     </div>
  //   )
  // }

  // if (isSuccess) {
  //   content = (
  //     <div>
  //       Profile
  //       <p>{user.email}</p>
  //     </div>
  //   )
  // }
  return (
    <div>
      Profile
      {/* <p>{user.email}</p> */}
    </div>
  )
}
export default Profile
