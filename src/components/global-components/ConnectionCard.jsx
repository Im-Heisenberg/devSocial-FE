import React from "react";

function ConnectionCard({ user }) {
	const { photoUrl, firstname, gender, age, skills } = user;
	return (
		<div className="flex gap-4 border border-gray-600 w-96 p-2 rounded-lg shadow-xl">
			<img src={photoUrl} className="h-16 w-16" />
			<div className="flex w-full justify-between items-center px-2">
				<div>
					<span className="font-semibold">{firstname}</span>
					<div>
						<span>
							{age}|{gender}
						</span>
						{skills?.map((item) => (
							<span>{item}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ConnectionCard;
