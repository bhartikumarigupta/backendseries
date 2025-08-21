const mongoose=require('mongoose');
const imageSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
     publicId:{
        type:String,
        required:true
     },
     uploadedBy:{
         type:mongoose.Schema.Types.ObjectId,   // Reference to User model
         ref:'User',
         required:true
     },
    //  fileName:{
    //     type:String,
    //     required:true
    // }

},
{
    timestamps:true
});

module.exports=mongoose.model('Image',imageSchema); // Exporting the Image model
// so it can be used in other parts of the application
