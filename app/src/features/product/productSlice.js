import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productPreview: false,
    productPreviewData: {}
  },
  reducers: {
    setProductPreviewData: (state, action) => {
      state.productPreviewData = action.payload
    },
    resetProductPreviewData: (state) => {
      state.productPreviewData = {}
    }
  }
})
export const { setProductPreviewData, resetProductPreviewData } = productSlice.actions
export default productSlice.reducer
export const selectProductPreviewData = (state) => state.product.productPreviewData
