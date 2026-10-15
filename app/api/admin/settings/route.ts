import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import StoreSettings from '@/models/StoreSettings';
import { getCurrentAdmin } from '@/lib/auth';
import { DEFAULT_STORE_SETTINGS } from '@/lib/mockData';

export async function GET(req: NextRequest) {
  try {
    const mongoose = await connectToDatabase();
    if (mongoose) {
      const settings = await StoreSettings.findOne();
      if (settings) {
        return NextResponse.json({ settings });
      }
    }

    return NextResponse.json({ settings: DEFAULT_STORE_SETTINGS });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized admin access' }, { status: 401 });
    }

    const body = await req.json();

    const mongoose = await connectToDatabase();
    if (mongoose) {
      let settings = await StoreSettings.findOne();
      if (!settings) {
        settings = new StoreSettings(body);
      } else {
        Object.assign(settings, body);
      }
      await settings.save();
      return NextResponse.json({ success: true, settings });
    }

    return NextResponse.json({
      success: true,
      settings: { ...DEFAULT_STORE_SETTINGS, ...body },
      message: 'Settings updated in runtime fallback',
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
