import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  token: localStorage.getItem('auth') || null,
  isAuthenticated: localStorage.getItem('auth') ? true : false
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload
      state.token = accessToken
      state.isAuthenticated = true
      localStorage.setItem('auth', accessToken)
    },
    clearCredentials: (state) => {
      state.token = null
      state.isAuthenticated = false
      localStorage.removeItem('auth')
    },
    logOut: (state) => {
      state.token = null
      state.isAuthenticated = false
      localStorage.removeItem('auth')
    }
  }
})
export const { setCredentials, clearCredentials, logOut } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token
