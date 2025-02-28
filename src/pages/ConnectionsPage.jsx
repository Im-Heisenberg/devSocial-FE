import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateConnections } from "../utils/slices/user";
import ConnectionCard from "../components/global-components/ConnectionCard";

function ConnectionsPage() {
	const dispatch = useDispatch();
	const connections = useSelector((store) => store.user.connections);
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
			{connections?.data?.map((user) => (
				<ConnectionCard user={user} key={user._id} />
			))}
		</div>
	);
}

export default ConnectionsPage;
