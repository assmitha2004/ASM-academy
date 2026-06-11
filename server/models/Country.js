import mongoose from "mongoose";

const countrySchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },

      currency: {
        type: String,
        required: true,
      },

      onePrice: {
        type: String,
        required: true,
      },

      duoPrice: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Country",
  countrySchema
);