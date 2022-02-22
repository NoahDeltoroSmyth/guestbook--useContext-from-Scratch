import React from 'react';

const Auth = () => {
  return (
    <form>
      <label>Username</label>
      <input id="user-name" type="text" required />
      <label>Password</label>
      <input id="password" type="text" required />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Auth;
