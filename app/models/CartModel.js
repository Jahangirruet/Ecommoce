import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
	{
		color: { type: String, required: true },
		qty: { type: String, required: true },
		size: { type: String, required: true },
		userID: { type: mongoose.Types.ObjectId, required: true },
		productID: { type: mongoose.Types.ObjectId, required: true },
	},
	{ timestamps: true, versionKey: false }
);

// const CartModel = mongoose.model("carts", DataSchema);
// module.exports = CartModel;

const CartModel = mongoose.model("carts", DataSchema);

export default CartModel;
