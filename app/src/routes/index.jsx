import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import ErrorPage from '../views/errorpage/ErrorPage';
import Public from '../components/public-page/Public';
import SignUp from '../views/signup/SignUp';
import Login from '../views/login/Login';
import MinimalLayout from '../layout/MinimalLayout';
import MainLayout from '../layout/MainLayout';
import Home from '../views/home/Home';
import PublicRouter from '../utils/PublicRouter.jsx';
import ProtectedRouter from '../utils/ProtectedRouter';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route element={<PublicRouter />}>
        <Route element={<MinimalLayout />}>
          <Route index element={<Public />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Route>
      <Route element={<ProtectedRouter />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
