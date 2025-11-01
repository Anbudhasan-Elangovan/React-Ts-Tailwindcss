// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: {
    ...rootReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
