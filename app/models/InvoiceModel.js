import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
	{
		userID: { type: mongoose.Types.ObjectId, required: true },
		payable: { type: String, required: true },
		cus_details: { type: String, required: true },
		ship_details: { type: String, required: true },
		tran_id: { type: String, required: true },
		payment_status: { type: String, required: true },
		delivery_status: { type: String, required: true },
		total: { type: String, required: true },
		vat: { type: String, required: true },
		val_id: { type: String, required: true },
		productID: { type: mongoose.Types.ObjectId, required: true },
	},
	{ timestamps: true, versionKey: false }
);

// const InvoiceModel = mongoose.model("invoices", DataSchema);
// module.exports = InvoiceModel;

const InvoiceModel = mongoose.model("invoices", DataSchema);

export default InvoiceModel;