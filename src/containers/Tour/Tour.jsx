import React, { Component } from "react";

import styles from "./Tour.module.scss";

import Card from "../../components/Card";
import Page from "../../components/Page";

class Tour extends Component {
  componentDidMount() {
    var bit_js = document.createElement("script");
    bit_js.type = "text/javascript";
    bit_js.src = "https://widget.bandsintown.com/main.min.js";
    bit_js.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(bit_js);
  }
  render() {
    return (
      <Page className={styles.Tour}>
        <Card title="See Cold Wrecks Play">
          <a
            href="#"
            class="bit-widget-initializer"
            data-artist-name="Cold Wrecks"
            data-display-local-dates="false"
            data-display-past-dates="false"
            data-auto-style="false"
            data-text-color="#ffffff"
            data-link-color="#3dbde4"
            data-background-color="rgba(0,0,0,0)"
            data-display-limit=""
            data-link-text-color="#FFFFFF"
            data-display-lineup="true"
            data-separator-color=""
          />
        </Card>
      </Page>
    );
  }
}

export default Tour;
