const express = require("express");
const {
  insertSampleProducts,
  getProductStats,
  getProductAnalysis,
} = require("../controller/product-controller");
const router = express.Router();
router.post("/add", insertSampleProducts);
router.get("/stats", getProductStats);
router.get("/analyst", getProductAnalysis);
module.exports = router;
