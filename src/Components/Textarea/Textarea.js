import React, { useState } from "react";
import styles from "./Textarea.module.css";

export const Textarea = () => {
  const [checked, setCkeched] = useState(false);

  const handleCheck = () => {
    setCkeched(false);
    setCkeched(!checked);
  };
  return (
    <div className={styles.textareaMain}>
      <textarea
        placeholder="Enter your note here..."
        className={styles.Textarea}
      />
      <div className={styles.groupButtons}>
        <div className={styles.colorButtons}>
          <button onClick={handleCheck} className={styles.pinkButton} />
          <button onClick={handleCheck} className={styles.blueVioletButton} />
          <button onClick={handleCheck} className={styles.yellowButton} />
          <button onClick={handleCheck} className={styles.blueButton} />
          <button onClick={handleCheck} className={styles.greenButton} />
        </div>
        <div>
          <button className={styles.addButton}>ADD</button>
        </div>
      </div>
    </div>
  );
};
