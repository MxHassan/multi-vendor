import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import PreloadUser from './PreloadUser'
import { toast } from 'react-toastify'

const ProtectedRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  if (isAuthenticated) {
    return (
      <PreloadUser>
        <Outlet />
      </PreloadUser>
    )
  } else {
    toast.error('You must be logged in first')
    return <Navigate to='/login' />
  }
}

export default ProtectedRoutes
