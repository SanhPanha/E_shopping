// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
// initialize an empty api service that we'll inject endpoints into later as needed

// // Setting up prepareHeaders to include the token in the headers
// const baseQuery = fetchBaseQuery({
//     baseUrl: process.env.DJANGO_API_URL,
//     prepareHeaders: (headers, { getState }) => {
//       const token = (getState() as RootState).auth.token
//       // if we have a token, let's set the authorization header
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`)
//       }
//       return headers
//     },
//   })
  


export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_DJANGO_API_URL }),
  endpoints: () => ({}),
});
