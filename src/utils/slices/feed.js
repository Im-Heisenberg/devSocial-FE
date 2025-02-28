import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
	name: "feed",
	initialState: {
		userList: [],
	},
	reducers: {
		addFeed: (state, action) => {
			state.userList = action.payload;
		},
		removeItem: (state, action) => {
			const newList = state.userList.data.filter(
				(user) => user._id != action.payload
			);
			state.userList.data = newList;
		},
	},
});

export const { addFeed, removeItem } = feedSlice.actions;
export default feedSlice.reducer;
