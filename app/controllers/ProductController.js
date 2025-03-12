import {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCatagoryService,
  ListBySimilierService,
  //ListByKeywordService,
  ListByRemarkService,
  DetailsService,
 //ReviewListService,
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

 export const ProductListByBrand = async function (req, res) {
   let result = await ListByBrandService(req)
    return res.status(200).json(result)
 };

 export const ProductListByCatagory = async function (req, res) {
  let result = await ListByCatagoryService(req)
  console.log(result)
  return res.status(200).json(result)
 };

 export const ProductListBySimilier = async function (req, res) {
  let result = await ListBySimilierService(req)
  console.log(result)
  return res.status(200).json(result)
 };

 export const ProductListByKeyword = async function (req, res) {
  let result = await ListByKeywordService(req)
  console.log(result)
  return res.status(200).json(result)
 };

 export const ProductListByRemark = async function (req, res) {
  let result = await ListByRemarkService(req)
  console.log(result)
  return res.status(200).json(result)
 };

 export const ProductDetails= async function (req, res) {
  let result = await DetailsService(req)
  console.log(result)
  return res.status(200).json(result)
 };

 export const ProductReviewList = async function (req, res) {
  let result = await ReviewListService(req)
  console.log(result)
  return res.status(200).json(result)
 };

 export const CreateProductReview = async function (req, res) {
  let result = await DetailsService(req)
  console.log(result)
  return res.status(200).json(result)
 };


