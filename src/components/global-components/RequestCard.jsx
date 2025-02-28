import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeRequest } from "../../utils/slices/user";

function RequestCard({ user }) {
	const dispatch = useDispatch();
	const { photoUrl, firstname, gender, age, skills } = user.sender;
	const acceptHandler = async () => {
		try {
			const res = await axios.patch(
				`http://localhost:5000/request/review/accepted/${user._id}`,
				{},
				{ withCredentials: true }
			);
			dispatch(removeRequest(user._id));
		} catch (error) {
			console.log(error.message);
		}
	};
	const rejectHandler = async () => {
		try {
			const res = await axios.patch(
				`http://localhost:5000/request/review/rejected/${user._id}`,
				{},
				{ withCredentials: true }
			);
			dispatch(removeRequest(user._id));
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div
			div
			className="flex gap-4 border border-gray-600 w-96 p-2 rounded-lg shadow-xl"
		>
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
				<div className="flex gap-4">
					<button
						onClick={acceptHandler}
						type="button"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						✅
					</button>
					<button
						onClick={rejectHandler}
						type="button"
						class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						❌
					</button>
				</div>
			</div>
		</div>
	);
}

export default RequestCard;
