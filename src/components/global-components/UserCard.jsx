import React from "react";
import Button from "./Button";
import axios from "axios";

function UserCard({ user, remove }) {
	const { _id, photoUrl, firstname, lastname, age, gender } = user;

	const likeHandler = async () => {
		try {
			await axios.post(
				`http://localhost:5000/request/send/like/${_id}`,
				{},
				{ withCredentials: true }
			);
			remove(_id);
		} catch (error) {}
	};
	const passHandler = async () => {
		try {
			await axios.post(
				`http://localhost:5000/request/send/pass/${_id}`,
				{},
				{ withCredentials: true }
			);
			remove(_id);
		} catch (error) {}
	};
	return (
		<div className="card bg-base-300 w-72 my-4 shadow-2xl">
			<figure>
				<img src={photoUrl} alt={`user-${firstname}`} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{firstname} {lastname}
				</h2>
				<p>
					{gender} | {age}
				</p>
				<div className="card-actions justify-center">
					<Button
						text={"Like"}
						onclick={likeHandler}
						variant="rounded-full btn-secondary "
					/>
					<Button
						text={"Pass"}
						onclick={passHandler}
						variant="rounded-full btn-primary"
					/>
				</div>
			</div>
		</div>
	);
}

export default UserCard;
