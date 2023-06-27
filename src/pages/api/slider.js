import Slider from "../../../models/Slider";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
      let p = new Slider({
        title: req.body.title,
        img:req.body.img
      });
      await p.save();
    
    res.status(200).json({ success: true });
  }else {
    res.status(400).json({ error: "This method is not allowed" ,success:false});
  }
};
export default connectDb(handler);
