import React, { useState } from 'react';
// import { useUser } from '../../context/UserContext';
// import { useEntryList } from '../../context/EntryContext';

const Body = () => {
  //   const { entryList } = useEntryList();
  //   const { user } = useUser();
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');

  return (
    <form>
      <input placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <textarea
        placeholder="Write a note"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <button>Sign Here</button>
    </form>
  );
};

export default Body;
