const cloudinary = require('../config/cloudinary');
const uploadToCloudinary= async(filePath)=>{
try{
const result = await cloudinary.uploader.upload(filePath);
return{
    url: result.secure_url,
    publicId: result.public_id
};


}
catch(e){
   console.error("Error uploading to Cloudinary :",e);
     throw new Error("Failed to upload image to Cloudinary"); 
}
};
module.exports = {uploadToCloudinary};