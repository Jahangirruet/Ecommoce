import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
	{
		userID: { type: mongoose.Types.ObjectId, required: true },
		productID: { type: mongoose.Types.ObjectId, required: true },
		invoiceID: { type: mongoose.Types.ObjectId, required: true },
		qty: { type: String, required: true },
		price: { type: String, required: true },
		color: { type: String, required: true },
		size: { type: String, required: true },
	},
	{ timestamps: true, versionKey: false }
);

// const InvoiceProductsModel = mongoose.model("invoiceproducts", DataSchema);
// module.exports = InvoiceProductsModel;

const InvoiceProductsModel = mongoose.model("invoiceproducts", DataSchema);

export default InvoiceProductsModel;