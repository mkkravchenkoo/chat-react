import {USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, ONLINE_USERS} from "../actions/actionTypes";

const initialState = {
	isAuthenticated:false,
	onlineUsers:[]
};

const user = (state=initialState, action) => {
	const {type, payload} = action;

	switch (type) {
		case USER_LOGIN_SUCCESS :
			return {
				...state,
				isAuthenticated:true,
				...payload
			}
		case ONLINE_USERS :
			return {
				...state,
				onlineUsers:payload
			}
		case USER_LOGOUT :
		case USER_LOGIN_FAIL :
			localStorage.removeItem('token');
			return {
				...initialState,
				isAuthenticated:false
			}
	}
	return state
}

export default user