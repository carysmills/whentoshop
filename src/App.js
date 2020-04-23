import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./components/About";
import { Main } from "./components/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="pageContainer">
        <nav>
          <a href="/">
            <h1>
              When&nbsp;to&nbsp;shop&nbsp;
              <span role="img" aria-label="mask emoji">
                😷
              </span>
            </h1>
          </a>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
