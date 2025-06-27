import mongoose from "mongoose";
import User from "./user.js";
import userRole from "./role.js";

const customerSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  role: {
    type: String,
    enum: [userRole.CUSTOMER],
    default: userRole.CUSTOMER,
  },
});

const Customer = User.discriminator("Customer", customerSchema);

export default Customer;
