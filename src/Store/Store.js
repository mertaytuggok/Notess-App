import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../ReduxSlice/noteSlice";

export const Store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
