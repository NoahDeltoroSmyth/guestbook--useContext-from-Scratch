// import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const PrivateRoute = ({ children, ...routeProps }) => {
  let auth = useUser();
  const location = useLocation();
  console.log('location', location);
  return (
    <Route {...routeProps}>
      {auth.user ? children : <Redirect to={{ pathname: '/auth', state: { from: location } }} />}
    </Route>
  );
};

export default PrivateRoute;
