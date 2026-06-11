import nodemailer from "nodemailer";

const sendEmail = async (options) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",

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

  console.log("Email Sent Successfully");
};

export default sendEmail;