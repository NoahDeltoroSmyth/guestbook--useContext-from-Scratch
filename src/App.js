import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import EntryList from './components/EntryList/EntryList';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth';
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/">
            <Form />
            <EntryList />
          </PrivateRoute>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
