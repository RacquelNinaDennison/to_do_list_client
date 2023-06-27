import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Error.scss";
export const ErrorText = (props) => {
	useEffect(() => {
		const toastId = toast("Fields cannot be blank");

		return () => {
			toast.dismiss(toastId); // Remove the toast when component unmounts
		};
	}, []);

	function handleExitButton() {
		return props.exitButton();
	}

	return (
		<button className='error_btn' onClick={handleExitButton}>
			Go back
		</button>
	);
};
