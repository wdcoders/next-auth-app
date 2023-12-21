import jwt from "jsonwebtoken";
import { IUser } from "../models/user.model";

const AUTH = process.env.AUTH_JWT || "";
const FORGET = process.env.FORGET_JWT || "";

export const generateToken = async (user: IUser) => {
	const token = await jwt.sign({ userId: user._id }, AUTH, {
		expiresIn: "2d",
	});
	return token;
};

export const verifyToken = async (token: string) => {
	const verified = await jwt.verify(token, AUTH);
};
