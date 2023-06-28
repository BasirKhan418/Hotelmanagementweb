import Order from "../../../models/Order";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
let p= await Order.findByIdAndUpdate({_id:req.body.id},{
  room_no:req.body.room,
  checkin:req.body.checkin,
  checkout:req.body.checkout,
  status:req.body.status,
  deliveryStatus:req.body.deliveryStatus
}) 
   
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: "This method is not allowed" ,success:false});
  }
};
export default connectDb(handler)
