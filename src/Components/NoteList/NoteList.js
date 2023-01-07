import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NoteList.module.css";
import { deleteNote } from "../../ReduxSlice/noteSlice";
import CloseSvg from "../../Asset/Close.svg";

export const NoteList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const searchText = useSelector((state) => state.todos.search);

  const filtered = items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className={styles.listCardContainer}>
      {filtered.map((item) => (
        <>
          {" "}
          <div
            key={item.id}
            style={{ backgroundColor: `${item.color}` }}
            className={styles.noteCard}
          >
            <span> {item.note} </span>

            <button
              className={styles.deleteButton}
              onClick={() => dispatch(deleteNote(item.id))}
            >
              <img src={CloseSvg} />
            </button>
          </div>
        </>
      ))}
    </div>
  );
};
