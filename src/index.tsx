import AuthorizedRoute from "components/AuthorizedRoute";
import { LoginPage } from "pages";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "./App.scss";
import store from "./store";

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <AuthorizedRoute path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
