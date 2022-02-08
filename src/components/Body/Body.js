import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useEntryList } from '../../context/EntryContext';

const Body = () => {
  const { entryList, setEntryList } = useEntryList();
  const { user, setUser } = useUser();
  const [userName, setUserName] = useState('');
  const [userEntry, setUserEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    return setUser(userName), setEntryList([...entryList], userEntry);
  };
  return (
    <form>
      {!user && (
        <input placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
      )}
      <textarea
        placeholder="Write a note"
        value={userEntry}
        onChange={(e) => setUserEntry(e.target.value)}
      />
      <button onClick={handleSubmit}>Sign Here</button>
    </form>
  );
};

export default Body;
