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
export default mongoose.model("Category", categorySchema);
