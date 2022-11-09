import React, { useRef } from "react";

const SearchComponent = ({ onQuery }) => {
  const query = useRef(null);
  const onButtonClick = () => {
    const value = query.current.value;
    onQuery(value);
  };
  return (
    <>
      <input ref={query} type="text" placeholder="Search ..." />
      <button onClick={onButtonClick}>Go</button>
    </>
  );
};

export default SearchComponent;
