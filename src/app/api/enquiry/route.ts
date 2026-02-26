import { NextRequest, NextResponse } from 'next/server';
import { submitLead } from '@/lib/leads';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, message, stockNumber, make, model, year } = body;

    if (!firstName || !lastName || !phone) {
      return NextResponse.json({ error: 'First name, last name and phone are required' }, { status: 400 });
    }

    const dealerId = parseInt(process.env.LEADS_DEALER_ID || '0', 10);
    if (!dealerId || !process.env.LEADS_API_BASE) {
      // Fallback: just log and return success if ESLeads not configured
      console.log('Lead (no ESLeads config):', { firstName, lastName, phone, email, message, stockNumber });
      return NextResponse.json({ success: true, message: 'Enquiry received' });
    }

    await submitLead({
      DealerID: dealerId,
      ExternalLeadID: `DS-${Date.now()}`,
      FirstName: firstName,
      LastName: lastName,
      ContactNumber: phone,
      EmailAddress: email || undefined,
      Comments: message || undefined,
      VehicleBrand: make || undefined,
      Vehicle: model || undefined,
      StockNo: stockNumber || undefined,
      NewUsed: 'Used',
      LeadOrigin: 'Suzuki Durban Website',
    });

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully' });
  } catch (err) {
    console.error('Enquiry error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to submit enquiry' },
      { status: 500 }
    );
  }
}
