const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");
const commentController = require("../controllers/commentController");
const messageController = require("../controllers/messageController");
const portfolioController = require("../controllers/portfolioController");
const productController = require("../controllers/productController");



router.get("/create",blogController.create);
router.get("/read",blogController.read);
router.get("/delete",blogController.delete);
router.get("/update",blogController.update);

router.get("/create",commentController.create);
router.get("/read",commentController.read);
router.get("/delete",commentController.delete);
router.get("/update",commentController.update);

router.get("/create",messageController.create);
router.get("/read",messageController.read);
router.get("/delete",messageController.delete);
router.get("/update",messageController.update);

router.get("/create",portfolioController.create);
router.get("/read",portfolioController.read);
router.get("/delete",portfolioController.delete);
router.get("/update",portfolioController.update);

router.get("/create",productController.create);
router.get("/read",productController.read);
router.get("/delete",productController.delete);
router.get("/update",productController.update);

module.exports = router;