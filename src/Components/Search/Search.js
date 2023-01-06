import React from "react";
import styles from "./Search.module.css";

export const Search = () => {
  return (
    <div>
      <input type="text" placeholder="Search..." className={styles.Search} />
    </div>
  );
};
