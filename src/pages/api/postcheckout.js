
import connectDb from "../middleware/mongoose";
import Order from "../../../models/Order";
import Product from "../../../models/Product";
const nodemailer = require("nodemailer");
const handler = async (req, res) => {
  console.log(req.body)
    let order;
    const transporter = await nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: 'thebasirkhanofficial@gmail.com',
        pass: 'bOTLR5E0phXVM2qm'
      }
    });
//   //validate payment using razorpay
//     const {razorpay_order_id, razorpay_payment_id,razorpay_signature} = req.body;
//     // Pass yours key_secret here
//     const key_secret = process.env.NEXT_PUBLIC_KEY_SECRET;     
  
//     // STEP 8: Verification & Send Response to User
      
//     // Creating hmac object 
//     let hmac = crypto.createHmac('sha256', key_secret); 
  
//     // Passing the data to be hashed
//     hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
      
//     // Creating the hmac in the required format
//     const generated_signature = hmac.digest('hex');
      
      
//     if(razorpay_signature===generated_signature){
      // razorpay_order_id
  //     razorpay_payment_id: 'pay_LzpFe1jHO8rymk',
  // razorpay_order_id: 'order_LzpFVdVQVloXpf',
  // razorpay_signature:
 
   
    //   }
    if(req.method=="POST"){
        order= await Order.findOneAndUpdate({orderID:req.body.orderID},{status:"offlinepayment",payment_id:"offlinepayment"});
        let products =  order.products;
        console.log(order.products)
        for (let slug in products){
          await Product.findOneAndUpdate({slug:slug},{$inc:{"availableQty":-products[slug].qty }})
        }
        const d =new Date(req.body.createdAt);
        
        const info = await transporter.sendMail({
          from: '<sales@hoteldcrescent.com>', // sender address
          to: `${req.body.email}`, // list of receivers
          subject: "Your Booking Successfully Placed ✔", // Subject line
          text: "Booking Confirmation", // plain text body
          html: `<b>Hii, ${req.body.name}<br/> 
          Hotel D Crescent<br/>
          Woo hoo! Your booking is Successfully Placed. Your booking details can be found below. We’ll send you another email once your booking is confirm.<br/>
          Track Your Order :- <a href="https://hoteldcrescent.com/orders">Click Here</a><br/>
          <br/>
          Order Details:- 
          <br/>
          Booking Email: ${req.body.email}<br/>
          <br/>
          Booking Id: ${req.body.orderID}<br/>
          <br/>
          Booking Date: ${d&& d.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}<br/>
          Booking Total: ₹${req.body.amount}<br/>
          Payment Status: Offline Payment <br/>
          <br/>
          Your Currently Booking Status is ${req.body.deliveryStatus}. We will send you another email once your booking is confirm.<br/>
          Booking Address: ${req.body.address}<br/>
          <br/>
          Thanks For Your Bookings Team HotelDCrescent<br/>
          `, 
        });
        res.status(200).json({order:order,success:true})
        return;
    }
    else{
       order =await Order.findOneAndUpdate({orderID:req.body.razorpay_order_id},{status:"Pending",payment_id:req.body.razorpay_payment_id,payment_signature:req.body.razorpay_signature});
       return;
    }
    // const redirectUrl = `/order?id=${order._id}&clearCart=1`;
    // res.writeHead(307, { Location: redirectUrl });
    // res.end();
  }
  export default connectDb(handler)