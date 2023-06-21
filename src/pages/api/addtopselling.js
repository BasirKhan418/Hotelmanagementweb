import Topselling from "../../../models/Topselling";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
        let p= new Topselling({
            title:req.body[i].title,
            slug:req.body[i].slug,
            desc:req.body[i].desc,
            img:req.body[i].img,
            category: req.body[i].category,
            subcategory: req.body[i].subcategory,
            size:req.body[i].size,
            price:req.body[i].price,
            discountp:req.body[i].discountp,
            availableQty:req.body[i].availableQty,
        })
        await p.save()
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler)