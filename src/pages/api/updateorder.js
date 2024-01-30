import Order from "../../../models/Order";
import connectDb from "../middleware/mongoose";
const nodemailer = require("nodemailer");
const handler = async (req, res) => {
  if (req.method == "POST") {
    const transporter = await nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: 'thebasirkhanofficial@gmail.com',
        pass: 'bOTLR5E0phXVM2qm'
      }
    });
let p= await Order.findByIdAndUpdate({_id:req.body.id},{
  room_no:req.body.room,
  checkin:req.body.checkin,
  checkout:req.body.checkout,
  status:req.body.status,
  deliveryStatus:req.body.deliveryStatus
}) 
const info = await transporter.sendMail({
  from: '<sales@hoteldcrescent.com>', // sender address
  to: `${req.body.email}`, // list of receivers
  subject: `Booking ${req.body.deliveryStatus}✔`, // Subject line
  text: "Booking ${req.body.deliveryStatus}✔", // plain text body
  html: `<b>Hii, ${req.body.name}<br/> 
  Hotel D Crescent<br/>
  Woo hoo! Your booking is ${req.body.deliveryStatus}. Your booking details can be found below.<br/>
  Track Your Order :- <a href="https://hoteldcrescent.com/orders">Click Here</a><br/>
  <br/>
  Order Details:- 
  <br/>
  Booking Status: ${req.body.deliveryStatus} <br/>
  Alorted Room No:-: ${req.body.room} <br/>
  Checkin Date: ${req.body.checkin} <br/>
  Checkout Date: ${req.body.checkout} <br/>
  Booking Email: ${req.body.email}<br/>
  <br/>
  Booking Id: ${req.body.orderid}<br/>
  <br/>
  Payment Status: ${req.body.status} <br/>
  <br/>
  Thanks For Your Bookings Team HotelDCrescent<br/>
  `, 
});
   
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: "This method is not allowed" ,success:false});
  }
};
export default connectDb(handler)
