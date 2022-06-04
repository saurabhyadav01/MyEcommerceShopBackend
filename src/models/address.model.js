const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
   address: { type: String, required: true },
city: { type: String, required: true },
firstName: { type: String, required: true },
lastName: { type: String, required: true },
lendmark: { type: String, required: true },
mobile: { type: Number, required: true },
pin: { type: String, required: true },
state: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("address", addressSchema);
