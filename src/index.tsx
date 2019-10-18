import AuthorizedRoute from "components/AuthorizedRoute";
import { LoginPage } from "pages";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "./App.scss";
import createStore from "./store";
const { store, persistor } = createStore();

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <AuthorizedRoute path="/" component={App} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
