import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Contact.module.scss";

import Card from "../../components/Card";

class Contact extends Component {
  render() {
    return (
      <div className={styles.Contact}>
        <Card title="Talk to Cold Wrecks">
          <div className={styles.InfoContainer}>
            <div className={styles.ContactInfo}>
              Booking: info@coldwrecks.com
            </div>
            <div className={styles.ContactInfo}>Twitter: @ColdWrecks</div>
            <div className={styles.ContactInfo}>Instagram: @ColdWrecks</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Contact;
