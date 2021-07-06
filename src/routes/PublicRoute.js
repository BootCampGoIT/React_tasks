import React from "react";
import { Route, Redirect } from "react-router-dom";

function PublicRoute({
  exact,
  path,
  isAuth,
  component: MyComponent,
  isRestricted,
  icon,
}) {
  return isAuth && isRestricted ? (
    <Redirect to='/products/phones' />
  ) : (
    <Route
      path={path}
      exact={exact}
      render={(props) => <MyComponent {...props} icon={icon} />}
      key={path}
    />
  );
}

export default PublicRoute;
