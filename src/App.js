import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Body from './components/Body/Body';
import EntryList from './components/EntryList/EntryList';
import Header from './components/Header/Header';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Body />
            <EntryList />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
