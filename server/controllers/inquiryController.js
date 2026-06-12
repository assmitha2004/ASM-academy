import Inquiry from "../models/Inquiry.js";

export const createInquiry = async (req, res) => {
  try {
    console.log("STEP 1: Request received");

    const inquiry = await Inquiry.create(req.body);

    console.log("STEP 2: Inquiry saved in MongoDB");

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      inquiry,
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
