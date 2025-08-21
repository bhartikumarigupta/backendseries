const Product = require("../models/product");
const insertSampleProducts = async (req, res) => {
  try {
    const sampleProduct = req.body;

    const result = await Product.insertMany(sampleProduct);
    res.status(201).json({
      success: true,
      message: "insert successfully",
      data: `Inserted ${result.length} sample product`,
    });
  } catch (e) {
    console.error("error while inserting product:", e);
    res.status(500).json({
      success: false,
      message: "some error occured while inserting!",
    });
  }
};
// understanding the aggregation pipeline
const getProductStats = async (req, res) => {
  try {
    const fetchedProduct = await Product.aggregate([
      {
        $match: {
          inStock: true,
          price: {
            $lte: 5000,
          },
        },
      },
      //group documents
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res.status(201).json({
      success: true,
      message: "Fetched element successfully",
      data: fetchedProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error while fetching product",
    });
  }
};
//common aggregate operator
const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          avgPrice: {
            $avg: "$price",
          },
          maxProductPrice: {
            $max: "$price",
          },
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          avgPrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          priceRange: {
            $subtract: ["$maxProductPrice", "$minProductPrice"],
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: "fetched electronic items",
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "error in getProductAnalysis",
    });
  }
};

module.exports = {
  insertSampleProducts,
  getProductStats,
  getProductAnalysis,
};
