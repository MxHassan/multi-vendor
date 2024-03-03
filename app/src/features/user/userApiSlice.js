import { apiSlice } from '../../app/api/apiSlice'
import { resetUser, setUser } from './userSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: () => ({
        url: '/users/user',
        method: 'GET'
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled.then((result) => {
            dispatch(setUser(result.data))
          })
        } catch (error) {
          if (error?.error?.status === 403) dispatch(resetUser())
        }
      }
    })
  })
})
export const { useGetUserMutation } = userApiSlice
