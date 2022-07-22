import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { Product } from "../../typings";
import Cookies from "js-cookie";
import { getAllProduct } from "../../api/product";

const savedCartItems = Cookies.get("cart");

export interface ProductState {
  products: Product[];
  loading: boolean;
  error:string;
}

const initialState: ProductState = {
  products:[],
  loading: false,
  error:''
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    fetchProductStart: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductFailure: (state,action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const { fetchProductStart,fetchProductSuccess,fetchProductFailure} =
  productSlice.actions;

export const fetchProduct = async (dispatch: AppDispatch) => {
  dispatch(fetchProductStart())
  try{
    const products = await getAllProduct()
    dispatch(fetchProductSuccess(products))
  }
  catch(err){
    dispatch(fetchProductFailure(err))
    console.error(err)
  }
};

export default productSlice.reducer;
