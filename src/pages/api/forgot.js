import User from "../../../models/User";
import Forgot from "../../../models/Forgot";
var CryptoJS = require("crypto-js");
import connectDb from "../middleware/mongoose";
import Jwt from "jsonwebtoken";
const nodemailer = require("nodemailer");
const handler = async (req, res) => {
  //check if the customer exists in the database or not
  if (req.body.sendMail == true) {
    const transporter = await nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: 'thebasirkhanofficial@gmail.com',
        pass: 'bOTLR5E0phXVM2qm'
      }
    });
    try{
      let token = `tprint${Math.floor(Math.random()*1000000000)}in`;
      let f = await Forgot.findOne({ email: req.body.email });
      if (f != null) {
        if (f.email == req.body.email) {
          await Forgot.deleteOne({_id:f._id});
        }
      }
      let forgot = new Forgot({
        email: req.body.email,
        token: token,
      });
      await forgot.save();
      const info = await transporter.sendMail({
        from: '<support@hoteldcrescent.com>', // sender address
        to: `${req.body.email}`, // list of receivers
        subject: `Password Reset`, // Subject line
        text: "Booking ${req.body.deliveryStatus}✔", // plain text body
        html: `We have sent you this email in response to your request to reset your password on hoteldcrescent.com. After you reset your password, please login with your new credentials.<br/>
        To reset your password for hoteldcresent.com, please follow the link below:
        <a href="${`https://hoteldcrescent.com/forgot?token=${token}`}" > Click Here </a><br/>
        We recommend that you keep your password secure and not share it with anyone. If you feel your password has been compromised, you can change it by going to your My Account Page and clicking on the "Change Email Address or Password" link.<br/>
        If you need help, or you have any other questions, feel free to email hoteldcrescent@gmail.co or call hoteldcrescent customer service toll-free at +919666252227.
        <br/>
        <br/>
        Thanks For Your Bookings Team HotelDCrescent
        `, 
      });
      // let email = `We have sent you this email in response to your request to reset your password on Techprint.in
      // <br/><br/>
      // To reset your password for, please follow the link below:
  
      // <a href="${`https://techprint.com/forgot?token=${token}`}</a>
  
      // <br/><br/>
  
      // We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your Techprint.in My Account Page and clicking on the "Change Address or Password" link.`;
      //reset password logic
      res.status(200).json({ success: true ,forgot});
    }
    catch(err){
      res.status(400).json({ success: false});
    }
    
  } 
 else {
  try{
    let tokenn = await Forgot.findOne({ token: req.body.token });
    if (req.body.cpassword == req.body.password) {
      await User.findOneAndUpdate(
        { email: tokenn.email },
        {
          password: CryptoJS.AES.encrypt(
            req.body.cpassword,
            process.env.AES_SECRET
          ).toString(),
        }
      );
      res.status(200).json({ success: true });
    }
    else {
      res.status(400).json({ success: false });
    }
  }
  catch{
    res.status(400).json({ success: false });
  }
  
}
}
export default connectDb(handler);
