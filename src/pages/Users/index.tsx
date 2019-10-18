import React, { Component } from "react";
import { Grid, Header, Table } from "semantic-ui-react";
import "./styles.module.scss";

class UsersPage extends Component {
  render() {
    return (
      <div>
        <Grid className="subheader" columns="equal">
          <Grid.Row className="headerrow">
            <Grid.Column floated="left">
              <Header as="h2" textAlign="center">
                Usuarios
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="page-content">
          <Table>
            <Table.Header>
              <Table.Row textAlign="center">
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Correo</Table.HeaderCell>
                <Table.HeaderCell>Teléfono</Table.HeaderCell>
                <Table.HeaderCell>Ciudad</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row textAlign="center" key={1}>
                <Table.Cell>Alberto Aguilar</Table.Cell>
                <Table.Cell>correo@perro.com</Table.Cell>
                <Table.Cell>3121001286</Table.Cell>
                <Table.Cell>Colima</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default UsersPage;
