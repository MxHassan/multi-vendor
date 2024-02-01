import { RouterProvider } from 'react-router-dom';
import router from './routes/index.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Provider>
    </>
  );
}

export default App;
