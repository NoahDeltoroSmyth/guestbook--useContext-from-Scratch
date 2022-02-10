import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useEntryList } from '../../context/EntryContext';
import useLocalStorage from '../../hooks/useLocalStorage/useLocalStorage';
import { fetchAllEntries, fetchEntries } from '../../services/entries';

const Body = () => {
  const { entryList, setEntryList } = useEntryList();
  const { user, setUser } = useUser();
  const [userName, setUserName] = useLocalStorage('name', '');
  const [userEntry, setUserEntry] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllEntries();
      setEntryList(data);
    };
    fetchData();
  }, [setEntryList]);

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
