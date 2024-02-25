import { baseApi } from "./baseApi";



export const productApi=baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    createProduct:builder.mutation({
      query:(body)=>({
        url:"/products",
        method:"POST",
        body,
      })
    })
  }),
})
export const {useGetProductsQuery,useCreateProductMutation}=productApi;
