import { apiSlice } from '../../app/api/apiSlice'
import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
// const userAdapter = createEntityAdapter({})
// const initialState = userAdapter.getInitialState()
const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: '/users/user',
        method: 'GET'
      })
      // transformResponse: (resData) => {
      //   const user = resData.data.user
      //   return userAdapter.setOne(initialState, user)
      // }
    })
  })
})
export const { useGetUserDetailsQuery } = userApiSlice
// export const selectUserResult = userApiSlice.endpoints.userDetails.select()
// const selectUserData = createSelector(
//   selectUserResult
//   // (userResult) => userResult.data
// )
// export const { selectUser } = userAdapter.getSelectors(
//   (state) => selectUserData(state) ?? initialState
// )
