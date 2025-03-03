import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
	{
		title: { type: String, required: true },
		des: { type: String, required: true },
		price: { type: String, required: true },
		image: { type: String, required: true },
		productID: { type: mongoose.Types.ObjectId, required: true },
	},
	{ timestamps: true, versionKey: false }
);

// const ProductSliderModel = mongoose.model("productsliders", DataSchema);
// module.exports = ProductSliderModel;

const ProductSliderModel = mongoose.model("productsliders", DataSchema);

export default ProductSliderModel;