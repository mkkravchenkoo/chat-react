import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Chat from "./components/Chat";

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

import reducers from './store/reducers'
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./store/actions/user";
import CssBaseline from "@material-ui/core/CssBaseline";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

axios.defaults.baseURL = 'https://radiant-taiga-91549.herokuapp.com';

if(localStorage.token){
	setAuthToken(localStorage.token)
}

const App = () => {

	const [isUserLoading, setIsUserLoading] = useState(true);
	useEffect(() => {
		(async () => {
			await store.dispatch(loadUser());
			setIsUserLoading(false);
		})();
	},[]);

	return (
		<Provider store={store}>
			<div className="App">
				<CssBaseline />
				<Chat isUserLoading={isUserLoading}/>
			</div>
		</Provider>

	);
}

export default App;
