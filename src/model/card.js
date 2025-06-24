import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    cardNumber: {
      type: String,
      required: true,
      match: [/^\d{13,19}$/, "Please enter a valid card number"],
    },
    expirationDate: {
      type: String,
      required: true,
      match: [
        /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
        "Please enter a valid expiration date (MM/YY)",
      ],
    },
    cvv: {
      type: String,
      required: true,
      match: [/^\d{3,4}$/, "Please enter a valid CVV"],
    },
    cardholderName: {
      type: String,
      required: true,
    },
    billingAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Card", cardSchema);
