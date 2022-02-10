import { useEntryList } from '../../context/EntryContext';

import React from 'react';

const EntryList = () => {
  const { entryList } = useEntryList();
  return (
    <div className="entry-list">
      {entryList.map((entry) => (
        <div className="entry" key={entry.userName}>
          <p className="entry-name">-{entry.userName}</p>
          <p>{entry.userEntry}</p>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
