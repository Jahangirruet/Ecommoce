import {
  BrandListService,
  CategoryListService,
   SliderListService,
//   ListByBrandService,
//   ListByCatagoryService,
//   ListBySimilierService,
//   ListByKeywordService,
//   ListByRemarkService,
//   DetailsService,
//   ReviewListService,
} from "../services/ProductServices.js";

export const ProductBrandList = async function (req, res) {
    let result = await BrandListService()
    return res.status(200).json(result)
};

 export const ProductCategoryList = async function (req, res) {
    let result = await CategoryListService()
    return res.status(200).json(result)
 };

 export const ProductSliderList = async function (req, res) {
  let result = await SliderListService()
    return res.status(200).json(result)
 };

// export const ProductListByBrand = async function (req, res) {};

// export const ProductListByCatagory = async function (req, res) {};

// export const ProductListBySimilier = async function (req, res) {};

// export const ProductListByKeyword = async function (req, res) {};

// export const ProductListByRemark = async function (req, res) {};

// export const ProductReviewList = async function (req, res) {};

// export const CreateProductReview = async function (req, res) {};
