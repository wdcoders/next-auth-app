"use client";
import axios from "axios";
import React from "react";

const Login = () => {
	const onLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
		try {
			const user = {
				email: "user@wdcoders.com",
				password: "123456",
			};
			const response = await axios.post("/api/login", user);
			const data = await response.data;
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
		try {
			const user = {
				name: "Normal User",
				email: "user@wdcoders.com",
				password: "123456",
			};
			const response = await axios.post(
				"/api/register",
				user
			);
			const data = await response.data;
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			Login
			<button onClick={onSubmit}>Click</button>
			<button onClick={onLogin}>OnLogin</button>
		</div>
	);
};

export default Login;
