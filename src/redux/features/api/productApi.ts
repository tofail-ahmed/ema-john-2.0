import { baseApi } from "./baseApi";



export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags:["products"]
    }),
    deleteProduct:builder.mutation({
      query:(id)=>({
        url:`/products/${id}`,
        method:"DELETE"
      }),
      invalidatesTags:["products"]
    })
  }),
});
export const {useGetProductsQuery,useCreateProductMutation,useDeleteProductMutation}=productApi;
