const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const uploadImageMiddleware = require("../middleware/uploadimage-middleware");
const {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
} = require("../controller/image-controller");
const router = express.Router();
//upload the image
router.post(
  "/upload",
  authMiddleware,
  uploadImageMiddleware.single("image"),
  uploadImageController
);
router.get("/fetch", authMiddleware, fetchImagesController);
router.delete("/:id", authMiddleware, adminMiddleware, deleteImageController); // Admin can delete any image

module.exports = router;
