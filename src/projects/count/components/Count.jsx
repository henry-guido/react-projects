import React from "react";
import styles from '../styles/count.module.css'

export const Count = ({ text }) => {
  return (
    <div className={styles.count}>{text}</div>
  );
};
