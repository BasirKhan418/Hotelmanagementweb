import connectDb from "../middleware/mongoose";
import Category from "../../../models/Category";
const handler = async (req, res) => {
  if(req.method=="POST"){
    await Category.deleteOne({_id:req.body});
    await res.status(200).json({success:true})
  }
  else{
    res.status(400).json({success:false})
  }
    
  }
export default connectDb(handler)