import {USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, ONLINE_USERS} from "./actionTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from 'axios'
import io from "socket.io-client";

const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}
	try {
		const res = await axios.get('/users/me');

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: res.data
		})
	} catch (e) {
		dispatch({
			type: USER_LOGIN_FAIL
		})

	}
}

const updateOnlineUsers = (users) => async dispatch => {
	dispatch({
		type: ONLINE_USERS,
		payload: users
	})
}

const userLogOut = (userId) => dispatch => {
	delete axios.defaults.headers.common['Authorization'];
	const socket = io(axios.defaults.baseURL);
	socket.emit('user logout', userId);
	dispatch({
		type: USER_LOGOUT,
	})
}

export {
	loadUser,
	userLogOut,
	updateOnlineUsers
}