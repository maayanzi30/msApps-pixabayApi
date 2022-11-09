import React, { useEffect, useState } from "react";
import axios from "axios";
import Buttons from "../Buttons/Buttons";
import styles from "../../styles/Search.module.css";

const Search = ({ onSelect }) => {
  const SERVER_URL = "http://localhost:5002";

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);

  const onPrev = async () => {
    const res = await axios.get(`${SERVER_URL}/prev`);
    setIndex(index - 9);
    onSelect(res.data.images);
  };

  const onNext = async () => {
    const res = await axios.get(`${SERVER_URL}/next`);
    setIndex(index + 9);
    onSelect(res.data.images);
  };

  const onSortSelected = async (value) => {
    const res = await axios.get(`${SERVER_URL}/sort/?sortBy=${value}`);
    setIndex(0);

    setIndex(index + 9);
    onSelect(res.data.images);
  };

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      if (query.length > 0) {
        const res = await axios.get(`${SERVER_URL}?value=${query}`);
        setIndex(0);
        setLength(res.data.length);
        onSelect(res.data.images);
      }
      setLoading(false);
    };
    fetchImages();
    return setQuery("");
  }, [onSelect, query]);

  return (
    <div className={styles.buttonWrapper}>
      <Buttons
        onPrev={onPrev}
        onQuery={(value) => setQuery(value)}
        onSortSelected={(value) => onSortSelected(value)}
        onNext={onNext}
        index={index}
        length={length}
      />
    </div>
  );
};

export default Search;
