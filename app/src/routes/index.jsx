import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import ErrorPage from '../views/errorpage/ErrorPage'
import Public from '../views/public-page/Public'
import SignUp from '../views/signup/SignUp'
import Login from '../views/login/Login'
import MinimalLayout from '../layout/MinimalLayout'
import MainLayout from '../layout/MainLayout'
import Home from '../views/home/Home'
import ActivationPage from '../views/activation/ActivationPage.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import PublicRoutes from './PublicRoutes.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ProtectedRoutes />} errorElement={<ErrorPage />}>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
      <Route element={<PublicRoutes />} errorElement={<ErrorPage />}>
        <Route element={<MinimalLayout />}>
          <Route path='/welcome' element={<Public />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route
            path='/activation/:activationToken'
            element={<ActivationPage />}
          />
        </Route>
      </Route>
    </>
  )
)

export default router
