import axios from 'axios';
import {
	MESSAGES_FETCH_FAIL,
	// MESSAGE_SEND_FAIL,
	// MESSAGE_SEND_SUCCESS,
	MESSAGES_FETCH_SUCCESS,
	MESSAGES_LOAD_MORE_SUCCESS,
	MESSAGE_NEW
} from "./actionTypes";

const getMessages = (skip) => async dispatch => {
	try {
		if(skip){
			// load more
			const response = await axios.get(`/messages?skip=${skip}`);
			dispatch({
				type: MESSAGES_LOAD_MORE_SUCCESS,
				payload: response.data
			})
		}else{
			const response = await axios.get(`/messages`);
			dispatch({
				type: MESSAGES_FETCH_SUCCESS,
				payload: response.data
			})

		}

	}catch (e) {
		dispatch({
			type: MESSAGES_FETCH_FAIL,
		})
	}
}

const newMessages = (message) => async dispatch => {
	dispatch({
		type: MESSAGE_NEW,
		payload: message
	})
}


export {
	getMessages,
	newMessages
}

