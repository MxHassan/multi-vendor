import { Navigate, Outlet } from 'react-router-dom'
import { user } from '../utils/UserContext'

const PublicRoutes = () => {
  return !user ? <Outlet /> : <Navigate to='/' />
}

export default PublicRoutes
