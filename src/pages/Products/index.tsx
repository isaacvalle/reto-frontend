import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import "./styles.module.scss";

class ProductsPage extends Component {
  render() {
    return (
      <Grid className="subheader" columns="equal">
        <Grid.Row className="headerrow">
          <Grid.Column floated="left">
            <Header as="h2" textAlign="center">
              Productos
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ProductsPage;
