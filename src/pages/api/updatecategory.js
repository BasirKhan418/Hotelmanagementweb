import Category from "../../../models/Category";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
let p= await Category.findByIdAndUpdate({_id:req.body.id},{
title:req.body.etitle,
desc:req.body.edesc,
price:req.body.eprice,
category:req.body.ecategory
}) 
   
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: "This method is not allowed" ,success:false});
  }
};
export default connectDb(handler)
