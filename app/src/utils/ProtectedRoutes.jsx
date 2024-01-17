import { Navigate, Outlet } from 'react-router-dom';
import { user } from './UserContext';

const ProtectedRoutes = () => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
