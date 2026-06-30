import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, phone, city, comment } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Заполните имя и телефон" }, { status: 400 });
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
    subject: `🤝 ОПТ-заявка — ${name}${city ? `, ${city}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;padding:24px;background:#f9f9f9;">
        <h2 style="color:#c9a84c;margin-bottom:16px;">Новая оптовая заявка с belleeclat.ru/opt</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;width:120px;">Имя</td>
            <td style="padding:8px 12px;">${name}</td>
          </tr>
          <tr style="background:#fff;">
            <td style="padding:8px 12px;font-weight:bold;">Телефон</td>
            <td style="padding:8px 12px;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          ${city ? `<tr><td style="padding:8px 12px;font-weight:bold;">Город</td><td style="padding:8px 12px;">${city}</td></tr>` : ""}
          ${comment ? `<tr style="background:#fff;"><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Комментарий</td><td style="padding:8px 12px;">${comment.replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
