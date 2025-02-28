import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import FeedPage from "./pages/FeedPage";
import ConnectionsPage from "./pages/ConnectionsPage";
import RequestsPage from "./pages/RequestsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/connections" element={<ConnectionsPage/>} />
					<Route path="/requests" element={<RequestsPage/>} />
					<Route path="/feed" element={<FeedPage />} />
					<Route path="/edit-profile" element={<ProfilePage />} />
				</Route>
					<Route path="*" element={<>Not found</>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
