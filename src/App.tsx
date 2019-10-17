import { HomePage, ProductsPage, SalesOrdersPage, UsersPage } from "pages";
import React, { Component } from "react";
import { Route } from "react-router";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/sales-orders" component={SalesOrdersPage} />
      </div>
    );
  }
}

export default App;
