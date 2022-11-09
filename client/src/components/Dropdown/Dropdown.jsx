import React, { useState } from "react";

import styles from "../../styles/Dropdown.module.css";

const Dropdown = ({ options, onQuery }) => {
  const [select, setSelect] = useState("");

  const changeQueryHandler = (e) => {
    setSelect(e.target.value);
    onQuery(e.target.value);
  };
  return (
    <div className={styles.dropdownContainer}>
      <select value={select} onChange={changeQueryHandler}>
        <option value="" disabled defaultValue>
          Please select a category ...
        </option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
