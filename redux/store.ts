import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import userProfileSlice from "./features/userProfile/userProfileSlice";
import { ecommerceApi } from "./api";
import authSlice from "./features/auth/authSlice";
import loginSlice from "./features/login/loginSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [ecommerceApi.reducerPath]: ecommerceApi.reducer,
      cart: cartSlice,
      userProfile: userProfileSlice,
      login : loginSlice,
      auth: authSlice,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ecommerceApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
