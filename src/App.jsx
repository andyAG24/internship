import React from 'react';
import './App.css';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Login from './pages/login/Login.jsx';
import Main from './pages/main/Main.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/main' component={Main} />
        <Redirect from='/' to='/login' />
      </Switch>
    </div>
  );
}

export default App;
