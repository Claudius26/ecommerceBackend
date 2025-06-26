import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});
const Category = mongoose.model("Category", categorySchema);
export default CATEGORY;
