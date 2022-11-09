import React, { useState } from "react";
import styles from "../../styles/Buttons.module.css";
import Dropdown from "../Dropdown/Dropdown";
import SearchComponent from "../SearchComponent/SearchComponent";

const Buttons = ({ onPrev, onNext, onQuery, index, length }) => {
  const [toggleCategories, setToggleCategories] = useState(false);

  const categories = [
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
  ];

  const prevHandler = () => {
    onPrev();
  };
  const nextHandler = () => {
    onNext();
  };

  const handleQuery = (value) => {
    onQuery(value);
  };
  const changeToggleHandler = () => {
    setToggleCategories(!toggleCategories);
  };

  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.buttonPrev}
        disabled={index === 0}
        onClick={prevHandler}
      >
        prev
      </button>
      <button onClick={changeToggleHandler}>switch</button>
      {toggleCategories && (
        <Dropdown options={categories} onQuery={handleQuery} />
      )}
      {!toggleCategories && <SearchComponent onQuery={handleQuery} />}
      <button
        className={styles.buttonNext}
        disabled={length === 0 || index + 9 > length}
        onClick={nextHandler}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
