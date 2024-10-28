import { importWithPreload } from '../utils/lazyLoadFuncs'
export const HomePage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'HomePage' */ '../views/home/Home')
)

export const ActivationPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'ActivationPage' */ '../views/activation/Activation')
)
export const ActivationPromptPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'ActivationPromptPage' */ '../views/activation-prompt/ActivationPrompt')
)
export const BestSellingPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'BestSellingPage' */ '../views/best-selling/BestSelling')
)
export const ErrorPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'ErrorPage' */ '../views/errorpage/ErrorView')
)
export const LoginPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'LoginPage' */ '../views/login/Login')
)
export const EventsPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'EventsPage' */ '../views/events/Events')
)
export const FaqPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'FaqPage' */ '../views/faq/Faq')
)
export const ProductDetailsPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'ProductDetailsPage' */ '../views/product-details/ProductDetails')
)
export const ProductsPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'ProductsPage' */ '../views/products/Products')
)
export const CheckoutPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'CheckoutPage' */ '../views/checkout/Checkout')
)
export const ProfilePage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'ProfilePage' */ '../views/profile/Profile')
)
export const ProfileContentPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'ProfileContentPage' */ '../components/profile/ProfileContent')
)
export const OrdersPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'OrdersPage' */ '../components/profile/Orders')
)
export const TrackOrderPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'TrackOrderPage' */ '../components/profile/TrackOrder')
)
export const PaymentMethodesPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'PaymentMethodesPage' */ '../components/profile/PaymentMethodes')
)
export const RefundPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'RefundPage' */ '../components/profile/Refund')
)
export const InboxPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'InboxPage' */ '../components/profile/Inbox')
)
export const ChangePasswordPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'ChangePasswordPage' */ '../components/profile/ChangePassword')
)
export const UserAddressPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'UserAddressPage' */ '../components/profile/UserAddress')
)
export const PublicPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'PublicPage' */ '../views/public-page/Public')
)
export const SignUpPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'SignUpPage' */ '../views/signup/SignUp')
)
export const MainLayoutPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'MainLayout' */ '../layout/MainLayout')
)
export const MinimalLayoutPage = importWithPreload(() =>
  // webpackChunkName: To give chunk a specific name instead a random generated one
  import(/* webpackChunkName: 'MinimalLayout' */ '../layout/MinimalLayout')
)
