import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, interest, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    // Close.com API key
    const closeApiKey = process.env.CLOSE_API_KEY;

    if (!closeApiKey) {
      console.error('CLOSE_API_KEY not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create lead in Close.com
    const leadResponse = await fetch('https://api.close.com/api/v1/lead/', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(closeApiKey + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: company || name,
        contacts: [
          {
            name: name,
            emails: [{ email: email, type: 'office' }],
          }
        ],
        custom: {
          'Interest': interest || 'General Inquiry',
          'Message': message,
          'Source': 'Website Contact Form',
        }
      }),
    });

    if (!leadResponse.ok) {
      const errorData = await leadResponse.text();
      console.error('Close.com API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create lead' },
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
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
