import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/slices/user";
import { ToastContainer } from "react-toastify";

function Layout() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store?.user?.loggedUser);

	const fetchProfileOfLoggedUser = async () => {
		try {
			const loggedUser = await axios.get(
				"http://localhost:5000/profile/view",
				{ withCredentials: true }
			);
			if (!loggedUser) throw Error;
			const { headers, ...userData } = loggedUser.data;
			dispatch(addUser(userData));
		} catch (error) {
			navigate("/login");
		}
	};
	useEffect(() => {
		if (!user) {
			fetchProfileOfLoggedUser();
		}
	}, []);
	return (
		<div className="flex flex-col min-h-screen min-w-full">
			<Navbar />
			<div className="flex-grow flex justify-center items-center overflow-y-auto my-12">
				<Outlet />
				<ToastContainer />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
