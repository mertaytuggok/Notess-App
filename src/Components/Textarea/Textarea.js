import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../../ReduxSlice/noteSlice";
import styles from "./Textarea.module.css";

export const Textarea = () => {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.length >= 5 && color) {
      dispatch(addNewNote({ id: nanoid(), note, color }));
      setNote("");
      setColor("");
    } else {
      console.log(note.length);
    }
  };

  return (
    <div className={styles.textareaMain}>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={styles.Textarea}
        />
        <div className={styles.groupButtons}>
          <div className={styles.colorButtons}>
            <button
              value={`pink`}
              onClick={(e) => setColor(e.target.value)}
              className={styles.pinkButton}
            />
            <button
              value={`blueviolet`}
              onClick={(e) => setColor(e.target.value)}
              className={styles.blueVioletButton}
            />
            <button
              value={`yellow`}
              onClick={(e) => setColor(e.target.value)}
              className={styles.yellowButton}
            />
            <button
              value={`blue`}
              onClick={(e) => setColor(e.target.value)}
              className={styles.blueButton}
            />
            <button
              value={`green`}
              onClick={(e) => setColor(e.target.value)}
              className={styles.greenButton}
            />
          </div>
          <div>
            <button className={styles.addButton}>ADD</button>
          </div>
        </div>
      </form>
    </div>
  );
};
