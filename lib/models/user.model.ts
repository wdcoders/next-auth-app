import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
	_id?: string;
	name: string;
	email: string;
	password: string;
}

const UserSchema = new mongoose.Schema<IUser>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

UserSchema.pre("save", async function (next) {
	const user = this;
	user.password = await bcrypt.hash(user.password, 10);
	next();
});

// UserSchema.methods.ConfirmPassword = async function (password: string) {
// 	return bcrypt.compare(password, this.password);
// };

export const UserModel =
	mongoose.models.User || mongoose.model("User", UserSchema);
