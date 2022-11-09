import React from "react";
import Image from "./Image";
import styles from "../../styles/Images.module.css";

const ImagesResult = ({ images, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.imageResultWrapper}>
      <ul className={styles.main}>
        {images.map((image, index) => (
          <li key={index} className={styles.listItem}>
            <Image image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesResult;
