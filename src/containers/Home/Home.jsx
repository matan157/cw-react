import React, { Component } from "react";
import styles from "./Home.module.scss";

import Card from "../../components/Card";

class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        <Card title="January First Out Now">
          <div className={styles.Embeds}>
            <iframe
              title="spotify embed"
              src="https://open.spotify.com/embed/track/3sZtpZFrKTN45E13mn7kHX"
              width="340"
              height="340"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />

            <iframe
              title="bandcamp embed"
              style={{ border: 0, width: "340px", height: "340px" }}
              src="https://bandcamp.com/EmbeddedPlayer/album=173717983/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="http://coldwrecks.bandcamp.com/album/january-first">
                January First by Cold Wrecks
              </a>
            </iframe>
          </div>
          <div className={styles.Text}>
            Our second single "January First" off of our upcoming full-length
            "This Could Be Okay" is out now, available on all streaming
            services.
          </div>
        </Card>
      </div>
    );
  }
}

export default Home;
