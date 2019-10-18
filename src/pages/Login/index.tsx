import { logout, onLoginSuccessful } from "actions/user";
import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { userState } from "reducers/types";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { RootState } from "store/types";
import { User } from "types/User";
import { isEmail } from "utils/index";
import "./styles.module.scss";

const initialUserState: User = {
  email: "",
  password: ""
};

type State = {
  user: User;
  isLogedIn: boolean;
};

type Props = {
  onLoginSuccessful: typeof onLoginSuccessful;
  user: userState;
  logout: typeof logout;
} & RouteComponentProps;

class LoginPage extends Component<Props, State> {
  state: State = {
    user: initialUserState,
    isLogedIn: false
  };

  validateForm = (email: string, password: string) => {
    let userAccount = {
      email: "test@gmail.com",
      password: "123"
    };

    if (
      isEmail(email) &&
      password !== "" &&
      (userAccount.email === email && userAccount.password === password)
    ) {
      this.handleSubmit();
    } else {
      console.log("correo o contraseña incorrectos");
    }
  };

  handleSubmit = () => {
    const { user } = this.state;
    this.props.onLoginSuccessful(user.email, user.password);
    if (this.props.user.isLoggedIn) {
      this.props.history.push("/");
    }
  };

  handleChange = (key: keyof User, value: any) => {
    const tempUser: User = { ...this.state.user };
    tempUser[key] = value;
    this.setState({ user: tempUser });
  };

  render() {
    const { user } = this.state;
    return (
      <Grid verticalAlign="middle" columns={4} centered>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Form>
                <Form.Input
                  name="email"
                  value={user.email}
                  icon="user"
                  iconPosition="left"
                  placeholder="Ingresa tu correo"
                  type="text"
                  onChange={(_, data) => {
                    this.handleChange("email", data.value as string);
                  }}
                />
                <Form.Input
                  name="password"
                  value={user.password}
                  icon="lock"
                  iconPosition="left"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  onChange={(_, data) => {
                    this.handleChange("password", data.value as string);
                  }}
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  content="Iniciar sesión"
                  onClick={() => {
                    this.validateForm(user.email, user.password);
                  }}
                />
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (store: RootState) => ({
  user: store.user
});

const mapDispatchToProps = {
  onLoginSuccessful,
  logout
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);
