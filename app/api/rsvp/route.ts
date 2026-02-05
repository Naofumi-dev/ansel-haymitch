import { NextRequest, NextResponse } from 'next/server'

interface RSVPData {
  name: string
  email: string
  guests: string
  attending: string
  message?: string
}

function validateRSVP(data: RSVPData): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  if (!data.name || data.name.trim().length < 2) errors.push('Name is required')
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Valid email is required')
  if (!data.attending || !['yes', 'no', 'maybe'].includes(data.attending)) errors.push('Please indicate attendance')
  return { valid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    const body: RSVPData = await request.json()
    const validation = validateRSVP(body)
    
    if (!validation.valid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 })
    }

    // Log RSVP - in production, connect to database or external service
    console.log('RSVP received:', {
      ...body,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'RSVP received! May the odds be ever in your favor!'
    })
  } catch (error) {
    console.error('RSVP error:', error)
    return NextResponse.json({ success: false, errors: ['Something went wrong'] }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'active', message: 'RSVP API is running' })
}
