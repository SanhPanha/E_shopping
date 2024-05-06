import { ecommerceApi } from "../api";

export const productApi = ecommerceApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    //                        <result type,         args type>
    getProducts: builder.query<any, { page: number; pageSize: number }>({
      query: ({ page = 1, pageSize = 10 }) =>
        `api/products/?page=${page}&page_size=${pageSize}`,
    }),
    // get single product
    getProductById: builder.query<any, number>({
      query: (id) => `api/products/${id}/`,
    }),

    // create a product
    createProduct: builder.mutation<
      any,
      { newProduct: object; accessToken: string }
    >({
      query: ({ newProduct, accessToken }) => ({
        url: "/api/products/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: newProduct,
      }),
    }),

    // update a product
    updateProduct: builder.mutation<
      any,
      { id: number; updatedProduct: object; accessToken: string }
    >({
      query: ({ id, updatedProduct, accessToken }) => ({
        url: `/api/products/${id}/`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: updatedProduct,
      }),
    }),

    // delete a product
    deleteProduct: builder.mutation<any, { id: number; accessToken: string }>({
      query: ({ id, accessToken }) => ({
        url: `/api/products/${id}/`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
});

// Export hooks for usage in components, which are
export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productApi;