import React from "react";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";

const Header = (props) => {
	return (
		<header>
			<h1>
				<ChecklistRtlIcon />
				To do list
			</h1>
			<button onClick={props.logoutHandler}>Logout</button>
		</header>
	);
};

export default Header;
