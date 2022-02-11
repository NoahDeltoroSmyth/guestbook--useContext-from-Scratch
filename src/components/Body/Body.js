import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage/useLocalStorage';
import { useUser } from '../../context/UserContext';
import { useEntryList } from '../../context/EntryContext';
import { addEntry } from '../../services/entries';
import { useHistory } from 'react-router-dom';

const Body = () => {
  const { entryList, setEntryList } = useEntryList();
  const { user, setUser } = useUser();
  const [userName, setUserName] = useLocalStorage('name', '');
  const [userEntry, setUserEntry] = useState('');
  const history = useHistory();

  function updateEntryList() {
    if (!userEntry) return;
    setUser(userName);
    setEntryList([...entryList, { ...userEntry }]);
    setUserEntry('');
    history.push('/');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(userName, userEntry);
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
