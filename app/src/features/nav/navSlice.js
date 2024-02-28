import { createSlice } from '@reduxjs/toolkit'
const navSlice = createSlice({
  name: 'nav',
  initialState: {
    openNav: false,
    navLinkValue: '',
    mobileNav: false,
    navActive: false,
    openCart: false,
    openWishlist: false
  },
  reducers: {
    setOpenNav: (state, action) => {
      state.openNav = action.payload
    },
    setNavLinkValue: (state, action) => {
      state.navLinkValue = action.payload
    },
    setMobileNav: (state, action) => {
      state.mobileNav = action.payload
    },
    setNavActive: (state, action) => {
      state.navActive = action.payload
    },
    setOpenCart: (state) => {
      state.openCart = true
    },
    setCloseCart: (state) => {
      state.openCart = false
    },
    setOpenWishlist: (state) => {
      state.openWishlist = true
    },
    setCloseWishlist: (state) => {
      state.openWishlist = false
    }
  }
})
export const {
  setOpenNav,
  setMobileNav,
  setNavActive,
  setOpenCart,
  setCloseCart,
  setOpenWishlist,
  setCloseWishlist,
  setNavLinkValue
} = navSlice.actions
export default navSlice.reducer
export const selectOpenNav = (state) => state.nav.openNav
export const selectNavLinkValue = (state) => state.nav.navLinkValue
export const selectDropDown = (state) => state.nav.dropDown
export const selectMobileNav = (state) => state.nav.mobileNav
export const selectNavActive = (state) => state.nav.navActive
export const selectOpenCart = (state) => state.nav.openCart
export const selectOpenWishlist = (state) => state.nav.openWishlist
