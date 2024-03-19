import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import React from 'react'
import { productsApiSlice } from './features/products/productsApiSlice.js'

// store.dispatch(productsApiSlice.endpoints.getProducts.initiate())
// store.dispatch(categoriesApiSlice.endpoints.getCategories.initiate())
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
)
