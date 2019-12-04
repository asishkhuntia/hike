import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "../assets/css/global.css";
import history from "../utils/history";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Dashboard from "./core/Dashboard";
import Login from "./core/Login";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="ui main container mt-5">
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}
