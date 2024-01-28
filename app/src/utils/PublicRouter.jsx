import { Navigate, Outlet } from 'react-router-dom';
import { user } from './UserContext';

const PublicRouter = () => {
  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRouter;
