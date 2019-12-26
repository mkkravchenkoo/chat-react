import { useState, useEffect } from "react";
const useForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleChange = (name, value) => {
		setValues(values => (
			{
				...values,
				[name]: value
			}
		));
		setErrors(errors => (
			{
				...errors,
				[name]: null
			}
		));
	};
	const handleSubmit = event => {
		event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};
	const setServerErrors = (serverErrors) => {
		setErrors(errors => (
			{
				...errors,
				...serverErrors
			}
		));
	};
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);
	return {
		handleChange,
		handleSubmit,
		setServerErrors,
		values,
		errors
	};
};
export default useForm;