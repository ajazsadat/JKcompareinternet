import { NextResponse } from 'next/server';
import { sendLeadEmail } from '@/lib/mail';

export const runtime = 'nodejs';

function asString(value) {
  if (value == null) return '';
  return String(value).trim();
}

function escapeHtml(value) {
  return asString(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildRows(fields) {
  return Object.entries(fields)
    .filter(([, value]) => asString(value))
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const formType = asString(body.formType) || 'contact';
    const name = asString(body.name);
    const email = asString(body.email);
    const phone = asString(body.phone);

    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email address.' }, { status: 400 });
    }

    const fields = {
      'Form Type': formType,
      Name: name,
      Email: email,
      Phone: phone,
      Address: asString(body.address),
      Message: asString(body.message),
      'Provider Page': asString(body.providerName),
      'Current Provider': asString(body.provider),
      'Provider Other': asString(body.providerOther),
      Usage: asString(body.usage),
      Packages: Array.isArray(body.packages) ? body.packages.join(', ') : asString(body.packages),
      Fiber: asString(body.fiber),
      Wireless: asString(body.wireless),
      Landline: asString(body.landline),
      TV: asString(body.tv),
    };

    const subjectPrefix =
      formType === 'homepage'
        ? 'Homepage Get Started'
        : formType === 'provider'
          ? `Provider Lead (${asString(body.providerName) || 'Unknown'})`
          : 'Contact Form';

    const subject = `[JKcompareinternet] ${subjectPrefix} — ${name}`;
    const html = `
      <div style="font-family:Arial,sans-serif;color:#111827;">
        <h2 style="margin:0 0 12px;">New website lead</h2>
        <p style="margin:0 0 16px;">A new form submission was received from jkcompareinternet.online.</p>
        <table style="border-collapse:collapse;width:100%;max-width:640px;">
          ${buildRows(fields)}
        </table>
      </div>
    `;
    const text = Object.entries(fields)
      .filter(([, value]) => asString(value))
      .map(([label, value]) => `${label}: ${asString(value)}`)
      .join('\n');

    await sendLeadEmail({
      subject,
      html,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { ok: false, error: 'Unable to send email right now. Please try again later.' },
      { status: 500 }
    );
  }
}
