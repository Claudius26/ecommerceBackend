import mongoose from "mongoose";
import addressSchema from "./address.js";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
