import { configureStore } from "@reduxjs/toolkit";
import { UseAPI } from "../Features/User";
let store = configureStore({
  reducer: {
    [UseAPI.reducerPath]: UseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UseAPI.middleware),
});

export default store;
