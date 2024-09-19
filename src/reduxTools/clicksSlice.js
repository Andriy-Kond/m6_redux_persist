import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clicks: 0,
};

export const clicksSlice = createSlice({
  name: "clicksSlice",
  initialState,
  reducers: {
    clicksCounter: (state, action) => {
      state.clicks += action.payload;
    },
  },
});

export const { clicksCounter } = clicksSlice.actions;
