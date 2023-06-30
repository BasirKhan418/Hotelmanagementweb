import connectDb from "../middleware/mongoose";
import Product from "../../../models/Product";
const handler = async (req, res) => {
  if(req.method=="POST"){
    await Product.deleteOne({_id:req.body});
    await res.status(200).json({success:true})
  }
  else{
    res.status(400).json({success:false})
  }
    
  }
export default connectDb(handler)