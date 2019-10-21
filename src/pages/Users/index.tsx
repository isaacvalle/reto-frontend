import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { userState } from "reducers/types";
import { Grid, Header, Table } from "semantic-ui-react";
import { RootState } from "types/Store";
import { User } from "types/User";
import { fakeUsers } from "utils/fake-data";
import "./styles.module.scss";

const initialUserState: User = {
  email: "",
  password: ""
};

type State = {
  user: User;
};

type Props = {
  user: userState;
} & RouteComponentProps;

class UsersPage extends Component<Props> {
  state: State = {
    user: initialUserState
  };

  componentDidMount() {
    const { email } = this.props.user;
    const { user } = this.state;
    user.user = "Invitado Prueba";
    user.email = email;
    user.phoneNumber = "3316597110";
    user.location = "Tequila";
    this.setState({
      user
    });
  }

  renderUsers = () => {
    return fakeUsers.map((user, idx) => (
      <Table.Row textAlign="center" key={idx}>
        <Table.Cell>{user.nombre}</Table.Cell>
        <Table.Cell>{user.correo}</Table.Cell>
        <Table.Cell>{user.telefono}</Table.Cell>
        <Table.Cell>{user.ciudad}</Table.Cell>
      </Table.Row>
    ));
  };

  render() {
    const { user, email, phoneNumber, location } = this.state.user;
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
          <Table unstackable>
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
                <Table.Cell>{user}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{phoneNumber}</Table.Cell>
                <Table.Cell>{location}</Table.Cell>
              </Table.Row>
              {this.renderUsers()}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: RootState) => ({
  user: store.user
});

export default withRouter(connect(mapStateToProps)(UsersPage));
