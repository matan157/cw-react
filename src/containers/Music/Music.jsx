import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Music.module.scss";

import Card from "../../components/Card";

class Music extends Component {
  render() {
    return (
      <div className={styles.Music}>
        <Card title="Listen to Cold Wrecks">
          <div className={styles.Playlist}>
            <iframe
              title="releases"
              src="https://open.spotify.com/embed/user/matan.uchen/playlist/6y4TvzoQTTrIdIYoLADRJ9"
              height="600"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </div>
          <div className={styles.MusicLinks}>
            <a href="https://coldwrecks.bandcamp.com/releases">
              <FontAwesomeIcon icon={["fab", "bandcamp"]} /> Bandcamp
            </a>
            <a href="https://open.spotify.com/artist/66mvkoeTssT7z9uSV0OEy7?si=jSL0kvCvSo-wFwwtVaeagQ">
              <FontAwesomeIcon icon={["fab", "spotify"]} /> Spotify
            </a>
            <a href="https://itunes.apple.com/us/artist/cold-wrecks/1123737395">
              <FontAwesomeIcon icon={["fab", "apple"]} /> Apple Music
            </a>
          </div>
        </Card>
      </div>
    );
  }
}

export default Music;
