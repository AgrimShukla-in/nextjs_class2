import nodemailer from 'nodemailer';
import { VERIFY_TEMPLATE, RESET_TEMPLATE } from './emailHtml';
import User from '@/models/user.model';
import bcrypt from 'bcryptjs';

export const sendEmail = async (
  email: string,
  emailType: 'verify' | 'reset',
  userId: string,
  name: string
) => {
  // Hash token and store in DB
  const hash = await bcrypt.hash(userId.toString(), 10);
  if (emailType === 'verify') {
    await User.findOneAndUpdate(
      { _id: userId },
      {$set:{ verifyToken: hash, verifyExpiry: Date.now() + 3600000 }}
    );
  } else {
    await User.findOneAndUpdate(
      { _id: userId },
      {$set:{ forgetPasswordToken: hash, forgetPasswordExpiry: Date.now() + 3600000 }}
    );
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SENDER_HOST!,
    port: Number(process.env.EMAIL_SENDER_PORT),
    secure: process.env.EMAIL_SENDER_PORT === '465',
    auth: {
      user: process.env.EMAIL_SENDER_USER!,
      pass: process.env.EMAIL_SENDER_PASS!,
    },
  });

  // Construct the link
  const baseUrl = process.env.DOMAIN || 'http://localhost:3000';
  const linkPath =
    emailType === 'verify'
      ? `/verifyemail/${encodeURIComponent(hash)}`
      : `/reset-password/${encodeURIComponent(hash)}`;
  const link = `${baseUrl}${linkPath}`;

  // Prepare content
  const html =
    emailType === 'verify'
      ? VERIFY_TEMPLATE(name, link)
      : RESET_TEMPLATE(name, link);
  const text =
    emailType === 'verify'
      ? `Hi ${name}, verify your email: ${link}`
      : `Hello ${name}, reset your password here: ${link}`;

  // Send email
  const info = await transporter.sendMail({
    from: process.env.EMAIL_SENDER_USER!,
    to: email,
    subject:
      emailType === 'verify'
        ? '✅ Please verify your email'
        : '🔒 Password Reset Instructions',
    text,
    html,
  });

  console.log('Message sent: %s', info.messageId);
  return info;
};
