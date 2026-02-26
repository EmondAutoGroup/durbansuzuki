import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, vehicle, deposit, tradeIn, message } = body;

    if (!firstName || !lastName || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const dealerEmail = process.env.DEALER_EMAIL || 'emond.auto@emond.co.za';

    if (!apiKey) {
      console.log('Finance application (no Resend config):', body);
      return NextResponse.json({ success: true, message: 'Application received' });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Suzuki Durban Website <noreply@durbansuzuki.co.za>',
      to: [dealerEmail],
      subject: `Finance Application — ${firstName} ${lastName}`,
      html: `
        <h2>Finance Application from Suzuki Durban Website</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email || 'Not provided'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Vehicle</td><td style="padding:8px;border:1px solid #ddd;">${vehicle || 'Not specified'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Deposit</td><td style="padding:8px;border:1px solid #ddd;">${deposit || 'Not specified'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Trade-In</td><td style="padding:8px;border:1px solid #ddd;">${tradeIn || 'None'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message || 'None'}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true, message: 'Finance application sent' });
  } catch (err) {
    console.error('Finance error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to submit application' },
      { status: 500 }
    );
  }
}
