import React, { Component } from "react";
import styles from "./ResponsiveEmbed.module.scss";

class ResponsiveEmbed extends Component {
  render() {
    return <div className={styles.Wrapper}>{this.props.children}</div>;
  }
}

export default ResponsiveEmbed;
