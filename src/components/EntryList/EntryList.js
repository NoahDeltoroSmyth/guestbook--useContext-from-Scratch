import { useEntryList } from '../../context/EntryContext';

import React from 'react';

const EntryList = () => {
  const { entryList } = useEntryList();
  return (
    <div className="entry-list">
      {entryList.map((entry) => (
        <p className="entry" key={entry.userName}>
          -{entry.userName} {entry.userEntry}
        </p>
      ))}
    </div>
  );
};

export default EntryList;
