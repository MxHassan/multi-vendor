import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentTheme } from './features/theme/themeSlice.js'
import { useEffect } from 'react'
import { setEventsTime } from './features/events/eventsSlice.js'
// import { useEffect } from 'react'
// import { GET_USER_URL } from './constants.js'

function App() {
  const theme = useSelector(selectCurrentTheme)

  const dispatch = useDispatch()
  // useEffect(() => {
  //   const getUser = async () => {
  //     await axiosApi.get(GET_USER_URL).then((res) => {
  //       console.log(res.data)
  //     })
  //   }
  //   // const { jwt } =
  //   getUser()
  // }, [])
  useEffect(() => {
    dispatch(setEventsTime(1.5))
  }, [dispatch])
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
