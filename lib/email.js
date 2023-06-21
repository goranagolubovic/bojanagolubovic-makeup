import nodemailer from "nodemailer";
import validator from "email-validator";

const smtpOptions = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "bojanagolubovic.makeup@gmail.com",
    pass: process.env.SMTP_PASSWORD || "Bojana1998",
  },
};

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: "bojanagolubovic.makeup@gmail.com",
    ...data,
  });
};
