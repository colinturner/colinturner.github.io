import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faGraduationCap,
  faTools,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Home from "./components/Home";
import Education from "./components/Education";

import "./App.scss";
import Work from "./components/Work";
import Projects from "./components/Projects";

library.add(fab);

class App extends Component {
  componentDidMount() {
    document.title = "Colin Turner";
  }

  render() {
    return (
      <div className="app">
        <Tabs className="dp-tab-navigation">
          <TabList className="dp-icon-navigation-list">
            <Tab className="icon dp-icon-navigation-list-item">
              <FontAwesomeIcon icon={faHome} />
            </Tab>
            <Tab className="icon dp-icon-navigation-list-item dp-graduation">
              <FontAwesomeIcon icon={faGraduationCap} />
            </Tab>
            <Tab className="icon dp-icon-navigation-list-item">
              <FontAwesomeIcon icon={faBriefcase} />
            </Tab>
            <Tab className="icon dp-icon-navigation-list-item">
              <FontAwesomeIcon icon={faTools} />
            </Tab>
          </TabList>

          <div className="dp-content">
            <TabPanel className="dp-home">
              <Home />
            </TabPanel>

            <TabPanel>
              <Education />
            </TabPanel>

            <TabPanel>
              <Work />
            </TabPanel>

            <TabPanel>
              <Projects />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
