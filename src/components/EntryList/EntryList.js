import { useEntryList } from '../../context/EntryContext';

import React from 'react';

const EntryList = () => {
  const { entryList } = useEntryList();

  return (
    <div className="entry-list">
      {entryList.map((entry) => (
        <div className="entry" key={entry.id}>
          <h2 className="entry-name">-{entry.name}</h2>
          <h3>{entry.entry}</h3>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
