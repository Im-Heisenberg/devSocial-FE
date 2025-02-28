import React, { useState } from "react";
import axios from "axios";
import Input from "../components/global-components/Input";
import Button from "../components/global-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/slices/user";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
	loginFailed,
	loginSuccess,
	signUpFailed,
	signUpSuccess,
	toastPosition,
} from "../utils/constants";

function LoginPage() {
	const [email, setEmail] = useState("rohit@gmail.com");
	const [password, setPassword] = useState("Admin@123");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [fName, setFName] = useState("");

	const [error, setError] = useState("");

	const [isSignUp, setSignUp] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loggedUser = useSelector((store) => store?.user?.loggedUser);

	if (loggedUser) {
		navigate("/feed");
	}

	const resetHandler = () => {
		setEmail("");
		setPassword("");
		setError("");
	};
	const loginHandler = async () => {
		try {
			const user = await axios.post(
				"http://localhost:5000/auth/login",
				{ email, password },
				{ withCredentials: true }
			);
			const { headers, ...userData } = user.data;
			dispatch(addUser(userData));
			navigate("/");
			toast.success(loginSuccess, {
				position: toastPosition,
			});
		} catch (err) {
			setError(err.message);
			toast.error(loginFailed, {
				position: toastPosition,
			});
		}
	};
	const singupHandler = async () => {
		try {
			const data = await axios.post(
				"http://localhost:5000/auth/sign-up",
				{ firstname: fName, email, password, age, gender },
				{ withCredentials: true }
			);
			dispatch(addUser(data?.data));
			toast.success(signUpSuccess, {
				position: toastPosition,
			});
			navigate("/feed");
		} catch (err) {
			setError(err.message);
			toast.error(signUpFailed, {
				position: toastPosition,
			});
		}
	};
	return (
		<div className="flex justify-center align-middle">
			<div className="card bg-neutral text-neutral-content w-96 flex justify-center align-middle">
				<div className="card-body items-center text-center flex gap-4">
					<h2 className="card-title font-bold">
						{isSignUp ? "Sign-up" : "Login"}
					</h2>
					<div className="flex flex-col gap-2 w-full">
						<Input
							placeholder="Email"
							value={email}
							updateValue={(e) => setEmail(e.target.value)}
							errorClass={` ${error ? "border border-red-400" : ""}`}
						/>
						<Input
							type="password"
							placeholder="Password"
							value={password}
							updateValue={(e) => setPassword(e.target.value)}
							errorClass={` ${error ? "border border-red-400" : ""}`}
						/>
						{isSignUp && (
							<>
								<Input
									placeholder="Firstname"
									value={fName}
									updateValue={(e) => setFName(e.target.value)}
									errorClass={` ${
										error ? "border border-red-400" : ""
									}`}
								/>
								<Input
									type="number"
									placeholder="Age"
									value={age}
									updateValue={(e) => setAge(e.target.value)}
									errorClass={` ${
										error ? "border border-red-400" : ""
									}`}
								/>
								<Input
									type="text"
									placeholder="Gender"
									value={gender}
									updateValue={(e) => setGender(e.target.value)}
									errorClass={` ${
										error ? "border border-red-400" : ""
									}`}
								/>
							</>
						)}
					</div>
					{error && (
						<p className="font-semibold text-red-400">
							{isSignUp ? "SignUp Failed" : "Wrong Credentials !!"}
						</p>
					)}
					<div className="card-actions justify-center w-full">
						<Button
							variant="btn-primary"
							text={`${isSignUp ? "SignUp" : "Login"}`}
							onclick={isSignUp ? singupHandler : loginHandler}
						/>
						<Button
							variant="btn-ghost"
							text="Reset"
							onclick={resetHandler}
						/>
					</div>
					<div>
						{isSignUp ? (
							<p
								onClick={() => setSignUp(false)}
								className="text-blue-500 cursor-pointer"
							>
								Login here
							</p>
						) : (
							<p onClick={() => setSignUp(true)}>
								New user ?{" "}
								<span className="text-blue-500 cursor-pointer">
									Sign-up here
								</span>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
