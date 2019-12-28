import React from 'react';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";

const LoginButton = ({setOpenLoginPopup, isAuthenticated}) => {
	return (
		<>
			{!isAuthenticated && (
				<Button variant="outlined" color="primary" onClick={() => setOpenLoginPopup(true)}>
					login
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
	mapStateToProps
)(LoginButton);
