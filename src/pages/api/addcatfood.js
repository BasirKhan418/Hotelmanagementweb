import Categoryfood from "../../../models/Categoryfood";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
        let p= new Categoryfood({
            title:req.body.title,
            slug:req.body.slug,
            desc:req.body.desc,
            img:req.body.img,
            category: req.body.category,
            price:req.body.price,
        })
        console.log(p);
        await p.save()
    res.status(200).json({ success: "success"});
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler)