import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
	const pathVariable = request.nextUrl.pathname;
	console.log(pathVariable);
	const publicpath = ["/register", "/login"];
	// const publicVariable = request.nextUrl.pathname;
	// console.log(publicVariable);
	const auth = request.cookies.get("token") || "";
	if (publicpath.includes(pathVariable) && auth) {
		console.log("include");

		return NextResponse.redirect(new URL("/", request.url));
	}
	if (!publicpath.includes(pathVariable) && auth) {
		console.log("not include");
		return NextResponse.redirect(new URL("/login", request.url));
	}
};

export const config = {
	matcher: ["/"],
};
