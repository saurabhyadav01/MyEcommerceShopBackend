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

    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    landmark: { type: String, required: true },

    pincode: { type: String, required: true },
    state: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("address", addressSchema);
