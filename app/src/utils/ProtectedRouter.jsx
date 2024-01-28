import { Navigate, Outlet } from 'react-router-dom';
import { user } from './UserContext';

const ProtectedRouter = () => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouter;
