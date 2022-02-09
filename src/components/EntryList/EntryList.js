import { useEntryList } from '../../context/EntryContext';

import React from 'react';

const EntryList = () => {
  const { entryList } = useEntryList();
  return (
    <div>
      {entryList.map((entry) => (
        <div key={entry.userName}>
          <p>
            -{entry.userName} {entry.userEntry}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
