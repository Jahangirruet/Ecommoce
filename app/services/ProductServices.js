import BrandModel from '../models/BrandModel.js';
 import CategoryModel from '../models/CategoryModel.js';
 import ProductModel from '../models/ProductModel.js';
 import ProductSliderModel from '../models/ProductSliderModel.js';
// import ProductDetailModel from '../models/ProductDetailsModel.js';
// import ProductReviewModel from '../models/ProductReviewModel.js';
// import ReviewModel from '../models/ReviewModel.js';
import mongoose from 'mongoose';

const ObjectID = mongoose.Types.ObjectId;


export const BrandListService = async () => {
    try {
        let data = await BrandModel.find();
        return {status:"sucsess",data:data}
    } catch (error) {
        return {status:"fail",data:error}.toString()
    }
}
export const CategoryListService = async () => {
    try {
        let data = await ProductSliderModel.find();
        return {status:"sucsess",data:data}
    } catch (error) {
        return {status:"fail",data:error}.toString()
    }
 }
 export const SliderListService = async (params) => {
    try {
        let data = await ProductSliderModel.find();
        return {status:"sucsess",data:data}
    } catch (error) {
        return {status:"fail",data:error}.toString()
    }
 }

 export const ListByBrandService = async (req) => {
    try {
    let BrandID = new ObjectID(req.params.BrandID)
    let MatchStage = {$match:{brandID:BrandID}};
    let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brands"}};
    let JoinWithCategoryStage = {$lookup:{from:"category",localField:"categoryID",foreignField:"_id",as:"categories"}};;
    let data = await ProductModel.aggregate([
        MatchStage,
        JoinWithBrandStage,
        JoinWithCategoryStage

    ])
    console.log(data)
    return {status:"sucsess",data:data}

    } catch (error) {
        return {status:"fail",data:error}.toString()
    }

}

// const ListByCatagoryService = async (params) => {
    
// }

// const ListBySimilierService = async (params) => {
    
// }

// const ListByKeywordService = async (params) => {
    
// }

// const ListByRemarkService = async (params) => {
    
// }

// const DetailsService = async (params) => {
    
// }

// const ReviewListService = async (params) => {
    
// }

export default {BrandListService,CategoryListService,SliderListService,ListByBrandService}

 //module.export = {
 //    BrandListService,
//     CatagoryListService,
//     SliderListService,
//     ListByBrandService,
//     ListByCatagoryService,
//     ListBySimilierService,
//     ListByKeywordService,
//     ListByRemarkService,
//     DetailsService,
//     ReviewListService
 //}

//export default BrandListService ;




