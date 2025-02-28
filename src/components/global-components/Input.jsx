import React from "react";

function Input({
	isSvgTrue = false,
	svg,
	value = "",
	updateValue,
	type = "text",
	errorClass = "",
	...props
}) {
	return (
		<label
			className={`input input-bordered flex items-center gap-2 ${
				errorClass ? errorClass : ""
			}`}
		>
			{isSvgTrue && svg}
			<input
				type={type}
				value={value}
				onChange={updateValue}
				className="grow"
				{...props}
			/>
		</label>
	);
}

export default Input;
