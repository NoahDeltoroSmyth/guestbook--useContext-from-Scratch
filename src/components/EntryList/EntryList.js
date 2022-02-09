import { useEntryList } from '../../context/EntryContext';

import React from 'react';

const EntryList = () => {
  const { entryList } = useEntryList();
  return (
    <>
      {entryList.map((entry) => (
        <p key={entry.userName}>
          -{entry.userName} {entry.userEntry}
        </p>
      ))}
    </>
  );
};

export default EntryList;
