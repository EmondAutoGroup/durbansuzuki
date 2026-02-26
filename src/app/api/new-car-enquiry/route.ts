import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, message, model } = body;

    if (!firstName || !lastName || !phone) {
      return NextResponse.json({ error: 'First name, last name and phone are required' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const dealerEmail = process.env.DEALER_EMAIL || 'emond.auto@emond.co.za';

    if (!apiKey) {
      console.log('New car enquiry (no Resend config):', { firstName, lastName, phone, email, message, model });
      return NextResponse.json({ success: true, message: 'Enquiry received' });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Suzuki Durban Website <noreply@durbansuzuki.co.za>',
      to: [dealerEmail],
      subject: `New Car Enquiry: Suzuki ${model || 'Unknown'} — ${firstName} ${lastName}`,
      html: `
        <h2>New Car Enquiry from Suzuki Durban Website</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Model</td><td style="padding:8px;border:1px solid #ddd;">Suzuki ${model || 'Not specified'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email || 'Not provided'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message || 'No message'}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true, message: 'Enquiry sent to dealer' });
  } catch (err) {
    console.error('New car enquiry error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to send enquiry' },
      { status: 500 }
    );
  }
}
