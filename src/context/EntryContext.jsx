import { useState, createContext, useContext } from 'react';

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entryList, setEntryList] = useState([]);
  const contextValue = { entryList, setEntryList };
  <EntryContext.Provider value={contextValue}>{children}</EntryContext.Provider>;
};

const useEntryList = () => {
  const context = useContext(EntryContext);
  if (context === undefined) {
    throw new Error('useEntryList must be used within a EntryContext Provider');
  }
  return context;
};

export { EntryProvider, useEntryList };
