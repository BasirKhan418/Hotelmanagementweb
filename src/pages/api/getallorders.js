import connectDb from "../middleware/mongoose";
import Order from "../../../models/Order";
const handler = async (req, res) => {
    let orders= await Order.find();
    res.status(200).json(JSON.parse(JSON.stringify(orders)));
  }
export default connectDb(handler)