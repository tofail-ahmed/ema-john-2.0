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
  }),
});
export const {useGetProductsQuery,useCreateProductMutation}=productApi;
