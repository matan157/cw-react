import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavBar.module.scss";

class NavBar extends Component {
  state = {
    showItems: false
  };

  classToggle = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };
  render() {
    const { showItems } = this.state;
    return (
      <div className={styles.NavBar}>
        <NavLink
          to="/"
          className={`${styles.NavBarLink} ${styles.NavBarBrand}`}
        >
          Cold Wrecks
        </NavLink>
        <div
          className={`${styles.NavBarLink} ${styles.NavBarToggle}`}
          onClick={this.classToggle}
        >
          <FontAwesomeIcon icon="bars" />
        </div>
        <nav
          className={`${styles.NavBarItems} ${styles.NavBarItemsRight} ${
            showItems ? styles.Show : ""
          }`}
        >
          <NavLink to="/music" className={styles.NavBarLink}>
            music
          </NavLink>
          <a
            href="https://www.youtube.com/channel/UCDNlywj1_mxtWwyjB-VMLZA/videos"
            className={styles.NavBarLink}
          >
            videos
          </a>
          <a
            href="https://coldwrecks.bandcamp.com/merch"
            className={styles.NavBarLink}
          >
            shop
          </a>
          <NavLink to="contact" className={styles.NavBarLink}>
            contact
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default NavBar;
