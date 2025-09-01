import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  language?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, subject, message, language = "en" } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In a real application, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For now, we'll simulate email sending
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      language,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, you would send an email like this:
    /*
    await sendEmail({
      to: "raedtrabelsi6@gmail.com",
      from: "noreply@raed-trabelsi.vercel.app",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Language:</strong> ${language}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    // Send confirmation email to sender
    await sendEmail({
      to: email,
      from: "raed@raed-trabelsi.vercel.app",
      subject: language === 'fr' ? 'Merci pour votre message' : 
               language === 'ar' ? 'شكراً لرسالتك' : 
               'Thank you for your message',
      html: getConfirmationEmailTemplate(name, language),
    })
    */

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}

// Helper function for confirmation email templates
function getConfirmationEmailTemplate(name: string, language: string): string {
  const templates = {
    en: `
      <h2>Thank you for contacting me!</h2>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br>Raed Trabelsi</p>
    `,
    fr: `
      <h2>Merci de m'avoir contacté !</h2>
      <p>Cher/Chère ${name},</p>
      <p>Merci de m'avoir contacté via mon site portfolio. J'ai bien reçu votre message et vous répondrai dans les plus brefs délais.</p>
      <p>Cordialement,<br>Raed Trabelsi</p>
    `,
    ar: `
      <h2>شكراً لتواصلك معي!</h2>
      <p>عزيزي/عزيزتي ${name}،</p>
      <p>شكراً لتواصلك معي عبر موقعي الشخصي. لقد استلمت رسالتك وسأرد عليك في أقرب وقت ممكن.</p>
      <p>مع أطيب التحيات،<br>رائد الطرابلسي</p>
    `,
  }

  return templates[language as keyof typeof templates] || templates.en
}
