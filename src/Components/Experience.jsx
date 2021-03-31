import React, { Component } from 'react';

export class Achievements extends Component {
  componentDidMount() {
    document.title = 'Deepanshu | Experiences';
  }
  render() {
    return (
      <div className="container text-dark">
        <hr />
        <h2 className="font-weight-bold"># Experiences</h2>
        <hr />
        <div className="row justify-content-center">
          <div className="col-md-10">

          <div className="row my-5">
              <div className="col-md-8">
                <h4 className="font-weight-bold">
                  <h6 className="font-weight-bold">March 2021 - Present</h6>
                  <code>&gt;</code> Frontend Developer (ReactJS)
                </h4>

                <p className="lead font-weight-bold">
                Creatella, Venture Builder | Startup Studio
                  <br />
                  Singapore (Remote)
                </p>

                <p className="lead"></p>
              </div>
            </div>

            <div className="row my-5">
              <div className="col-md-8">
                <h4 className="font-weight-bold">
                  <h6 className="font-weight-bold">Jul 2020 - Present</h6>
                  <code>&gt;</code> Software Developer
                </h4>

                <p className="lead font-weight-bold">
                  Edstem Technologies
                  <br />
                  Kochi , Kerala (Remote)
                </p>

                <p className="lead "></p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-8">
                <h4 className="font-weight-bold">
                  <h6 className="font-weight-bold">May 2020 - Present</h6>
                  <code>&gt;</code> Technical Mentor
                </h4>

                <p className="lead font-weight-bold">
                  Masai School <br />
                  Remote
                </p>

                <p className="lead ">
                  Helping students to get industry-level skills and guiding them
                  on the interview process.
                </p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-8">
                <h4 className="font-weight-bold">
                  <h6 className="font-weight-bold">May 2020 - July 2020</h6>
                  <code>&gt;</code> Frontend Developer (Intern)
                </h4>

                <p className="lead font-weight-bold">
                  Kuku FM <br />
                  Mumbai, Maharashtra
                </p>

                <p className="lead ">
                  Revamped the User Interface & Experience on the live website
                  www.kukufm.com & Creator platform. Reported directly to CTO &
                  participated in strategy and decision making for the
                  development team.
                </p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-8">
                <h4 className="font-weight-bold">
                  <h6 className="font-weight-bold">Feb 2020 - May 2020</h6>
                  <code>&gt;</code> Web Developer (Intern)
                </h4>

                <p className="lead font-weight-bold">
                  GirlScript Foundation <br />
                  Remote
                </p>

                <p className="lead ">
                  My roles and responsibilities include leading the project
                  "Educational Platform" initiated by the company.
                </p>
              </div>
            </div>

            <div className="row my-5">
              <div className="col-md-8">
                <h4 className="font-weight-bold">
                  <h6 className="font-weight-bold">Oct 2019 - Apr 2020</h6>
                  <code>&gt;</code> Full Stack Developer (Trainee)
                </h4>

                <p className="lead font-weight-bold">
                  Masai School <br />
                  Patna Area, India
                </p>

                <p className="lead ">
                  Full-stack web and Computer Science Program Learning MERN
                  Stack, Data Structures and Algorithms
                </p>
                <div className="flex">
                  <p>
                    <a href="http://github.com/dipanshuraz/">Github</a>
                  </p>
                  <p>
                    <a href="https://twitter.com/206ff13d95824f3">Twitter</a>
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/in/codersadhu/">
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;
