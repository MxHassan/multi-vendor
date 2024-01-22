import MinimalLayout from '../layout/MinimalLayout';
import PublicRoutes from '../utils/PublicRoutes';
import ErrorPage from '../views/errorpage/ErrorPage';
import Login from '../views/login/Login';
import SignUp from '../views/signup/SignUp';

const publicRoutes = {
  element: <PublicRoutes />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <MinimalLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/sign-up',
          element: <SignUp />
        }
      ]
    }
  ]
};

export default publicRoutes;
