import Product from "../../../models/Product";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
      let p = new Product({
        title: req.body.title,
        slug: req.body.slug,
        desc: req.body.desc,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
        img4: req.body.img4,
        img5: req.body.img5,
        category: req.body.category,
        subcategory: req.body.subcategory,
        size: req.body.size,
        mrp:req.body.mrp,
        price: req.body.price,
        discountp: req.body.discountp,
        availableQty: req.body.availableQty,
      });
      await p.save();
    
    res.status(200).json({ success: true });
  }else {
    res.status(400).json({ error: "This method is not allowed" ,success:false});
  }
};
export default connectDb(handler);
