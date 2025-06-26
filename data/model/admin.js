import mongoose from "mongoose";
import adminType from "./adminType";

const adminSchema = new mongoose.Schema({
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
  role: {
    type: String,
    enum: adminType,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("Admin", adminSchema);
