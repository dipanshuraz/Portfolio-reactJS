import React, { Component } from "react";

export class Achievements extends Component {
  render() {
    return (
      <div className="container text-dark">
        <hr />
        <h2 className="font-weight-bold"># Achievements & Certifications</h2>
        <hr />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row my-5">
              <div className="col-md-4">
                <img src="/logo/mcp.jpg" className="img-fluid border" alt="" />
              </div>
              <div className="col-md-8">
                <h4 className="font-weight-bold">
                  Exam 480: Programming in HTML5 with JavaScript and CSS3
                </h4>
                <p className="lead font-weight-bold">Microsoft </p>
                <p className="lead ">
                  Certification number: G911-7855
                  <br />
                  Date : 06 Sep 2018
                </p>
              </div>
            </div>
            <p>
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                View Certificates
              </a>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                  <div class="card card-body">
                    <p className="m-2">
                      <span className="mx-2">Check More</span>
                      <a
                        className="btn btn-success"
                        href="https://www.youracclaim.com/badges/48db5f6d-a346-4291-ad39-9a504250c692/linked_in_profile"
                      >
                        Verify
                      </a>
                    </p>
                    <img
                      src="/certs/mcp.jpg"
                      className="img-fluid w-100 h-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div className="row my-5">
              <div className="col-md-8">
                <h4 className="font-weight-bold">
                  Android Basics Nanodegree (nd803) | Google
                </h4>
                <p className="lead font-weight-bold">Google - Udacity </p>
                <p className="lead">
                  Certification number: https://confirm.udacity.com/EDU9NDEK
                  <br />
                  Date :22 Nov 2018
                </p>
                <p className="lead">
                  Worked with Android - User Interface, User Input, Multi-Screen
                  Apps, Networking & Data Storage
                </p>

                <hr />
              </div>
              <div className="col-md-4">
                <img src="/logo/abnd.png" className="img-fluid" alt="" />
              </div>
            </div>
            <p>
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                View Certificates
              </a>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                  <div class="card card-body">
                    <p className="m-2">
                      <span className="mx-2">Check More</span>
                      <a
                        className="btn btn-success"
                        href="https://graduation.udacity.com/confirm/EDU9NDEK"
                      >
                        Verify
                      </a>
                    </p>
                    <img
                      src="/certs/abnd.jpg"
                      className="img-fluid w-100 h-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div className="row my-5 align-items-center">
              <div className="col-md-4">
                <img
                  src="/logo/gssoc logo.png"
                  className="img-fluid my-5"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <h4 className="font-weight-bold">
                  Open Source Contributor | GSSOC'20
                </h4>
                <p className="lead font-weight-bold">
                  GirlScript Summer of Code
                </p>
                <p className="lead">Start Date : Feb 2020</p>

                <p class="lead">
                  Desc : GirlScript Summer of Code is the 3 month-long Open
                  Source program during summers conducted by GirlScript
                  Foundation, started in 2018, with an aim to help beginners get
                  started with Open Source Development while encouraging
                  diversity. Throughout the program, participants contribute to
                  different projects under the guidance of experienced mentors.
                  Top participants get exciting goodies and opportunities.
                </p>
              </div>
            </div>
            <p>
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample5"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample5"
              >
                View Certificates
              </a>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample5">
                  <div class="card card-body">
                    <p className="m-2">Acceptance Letter</p>
                    <img
                      src="/certs/gssoc.png"
                      className="img-fluid w-100 h-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;
