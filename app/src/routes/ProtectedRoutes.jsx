import { Navigate, Outlet } from 'react-router-dom'
// import { user } from '../utils/UserContext'
import { useSelector } from 'react-redux'

// import { selectUser } from '../app/features/user/userApiSlice'
const ProtectedRoutes = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user)
  return isAuthenticated ? <Outlet /> : <Navigate to='/welcome' />
}

export default ProtectedRoutes
