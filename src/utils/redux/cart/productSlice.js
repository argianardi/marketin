import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const result = await axios.get("https://fakestoreapi.com/products?10");
  return result.data;
});

const products = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default products.reducer;
