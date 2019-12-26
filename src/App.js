import React, {useEffect} from 'react';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Chat from "./components/Chat";

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import reducers from './store/reducers'
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./store/actions/user";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


if(localStorage.token){
	setAuthToken(localStorage.token)
}

const App = () => {

	useEffect(() => {
		store.dispatch(loadUser())
	},[]);

	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Switch>
						<Route path="/login" component={LoginForm}/>
						<Route path="/register" component={RegisterForm}/>
						<Route path="/" component={Chat}/>
					</Switch>
				</Router>
			</div>
		</Provider>

	);
}

export default App;
