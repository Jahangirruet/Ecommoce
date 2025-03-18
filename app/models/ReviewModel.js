import mongoose from "mongoose";

const DataSchema = mongoose.Schema(

  {     
        productID: { type: mongoose.Types.ObjectId, required: true },
        userID: { type: mongoose.Types.ObjectId, required: true },
        des: { type: String, required: true },
        rating: { type: String, required: true },
  }
)

const ReviewModel = mongoose.model("reviews", DataSchema);

export default ReviewModel;