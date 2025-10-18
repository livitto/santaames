import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, eventType, date, message } = body

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    const { data, error } = await resend.emails.send({
      from: "Santaames Booking <onboarding@resend.dev>",
      to: ["shakil.myuk@gmail.com"],
      replyTo: email,
      subject: `New Booking Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #B71C1C; margin-bottom: 20px;">New Booking Request</h2>
          
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Mobile:</strong> ${phone}</p>
          <p><strong>Event Type:</strong> ${eventType}</p>
          <p><strong>Details:</strong><br>${message || "No additional details provided"}</p>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 14px;">Reply to this email to contact ${name} directly.</p>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Email sending error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("[v0] Email sent successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] API route error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
