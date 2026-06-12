import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (options) => {
  try {
    console.log("sendEmail function started");

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",

      // SEND TO YOUR EMAIL
      to: "asmithagopichander@gmail.com",

      subject: options.subject,

      reply_to: options.replyTo,

      text: options.message,
    });

    // CHECK IF RESEND RETURNED ERROR
    if (response.error) {
      console.log("EMAIL FAILED:", response.error);
      throw new Error(response.error.message);
    }

    console.log("MAIL SENT SUCCESSFULLY");
    console.log(response);

  } catch (error) {
    console.log("EMAIL ERROR:", error);
    throw error;
  }
};

export default sendEmail;
