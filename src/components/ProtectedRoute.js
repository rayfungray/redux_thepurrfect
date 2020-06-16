import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({
  Component,
  path,
  redirectPath = '/',
  isAuthenticated,
  ...rest
}) {
  if (!isAuthenticated) {
    return <Redirect to={redirectPath} />;
  } else {
    return (
      <Route
        path={path}
        {...rest}
        render={(props) => <Component {...props} />}
      />
    );
  }
}

export default ProtectedRoute;
