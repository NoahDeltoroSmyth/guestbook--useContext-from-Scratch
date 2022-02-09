import './App.css';
import Body from './components/Body/Body';
import EntryList from './components/EntryList/EntryList';
import Header from './components/Header/Header';
import './hooks/DarkMode/DarkMode.scss';
function App() {
  return (
    <>
      <Header />
      <Body />
      <EntryList />
    </>
  );
}

export default App;
