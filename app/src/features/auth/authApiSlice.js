import { apiSlice } from '../../app/api/apiSlice'
import { REGISTER_URL } from '../../constants'
import { resetUser } from '../user/userSlice'
import { logOut } from './authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // signup: builder.mutation({
    //   query: (avatar) => {
    //     let bodyFormData = new FormData()
    //     // bodyFormData.append('firstName', credentials.firstName)
    //     // bodyFormData.append('lastName', credentials.lastName)
    //     // bodyFormData.append('email', credentials.email)
    //     // bodyFormData.append('password', credentials.password)
    //     // bodyFormData.append('confirmPassword', credentials.confirmPassword)
    //     bodyFormData.append('file', avatar)
    //     // console.log(bodyFormData, avatar)
    //     return {
    //       url: REGISTER_URL,
    //       method: 'POST',
    //       body: { ...bodyFormData }
    //     }
    //   } 
    // }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        credentials: 'include',
        body: { ...credentials }
      })
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled.then(() => {
            dispatch(logOut())
            dispatch(resetUser())
            // dispatch(apiSlice.util.resetApiState())
          })
        } catch (error) {
          console.log(error)
        }
      }
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET'
      })
    })
  })
})
export const { useSignupMutation, useLoginMutation, useSendLogoutMutation, useRefreshMutation } = authApiSlice
