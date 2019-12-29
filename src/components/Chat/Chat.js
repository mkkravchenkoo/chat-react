import React, {useEffect, useRef, useState} from 'react';
import MessageList from "../MessageList";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core";
import LogoutButton from "../LogoutButton";
import Paper from "@material-ui/core/Paper";
import LoginButton from "../LoginButton";
import LoginRegisterPopup from "../LoginRegisterPopup";
import {connect} from "react-redux";
import UserAvatar from "../UserAvatar";
import Skeleton from '@material-ui/lab/Skeleton';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		margin:"0 auto",
		height:"100%"
	},
	paper: {
		paddingBottom: 50,
		boxShadow:"none"
	},
	appBar: {
		top: 'auto',
		bottom: 0,
		width: '100%',
		maxWidth: 360,
		left:"50%",
		marginLeft:"-180px"
	},
	topToolbar:{
		flexGrow: 1,
		display:"flex",
		alignItems: "center"
	},
	topToolbarText:{
		fontWeight:700,
		marginLeft: "10px"
	}
}));


const Chat = (props) => {
	const classes = useStyles();
	const [openLoginPopup, setOpenLoginPopup] = useState(false);
	const {user, isUserLoading} = props;
	const {email, isAuthenticated} = user;

	const myRef = useRef(null);

	const executeScroll = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
	};

	useEffect(() => {
		executeScroll();
	},[]);

	const validate = (values) => {
		const errors = {};
		if (!values.message) {
			errors.message = 'Required';
		}
		return errors;
	};

	const submit = async () => {
		const {message} = values;
		try {
			const response = await axios.post(`/messages`, {message});
			console.log(response)
		}catch (e) {
			if(e.response && e.response.data){
				setServerErrors({
					message:e.response.data
				})
			}else{
				setServerErrors({
					message:e.message
				})
			}

		}
	}


	const { handleChange, handleSubmit, values, errors, setServerErrors } = useForm(
		submit,
		validate,
	);


	return (
		<div className={classes.root}>
			<AppBar position="sticky" style={{flexGrow: 1}} color="inherit">
				<Toolbar>
					<>
						<div className={classes.topToolbar}>
							{isUserLoading ? (
								<>
									<div>
										<Skeleton variant="circle" width={40} height={40} />
									</div>
									<div>
										<Skeleton variant="rect" width={150} height={20} />
									</div>

								</>
								) : (
								isAuthenticated ? (
										<>
											<UserAvatar letters={`${email[0]}${email[1]}`} isOnline={true}/>
											<div className={classes.topToolbarText}>{email}</div>
										</>
									) : <>
											<UserAvatar isOnline={false}/>
											<div className={classes.topToolbarText}>Please, Login</div>
										</>
							)}
						</div>
						{!isUserLoading && (
							<>
								<LogoutButton/>
								<LoginButton setOpenLoginPopup={setOpenLoginPopup}/>
							</>
						)}
					</>
				</Toolbar>
			</AppBar>
			<Paper square className={classes.paper}>
				<MessageList user={user}/>
				<div ref={myRef}/>
			</Paper>
			<AppBar position="fixed" color="inherit" className={classes.appBar}>
				<Toolbar>
					<FormControl fullWidth error={!!errors["message"]} style={{marginRight:"5px"}}>
						<TextField
							id="message"
							placeholder="Your message"
							multiline
							rowsMax="2"
							error={!!errors["message"]}
							value={values['message'] ? values['message'] : "" }
							onChange={(event) => handleChange("message", event.target.value)}
						/>
						{errors["message"] && <FormHelperText>{errors["message"]}</FormHelperText>}
					</FormControl>
					<Button variant="contained" color="primary" onClick={handleSubmit}>
						Send
					</Button>
				</Toolbar>
			</AppBar>
			<LoginRegisterPopup open={openLoginPopup} setOpen={setOpenLoginPopup}/>
		</div>
	);
};

const mapStateTotProps = (state) => {
	const {user} = state;
	return {
		user
	}
}
export default connect(
	mapStateTotProps,
)(Chat);
