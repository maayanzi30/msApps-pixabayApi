import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./containers/Modal/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});
