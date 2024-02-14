import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import authReducer from '../features/auth/authSlice'
import navReducer from '../features/nav/navSlice'
import productReducer from '../features/product/productSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
// import userReducer from '../features/user/userSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    nav: navReducer,
    product: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})
setupListeners(store.dispatch)
