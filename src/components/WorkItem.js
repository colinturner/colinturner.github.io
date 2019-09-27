import React, { Component } from "react";

export default class WorkItem extends Component {
  render() {
    return (
      <div className=" dp-work-experience-item code code-js">
        <div className="code-content">
          <code>
            <span className="c-y">const </span>
            <span className="c-b">{this.props.companyName}</span>
            <span>{" = {"}</span>
            <br />
            <span className="c-b dp-code-spacer">era: </span>
            <span className="c-g">"{this.props.era}",</span>
            <br />
            <span className="c-b dp-code-spacer">position: </span>
            <span className="c-g">"{this.props.position}",</span>
            <br />
            <span className="c-b dp-code-spacer">location: </span>
            <span className="c-g">"{this.props.location}",</span>
            <br />
            <span className="c-b dp-code-spacer">description: </span>
            <span className="c-g">"{this.props.description}",</span>
            <br />
            };
          </code>
        </div>
        <br />
      </div>
    );
  }
}
