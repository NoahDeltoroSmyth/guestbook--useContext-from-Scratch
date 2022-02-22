import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import EntryList from './components/EntryList/EntryList';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Auth from './views/Auth';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Form />
          <EntryList />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
