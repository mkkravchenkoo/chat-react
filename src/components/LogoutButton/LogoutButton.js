import React from 'react';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {userLogOut} from "../../store/actions/user";

const LogoutButton = ({isAuthenticated, userLogOut}) => {
	return (
		<>
			{isAuthenticated && (
				<Button variant="outlined" color="primary" onClick={userLogOut}>
					Log out
				</Button>
			) }
		</>

	);
};

const mapStateToProps = ({user}) => {
	const {isAuthenticated} = user;
	return {
		isAuthenticated
	}
}
export default connect(
	mapStateToProps, {userLogOut}
)(LogoutButton);
