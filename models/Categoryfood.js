import mongoose from "mongoose";
const CategoriesfoodSchema=new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String,required:true},
    slug:{type:String,required:true,unique:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    img:{type:String,required:true},
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Categoryfood",CategoriesfoodSchema);