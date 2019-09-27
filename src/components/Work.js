import React, { Component } from "react";

import Typing from "react-typing-animation";
import WorkItem from "./WorkItem";

import "./Work.scss";

export default class Work extends Component {
  render() {
    return (
      <div className="dp-work">
        {/*work infos*/}
        <Typing speed={10} cursorClassName="dp-cursor">
          <div className="dp-title">Professional Experience</div>
        </Typing>

        <div className="dp-work-experience">
          <div className="dp-work-experience-list">
            {/*PathFactory*/}
            <WorkItem
              era="2018 - 2019"
              companyName="PathFactory"
              position="Full Stack Developer"
              location="Toronto, CA"
              description="Agile full stack web development building B2B digital marketing products. Core technologies include JavaScript (React), Ruby on Rails, and MySQL."
            ></WorkItem>

            {/*SuperAwesome*/}
            <WorkItem
              era="2017 - 2018"
              companyName="SuperAwesome"
              position="Full Stack Developer"
              location="London, UK"
              description="Built an advertising marketplace that makes digital spaces safer for kids. Technologies include JavaScript, Angular 2+, AngularJS, Node.js, Ruby, PostgreSQL and MongoDB. REST API development. Agile environment. Partially remote team."
            ></WorkItem>

            {/*UNSW*/}
            <WorkItem
              era="2014"
              companyName="UNSW"
              position="Computational Fluids Researcher"
              location="Sydney, AU"
              description="Led pioneering research into air bubble collision mechanics using Computational Fluid Dynamics methods. Large data sets and regression analysis."
            ></WorkItem>

            {/*Rolls-Royce*/}
            <WorkItem
              era="2013"
              companyName="Rolls-Royce"
              position="Materials Engineer Intern"
              location="Montréal, CA"
              description="Documented gas turbine research. Composite and ultralight materials."
            ></WorkItem>
          </div>
        </div>
      </div>
    );
  }
}
