import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  organisation: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const { organisation, email, phone, message } = body;

  if (!organisation || !email || !message) {
    return NextResponse.json({ message: "Organisation, email and message are required" }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!smtpUser || !smtpPass || !contactEmail) {
    console.error("Missing SMTP environment variables");
    return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.zoho.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: contactEmail,
      replyTo: email,
      subject: `PracticeLingo — Demo Request from ${organisation}`,
      html: `
        <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #005EB8; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Demo Request</h2>
            <p style="color: #93c5fd; margin: 4px 0 0; font-size: 13px;">PracticeLingo Website</p>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #5F6368; width: 160px; vertical-align: top; font-size: 14px;"><strong>Organisation</strong></td>
                <td style="padding: 10px 0; color: #1A1A1A; font-size: 14px;">${organisation}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #5F6368; vertical-align: top; font-size: 14px;"><strong>Email</strong></td>
                <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #005EB8;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; color: #5F6368; vertical-align: top; font-size: 14px;"><strong>Phone</strong></td>
                <td style="padding: 10px 0; color: #1A1A1A; font-size: 14px;">${phone}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; color: #5F6368; vertical-align: top; font-size: 14px;"><strong>Message</strong></td>
                <td style="padding: 10px 0; color: #1A1A1A; font-size: 14px; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
            <p style="color: #9CA3AF; font-size: 12px; margin: 0;">Sent from practicelingo.co.uk</p>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: email,
      subject: "PracticeLingo — We've received your request",
      html: `
        <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #005EB8; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Thank you for reaching out</h2>
            <p style="color: #93c5fd; margin: 4px 0 0; font-size: 13px;">Clear Care. Every Language.</p>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #1A1A1A; font-size: 15px;">Hi ${organisation},</p>
            <p style="color: #5F6368; font-size: 14px; line-height: 1.6;">We've received your request and a member of the PracticeLingo team will be in touch within two working days.</p>
            <p style="color: #5F6368; font-size: 14px; line-height: 1.6;">In the meantime, you can explore how PracticeLingo works at <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://practicelingo.co.uk"}" style="color: #005EB8;">practicelingo.co.uk</a>.</p>
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
            <p style="color: #9CA3AF; font-size: 13px; margin: 0;">— The PracticeLingo Team<br/>hello@practicelingo.co.uk</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Request sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "Failed to send request" }, { status: 500 });
  }
}
