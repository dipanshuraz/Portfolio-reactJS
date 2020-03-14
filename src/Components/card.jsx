import React from "react";
import Img from "./Img";

function card(props) {
  return (
    <div className="col-md-6 my-4">
      <div className="card border shadow p-3">
        <img
          src="https://1.bp.blogspot.com/-1pe4uDLydv8/XGFjhmfkdaI/AAAAAAAABZA/-rbuCxNHxx81xvLomNa7XpJJL8-OPsUsQCLcBGAs/s1600/PUBG%2BMOBILE%2BLITE%2BPNG%2BLOGO%2BBY%2BPausedGamerZ.png"
          className="img-fluid border"
          alt=""
        />
        <h4>{props.name}</h4>
        <p className="lead">{props.desc}</p>
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-outline-dark btn-block btn-sm">
              <a href={props.demoLink}>Demo</a>
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-outline-dark btn-block btn-sm">
              <a href={props.codeLink}>Github Code</a>
            </button>
          </div>
          <div className="row justify-content-around px-5 py-3">
            <Img />
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
