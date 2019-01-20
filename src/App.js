import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Music from "./containers/Music";
import Tour from "./containers/Tour";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <NavBar />
          <div className={styles.Content}>
            <Route path="/music" exact component={Music} />
            <Route path="/tour" exact component={Tour} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Home} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
