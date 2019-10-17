import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import "./styles.module.scss";

class SalesOrdersPage extends Component {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Sales orders
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SalesOrdersPage;
