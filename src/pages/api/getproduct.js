import connectDb from "../middleware/mongoose";
import Product from "../../../models/Product";
const handler = async (req, res) => {
  if(req.method=="GET"){
    let product= await Product.find();
    res.status(200).json(product);
  }
  else{
    res.status(400).json({error:"some thing went wrong"})
  }
    
  }
export default connectDb(handler)