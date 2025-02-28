import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
	name: "user",
	initialState: {
		loggedUser: null,
		connections: [],
		requests: [],
	},
	reducers: {
		addUser: (state, action) => {
			state.loggedUser = action.payload;
		},
		removeUser: (state) => {
			state.loggedUser = null;
		},
		updateConnections: (state, action) => {
			state.connections = action.payload;
		},
		updateRequests: (state, action) => {
			state.requests = action.payload;
		},
		removeRequest: (state, action) => {
			const filteredList = state.requests.filter(
				(item) => item._id !== action.payload
			);
			state.requests = filteredList;
		},
	},
});
export const {
	addUser,
	removeUser,
	updateConnections,
	updateRequests,
	removeRequest,
} = userSlice.actions;
export default userSlice.reducer;
