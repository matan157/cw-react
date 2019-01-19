import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Music.module.scss";

import Card from "../../components/Card";

class Music extends Component {
  render() {
    return (
      <div className={styles.Music}>
        <Card title="Listen to Cold Wrecks">
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
          <div className={styles.Playlist}>
            <iframe
              title="soundcloud embed"
              width="100%"
              height="450"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/689463174&color=%233dbde4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default Music;
