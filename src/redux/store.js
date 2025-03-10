import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice.js";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
