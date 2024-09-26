import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import PreloadUser from './PreloadUser'

const ProtectedRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return isAuthenticated ? (
    <PreloadUser>
      <Outlet />
    </PreloadUser>
  ) : (
    <Navigate to='/login' />
  )
}

export default ProtectedRoutes
