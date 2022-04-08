import React from "react";
import styles from "./SelectField.module.css";

const SelectField = ({ title, id, options, placeholder }) => {
  return (
    <div className={styles.container}>
      {title && (
        <p className={styles.label}>
          {title} <span>:</span>
        </p>
      )}
      <select placeholder={placeholder} className={styles.select}>
        <option className={styles.selected} value="" disabled selected>
          {placeholder}
        </option>
        {options.map((value, index) => (
          <option key={value.value} value={value.value}>
            {value.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
