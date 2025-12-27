import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, fleetSize, telematics } = body;

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

    // Close.com API
    const closeApiKey = process.env.CLOSE_API_KEY;
    if (!closeApiKey) {
      console.error('CLOSE_API_KEY not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const authHeader = `Basic ${Buffer.from(closeApiKey + ':').toString('base64')}`;

    // Build description
    const description = [
      `Source: Homepage CTA`,
      `Fleet Size: ${fleetSize || 'Not specified'}`,
      `Telematics: ${telematics || 'Not specified'}`,
    ].join('\n');

    // Create lead in Close.com
    const leadResponse = await fetch('https://api.close.com/api/v1/lead/', {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        contacts: [
          {
            name: name,
            emails: [{ email: email, type: 'office' }],
          }
        ],
        custom: {
          'Fleet Size': fleetSize || '',
          'Telematics': telematics || '',
        },
        description: description,
      }),
    });

    if (!leadResponse.ok) {
      const errorData = await leadResponse.text();
      console.error('Close.com API error:', leadResponse.status, errorData);
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 500 }
      );
    }

    const leadData = await leadResponse.json();
    console.log('Lead created in Close.com:', leadData.id);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
