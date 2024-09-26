import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MinimalLayout from '../layout/MinimalLayout'
import MainLayout from '../layout/MainLayout'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import LazyLoadPage from '../components/lazyload-page/LazyLoadPage.jsx'
import {
  ActivationPage,
  ActivationPromptPage,
  BestSellingPage,
  // ChangePasswordPage,
  ErrorPage,
  EventsPage,
  FaqPage,
  HomePage,
  InboxPage,
  LoginPage,
  MainLayoutPage,
  MinimalLayoutPage,
  OrdersPage,
  PaymentMethodesPage,
  ProductDetailsPage,
  ProductsPage,
  ProfileContentPage,
  ProfilePage,
  PublicPage,
  RefundPage,
  SignUpPage,
  TrackOrderPage,
  UserAddressPage
} from './lazyComponents.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import PublicRoutes from './PublicRoutes.jsx'
// import ProfileContent from '../components/profile/ProfileContent.jsx'
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
          <Route path='activation/prompt' element={<LazyLoadPage component={<ActivationPromptPage />} />} />
          <Route path='activation/:activationToken' element={<LazyLoadPage component={<ActivationPage />} />} />
        </Route>
        <Route path='/' element={<LazyLoadPage component={<MainLayoutPage />} />}>
          <Route index element={<LazyLoadPage component={<HomePage />} />} />
          <Route path='best-selling' element={<LazyLoadPage component={<BestSellingPage />} />} />
          <Route path='products' element={<LazyLoadPage component={<ProductsPage />} />} />
          <Route path='product/:productName' element={<LazyLoadPage component={<ProductDetailsPage />} />} />
          <Route path='events' element={<LazyLoadPage component={<EventsPage />} />} />
          <Route path='faq' element={<LazyLoadPage component={<FaqPage />} />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='profile' element={<LazyLoadPage component={<ProfilePage />} />}>
              <Route index element={<LazyLoadPage component={<ProfileContentPage />} />} />
              <Route path='orders' element={<LazyLoadPage component={<OrdersPage />} />} />
              <Route path='refund' element={<LazyLoadPage component={<RefundPage />} />} />
              <Route path='track-order' element={<LazyLoadPage component={<TrackOrderPage />} />} />
              <Route path='payment-methodes' element={<LazyLoadPage component={<PaymentMethodesPage />} />} />
              {/* <Route path='change-password' element={<LazyLoadPage component={<ChangePasswordPage />} />} /> */}
              <Route path='user-address' element={<LazyLoadPage component={<UserAddressPage />} />} />
              <Route path='inbox' element={<LazyLoadPage component={<InboxPage />} />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </>
  )
)

export default router
