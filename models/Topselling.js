const mongoose = require('mongoose');
const TopsellingSchema =new mongoose.Schema({
    title: {type: String, required:true},
    slug: {type: String, required:true,unique:true},
    desc: {type: String, required:true},
    img: {type: String, required:true},
    category: {type: String, required:true},
    subcategory: {type: String, required:true},
    size:{type:String},
    price:{type:Number,required:true},
    discountp:{type:Number},
    availableQty:{type:Number,required:true},
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Topselling",TopsellingSchema);