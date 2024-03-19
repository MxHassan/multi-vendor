import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MinimalLayout from '../layout/MinimalLayout'
import MainLayout from '../layout/MainLayout'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import LazyLoadPage from '../components/lazyload-page/LazyLoadPage.jsx'
import {
  ActivationPage,
  BestSellingPage,
  ErrorPage,
  EventsPage,
  FaqPage,
  HomePage,
  LoginPage,
  MainLayoutPage,
  MinimalLayoutPage,
  ProductDetailsPage,
  ProductsPage,
  ProfilePage,
  PublicPage,
  SignUpPage
} from './lazyComponents.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import PublicRoutes from './PublicRoutes.jsx'
// import CategoriesSection from '../components/Route/catagoriessection/CategoriesSection.jsx'
// import Categories from '../views/categories/Categories.jsx'
// import ProtectedRoutes from './ProtectedRoutes.jsx'
// const LazyHome = lazy(() => import('../views/home/Home'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<LazyLoadPage component={<MinimalLayoutPage />} />}
        errorElement={<LazyLoadPage component={<ErrorPage />} />}
      >
        {/* public routes*/}
        <Route element={<PublicRoutes />}>
          <Route path='welcome' element={<LazyLoadPage component={<PublicPage />} />} />
          <Route path='login' element={<LazyLoadPage component={<LoginPage />} />} />
          <Route path='signup' element={<LazyLoadPage component={<SignUpPage />} />} />
          <Route path='activation/:activationToken' element={<ActivationPage />} />
        </Route>
        <Route path='/' element={<LazyLoadPage component={<MainLayoutPage />} />}>
          <Route index element={<LazyLoadPage component={<HomePage />} />} />
          <Route path='best-selling' element={<LazyLoadPage component={<BestSellingPage />} />} />
          <Route path='products' element={<LazyLoadPage component={<ProductsPage />} />} />
          <Route path='product/:productName' element={<LazyLoadPage component={<ProductDetailsPage />} />} />
          <Route path='events' element={<LazyLoadPage component={<EventsPage />} />} />
          <Route path='faq' element={<LazyLoadPage component={<FaqPage />} />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='profile' element={<LazyLoadPage component={<ProfilePage />} />} />
          </Route>
        </Route>
      </Route>
    </>
  )
)

export default router
