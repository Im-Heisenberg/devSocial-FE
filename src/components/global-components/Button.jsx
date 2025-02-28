import React from "react";

function Button({ variant = "", onclick, text }) {
	return (
		<button className={`btn ${variant}`} onClick={onclick}>
			{text}
		</button>
	);
}

export default Button;
