import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default PublicRoutes
