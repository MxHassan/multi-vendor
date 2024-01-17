import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../views/errorpage/ErrorPage';
import Home from '../views/home/Home';
import Login from '../views/login/Login';
import SignUp from '../views/signup/SignUp';
import MainLayout from '../layout/MainLayout';
import MinimalLayout from '../layout/MinimalLayout';
import ProtectedRoutes from '../utils/ProtectedRoutes';
import PublicRoutes from '../utils/PublicRoutes';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route errorElement={<ErrorPage />}>
//       <Route element={<PublicRoutes />}>
//         <Route element={<MinimalLayout />}>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Route>
//       </Route>
//       <Route element={<ProtectedRoutes />}>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//         </Route>
//       </Route>
//     </Route>
//   )
// );
const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicRoutes />,
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
      },
      {
        element: <ProtectedRoutes />,
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
      }
    ]
  }
]);
export default router;
