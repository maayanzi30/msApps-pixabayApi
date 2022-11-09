import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import SearchComponent from "../SearchComponent/SearchComponent";
import styles from "../../styles/Buttons.module.css";

const Buttons = ({
  onPrev,
  onNext,
  onQuery,
  index,
  length,
  onSortSelected,
}) => {
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

  const sortBy = ["Downloads", "Id", "Likes"];

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

  const handleSortSelected = (value) => {
    value = value.toLowerCase();
    onSortSelected(value);
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
        <div className={styles.dropdownContainer}>
          <Dropdown
            options={categories}
            onQuery={handleQuery}
            placeholder={"Please select a category ..."}
          />
        </div>
      )}
      {!toggleCategories && <SearchComponent onQuery={handleQuery} />}
      <div className={styles.sortByDropdown}>
        <Dropdown
          options={sortBy}
          onQuery={handleSortSelected}
          placeholder={"Sort by"}
        />
      </div>
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
