import React, { Component } from "react";
import styles from "./Card.module.scss";

class Card extends Component {
  render() {
    return (
      <div className={styles.Content}>
          <div className={styles.Title}>{this.props.title}</div>
          <div className={styles.Info}>
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default Card;
