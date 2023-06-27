import Product from "../../../models/Product";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
let p= await Product.findByIdAndUpdate({_id:req.body.id},{
  title:req.body.title,
  mrp:req.body.mrp,
  price:req.body.price,
  category:req.body.category,
  subcategory:req.body.subcategory,
  desc:req.body.desc,
  availableQty:req.body.availableQty,
discountp:req.body.discount,
  size:req.body.size
}) 
   
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: "This method is not allowed" ,success:false});
  }
};
export default connectDb(handler)
