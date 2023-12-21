import { ConnectDB } from "@/lib/config/db";
import { UserModel } from "@/lib/models/user.model";
import { NextResponse, NextRequest } from "next/server";

ConnectDB();
export const POST = async (request: NextRequest) => {
	const { name, email, password } = await request.json();

	const isUserExists = await UserModel.findOne({ email });
	if (isUserExists) {
		throw new Error("User already exists.");
	}

	await UserModel.create({
		name,
		email,
		password,
	});

	return NextResponse.json(
		{ error: null, message: "User register successfully." },
		{ status: 201 }
	);
};
