import mongoose from "mongoose";
import User from "./user.js";
import userRole from "./role.js";

const sellerSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  businessDescription: {
    type: String,
    required: true,
    maxlength: 500,
  },
  businessLicense: {
    type: String,
    required: true,
    match: [
      /^[A-Z0-9]{10,15}$/,
      "Please enter a valid business license number",
    ],
  },
  role: {
    type: String,
    enum: [userRole.SELLER],
    default: userRole.SELLER,
  },
});

const Seller = User.discriminator("Seller", sellerSchema);

export default Seller;
