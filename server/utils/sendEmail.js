import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  console.log("sendEmail function started");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log("transporter created");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.message,
  };

  console.log("sending mail...");

  const info = await transporter.sendMail(mailOptions);

  console.log("MAIL SENT:", info);
};

export default sendEmail;
