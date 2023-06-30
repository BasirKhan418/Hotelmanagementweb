import Order from "../../../models/Order";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
    if(req.method=="POST"){
          let foundedorder=await Order.findOne({orderID:req.body})
           
            res.status(200).json(foundedorder)
    }
      else{
        res.status(400).json({error:"this method is not allowed"})
      }  
    
}
export default connectDb(handler);