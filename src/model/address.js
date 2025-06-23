import mongoose from "mongoose";

const addressSchema = mongoose.Schema({

  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true,
    match: [/^\d{4,10}$/, 'Postal code must be numeric']
  },
  country: {
    type: String,
    required: true
  }

})

module.exports = addressSchema;