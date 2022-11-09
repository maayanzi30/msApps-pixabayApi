import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  id: "",
  tags: "",
  views: "",
  downloads: "",
  collections: "",
  webformatURL: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.id = action.payload.id;
      state.tags = action.payload.tags;
      state.collections = action.payload.collections;
      state.downloads = action.payload.downloads;
      state.views = action.payload.views;
      state.webformatURL = action.payload.webformatURL;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
