import connectDb from "../middleware/mongoose";
import Slider from "../../../models/Slider";
const handler = async (req, res) => {
  if(req.method=="POST"){
    await Slider.deleteOne({_id:req.body});
    await res.status(200).json({success:true})
  }
  else{
    res.status(400).json({success:false})
  }
    
  }
export default connectDb(handler)