import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  productList: [],
  totalPrice: 0,
};

export const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});
