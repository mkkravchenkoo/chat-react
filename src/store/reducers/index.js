import {combineReducers} from "redux";
import user from "./user";
import messages from "./message";

export default combineReducers({
	user,
	messages
})