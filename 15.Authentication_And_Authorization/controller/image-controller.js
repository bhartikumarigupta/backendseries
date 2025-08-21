const Image = require("../model/Image"); // Import the Image model
const { uploadToCloudinary } = require("../helpers/cloudinaryHelper");
const cloudinary = require("../config/cloudinary"); // Import Cloudinary configuration
const fs = require("fs"); // Import file system module
const uploadImageController = async (req, res) => {
  try {
    console.log("Received request to upload image:", req.file);
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }
    // upload the image to Cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path);
    // store the image details in the database
    const newImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId, // assuming req.user is set by authentication middleware
    });
    await newImage.save();
    // respond with the image details
    // delete the local file after uploading to Cloudinary
    fs.unlinkSync(req.file.path, (err) => {
      if (err) {
        console.error("Error deleting local file:", err);
      } else {
        console.log("Local file deleted successfully");
      }
    });
    res.status(201).json({
      success: true,
      message: "Image Uploaded Successfully",
      image: newImage,
    });
  } catch (e) {
    console.error("Error uploading image:", e);
    res.status(500).json({ message: "Failed to upload image" });
  }
};
const fetchImagesController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the page number from query params, default to 1
    const limit = parseInt(req.query.limit) || 10; // Get the limit from query params, default to 10
    const skip = (page - 1) * limit; // Calculate the number of documents to skip
    const sortBy = req.query.sortBy || "createdAt"; // Get the sort field from query params, default to createdAt
    const sortOrder = req.query.sortOrder === "asc" ? 1 : -1; // Determine sort order
    const totalImages = await Image.countDocuments(); // Get total number of images
    const totalPages = Math.ceil(totalImages / limit); // Calculate total pages
    const sortObj = {};
    sortObj[sortBy] = sortOrder; // Create sort object
    const images = await Image.find({}).sort(sortObj).skip(skip).limit(limit); // Fetch images with pagination and sorting
    if (images) {
      res.status(200).json({
        success: true,
        currentPages: page,
        totalPages: totalPages,
        totalImages: totalImages,
        data: images,
        message: "Images fetched successfully",
      });
    }
  } catch (e) {
    console.error("Error fetching images:", e);
    res.status(500).json({ message: "Failed to fetch images" });
  }
};
const deleteImageController = async (req, res) => {
  try {
    const getCurrentImageIdToBeDeleted = req.params.id;
    const userId = req.userInfo.userId;
    const image = await Image.findById(getCurrentImageIdToBeDeleted);
    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }
    //check if this image is uploaded by the current user who is trying to delete it
    if (image.uploadedBy.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this image",
      });
    }
    // delete the image from Cloudinary
    await cloudinary.uploader.destroy(image.publicId);
    // delete the image from the database
    await Image.findByIdAndDelete(getCurrentImageIdToBeDeleted);
    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (e) {
    console.error("Error deleting image:", e);
    res.status(500).json({ message: "Failed to delete image" });
  }
};
module.exports = {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
};
