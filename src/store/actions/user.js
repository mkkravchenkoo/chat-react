import {USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from "./actionTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from 'axios'

const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}
	try {
		const res = await axios.get('https://radiant-taiga-91549.herokuapp.com/users/me');

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

export {
	loadUser
}