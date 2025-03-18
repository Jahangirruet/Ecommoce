import BrandModel from "../models/BrandModel.js";
import CategoryModel from "../models/CategoryModel.js";
import ProductModel from "../models/ProductModel.js";
import ProductSliderModel from "../models/ProductSliderModel.js";
import ProductDetailModel from "../models/ProductDetailsModel.js";
//import ProductReviewModel from '../models/ReviewModel.js';
import ReviewModel from '../models/ReviewModel.js';
import mongoose from "mongoose";

const ObjectID = mongoose.Types.ObjectId;

export const BrandListService = async () => {
  try {
    let data = await BrandModel.find();
    return { status: "sucsess", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};
export const CategoryListService = async () => {
  try {
    let data = await ProductSliderModel.find();
    return { status: "sucsess", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};
export const SliderListService = async (params) => {
  try {
    let data = await ProductSliderModel.find();
    return { status: "sucsess", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

export const ListByBrandService = async (req) => {
  try {
    let BrandID = new ObjectID(req.params.BrandID);
    let MatchStage = { $match: { brandID: BrandID } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBranStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "categoryID": 0,
        "brandID": 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBranStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

export const ListByCatagoryService = async (req) => {
  try {
    let CategoryID = new ObjectID(req.params.CategoryID);
    let MatchStage = { $match: { categoryID: CategoryID } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBranStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "categoryID": 0,
        "brandID": 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBranStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    //console.log(data)
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

export const ListBySimilierService = async (req) => {
  try {
    let CategoryID = new ObjectID(req.params.CategoryID);
    let MatchStage = { $match: { categoryID: CategoryID } };
    let limitStage = { $limit: 20 };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBranStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "categoryID": 0,
        "brandID": 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBranStage,
      UnwindCategoryStage,
      ProjectionStage,
      limitStage,
    ]);
    //console.log(data)
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

export const ListByKeywordService = async (req) => {
  let SerchRegex = { $regex: req.params.Keyword, $option: "i" };
  let SearchParams = [{ title: SerchRegex }, { shortDes: SerchRegex }];
  let searchStage = { $or: SearchParams };

  let MatchStage = {$match:{}}

  let JoinWithBrandStage = {
    $lookup: {
      from: "brands",
      localField: "brandID",
      foreignField: "_id",
      as: "brand",
    },
  };
  let JoinWithCategoryStage = {
    $lookup: {
      from: "categories",
      localField: "categoryID",
      foreignField: "_id",
      as: "category",
    },
  };
  let UnwindBranStage = { $unwind: "$brand" };
  let UnwindCategoryStage = { $unwind: "$category" };

  let ProjectionStage = {
    $project: {
      "brand._id": 0,
      "category._id": 0,
      "categoryID": 0,
      "brandID": 0,
    },
  };
  
    let data = await ProductModel.aggregate([
      MatchStage,
      //searchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBranStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    //console.log(data)
    return { status: "success", data: data };
  

};

export const ListByRemarkService = async (req) => {
  try {
    let Remark = req.params.Remark;
    let MatchStage = { $match: { remark: Remark } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBranStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "categoryID": 0,
        "brandID": 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBranStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    //console.log(data)
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

export const DetailsService = async (req) => {
  try {
    let ProductID = new ObjectID(req.params.ProductID);
    let MatchStage = { $match: { _id: ProductID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinWithDetailsStage = {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };

    let UnwindBranStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let UnwindDetailsStage = { $unwind: "$details" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "categoryID": 0,
        "brandID": 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      JoinWithDetailsStage,
      UnwindBranStage,
      UnwindCategoryStage,
      UnwindDetailsStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

export const ReviewListService = async (req) => {
  try {
    let ProductID = new ObjectID(req.params.ProductID);
    let MatchStage = { $match: { productID: ProductID } };

    let JoinWithProfileStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };

    let data = await ReviewModel.aggregate([
      MatchStage,
      JoinWithProfileStage
    ]);
    return { status: "success", data: data };
  }
  catch (error) {
    return { status: "fail", data: error }.toString();
  }
}

export default {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCatagoryService,
  DetailsService,
  ListByKeywordService,
  ListBySimilierService,
  ReviewListService,
  ListByRemarkService
};
