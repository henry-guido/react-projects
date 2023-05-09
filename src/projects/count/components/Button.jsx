import React from "react";
import styles from "../styles/button.module.css";

export const Button = ({ text, isButtonOfClick, handleClick }) => {
  return (
    <button
      className={`${styles.button} ${isButtonOfClick
        ? styles.click
        : styles.reset}`
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
