import { createSlice } from '@reduxjs/toolkit'
const navSlice = createSlice({
  name: 'nav',
  initialState: { openNav: false },
  reducers: {
    setOpenNav: (state, action) => {
      state.openNav = action.payload
    }
  }
})
export const { setOpenNav, setCloseNav } = navSlice.actions
export default navSlice.reducer
export const selectNavState = (state) => state.nav.openNav
