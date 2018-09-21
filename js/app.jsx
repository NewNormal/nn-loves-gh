import React from "react";
import LandingPage from "./landing-page.jsx";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, Link, Redirect, browserHistory } from "react-router";
import { App } from "neal-react";

class NNLovesGHApp extends React.Component {
  render() {
    return (
      <App
        googleAnalyticsKey="UA-126234976-1"
        history={ browserHistory }>
        { this.props.children }
      </App>
    );
  }
}

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ NNLovesGHApp } history={ browserHistory }>
      <IndexRoute name="home" component={ LandingPage }/>
      <Route path="*" component={ LandingPage }/>
    </Route>
  </Router>
), document.getElementById("main"));
