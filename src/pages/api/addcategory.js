import Category from "../../../models/Category";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
        let p= new Category({
            title:req.body.title,
            desc:req.body.desc,
            img:req.body.img,
            category: req.body.category,
            price:req.body.price,
        })
        await p.save()
    res.status(200).json({ success: true});
  } else {
    res.status(400).json({ error: "This method is not allowed" ,success:false});
  }
};
export default connectDb(handler)
