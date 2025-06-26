import mongoose from "mongoose";
import addressSchema from "./address.js";
import userRole from "./role.js";

const customerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 30,
    },
    phone: {
      type: String,
      required: true,
      match: [/^\+?[0-9]{11,15}$/, "Please enter a valid phone number"],
    },
    address: addressSchema,
    role: {
      type: String,
      enum: [userRole.CUSTOMER],
      default: userRole.CUSTOMER,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", customerSchema);
