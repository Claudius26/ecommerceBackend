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
  role: {
    type: String,
    enum: [userRole.SELLER],
    default: userRole.SELLER,
  },
});

const Seller = User.discriminator("Seller", sellerSchema);

export default Seller;
