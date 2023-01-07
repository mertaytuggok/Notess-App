import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NoteList.module.css";
import { deleteNote } from "../../ReduxSlice/noteSlice";
import CloseSvg from "../../Asset/Close.svg";

export const NoteList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);

  console.log(items);
  return (
    <div className={styles.listCardContainer}>
      {items.map((item) => (
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
