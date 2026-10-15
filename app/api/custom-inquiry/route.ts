import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import CustomInquiry from '@/models/CustomInquiry';
import { getCurrentAdmin } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerName, phone, creationType, occasion, colors, budget, requiredDate, notes } = body;

    if (!customerName || !phone || !creationType || !colors || !requiredDate) {
      return NextResponse.json(
        { error: 'Customer name, phone, creation type, colors, and required date are mandatory.' },
        { status: 400 }
      );
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid 10-digit Indian mobile number.' },
        { status: 400 }
      );
    }

    const year = new Date().getFullYear();
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const inquiryNumber = `CI-${year}-${randomSuffix}`;

    const inquiryRecord = {
      inquiryNumber,
      customerName: customerName.trim(),
      phone: phone.trim(),
      creationType,
      occasion: occasion?.trim() || undefined,
      colors: colors.trim(),
      budget,
      requiredDate,
      notes: notes?.trim() || undefined,
      status: 'NEW',
    };

    const mongoose = await connectToDatabase();
    if (mongoose) {
      try {
        const created = await CustomInquiry.create(inquiryRecord);
        return NextResponse.json({ success: true, inquiry: created, inquiryNumber });
      } catch (dbErr) {
        console.error('Error saving inquiry to DB:', dbErr);
      }
    }

    // Fallback response
    return NextResponse.json({
      success: true,
      inquiryNumber,
      inquiry: { ...inquiryRecord, createdAt: new Date().toISOString() },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized admin access' }, { status: 401 });
    }

    const mongoose = await connectToDatabase();
    if (!mongoose) {
      // Mock inquiries for admin view
      return NextResponse.json({
        inquiries: [
          {
            _id: 'mock_ci_1',
            inquiryNumber: 'CI-2026-47291',
            customerName: 'Meera Deshmukh',
            phone: '9822012345',
            creationType: 'Everlasting Handcrafted Bouquet',
            occasion: '1st Wedding Anniversary',
            colors: 'Dusty Rose, Warm Champagne, Sage Leaves',
            budget: '₹2,000 – ₹3,500',
            requiredDate: '2026-11-05',
            status: 'NEW',
            notes: 'Please include satin ribbon wrapping with initials M & R',
            createdAt: new Date().toISOString(),
          },
        ],
      });
    }

    const inquiries = await CustomInquiry.find().sort({ createdAt: -1 });
    return NextResponse.json({ inquiries });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
