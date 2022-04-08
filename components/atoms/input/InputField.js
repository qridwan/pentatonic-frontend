import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ title, placeholder, mb4, type }) => {
  return (
    <section
      className={styles.container}
      style={
        mb4 && {
          marginBottom: "24px",
        }
      }
    >
      {title && (
        <p className={styles.label}>
          {title} <span className="">:</span>
        </p>
      )}
      <input
        placeholder={placeholder}
        type={type ? type : "text"}
        className={styles.input}
      />
    </section>
  );
};

export default InputField;
