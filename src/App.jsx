import React from 'react';
import './App.css';

import {
  Route,
  Switch,
} from 'react-router-dom';

import Login from './pages/login/Login';
import Main from './pages/main/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
