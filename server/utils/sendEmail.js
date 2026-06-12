import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  console.log("EMAIL_USER =", process.env.EMAIL_USER);
  console.log("EMAIL_PASS =", process.env.EMAIL_PASS ? "EXISTS" : "MISSING");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);

  console.log("EMAIL SENT SUCCESS");
};

export default sendEmail;
