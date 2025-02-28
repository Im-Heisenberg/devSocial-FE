import React from "react";
import Button from "./Button";

function UserCard({user}) {
	const { photoUrl, firstname, lastname, age, gender } = user;
	console.log(firstname);
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
						onclick={() => console.log("like")}
						variant="rounded-full btn-secondary "
					/>
					<Button
						text={"Pass"}
						onclick={() => console.log("like")}
						variant="rounded-full btn-primary"
					/>
				</div>
			</div>
		</div>
	);
}

export default UserCard;
