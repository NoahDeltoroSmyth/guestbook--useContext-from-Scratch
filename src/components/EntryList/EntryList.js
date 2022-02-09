import { useEntryList } from '../../context/EntryContext';

import React from 'react';

const EntryList = () => {
  const { entryList } = useEntryList();
  return (
    <div>
      {entryList.map((entry) => (
        <p key={`${entry.userName} ${entry.userEntry}`}>
          {entry.userName} {entry.userEntry}
        </p>
      ))}
    </div>
  );
};

export default EntryList;
