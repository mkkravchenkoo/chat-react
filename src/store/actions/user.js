import {USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT} from "./actionTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from 'axios'

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

const userLogOut = () => dispatch => {
	dispatch({
		type: USER_LOGOUT,
	})
}

export {
	loadUser,
	userLogOut
}