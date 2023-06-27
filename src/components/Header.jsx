import React from "react";

const Header = (props) => {
	return (
		<header>
			<h1>To do list</h1>
			<button onClick={props.logoutHandler}>Logout</button>
		</header>
	);
};

export default Header;
