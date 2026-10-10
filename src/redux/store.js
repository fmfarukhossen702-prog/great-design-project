import { configureStore } from "@reduxjs/toolkit";
import { dataStore } from "./dataStore";

export const store = configureStore({
  reducer: {
    dataStore : dataStore.reducer
  },
});
