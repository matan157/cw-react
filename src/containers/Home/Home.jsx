import React, { Component } from "react";
import styles from "./Home.module.scss";

import Card from "../../components/Card";

import jan_first from "../../assets/jan_first.jpg";

class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        <Card title="January First Out Now">
          <div className={styles.Embeds}>
            <div>
              <img src={jan_first} alt="january first single art" />
            </div>
            <div>
              <iframe
                title="bandcamp embed"
                style={{ border: 0, width: "100%", height: "120px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=173717983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/"
                seamless
              >
                <a href="http://coldwrecks.bandcamp.com/album/january-first">
                  January First by Cold Wrecks
                </a>
              </iframe>
            </div>
          </div>
          <div className={styles.Text}>
            Our second single "January First" off of our upcoming full-length
            "This Could Be Okay" is out now, available on all streaming
            services. Art by{" "}
            <a href="https://www.mikaelajanepalermo.com/">
              Mikaela Jane Palermo
            </a>
          </div>
        </Card>
      </div>
    );
  }
}

export default Home;
