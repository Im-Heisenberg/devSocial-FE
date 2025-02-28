import React from "react";

function TableInput({ label, inputValue, inputChange, labelClasses = "" }) {
	return (
		<label className="form-control w-full max-w-xs">
			<div className="label">
				<span className={`label-text ${labelClasses}`}>{label}</span>
			</div>
			<input
				type="text"
				placeholder="Type here"
				className="input input-bordered w-full max-w-xs"
				value={inputValue}
				onChange={(e) => inputChange(e)}
			/>
		</label>
	);
}

export default TableInput;
