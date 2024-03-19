import { apiSlice } from '../../app/api/apiSlice'
import { REGISTER_URL } from '../../constants'
import { resetUser } from '../user/userSlice'
import { clearCredentials, logOut } from './authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      // async queryFn(signUpData, _queryApi, _extraOptions, fetchWithBQ) {
      //   // upload with multipart/form-data
      //   // console.log('this is signup data', signUpData)
      //   const response = await fetchWithBQ(
      //     {
      //       url: '/users/create-user',
      //       method: 'POST',
      //       body: signUpData
      //     },
      //     _queryApi,
      //     _extraOptions
      //   )
      //   if (response.error) throw response.error
      //   return response.data ? { data: response.data } : { error: response.error }
      // }
      query: (signUpData) => ({
        url: '/users/create-user',
        method: 'POST',
        body: signUpData
      })
    }),
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
            // dispatch(clearCredentials())
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
export const { useSignUpMutation, useLoginMutation, useSendLogoutMutation, useRefreshMutation } = authApiSlice
