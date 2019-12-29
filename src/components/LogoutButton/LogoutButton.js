import React from 'react';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {userLogOut} from "../../store/actions/user";

const LogoutButton = ({isAuthenticated, userLogOut, _id}) => {
	return (
		<>
			{isAuthenticated && (
				<Button variant="outlined" color="secondary" onClick={() => userLogOut(_id)}>
					Log out
				</Button>
			) }
		</>

	);
};

const mapStateToProps = ({user}) => {
	const {isAuthenticated, _id} = user;
	return {
		isAuthenticated,
		_id
	}
}
export default connect(
	mapStateToProps, {userLogOut}
)(LogoutButton);
