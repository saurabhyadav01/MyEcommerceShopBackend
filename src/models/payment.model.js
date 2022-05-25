const mongoose = require("mongoose");


const paymentSchema = new mongoose.Schema(
    {
        // ..City: "Saurabh"
// address: "Belwa Brahmpur"
// city: ""
// email: "sy966051@gmail.com"
// firstName: "Saurabh"
// landmark: "Saurabh"
// lastName: "yadav"
// pincode: "Saurabh"
// state: "Saurabh"
      
         name: { type: String, required: true },
        cardNumber: { type: String, required: true },
       
        expiry :{type:String,required :true},
       cvv :{type:String,required :true},


    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports=mongoose.model("payment",paymentSchema);