import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/slices/feed";
import UserCard from "../components/global-components/UserCard";

function FeedPage() {
	const dispatch = useDispatch();
	const feedData = useSelector((store) => store.feed);
	const [cuurentPage, setCurrentPage] = useState(1);
	const fetchFeed = async () => {
		const feedCards = await axios.get(
			`http://localhost:5000/profile/feed?page=${cuurentPage}`,
			{ withCredentials: true }
		);
		dispatch(addFeed(feedCards.data));
	};
	useState(() => {
		fetchFeed();
	}, []);
    const x = feedData?.userList?.data?.[0];
	return (
		<div>
			<UserCard user={{...x}} />
		</div>
	);
}

export default FeedPage;
