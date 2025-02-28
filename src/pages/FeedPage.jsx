import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeItem } from "../utils/slices/feed";
import UserCard from "../components/global-components/UserCard";

function FeedPage() {
	const dispatch = useDispatch();
	const feedData = useSelector((store) => store.feed);

	const fetchFeed = async () => {
		const feedCards = await axios.get(`http://localhost:5000/profile/feed`, {
			withCredentials: true,
		});
		dispatch(addFeed(feedCards.data));
	};
	useState(() => {
		fetchFeed();
	}, []);
	const removeHandler = (id) => {
		dispatch(removeItem(id));
	};
	const userInfo = feedData?.userList?.data?.[0];
	return (
		<div>
			{userInfo ? (
				<UserCard user={{ ...userInfo }} remove={removeHandler} />
			) : (
				<>No more users found</>
			)}
		</div>
	);
}

export default FeedPage;
