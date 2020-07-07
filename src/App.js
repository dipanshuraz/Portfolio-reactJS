import React from 'react';
import './App.css';
import Home from './Components/Home';
import Project from './Components/Project';
import Achievements from './Components/Achievements';
import Experiences from './Components/Experience';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Blogs from './Components/Blogs';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto d-flex justify-content-around w-100 mt-3">
              <li className="font-weight-bold lead">
                <Link to="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li className="font-weight-bold lead">
                <Link to="/experiences" className="text-dark">
                  Experiences
                </Link>
              </li>
              <li className="font-weight-bold lead">
                <Link to="/projects" className="text-dark">
                  Projects
                </Link>
              </li>
              <li className="font-weight-bold lead">
                <Link to="/achievements" className="text-dark">
                  Achievements
                </Link>
              </li>
              <li className="font-weight-bold lead">
                <Link to="/blogs" className="text-dark">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/experiences" component={Experiences} />
          <Route path="/projects" component={Project} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
