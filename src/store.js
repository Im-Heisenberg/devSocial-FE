import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./utils/slices/user";
import feedReducer from './utils/slices/feed';

export const store = configureStore({
	reducer: {
		user: userReducer,
		feed:feedReducer,
	},
});
