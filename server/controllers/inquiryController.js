import Inquiry from "../models/Inquiry.js";
import sendEmail from "../utils/sendEmail.js";

export const createInquiry = async (req, res) => {
  try {
    console.log("STEP 1: Request received");

    const inquiry = await Inquiry.create(req.body);

    console.log("STEP 2: Inquiry saved in MongoDB");

    const message = `
New Music Inquiry

Name: ${req.body.name}

Class Type: ${req.body.classType}

Level: ${req.body.level}

Country: ${req.body.country}

WhatsApp: ${req.body.whatsapp}

Email: ${req.body.email}
`;

    console.log("STEP 3: About to send email");

    try {
      await sendEmail({
        subject: "New Vocal Academy Inquiry",
        message,
        replyTo: req.body.email,
      });

      console.log("STEP 4: Email sent successfully");
    } catch (emailError) {
      console.log("EMAIL FAILED:", emailError);
    }

    res.status(201).json({
      success: true,
      inquiry,
    });

  } catch (error) {
    console.log("MAIN ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
