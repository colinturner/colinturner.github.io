import React, { Component } from "react";
import Typing from "react-typing-animation";
import Contacts from "./Contacts";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "_blank",
    };
  }

  ageCalculator(ageInMilliseconds) {
    const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
    return Math.trunc(ageInYears);
  }

  render() {
    const ageInMilliseconds = new Date() - new Date("1992/10/24");
    return (
      <div>
        <Typing
          speed={20}
          cursorClassName="dp-cursor"
          className="dp-introduction"
        >
          <h3>
            Name: <strong>Colin Turner</strong>, <br />
            Age: <strong>{this.ageCalculator(ageInMilliseconds)}</strong> years
            old,
            <Typing.Delay ms={750} />
            <Typing.Backspace count={4} />
            young, <br />
            Specialities:{" "}
            <strong>React, TypeScript, Node.js, Severless computing</strong>
          </h3>
          <Typing.Delay ms={750} />
          <h1>Full Stack Developer</h1>
          <Typing.Delay ms={750} />
          <p>
            in <strong>Oslo, Norway</strong>
          </p>
        </Typing>
        <Contacts />
      </div>
    );
  }
}
