import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Auth = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === process.env.REACT_APP_AUTH_EMAIL &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser(email);
      setPassword(password);
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from.pathname);
    } else {
      alert('Unsuccessful');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        id="email"
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        id="password"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Auth;
