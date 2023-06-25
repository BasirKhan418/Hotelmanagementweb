const mongoose = require('mongoose');
const ProductSchema =new mongoose.Schema({
    title: {type: String, required:true},
    slug: {type: String, required:true,unique:true},
    desc: {type: String, required:true},
    img1: {type: String, required:true},
    img2: {type: String},
    img3: {type: String},
    img4: {type: String},
    img5: {type: String},
    category: {type: String, required:true},
    subcategory: {type: String, required:true},
    size:{type:String},
    price:{type:Number,required:true},
    discountp:{type:Number},
    availableQty:{type:Number,required:true},
    mrp: {type: Number,required:true},
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Product",ProductSchema);