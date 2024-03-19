import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

const productsAdapter = createEntityAdapter({})

const initialState = productsAdapter.getInitialState()
  
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/product/all-products',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError
      },
      keepUnusedDataFor: 30,
      transformResponse: (resData) => {
        if (resData.success) {
          return productsAdapter.setAll(initialState, resData.products)
        }
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [{ type: 'Product', id: 'LIST' }, ...result.ids.map((id) => ({ type: 'Product', id }))]
        } else return [{ type: 'Product', id: 'LIST' }]
      }
    })
  })
})

export const { useGetProductsQuery } = productsApiSlice

export const selectProductsResult = productsApiSlice.endpoints.getProducts.select()

const selectProductsData = createSelector(selectProductsResult, (productsResult) => productsResult.data)

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductsIds,
  selectEntities: selectAllProductsData
} = productsAdapter.getSelectors((state) => selectProductsData(state) ?? initialState)
