import { Navigate, Outlet } from 'react-router-dom';
import { user } from '../utils/UserContext';

const ProtectedRoutes = () => {
  return user ? <Outlet /> : <Navigate to="/welcome" />;
};

export default ProtectedRoutes;
