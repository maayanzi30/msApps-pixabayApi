import React, { useState } from "react";
import Search from "../Search/Search";
import Images from "../ImagesResult/ImagesResult";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

const Home = () => {
  const [images, setImages] = useState([]);
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <>
      <Search onSelect={(results) => setImages(results)} />
      <Images images={images} />

      {isOpen && <Modal />}
    </>
  );
};

export default Home;
