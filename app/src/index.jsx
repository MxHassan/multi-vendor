import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <ThemeProvider value={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </Provider>
  // </React.StrictMode>
)
