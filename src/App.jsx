import React from 'react';
import './App.css';

import {
  Route,
  Switch,
} from 'react-router-dom';

import Login from './pages/login/Login';
import Main from './pages/main/Main';
// import CountryInfo from './pages/main/components/CountryInfo';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/country/:alpha3Code" component={CountryInfo} /> */}
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
