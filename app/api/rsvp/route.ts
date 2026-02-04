import { NextRequest, NextResponse } from 'next/server'

// Type for RSVP data
interface RSVPData {
  name: string
  email: string
  guests: string
  attending: string
  dietaryRestrictions?: string
  message?: string
}

// Simple validation
function validateRSVP(data: RSVPData): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters')
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required')
  }

  if (!data.attending || !['yes', 'no', 'maybe'].includes(data.attending)) {
    errors.push('Please indicate if you are attending')
  }

  const guestNum = parseInt(data.guests)
  if (isNaN(guestNum) || guestNum < 1 || guestNum > 10) {
    errors.push('Number of guests must be between 1 and 10')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: RSVPData = await request.json()
    
    // Validate the data
    const validation = validateRSVP(body)
    
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      )
    }

    // In production, you would:
    // 1. Save to a database (MongoDB, PostgreSQL, etc.)
    // 2. Send to Google Sheets via their API
    // 3. Send to Formspree or similar service
    // 4. Send a confirmation email
    
    // Example: Send to external service (uncomment and configure as needed)
    /*
    // Option 1: Google Sheets via a webhook or API
    await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    
    // Option 2: Formspree
    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    
    // Option 3: Send confirmation email via Resend, SendGrid, etc.
    await sendConfirmationEmail(body.email, body.name)
    */

    // Log the RSVP (in production, replace with actual storage)
    console.log('New RSVP received:', {
      name: body.name,
      email: body.email,
      attending: body.attending,
      guests: body.guests,
      dietaryRestrictions: body.dietaryRestrictions || 'None',
      message: body.message || 'No message',
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'RSVP received successfully! May the odds be ever in your favor!',
      data: {
        name: body.name,
        attending: body.attending,
        guests: body.guests
      }
    })

  } catch (error) {
    console.error('RSVP submission error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        errors: ['An error occurred while processing your RSVP. Please try again.'] 
      },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to check API status
export async function GET() {
  return NextResponse.json({
    status: 'active',
    message: 'RSVP API is running. May the odds be ever in your favor!',
    acceptingRSVPs: true
  })
}
