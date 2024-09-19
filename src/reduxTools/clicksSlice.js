import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clicks: 0,
  a: 5,
  b: 10,
  c: 100500,
};

export const clicksSlice = createSlice({
  name: "clicks",
  initialState,
  reducers: {
    clicksCounter: (state, action) => {
      state.clicks += action.payload;
    },
  },
});

export const { clicksCounter } = clicksSlice.actions;
