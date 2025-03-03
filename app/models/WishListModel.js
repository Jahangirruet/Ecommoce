import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
	{
		userID: { type: mongoose.Types.ObjectId, required: true },
		productID: { type: mongoose.Types.ObjectId, required: true },
	},
	{ timestamps: true, versionKey: false }
);

// const WishListModel = mongoose.model("wishes", DataSchema);
// module.exports = WishListModel;

const WishListModel = mongoose.model("wishes", DataSchema);

export default WishListModel;