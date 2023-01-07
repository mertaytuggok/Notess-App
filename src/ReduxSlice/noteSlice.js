import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        note: "Hello Word",
        color: "red",
      },
      { id: 2, note: "Learn React", color: "blueviolet" },
    ],
  },
  reducers: {
    addNewNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { addNewNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
