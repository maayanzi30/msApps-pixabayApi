import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navbarLinks}>
          <Link to="/">
            <img
              className={styles.logo}
              src="https://msapps.mobi/wp-content/uploads/2018/01/msapps_map.png"
              alt="logo"
            />
          </Link>

          <a
            className={styles.pix}
            href="https://www.pixabay.com"
            target="_blank"
            rel="noreferrer"
          >
            Pixabay
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
