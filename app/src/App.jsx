import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { useEffect } from 'react'
// import axiosApi from './api/axios.js'
// import { GET_USER_URL } from './constants.js'

function App() {
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
        theme='colored'
      />
    </>
  )
}

export default App
