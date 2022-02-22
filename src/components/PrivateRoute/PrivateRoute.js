// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { useUser } from '../../context/UserContext';

const PrivateRoute = ({ children, ...rest }) => {
  //   let auth = useUser();
  return (
    //     <>
    <h1>hello</h1>
    //       <Route
    //         {...rest}
    //         render={({ location }) =>
    //           auth.user ? children : <Redirect to={{ pathname: '/', state: { from: location } }} />
    //         }
    //       />
    //     </>
  );
};

export default PrivateRoute;
