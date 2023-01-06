import React from "react";
import styles from "./NoteList.module.css";

export const NoteList = () => {
  return (
    <div className={styles.listCardContainer}>
      <div className={styles.noteCard}>Note 1</div>
      <div className={styles.noteCard}>Note 2</div>
      <div className={styles.noteCard}>Note 3</div>
    </div>
  );
};
