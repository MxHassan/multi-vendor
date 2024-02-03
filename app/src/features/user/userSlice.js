import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isAuthenticated: false
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    }
  }
})
export const { setUser } = userSlice.actions
export default userSlice.reducer
