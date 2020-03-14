import React, { Component } from "react";
import Card from "./card";

export class Project extends Component {
  render() {
    return (
      <>
        <div className="container">
          <hr />
          <h2 className="font-weight-bold"># Projects</h2>
          <hr />
          <div className="row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </>
    );
  }
}

export default Project;
