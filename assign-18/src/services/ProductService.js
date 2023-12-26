const { default: mongoose } = require("mongoose");
const brandModel = require("../model/Product/BrandModel");
const categoryModel = require("../model/Product/CategoryModel");
const productSliderModel = require("../model/Product/ProductSliderModel");
const productModel = require("../model/Product/ProductModel");
const ReviewModel = require("../model/user/ReviewModel");

const objectId = mongoose.Types.ObjectId;

const BrandListService = async () => {
  try {
    const result = await brandModel.find();
    return { status: "success", data: result };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};

const CategoryListService = async () => {
  try {
    const result = await categoryModel.find();
    return { status: "success", data: result };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};

const SliderListService = async () => {
  try {
    const result = await productSliderModel.find();
    return { status: "success", data: result };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};

const ListByBrandService = async (req) => {
  try {
    let BrandID = new objectId(req.params.BrandID);
    let matchStage = { $match: { brandID: BrandID } };
    let joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let unwindBrandStage = { $unwind: "$brand" };
    let unwindCategoryStage = { $unwind: "$category" };

    let projectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    const data = await productModel.aggregate([
      matchStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err.toString() };
  }
};

const ListByCategoryService = async (req) => {
  try {
    let categoryID = new objectId(req.params.CategoryID);
    let matchStage = { $match: { categoryID: categoryID } };

    let joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let unwindBrandStage = { $unwind: "$brand" };
    let unwindCategoryStage = { $unwind: "$category" };

    let projectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    const data = await productModel.aggregate([
      matchStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err.toString() };
  }
};

const ListByRemarkService = async (req) => {
  try {
    let Remark = req.params.Remark;
    let matchStage = { $match: { remark: Remark } };

    let joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let unwindBrandStage = { $unwind: "$brand" };
    let unwindCategoryStage = { $unwind: "$category" };

    let projectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    const data = await productModel.aggregate([
      matchStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err.toString() };
  }
};

const BySimilarService = async () => {
  try {
    let categoryID = new objectId(req.params.CategoryID);
    let matchStage = { $match: { categoryID: categoryID } };
    let limitStage = { $limit: 20 };

    let joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let unwindBrandStage = { $unwind: "$brand" };
    let unwindCategoryStage = { $unwind: "$category" };

    let projectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    const data = await productModel.aggregate([
      matchStage,
      limitStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err.toString() };
  }
};

const ListByKeywordService = async (req) => {
  try {
    let searchRegex = { $regex: req.params.Keyword, $options: "i" };
    let searchParams = [{ title: searchRegex }, { shortDes: searchRegex }];
    let searchQuery = { $or: searchParams };
    let matchStage = { $match: searchQuery };

    let joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let unwindBrandStage = { $unwind: "$brand" };
    let unwindCategoryStage = { $unwind: "$category" };

    let projectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    const data = await productModel.aggregate([
      matchStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err.toString() };
  }
};

const DetailsService = async (req) => {
  try {
    let ProductID = new objectId(req.params.ProductID);
    let matchStage = { $match: { _id: ProductID } };

    let joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let joinWithDetailsStage = {
      $lookup: {
        from: "productDetails",
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };

    let projectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
      },
    };

    let unwindBrandStage = { $unwind: "$brand" };
    let unwindCategoryStage = { $unwind: "$category" };
    let unwindDetailStage = { $unwind: "$details" };
    let data = await productModel.aggregate([
      matchStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      joinWithDetailsStage,
      unwindBrandStage,
      unwindCategoryStage,
      unwindDetailStage,
      projectionStage,
    ]);

    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err.toString() };
  }
};

const ReviewListService = async (req) => {
  try {
    let productID = new objectId(req.params.ProductID);
    let matchStage = { $match: { productID: productID } };

    let joinWithProfileStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };
    let unwindProfileStage = { $unwind: "$profile" };
    let projectionStage = {
      $project:{
        'des':1,
        'rating' : 1,
        'profile.cus_name': 1,
      }
    }

    let data = await ReviewModel.aggregate([
      matchStage,
      joinWithProfileStage,
      unwindProfileStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch {
    return { status: "fail", data: err.toString() };
  }
};

module.exports = {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCategoryService,
  BySimilarService,
  ListByKeywordService,
  ListByRemarkService,
  DetailsService,
  ReviewListService,
};
