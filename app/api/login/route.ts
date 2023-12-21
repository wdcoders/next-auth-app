import { ConnectDB } from "@/lib/config/db";
import { UserModel } from "@/lib/models/user.model";
import { generateToken } from "@/lib/service/token.service";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

ConnectDB();
export const POST = async (request: NextRequest) => {
	const { email, password } = await request.json();

	const user = await UserModel.findOne({ email });
	if (!user) {
		return NextResponse.json(
			{ error: "User is not exists." },
			{ status: 400 }
		);
		return;
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password);
	if (!isPasswordMatch) {
		return NextResponse.json(
			{ error: "Invalid Credentials." },
			{ status: 400 }
		);
		return;
	}
	const token = await generateToken(user);
	const response = NextResponse.json(
		{ error: null, message: "User loggedin successfully." },
		{ status: 200 }
	);

	response.cookies.set("token", token, {
		httpOnly: true,
		secure: true,
	});

	return response;
};
