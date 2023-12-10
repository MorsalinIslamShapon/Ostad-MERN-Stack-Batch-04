const { addProduct, removeProduct, updateCartProduct, cartProduct } = require('../controllers/cartItemController');
const { createOder, OderListUpdate, cancelOderByOrderId } = require('../controllers/oderController');
const { CreateProduct, UpdateProduct, readProduct, deleteProduct } = require('../controllers/productController');
const { registerUser, userInfoUpdate, getUsers, deleteUserInfo, getUserInfoByEmail } = require('../controllers/userController');

const router = require('express').Router();

//user 
router.post('/register' , registerUser );
router.post('/userInfoUpdate/:ID' , userInfoUpdate );
router.get('/deleteUserInfo/:email' , deleteUserInfo );
router.get('/getUserInfoByEmail/:email' , getUserInfoByEmail );
router.get('/users' , getUsers )



// product 
router.post('/create_Product' , CreateProduct)
router.post('/update_Product/:ID' , UpdateProduct)
router.get('/delete_Product/:ID' , deleteProduct)
router.get('/read_Product' , readProduct );



//cart 
router.post('/add_Product' , addProduct);
router.post('/updateCartProduct/:ID' , updateCartProduct);
router.get('/removeProduct/:ID' , removeProduct);
router.get('/cart' , cartProduct )



// Order 
router.post("/createOrder" , createOder );
router.post("/OderListUpdate/:userId" , OderListUpdate );
router.get("/cancelOderByOrderId/:orderID" , cancelOderByOrderId );



module.exports = router;


