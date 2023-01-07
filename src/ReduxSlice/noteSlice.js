import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "todos",
  initialState: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    search: "",
  },
  reducers: {
    addNewNote: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    filterNote: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addNewNote, deleteNote, filterNote } = noteSlice.actions;
export default noteSlice.reducer;
