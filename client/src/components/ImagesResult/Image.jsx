import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/containers/Modal/modalSlice";
import styles from "../../styles/Image.module.css";

const Image = ({ image }) => {
  const dispatch = useDispatch();

  if (image && image.largeImageURL) {
    return (
      <>
        <div
          className={styles.openModalBtn}
          style={{
            backgroundImage: `url(${image.largeImageURL})`,
          }}
          onClick={() =>
            dispatch(
              openModal({
                id: image.id,
                tags: image.tags,
                views: image.views,
                downloads: image.downloads,
                collections: image.collections,
                webformatURL: image.webformatURL,
              })
            )
          }
        ></div>
      </>
    );
  }
};

export default Image;
