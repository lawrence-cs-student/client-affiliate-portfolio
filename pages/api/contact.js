import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "irishannexxx@gmail.com",
      reply_to: email,
      subject: `New inquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:24px;border:1px solid #FBA1B7;border-radius:12px">
          <h2 style="color:#FBA1B7;margin-bottom:16px">New Collaboration Inquiry 🩷</h2>
          <p><strong>Brand / Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border-color:#FFDBAA;margin:16px 0" />
          <p><strong>Message:</strong></p>
          <p style="background:#FFF0F5;padding:12px;border-radius:8px">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email." });
  }
}
