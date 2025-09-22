import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true bei 465, false bei 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${firstName} ${lastName}`,
      text: `
Von: ${firstName} ${lastName}
E-Mail: ${email}

Nachricht:
${message}
      `
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Mail Error:', e);
    return NextResponse.json({ ok: false, error: 'Fehler beim Senden' }, { status: 500 });
  }
}
