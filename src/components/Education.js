import React, { Component } from "react";

import Typing from "react-typing-animation";
import EducationItem from "./EducationItem";

export default class Education extends Component {
  render() {
    return (
      <div className="dp-section-education">
        {/*Education*/}
        <div className="dp-school">
          <Typing speed={10} cursorClassName="dp-cursor">
            <div className="dp-title">Education</div>
          </Typing>

          <div className="code code-css dp-work-experience-list">
            <div className="code-content">
              <code>
                <EducationItem
                  endDate="2017"
                  institution="Makers Academy"
                  location="London, UK"
                  category="Full Stack Development"
                  description="Refined industry skills including agile test-driven development and pair programming"
                />

                <EducationItem
                  endDate="2015"
                  institution="McGill University"
                  location="Montréal, CA"
                  category="B.Eng. Materials Engineering"
                  description="Industrial co-op program. International exchange. Included computer science courses, programming, nanotechnology, thermodynamics, and laboratory studies"
                />
              </code>
            </div>
          </div>
        </div>

        {/*Technical Skills*/}
        <div className="dp-technical-skills">
          <Typing speed={10} cursorClassName="dp-cursor" startDelay={1500}>
            <div className="dp-title">Technical Chops</div>
          </Typing>

          <div className="code code-js dp-technical-skills-list">
            <div className="code-content">
              <code>
                <span className="c-y">const </span>
                <span className="c-b">frontend</span> = [
                <span className="c-g">“react”</span>,{" "}
                <span className="c-g">“angular”</span>,{" "}
                <span className="c-g">"vue"</span>];
                <br />
                <span className="c-y">const </span>
                <span className="c-b">backend</span> = [
                <span className="c-g">“ruby”</span>,{" "}
                <span className="c-g">“rails”</span>,{" "}
                <span className="c-g">“node.js”</span>];
                <br />
                <span className="c-y">const </span>
                <span className="c-b">database</span> = [
                <span className="c-g">“postgres”</span>,{" "}
                <span className="c-g">“mysql”</span>]; <br />
                <br />
              </code>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
