import { useEntryList } from '../../context/EntryContext';

import React from 'react';

const EntryList = () => {
  const { entryList } = useEntryList();

  return (
    <div className="entry-list">
      {entryList.map((entry) => (
        <div className="entry" key={entry.id}>
          <p className="entry-name">-{entry.name}</p>
          <p>{entry.entry}</p>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
