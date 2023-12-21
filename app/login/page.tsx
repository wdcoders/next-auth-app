"use client";
import axios from "axios";
import React from "react";

const Login = () => {
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
		</div>
	);
};

export default Login;
