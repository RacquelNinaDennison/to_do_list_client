import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import CreateArea from "./components/TextArea/CreateArea";
import { useMutation } from "react-query";
import Login from "./components/Login/Login";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(null);

	const mutationSign = useMutation(
		async (login) => {
			return await axios.post("http://localhost:3000/auth/", login);
		},
		{
			onSuccess: (data) => {
				if (data.data.status == "1") {
					localStorage.setItem("isLoggedIn", "1");
					localStorage.setItem("userId", data.data.user.id);
					setIsLoggedIn("1");
				}
				if (data.data.status == "0") {
					toast("Invalid Credentials, try again");
					setIsLoggedIn("0");
				}
			},
		}
	);

	const mutationRegister = useMutation(
		async (register) => {
			return await axios.post("http://localhost:3000/auth/register", register);
		},
		{
			onSuccess: (data) => {
				if (data.data.status === "1") {
					toast("Successfully registered. Login with credentials");
				} else {
					toast("Error occured. Try again");
				}
			},
		}
	);

	useEffect(() => {
		const isLoggedIn = localStorage.getItem("isLoggedIn");

		if (isLoggedIn === "1") {
			setIsLoggedIn("1");
		}
	}, []);

	const loginHandler = (email, password) => {
		mutationSign.mutate({ name: email, password: password });
		console.log(mutationSign.isSuccess);
	};

	const registerHandler = async (email, password) => {
		mutationRegister.mutate({ name: email, password: password });
	};

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	return (
		<div>
			<Toaster />

			{isLoggedIn === "1" && (
				<>
					<>
						<Header logoutHandler={logoutHandler} />
						<CreateArea />
					</>
				</>
			)}
			{!(isLoggedIn == "1") && (
				<Login
					onLogin={loginHandler}
					onRegister={registerHandler}
					isLoading={mutationSign}
				/>
			)}
			<Footer />
		</div>
	);
}

export default App;
