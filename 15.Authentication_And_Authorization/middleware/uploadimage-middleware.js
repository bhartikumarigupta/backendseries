const multer=require('multer');
const path=require('path');
// set our multer storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'uploads/') // specify the directory to save uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname)) // create a unique filename
  }
});
// file filter function to accept only image files
const checkFileFilter=(req,file,cb)=>{
 if(file.mimetype.startsWith('image')){
    cb(null,true); // accept the file
 }  
    else{
        cb(new Error('Only image files are allowed!'),false); // reject the file
    } 
}
// to get all the images

module.exports =multer({
    storage:storage,
    fileFilter:checkFileFilter// limit file size to
}); // 'image' is the field name in the form
