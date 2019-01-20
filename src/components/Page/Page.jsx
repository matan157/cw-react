import React, { Component } from "react";
import styles from "./Page.module.scss";

class Page extends Component {
  render() {
    return (
      <div className={`${styles.Page} ${this.props.className} `}>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
