import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { CartItem } from "../../typings";

export interface CartState {
  cartItems: CartItem[];
  cartItemsQuantity: number;
  totalPrice: number
  loading: boolean;
  error: boolean;
}

const initialState: CartState = {
  cartItems: [],
  cartItemsQuantity: 0,
  totalPrice: 0,
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCartStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    addToCartSuccess: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existItem = state.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      state.cartItems = existItem
        ? state.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [newItem, ...state.cartItems];

      state.cartItemsQuantity = state.cartItems.reduce(
        (a, b) => a + b.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (a, b) => a + b.quantity * b.price,
        0
      );
      state.loading = false;
      state.error = false;
    },
    addToCartFailure: (state) => {
      state.error = true;
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      const cartItems = state.cartItems.filter(
        (item) => item.slug !== action.payload
      );
      state.cartItems = cartItems;

      state.cartItemsQuantity = state.cartItems.reduce(
        (a, b) => a + b.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (a, b) => a + b.quantity * b.price,
        0
      );

      state.loading = false;
    },
  },
});

const { addToCartStart, addToCartSuccess, addToCartFailure, removeCart } =
  cartSlice.actions;

export const addToCart = (dispatch: AppDispatch, cartItem: CartItem) => {
  if (!cartItem) {
    dispatch(addToCartFailure());
  } else {
    dispatch(addToCartStart());
    dispatch(addToCartSuccess(cartItem));
  }
};

export const removeCartItem = (dispatch: AppDispatch, slug: string) => {
  dispatch(removeCart(slug));
};

export default cartSlice.reducer;
