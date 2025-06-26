import mongoose from "mongoose";
import addressSchema from "./address.js";
import userRole from "./role.js";

const sellerSchema = new mongoose.Schema(
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
      enum:[userRole.SELLER],
      default: userRole.SELLER
    },
    bussinessName: {
      type: String,
      required: true,
    },
    bussinessDescription: {
      type: String,
      required: true,
      maxlength: 500,
      },
    bussinessLicense: {
      type: String,
      required: true,
      match: [/^[A-Z0-9]{10,15}$/, "Please enter a valid business license number"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", sellerSchema);
