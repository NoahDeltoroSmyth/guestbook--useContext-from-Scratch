import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Auth from '../../views/Auth';

const PrivateRoute = ({ children, ...rest }) => {
//   const { user } = useUser();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         user ? children : <Redirect to={{ pathname: '/', state: { from: location } }} />
//       }
//     />
//   );
// };

export default PrivateRoute;
