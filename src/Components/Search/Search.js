import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Search.module.css";
import { filterNote } from "../../ReduxSlice/noteSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.todos.search);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className={styles.Search}
        value={search}
        onChange={(e) => dispatch(filterNote(e.target.value))}
      />
    </div>
  );
};
