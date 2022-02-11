import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage/useLocalStorage';
import { useUser } from '../../context/UserContext';
import { useEntryList } from '../../context/EntryContext';
import { addEntry } from '../../services/entries';

const Body = () => {
  const { entryList, setEntryList } = useEntryList();
  const { user, setUser } = useUser();
  const [userName, setUserName] = useLocalStorage('name', '');
  const [userEntry, setUserEntry] = useState('');

  async function updateEntryList() {
    if (!userEntry) return;
    setUser(userName);
    const addedEntry = await addEntry(userName, userEntry);
    setEntryList([...entryList, addedEntry[0]]);
    setUserEntry('');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntryList();
  };

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      {!user && (
        <input
          id="userName"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      )}
      <textarea
        className="entry-textarea"
        maxLength={200}
        id="userEntry"
        placeholder="Write a note"
        value={userEntry}
        onChange={(e) => setUserEntry(e.target.value)}
      />
      <p className="char-limit">(Maximum characters: 200)</p>
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
