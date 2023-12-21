import Link from "next/link";

const Navbar = () => {
	return (
		<div className="flex bg-white py-5 shadow">
			<div className="container flex justify-between">
				<h4 className="font-bold text-xl">
					Next Authentication
				</h4>
				<div className="flex gap-3">
					<Link href={"/"}>Home</Link>
					<Link href={"/login"}>Login</Link>
					<Link href={"/register"}>Register</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
