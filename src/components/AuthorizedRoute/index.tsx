import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router";
import { userState } from "reducers/types";
import { RootState } from "store/types";

interface Props extends RouteProps {
  user: userState;
  component: new (props: any) => React.Component;
}

const AuthorizedRoute: FC<Props> = ({
  user,
  component: Component,
  ...rest
}) => (
  <Route
    render={props =>
      user.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
    {...rest}
  />
);

const mapStateToProps = (store: RootState) => ({
  user: store.user
});

export default connect(mapStateToProps)(AuthorizedRoute);
