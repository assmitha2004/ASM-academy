import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (options) => {
  try {
    console.log("sendEmail function started");

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",   // temporary sender for testing
      to: process.env.ADMIN_EMAIL,     // your email where inquiry arrives
      reply_to: options.replyTo,       // user's email so you can reply directly
      subject: options.subject,

      text: options.message,
    });

    console.log("MAIL SENT SUCCESSFULLY");
    console.log(response);

  } catch (error) {
    console.log("EMAIL FAILED:", error);
    throw error;
  }
};

export default sendEmail;
