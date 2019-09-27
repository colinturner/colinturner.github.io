import React, { Component } from "react";

export default class EducationItem extends Component {
  render() {
    return (
      <div className="dp-education-item">
        <p className="line-1">
          <span className="c-y braclet-open">.{this.props.endDate} </span>
        </p>

        <p className="line-2">
          <span className="c-p">Institution</span>
          <span>:</span>
          <span className="c-g"> {this.props.institution}</span>
          <span>;</span>
        </p>

        <p className="line-3">
          <span className="c-o">&.location</span>
          <span>:</span>
          <span className="c-g"> {this.props.location}</span>
          <span>;</span>
        </p>

        <p className="line-2">
          <span className="c-p">Category</span>
          <span>:</span>
          <span className="c-g"> {this.props.category}</span>
          <span>;</span>
        </p>

        <p className="line-2">
          <span className="c-p">Description</span>
          <span>:</span>
          <span className="c-g"> {this.props.description}</span>
          <span>;</span>
        </p>

        <span className="braclet-close" />
      </div>
    );
  }
}
