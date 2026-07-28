import nodemailer from 'nodemailer';

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getMailTransporter() {
  const host = requiredEnv('SMTP_HOST');
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = String(process.env.SMTP_SECURE ?? 'true') === 'true';
  const user = requiredEnv('SMTP_USER');
  const pass = requiredEnv('SMTP_PASS');

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export function getContactToEmail() {
  return process.env.CONTACT_TO_EMAIL || 'info@jkcompareinternet.online';
}

export function getSmtpFromEmail() {
  return process.env.SMTP_FROM || process.env.SMTP_USER || 'shah@careernhustle.com';
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
