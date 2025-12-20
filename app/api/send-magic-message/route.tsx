import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { parentName, parentEmail, childName, childAge, specialInfo, wishList } = body

    const { data, error } = await resend.emails.send({
      from: "Santaames Magic Video <onboarding@resend.dev>",
      to: ["santaames@yahoo.com"],
      replyTo: parentEmail,
      subject: `Magic Video Request for ${childName} from ${parentName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FFF8F0; border: 3px solid #FFD700; border-radius: 10px;">
          <h2 style="color: #B71C1C; margin-bottom: 20px; text-align: center;">🎅 New Magic Video Message Request 🎄</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #B71C1C; margin-top: 0;">Parent Information</h3>
            <p><strong>Name:</strong> ${parentName}</p>
            <p><strong>Email:</strong> ${parentEmail}</p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #B71C1C; margin-top: 0;">Child Information</h3>
            <p><strong>Name:</strong> ${childName}</p>
            <p><strong>Age:</strong> ${childAge}</p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #B71C1C; margin-top: 0;">What Makes ${childName} Special:</h3>
            <p>${specialInfo}</p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #B71C1C; margin-top: 0;">Christmas Wish List:</h3>
            <p>${wishList}</p>
          </div>
          
          <hr style="margin: 20px 0; border: none; border-top: 2px solid #FFD700;">
          <p style="color: #666; font-size: 14px; text-align: center;">Reply to this email to contact ${parentName} directly.</p>
          <p style="color: #B71C1C; font-weight: bold; text-align: center;">🎁 Create and send the personalized video to ${parentEmail} 🎁</p>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Email sending error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("[v0] Magic message request sent successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] API route error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
