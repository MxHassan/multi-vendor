import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import LazyLoadPage from '../components/lazyload-page/LazyLoadPage.jsx'
import {
  ActivationPage,
  ActivationPromptPage,
  BestSellingPage,
  CheckoutPage,
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
  ShopLoginPage,
  ShopPublicPage,
  ShopSignupPage,
  SignUpPage,
  TrackOrderPage,
  UserAddressPage
} from './lazyComponents.jsx'
import PublicRoutes from './PublicRoutes.jsx'

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
        <Route path='shop'>
          <Route index element={<LazyLoadPage component={<ShopPublicPage />} />} />
          <Route path='signup' element={<LazyLoadPage component={<ShopSignupPage />} />} />
          <Route path='login' element={<LazyLoadPage component={<ShopLoginPage />} />} />
        </Route>
        <Route path='/' element={<LazyLoadPage component={<MainLayoutPage />} />}>
          <Route index element={<LazyLoadPage component={<HomePage />} />} />
          <Route path='best-selling' element={<LazyLoadPage component={<BestSellingPage />} />} />
          <Route path='products' element={<LazyLoadPage component={<ProductsPage />} />} />
          <Route path='product/:productName' element={<LazyLoadPage component={<ProductDetailsPage />} />} />
          <Route path='events' element={<LazyLoadPage component={<EventsPage />} />} />
          <Route path='faq' element={<LazyLoadPage component={<FaqPage />} />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='checkout' element={<LazyLoadPage component={<CheckoutPage />} />} />
          </Route>
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
