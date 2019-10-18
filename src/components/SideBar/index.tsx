import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

export default class SideBar extends Component {
  render() {
    return (
      <div id="sidebar" className="sidebar-wrapper">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            vertical
            visible
            width="wide"
          >
            <Menu.Item as={Link} to="/users" name="semi-cars">
              <Icon name="users" className="iconLeft" />
              <strong>Usuarios</strong>
            </Menu.Item>
            <Menu.Item as={Link} to="/products" name="semi-cars">
              <Icon name="gift" className="iconLeft" />
              <strong>Productos</strong>
            </Menu.Item>
            <Menu.Item as={Link} to="/sales-orders" name="semi-cars">
              <Icon name="shopping cart" className="iconLeft" />
              <strong>Orden de compra</strong>
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    );
  }
}
