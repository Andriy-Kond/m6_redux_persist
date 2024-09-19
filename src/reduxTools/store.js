import { configureStore } from "@reduxjs/toolkit";
import { clicksSlice } from "./clicksSlice";

import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "clicks",
  storage,
  whitelist: ["clicks"],
};

const persistedClicksReducer = persistReducer(
  persistConfig,
  clicksSlice.reducer,
);

export const store = configureStore({
  reducer: {
    clicksSlice: persistedClicksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
