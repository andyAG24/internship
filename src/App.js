import './App.css';

import {
    Route,
    Switch,
    Redirect,
    withRouter
  } from "react-router-dom"

import Login from './pages/login/Login';
import Main from './pages/main/Main';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path='/login' component={Login}></Route>
				<Route path='/main' component={Main}></Route>
				<Redirect from='/' to='/login' />
			</Switch>
		</div>
	);
}

export default App;
