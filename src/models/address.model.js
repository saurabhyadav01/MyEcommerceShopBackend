const mongoose = require("mongoose");


const addressSchema = new mongoose.Schema(
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
      
         firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        address :{type:String,required :true},
        pincode :{type:String,required :true},


    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports=mongoose.model("address",addressSchema);