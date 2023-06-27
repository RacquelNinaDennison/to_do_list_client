import React from "react";

export const SingleNote = (props) => {
	const handleDelete = () => {
		console.log(props.id);
		props.delete(props.id);
		console.log("in single");
	};
	return (
		<div className='note'>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};
