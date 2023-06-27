import React, { useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.scss";
import Button from "../UI/Button/Button";

const Login = (props) => {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [emailIsValid, setEmailIsValid] = useState();
	const [enteredPassword, setEnteredPassword] = useState("");
	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);
	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false);

	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);

		setFormIsValid(
			event.target.value.includes("@") && enteredPassword.trim().length > 6
		);
	};

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);

		setFormIsValid(
			event.target.value.trim().length > 6 && enteredEmail.includes("@")
		);
	};

	const validateEmailHandler = () => {
		setEmailIsValid(enteredEmail.includes("@"));
	};

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (login) {
			console.log("login");
			props.onLogin(enteredEmail, enteredPassword);
			setLogin(false);
		}
		if (register) {
			console.log("register");
			props.onRegister(enteredEmail, enteredPassword);
			setRegister(false);
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailIsValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						value={enteredEmail}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordIsValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={enteredPassword}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type='submit'
						className={classes.btn}
						disabled={!formIsValid}
						onClick={() => {
							setLogin(true);
						}}
					>
						Login
					</Button>
					<Button
						type='submit'
						className={classes.btn}
						disabled={!formIsValid}
						onClick={() => {
							setRegister(true);
						}}
					>
						Register
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
