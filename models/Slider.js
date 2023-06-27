const mongoose = require('mongoose');
const SliderSchema =new mongoose.Schema({
    title: {type: String, required:true},
    img: {type: String, required:true},  
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Slider",SliderSchema);