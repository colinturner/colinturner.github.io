import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "_blank"
    };
  }

  render() {
    return (
      <div className="dp-contact">
        <ul className="dp-contacts">
          <li>
            <a href="https://github.com/colinturner" target={this.state.target}>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/colin-turner/"
              target={this.state.target}
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
