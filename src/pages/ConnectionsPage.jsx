import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateConnections } from "../utils/slices/user";

function ConnectionsPage() {
	const dispatch = useDispatch();
	const fetchConnections = async () => {
		try {
			const data = await axios.get(
				"http://localhost:5000/request/connections",
				{ withCredentials: true }
			);
			dispatch(updateConnections(data?.data));
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		fetchConnections();
	}, []);
	return (
		<div>
			<h1>Your Connections 👋</h1>
		</div>
	);
}

export default ConnectionsPage;
