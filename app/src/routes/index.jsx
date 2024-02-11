import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import ErrorPage from '../views/errorpage/ErrorPage'
import Public from '../views/public-page/Public'
import SignUp from '../views/signup/SignUp'
import Login from '../views/login/Login'
import MinimalLayout from '../layout/MinimalLayout'
import MainLayout from '../layout/MainLayout'
import Home from '../views/home/Home'
import ActivationPage from '../views/activation/ActivationPage.jsx'
import Events from '../views/events/Events.jsx'
import BestSelling from '../views/best-selling/BestSelling.jsx'
import Products from '../views/products/Products.jsx'
import Faq from '../views/faq/FAQ.jsx'
// import ProtectedRoutes from './ProtectedRoutes.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MinimalLayout />} errorElement={<ErrorPage />}>
        <Route path='welcome' element={<Public />} /> {/* public routes*/}
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='activation/:activationToken' element={<ActivationPage />} />
        {/* <Route element={<ProtectedRoutes />} > */}
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='best-selling' element={<BestSelling />} />
          <Route path='products' element={<Products />} />
          <Route path='events' element={<Events />} />
          <Route path='faq' element={<Faq />} />
        </Route>
        {/* </Route> */}
      </Route>
    </>
  )
)

export default router
