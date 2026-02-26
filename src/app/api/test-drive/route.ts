import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, model, preferredDate, preferredTime, message } = body;

    if (!firstName || !lastName || !phone || !model) {
      return NextResponse.json({ error: 'Name, phone and model are required' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const dealerEmail = process.env.DEALER_EMAIL || 'emond.auto@emond.co.za';

    if (!apiKey) {
      console.log('Test drive booking (no Resend config):', body);
      return NextResponse.json({ success: true, message: 'Booking received' });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Suzuki Durban Website <noreply@durbansuzuki.co.za>',
      to: [dealerEmail],
      subject: `Test Drive Booking: Suzuki ${model} — ${firstName} ${lastName}`,
      html: `
        <h2>Test Drive Booking from Suzuki Durban Website</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Model</td><td style="padding:8px;border:1px solid #ddd;">Suzuki ${model}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email || 'Not provided'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Preferred Date</td><td style="padding:8px;border:1px solid #ddd;">${preferredDate || 'Flexible'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Preferred Time</td><td style="padding:8px;border:1px solid #ddd;">${preferredTime || 'Flexible'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message || 'None'}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true, message: 'Test drive booking sent' });
  } catch (err) {
    console.error('Test drive error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to submit booking' },
      { status: 500 }
    );
  }
}
