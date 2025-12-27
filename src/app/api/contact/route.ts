import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SHEETS_URL = 'https://script.google.com/a/macros/trafficdatagroup.com/s/AKfycbzI3zhxvdNVq0GAhW9uxVlBPbpAYkbf7chz-p-E7CPZL-f-NiDc3K-uTZawm4jHZ9__CQ/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, role, fleetSize, currentTools, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send to Google Sheets
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('email', email);
    params.append('company', company || '');
    params.append('role', role || '');
    params.append('fleetSize', fleetSize || '');
    params.append('telematics', currentTools || '');
    params.append('message', message || '');
    params.append('source', 'Contact Page');

    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      body: params,
    });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
