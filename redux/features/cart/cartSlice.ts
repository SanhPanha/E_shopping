import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/lib/definitions";
import type { RootState } from "@/redux/store";

const initialState = {
  products: [] as ProductType[],
  totalPrice: 0,
  value: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.price;
      state.value += 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // find product by id
      const product = state.products.find(
        (product) => product.id === action.payload
      );

      state.totalPrice -= product?.price || 0;

      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.value -= 1;
    },

    increaseQuantity: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
    },
  },
});

// export actions
export const { addToCart, removeFromCart, increaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

// selectors
export const selectProducts = (state: RootState) => state.cart.products;
export const selectCount = (state: RootState) => state.cart.value;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
