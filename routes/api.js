import express from 'express';
const router = express.Router();

import * as ProductController from '../app/controllers/ProductController.js';
// import * as UserController from '../app/controllers/UserController.js';
// import AuthMiddleware from '../app/middlewares/AuthMiddleware.js';


// Products

router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
 router.get('/ProductSliderList',ProductController.ProductSliderList)
// router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
// router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCatagory)
// router.get('/ProductListBySimilier/:Keyword',ProductController.ProductListBySimilier)
// router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword)
// router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)
// router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
// router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList)

























// user before login
// router.post('/login', UserController.login);
// router.post('/registration', UserController.Registration);
// router.get('/emailverify', UserController.EmailVerify);
// router.get('/codeverify', UserController.CodeVerify);
// router.post('/resetpassword', UserController.ResetPassword);


// // user after login
// router.get('/profiledetails',AuthMiddleware,UserController.ProfileDetails);
// router.put('/profileupdate',AuthMiddleware, UserController.ProfileUpdate);

// test [after login]


export default router;
