import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      
    },
    codelink: {
      type: String,  
    },
    livelink: {
        type: String,  
      },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// const PortfolioModel = mongoose.model("portfolios", PortfolioSchema);

// export default PortfolioModel;

const PortfolioModel = mongoose.model("portfolios", DataSchema);

export default PortfolioModel;