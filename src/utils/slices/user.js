import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
	name: "user",
	initialState: {
		loggedUser: null,
	},
	reducers: {
		addUser: (state, action) => {
			state.loggedUser = action.payload;
		},
		removeUser: (state) => {
			state.loggedUser = null;
		},
	},
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
