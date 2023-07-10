import Slider from "../../../models/Slider";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
let p= await Slider.findByIdAndUpdate({_id:req.body.id},{
title:req.body.etitle,
color:req.body.ecolor,
}) 
   
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: "This method is not allowed" ,success:false});
  }
};
export default connectDb(handler)