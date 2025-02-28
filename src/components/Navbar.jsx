import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../utils/helpers";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { removeUser } from "../utils/slices/user";
import axios from "axios";

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	console.log(location.pathname);
	const user = useSelector((store) => store?.user?.loggedUser);
	const userName = capitalizeFirstLetter(user?.data?.firstname);

	const logoutHandler = async () => {
		try {
			await axios.post(
				"http://localhost:5000/auth/logout",
				{},
				{
					withCredentials: true,
				}
			);
			dispatch(removeUser());
			navigate("/login");
			toast.success("Logged out", {
				position: "bottom-right",
			});
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<div className="navbar bg-base-300">
			<div className="flex-1">
				<Link to={"/feed"} className="text-xl font-bold">
					DevSocial
				</Link>
			</div>
			{user && (
				<div className="flex-none">
					<p className="nav-username">Welcome,{userName}</p>
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src={user?.data?.photoUrl}
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl"
						>
							<li>
								<Link to={"/edit-profile"} className="justify-between">
									Edit Profile
									<span className="badge">New</span>
								</Link>
							</li>
							{location.pathname.includes("/edit-profile") && (
								<li>
									<Link to={'/feed'}>Feed</Link>
								</li>
							)}
							<li>
								<Link onClick={logoutHandler}>Logout</Link>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
