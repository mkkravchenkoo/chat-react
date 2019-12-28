import React, {useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm";
import {connect} from "react-redux";

const LoginRegisterPopup = (props) => {
	const {open, setOpen, isAuthenticated} = props;

	const [value, setValue] = React.useState(0);

	useEffect(() => {
		if(isAuthenticated){
			setOpen(false)
		}
	},[isAuthenticated]);


	return (
			<Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="auth-tabs-title">
				<AppBar position="static">
					<Tabs value={value} onChange={(event, newValue) => setValue(newValue)} aria-label="auth tabs" centered>
						<Tab label="Sign In" id="signIn" aria-controls="signIn-tab"/>
						<Tab label="Sign Up" id="signUp" aria-controls="signUp-tab"/>
					</Tabs>
				</AppBar>
				{value === 0 && <LoginForm/>}
				{value === 1 && <RegisterForm/>}
			</Dialog>
	);
}

const mapStateToProps = ({user}) => {
	const {isAuthenticated} = user;
	return {
		isAuthenticated
	}
}

export default connect(
	mapStateToProps
)(LoginRegisterPopup)