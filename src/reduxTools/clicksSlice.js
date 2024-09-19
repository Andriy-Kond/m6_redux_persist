import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const initialState = {
  clicks: 0,
  a: 5,
  b: 10,
  c: 100500,
};

const clicksSlice = createSlice({
  name: "clicks",
  initialState,
  reducers: {
    clicksCounter: (state, action) => {
      state.clicks += action.payload;
    },
  },
});

export const { clicksCounter } = clicksSlice.actions;

// web local storage
const persistConfig = {
  key: "clicks",
  storage,
  whitelist: ["clicks"],
};

export const persistedClicksReducer = persistReducer(
  persistConfig,
  clicksSlice.reducer,
);

// Selectors
export const getClicksQty = state => state.clicksSlice.clicks;
