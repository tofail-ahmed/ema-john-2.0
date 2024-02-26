import { baseApi } from "./baseApi";



export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    getSingleProduct:builder.query({
      query:(id)=>({
        url:`/products/${id}`,
        method:"GET"
      })
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags:["products"]
    }),
    updateProduct:builder.mutation({
      query:({id,body})=>({
        url:`/products/${id}`,
        method:"PUT",
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
export const {useGetSingleProductQuery,useGetProductsQuery,useCreateProductMutation,useDeleteProductMutation,useUpdateProductMutation}=productApi;
