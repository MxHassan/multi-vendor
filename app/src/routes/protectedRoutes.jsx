import MainLayout from '../layout/MainLayout';
import ProtectedRoutes from '../utils/ProtectedRoutes';
import ErrorPage from '../views/errorpage/ErrorPage';
import Home from '../views/home/Home';

const protectedRoutes = {
  element: <ProtectedRoutes />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ]
};

export default protectedRoutes;
