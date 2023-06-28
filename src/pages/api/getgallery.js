import Gallery from "../../../models/Gallery";
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
    try{
            let slider= await Gallery.find();
            res.status(200).json(slider)
    }
    catch(err){
        res.status(400).json({error:"SOME ERROR OCCURED"})
    }
  
};
export default connectDb(handler);