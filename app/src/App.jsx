import { RouterProvider, useLocation } from 'react-router-dom'
import router from './routes/index.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentTheme } from './features/theme/themeSlice.js'
// import { useEffect } from 'react'
// import axiosApi from './api/axios.js'
// import { GET_USER_URL } from './constants.js'

function App() {
  const theme = useSelector(selectCurrentTheme)
  // useEffect(() => {
  //   const getUser = async () => {
  //     await axiosApi.get(GET_USER_URL).then((res) => {
  //       console.log(res.data)
  //     })
  //   }
  //   // const { jwt } =
  //   getUser()
  // }, [])
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme ? 'dark' : 'light'}
      />
    </>
  )
}

export default App
