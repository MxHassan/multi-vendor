import { useGetUserMutation } from '../features/user/userApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
const PreloadUser = () => {
  // isError && toast.error(error?.data?.message)
  // // useEffect(() => {
  // // }, [isError, error])
  // return isSuccess && <Outlet />
}
export default PreloadUser
