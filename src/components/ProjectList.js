import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectList.scss";

export default class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "_blank",
      list: [
        {
          id: "1",
          link: "https://github.com/colinturner/snakk",
          platform: "github",
          text: {
            title: "Snakk",
            shortDescription: "Free language-learning web app",
            stack: "React"
          }
        },
        {
          id: "2",
          link: "https://github.com/colinturner/scrabble-assist",
          platform: "github",
          text: {
            title: "Scrabble Assist",
            shortDescription: "Helps when words fail you",
            stack: "React"
          }
        },
        {
          id: "3",
          link: "https://github.com/Alicespyglass/middl",
          platform: "github",
          text: {
            title: "Middl",
            shortDescription: "Find new venues to meet up with people halfway",
            stack: "React Native"
          }
        },
        {
          id: "5",
          link: "https://github.com/colinturner/currency-converter",
          platform: "github",
          text: {
            title: "Currency Converter",
            shortDescription: "Convert amounts between foreign currencies",
            stack: "React"
          }
        }
      ]
    };
  }

  render() {
    return (
      <div className="dp-projects">
        {this.state.list.map(item => (
          <div key={item.id} className={"dp-projects-list-item"}>
            <a
              href={item.link}
              target={this.state.target}
              className="dp-projects-list-item-link"
            >
              <div className="dp-projects-list-item-text">
                <div className="dp-projects-list-item-icon">
                  <FontAwesomeIcon icon={["fab", `${item.platform}`]} />
                </div>

                <div>
                  <p className="dp-projects-list-item-title">
                    {item.text.title}
                  </p>
                  <p className="dp-project-list-item-stack">
                    {item.text.stack}
                  </p>
                  <p>{item.text.shortDescription}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
