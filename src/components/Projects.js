import React, { Component } from "react";

import Typing from "react-typing-animation";
import ProjectList from "./ProjectList";

export default class Projects extends Component {
  render() {
    return (
      <div className="dp-projects-page">
        <Typing speed={10} cursorClassName="dp-cursor">
          <div className="dp-title">Personal projects</div>
        </Typing>

        <ProjectList />
      </div>
    );
  }
}
