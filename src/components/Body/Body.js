import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useEntryList } from '../../context/EntryContext';

const Body = () => {
  const { entryList, setEntryList } = useEntryList();
  const { user, setUser } = useUser();
  const [userName, setUserName] = useState('');
  const [userEntry, setUserEntry] = useState('');

  function updateEntryList() {
    if (!userEntry) return;
    setUser(userName);
    setEntryList([...entryList, { userName, userEntry: userEntry }]);
    setUserEntry('');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntryList();
  };
  return (
    <form onSubmit={handleSubmit}>
      {!user && (
        <input
          id="userName"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      )}
      <textarea
        id="userEntry"
        placeholder="Write a note"
        value={userEntry}
        onChange={(e) => setUserEntry(e.target.value)}
      />
      <button type="submit">Sign Here</button>
      {user && (
        <button
          onClick={() => {
            setUserName(''), setUser('');
          }}
        >
          Not {user}?
        </button>
      )}
    </form>
  );
};

export default Body;
