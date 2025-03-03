import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		email: { type: String, required: true },
		otp: { type: String, required: true },
	},
	{ timestamps: true, versionKey: false }
);

// const userModel = mongoose.model("users", userSchema);

// export default userModel;

const userModel = mongoose.model("users", DataSchema);

export default userModel;