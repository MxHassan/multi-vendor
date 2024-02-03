import { apiSlice } from '../../app/api/apiSlice'
import { logOut } from './authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
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
          await queryFulfilled
          dispatch(logOut())
          dispatch(apiSlice.util.resetApiState())
        } catch (error) {
          console.log(error)
        }
      }
    }),
    refresh: builder.query({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET'
      })
    })
  })
})
export const { useLoginMutation, useSendLogoutMutation, useRefreshQuery } =
  authApiSlice
