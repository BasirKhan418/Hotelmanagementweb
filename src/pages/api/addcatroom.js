import Categoryrooms from "../../../models/Categoryrooms";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
        let p= new Categoryrooms({
            title:req.body.title,
            slug:req.body.slug,
            desc:req.body.desc,
            img:req.body.img,
            category: req.body.category,
            price:req.body.price,
        })
        await p.save()
    res.status(200).json({ success: "success"});
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler)
