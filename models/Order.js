const mongoose = require('mongoose');
const OrderSchema =new mongoose.Schema({
    name: {type: String},
    email: {type: String, required:true},
    orderID: {type: String, required:true},
    payment_id: {type: String, default:''},
    room_no: {type: String, default:''},
    payment_signature: {type: String, default:''},
    products:{type:Object,required:true},
    address:{type:String},
    pincode:{type:String},
    city:{type:String},
    state:{type:String},
    phone:{type:String},
    checkin:{type:Date,default:""},
    checkout:{type:Date,default:""},
    amount:{type:Number,required:true},
    status:{type:String,default:"initiated",required:true},
    deliveryStatus:{type:String,default:"pending",required:true}
},{timestamps:true})
mongoose.models={};
export default mongoose.model("Order",OrderSchema);