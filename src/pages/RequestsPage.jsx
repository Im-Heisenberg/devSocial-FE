import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRequests } from "../utils/slices/user";
import RequestCard from "../components/global-components/RequestCard";

function RequestsPage() {
	const dispatch = useDispatch();
	const requests = useSelector((store) => store.user.requests);
	const fetchRequests = async () => {
		try {
			const data = await axios.get(
				"http://localhost:5000/request/received",
				{
					withCredentials: true,
				}
			);
			dispatch(updateRequests(data.data.data));
		} catch (error) {}
	};
	useEffect(() => {
		fetchRequests();
	}, []);
	return (
		<div>
			{requests ? (
				<>
					{requests.map((item) => (
						<RequestCard user={item} />
					))}
				</>
			) : (
				<>No Requests found</>
			)}
		</div>
	);
}

export default RequestsPage;
