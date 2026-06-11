import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    whatsapp: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      required: true,
    },

    classType: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Inquiry",
  inquirySchema
);