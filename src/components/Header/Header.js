import React from 'react';
import { useUser } from '../../context/UserContext';
import DarkModeToggle from '../../hooks/DarkMode/DarkModeToggle';

const Header = () => {
  const { user } = useUser();
  return (
    <>
      {user && <p>Signing the guestbook as {user}</p>}
      {!user && <p>Enter your name to write an entry!</p>}
      <DarkModeToggle />
    </>
  );
};

export default Header;
