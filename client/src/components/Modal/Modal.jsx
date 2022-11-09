import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/containers/Modal/modalSlice";

import styles from "../../styles/Modal.module.css";

const Modal = () => {
  const dispatch = useDispatch();
  const { id, tags, views, downloads, collections, webformatURL } = useSelector(
    (store) => {
      return store.modal;
    }
  );
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            X
          </button>
        </div>
        <div className={styles.modalInfo}>
          <div>
            <img className={styles.modalImage} src={webformatURL} alt={id} />
            <h3>Image Info: </h3>
            <p>Tags: {tags}</p>
            <p>View: {views}</p>
            <p>Downloads: {downloads}</p>
            <p>Collection: {collections}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
