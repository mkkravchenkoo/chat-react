import axios from 'axios';
import {
	MESSAGES_FETCH_FAIL,
	// MESSAGE_SEND_FAIL,
	// MESSAGE_SEND_SUCCESS,
	MESSAGES_FETCH_SUCCESS,
	MESSAGES_LOAD_MORE_SUCCESS
} from "./actionTypes";

const getMessages = (page) => async dispatch => {
	try {
		if(page){
			// load more
			const response = await axios.get(`/messages?page=${page}`);
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


export {
	getMessages,
}

