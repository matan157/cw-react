import React, { Component } from "react";
import styles from "./Footer.module.scss";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>{`Copyright 2019 Cold Wrecks`}</footer>
    );
  }
}

export default Footer;
