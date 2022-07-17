import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { CartItem } from "../../typings";
import Cookies from "js-cookie";

const savedCartItems = Cookies.get("cart");

export interface CartState {
  cartItems: CartItem[];
  loading: boolean;
  error: boolean;
}

const initialState: CartState = {
  cartItems: savedCartItems ? JSON.parse(savedCartItems) : [],
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    saveToCartStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    saveToCartSuccess: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existItem = state.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      state.cartItems = existItem
        ? state.cartItems.map((item) =>
            item.slug === existItem.slug ? newItem : item
          )
        : [newItem, ...state.cartItems];

      Cookies.set("cart", JSON.stringify(state.cartItems));

      state.loading = false;
      state.error = false;
    },
    saveToCartFailure: (state) => {
      state.error = true;
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      const cartItems = state.cartItems.filter(
        (item) => item.slug !== action.payload
      );
      state.cartItems = cartItems;
      Cookies.set("cart", JSON.stringify(cartItems));

      state.loading = false;
    },
  },
});

const { saveToCartStart, saveToCartSuccess, saveToCartFailure, removeCart } =
  cartSlice.actions;

export const addToCart = (dispatch: AppDispatch, cartItem: CartItem) => {
  if (!cartItem) {
    dispatch(saveToCartFailure());
  } else {
    dispatch(saveToCartStart());
    dispatch(saveToCartSuccess(cartItem));
  }
};

export const removeCartItem = (dispatch: AppDispatch, slug: string) => {
  dispatch(removeCart(slug));
};

export default cartSlice.reducer;
