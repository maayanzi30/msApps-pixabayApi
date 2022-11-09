import React, { useState } from "react";

const Dropdown = ({ options, onQuery, placeholder }) => {
  const [select, setSelect] = useState("");

  const changeQueryHandler = (e) => {
    setSelect(e.target.value);
    onQuery(e.target.value);
  };
  return (
    <select value={select} onChange={changeQueryHandler}>
      <option value="" disabled defaultValue>
        {placeholder}
      </option>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

export default Dropdown;
