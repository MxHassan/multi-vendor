import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    resetUser: (state) => {
      state.user = null
    }
  }
})
export default userSlice.reducer
export const { setUser, resetUser } = userSlice.actions
export const selectUser = (state) => state.user.user
