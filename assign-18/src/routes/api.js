const { CartList } = require('../controllers/CartListController');
const { ProductBrandList, ProductCategoryList, ProductSliderList, ProductListByBrand, ProductListByCategory, ProductBySimilar, ProductListByKeyword, ProductListByRemark, ProductDetails, ProductReviewList } = require('../controllers/ProductController');
const { UserOTP, VerifyLogin, UserLogOut, ReadProfile, CreateProfile, UpdateProfile } = require('../controllers/UserController');
const { SaveWistList, RemoveWistList, WistList } = require('../controllers/WishListController');

const AuthVerification = require('../middlewares/AuthVerification')

const router = require('express').Router();
//product 
router.get('/ProductBrandList' , ProductBrandList)
router.get('/ProductCategoryList' , ProductCategoryList);
router.get('/ProductSliderList' ,ProductSliderList)
router.get('/ProductListByBrand/:BrandID' ,ProductListByBrand )
router.get('/ProductListByCategory/:CategoryID' ,ProductListByCategory )
router.get('/ProductBySimilar/:Keyword' ,ProductBySimilar )
router.get('/ProductListByKeyword/:Keyword' ,ProductListByKeyword )
router.get('/ProductListByRemark/:Remark' ,ProductListByRemark )
router.get('/ProductDetails/:ProductID' ,ProductDetails )
router.get('/ProductReviewList/:ProductID' ,ProductReviewList )


//user

router.get('/userOTP/:email' , UserOTP)
router.get('/VerifyLogin/:email/:otp' , VerifyLogin)
router.get('/UserLogOut/', AuthVerification , UserLogOut)
router.post('/CreateProfile/', AuthVerification , CreateProfile)
router.post('/UpdateProfile/', AuthVerification , UpdateProfile)
router.get('/ReadProfile/', AuthVerification , ReadProfile)


// wishList 

router.post('/SaveWishList' , AuthVerification , SaveWistList)
router.post('/RemoveWishList' , AuthVerification , RemoveWistList);
router.get('/WistList' , AuthVerification , WistList )
router.get('/CartList' , AuthVerification , CartList )
module.exports = router;