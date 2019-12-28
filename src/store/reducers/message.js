import {
	MESSAGES_FETCH_SUCCESS,
	// MESSAGE_SEND_SUCCESS,
	// MESSAGE_SEND_FAIL,
	// MESSAGES_FETCH_FAIL,
	MESSAGES_LOAD_MORE_SUCCESS
} from "../actions/actionTypes";

const initialState = {
	total:0,
	page:1,
	items:[]
};

const messages = (state=initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case MESSAGES_FETCH_SUCCESS :
			return {
				...state,
				...payload,
				items:payload.items.reverse()
			}
		case MESSAGES_LOAD_MORE_SUCCESS :
			return {
				...state,
				total:payload.total,
				page:payload.page,
				items:[
					...payload.items.reverse(),
					...state.items,
				]

			}
	}
	return state
}

export default messages