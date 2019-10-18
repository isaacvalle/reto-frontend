import SideBar from "components/SideBar";
import { HomePage, ProductsPage, SalesOrdersPage, UsersPage } from "pages";
import React, { Component } from "react";
import { Route } from "react-router";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div id="content-wrapper" className="container">
        <SideBar />
        <div id="main-content">
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/sales-orders" component={SalesOrdersPage} />
        </div>
      </div>
    );
  }
}

export default App;
