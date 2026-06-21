import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const honeypot = String(body.website || "").trim();
    const source = String(body.source || "").trim(); // e.g., "precast-campaign"

    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !phone || !email || !message || !emailRegex.test(email)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const html = `
      <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        ${source ? `<p><strong>Source:</strong> ${escapeHtml(source)}</p>` : ""}
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    // TODO: On successful form submission, push to dataLayer here:
    // window.dataLayer?.push({ event: 'generate_lead', source });
    // This will be wired up in §13 (analytics pass) with GTM/GA4/Meta Pixel

    const subjectPrefix = source === "precast-campaign" ? "[Precast] " : "";

    const { error } = await resend.emails.send({
      from: "Gedo Holdings <noreply@gedoholdings.co.ke>",
      to: "gedohomes@gmail.com",
      replyTo: email,
      subject: `${subjectPrefix}New website enquiry — ${name}`,
      html,
    });

    if (error) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
