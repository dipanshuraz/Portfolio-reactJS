import React, { Component } from "react";

export class Blogs extends Component {
  componentDidMount() {
    document.title = "Deepanshu | Blogs";
  }
  render() {
    return (
      <div className="container text-dark">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <hr />
            <h2 className="font-weight-bold"># Blogs</h2>
            <hr />
            <div className="mt-5">
              <h4 className="font-weight-bold">
                A WORD IS ENOUGH FOR THE WISE
              </h4>
              <p className="lead">
                Published on Jun 3, 2018 · <br />5 min read
                <br />
              </p>

              <a
                className="btn btn-primary"
                href="https://medium.com/@dipanshuraz2/a-word-is-enough-for-the-wise-734e1e3bfd07"
              >
                Read More
              </a>
            </div>
            <hr />
            <div className="mt-5">
              <h4 className="font-weight-bold">
                A Life Changing Movement : Google India Android Developer
                Challenge Scholarship 2018
              </h4>
              <p className="lead">
                Published on May 11, 2018
                <br />
                3 min read
                <br />
              </p>

              <a
                className="btn btn-primary"
                href="https://medium.com/@dipanshuraz2/a-word-is-enough-for-the-wise-734e1e3bfd07"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
