import React, {useEffect, useState} from 'react';
import Chat from "./components/Chat";

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

import reducers from './store/reducers'
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./store/actions/user";
import LoginRegisterPopup from "./components/LoginRegisterPopup";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


if(localStorage.token){
	setAuthToken(localStorage.token)
}

const App = () => {

	useEffect(() => {
		store.dispatch(loadUser())
	},[]);

	const [openLoginPopup, setOpenLoginPopup] = useState(false);

	return (
		<Provider store={store}>
			<div className="App">
				<Chat/>
				<LoginButton setOpenLoginPopup={setOpenLoginPopup}/>
				<LogoutButton/>
				<LoginRegisterPopup open={openLoginPopup} setOpen={setOpenLoginPopup}/>
			</div>
		</Provider>

	);
}

export default App;
