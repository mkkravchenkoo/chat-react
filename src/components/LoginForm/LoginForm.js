import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useForm from "../../hooks/useForm";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import {connect} from "react-redux";
import {loadUser} from "../../store/actions/user";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";


const useStyles = makeStyles(theme => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const LoginForm = (props) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const classes = useStyles();

	const validate = (values) => {
		const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const errors = {};

		if (!values.email) {
			errors.email = 'Required';
		}
		if (!values.password) {
			errors.password = 'Required';
		}
		if (values.email && !emailRegex.test(values.email)) {
			errors.email = 'Email is not valid';
		}

		return errors;
	};


	const submit = async () => {
		setIsSubmitting(true);
		const {email, password} = values;
		try {
			const response = await axios.post('/auth', {email, password})
			const {data} = response;
			const {token} = data;
			localStorage.setItem('token', token);
			props.loadUser();

			setIsSubmitting(false);
		}catch (e) {
			console.log(e);
			setServerErrors({email:e.message});
			setIsSubmitting(false);
		}
	}

	const { handleChange, handleSubmit, values, errors, setServerErrors } = useForm(
		submit,
		validate,
	);


	return (
		<>
			<DialogContent>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}/>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} noValidate onSubmit={handleSubmit}>
						<FormControl fullWidth error={!!errors["email"]}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								onChange={(e) => handleChange(e.target.name, e.target.value)}
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								error={!!errors["email"]}
								value={values["email"] ? values["email"] : ""}
							/>
							{errors["email"] && <FormHelperText>{errors["email"]}</FormHelperText>}
						</FormControl>
						<FormControl fullWidth error={!!errors["password"]}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								error={!!errors["password"]}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
								autoComplete="current-password"
								value={values["password"] ? values["password"] : ""}
							/>
							{errors["password"] && <FormHelperText>{errors["password"]}</FormHelperText>}
						</FormControl>
					</form>
				</div>
			</DialogContent>
			<DialogActions style={{justifyContent:"center"}}>
				{!isSubmitting ? (
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
						size="large"
					>
						Sign In
					</Button>
				) : (
					<CircularProgress />
				)}
			</DialogActions>

		</>
	);
}

export default connect(
	null,
	{loadUser}
)(LoginForm)