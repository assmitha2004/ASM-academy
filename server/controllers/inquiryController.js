import Inquiry from "../models/Inquiry.js";
import sendEmail from "../utils/sendEmail.js";
export const createInquiry = async (req, res) => {
  try {

    const inquiry = await Inquiry.create(req.body);

    // EMAIL MESSAGE
    const message = `
New Music Inquiry

Name: ${req.body.name}

Class Type: ${req.body.classType}

Level: ${req.body.level}

Country: ${req.body.country}

WhatsApp: ${req.body.whatsapp}

Email: ${req.body.email}
`;

    // SEND EMAIL
    await sendEmail({
  subject: "New Vocal Academy Inquiry",

  message,

  replyTo: req.body.email,
});

    res.status(201).json({
      success: true,
      inquiry,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};