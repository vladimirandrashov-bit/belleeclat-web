import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, contact, message } = await req.json();

  if (!name || !contact || !message) {
    return NextResponse.json({ error: "Заполните все поля" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "mail.hosting.reg.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"BelleEclat Сайт" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: contact.includes("@") ? contact : undefined,
    subject: `Новая заявка с сайта — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;padding:24px;background:#f9f9f9;">
        <h2 style="color:#c9a84c;margin-bottom:16px;">Заявка с belleeclat.ru</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;width:120px;">Имя</td>
            <td style="padding:8px 12px;">${name}</td>
          </tr>
          <tr style="background:#fff;">
            <td style="padding:8px 12px;font-weight:bold;">Контакт</td>
            <td style="padding:8px 12px;">${contact}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Сообщение</td>
            <td style="padding:8px 12px;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
