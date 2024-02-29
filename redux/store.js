"use client";

import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
  },
});

export default store;
