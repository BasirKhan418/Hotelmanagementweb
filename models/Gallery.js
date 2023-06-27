const mongoose = require('mongoose');
const GallerySchema =new mongoose.Schema({
    title: {type: String, required:true},
    img: {type: String, required:true},  
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Gallery",GallerySchema);