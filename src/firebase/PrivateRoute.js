import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../context/useAuth";

function PrivateRoute({ children, ...rest }) {
  let { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
