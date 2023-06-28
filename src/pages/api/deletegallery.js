import connectDb from "../middleware/mongoose";
import Gallery from "../../../models/Gallery";
const handler = async (req, res) => {
  if(req.method=="POST"){
    await Gallery.deleteOne({_id:req.body});
    await res.status(200).json({success:true})
  }
  else{
    res.status(400).json({success:false})
  }
    
  }
export default connectDb(handler)