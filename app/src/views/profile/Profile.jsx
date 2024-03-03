import { useEffect } from 'react'
import Loader from '../../components/loader/Loader'
import { useGetUserMutation } from '../../features/user/userApiSlice'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

const Profile = () => {
  const user = useSelector(selectUser)
  return (
    <>
      {' '}
      <div>Profile</div>
      <p>{user.email}</p>
    </>
  )
}
export default Profile
