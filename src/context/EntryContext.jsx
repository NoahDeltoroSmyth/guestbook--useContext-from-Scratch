import { useState, createContext, useContext, useEffect } from 'react';
import { fetchEntries } from '../services/entries';

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEntries();
      setEntryList(data);
    };
    fetchData();
  }, []);

  const contextValue = { entryList, setEntryList };
  return <EntryContext.Provider value={contextValue}>{children}</EntryContext.Provider>;
};

const useEntryList = () => {
  const context = useContext(EntryContext);
  if (context === undefined) {
    throw new Error('useEntryList must be used within a EntryContext Provider');
  }
  return context;
};

export { EntryProvider, useEntryList };
