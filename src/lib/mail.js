import nodemailer from 'nodemailer';

const SMTP = {
  host: 'mail.careernhustle.com',
  port: 465,
  secure: true,
  user: 'shah@careernhustle.com',
  pass: 'Sherry@123$$',
};

const CONTACT_TO_EMAIL = 'info@jkcompareinternet.online';
const SMTP_FROM = SMTP.user;

export function getMailTransporter() {
  return nodemailer.createTransport({
    host: SMTP.host,
    port: SMTP.port,
    secure: SMTP.secure,
    auth: {
      user: SMTP.user,
      pass: SMTP.pass,
    },
  });
}

export function getContactToEmail() {
  return CONTACT_TO_EMAIL;
}

export function getSmtpFromEmail() {
  return SMTP_FROM;
}

export async function sendLeadEmail({ subject, html, text, replyTo }) {
  const transporter = getMailTransporter();
  const to = getContactToEmail();
  const from = getSmtpFromEmail();

  return transporter.sendMail({
    from,
    to,
    replyTo: replyTo || undefined,
    subject,
    html,
    text,
  });
}
