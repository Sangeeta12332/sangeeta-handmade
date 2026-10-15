import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import AdminUser from '@/models/AdminUser';
import { comparePassword, signAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();
    let adminPayload = null;

    const mongoose = await connectToDatabase();
    if (mongoose) {
      const user = await AdminUser.findOne({ email: cleanEmail, isActive: true });
      if (user) {
        const isMatch = await comparePassword(password, user.passwordHash);
        if (isMatch) {
          adminPayload = {
            userId: user._id.toString(),
            email: user.email,
            role: user.role,
          };
          user.lastLogin = new Date();
          await user.save();
        }
      }
    }

    // Default bootstrap credentials for initial setup & local demonstration
    // (Documented in TRD.md and .env.example)
    const bootstrapEmail = (process.env.ADMIN_BOOTSTRAP_EMAIL || 'admin@sangitahandmade.com').toLowerCase();
    const bootstrapPassword = process.env.ADMIN_BOOTSTRAP_PASSWORD || 'SangitaAdmin2026!';

    if (!adminPayload && cleanEmail === bootstrapEmail && password === bootstrapPassword) {
      adminPayload = {
        userId: 'admin_master_1',
        email: bootstrapEmail,
        role: 'SUPER_ADMIN' as const,
      };
    }

    if (!adminPayload) {
      return NextResponse.json(
        { error: 'Invalid administrative credentials or account disabled.' },
        { status: 401 }
      );
    }

    // Sign JWT
    const token = await signAdminToken(adminPayload);

    // Set HttpOnly cookie
    const response = NextResponse.json({
      success: true,
      message: 'Admin authentication successful',
      user: {
        email: adminPayload.email,
        role: adminPayload.role,
      },
    });

    response.cookies.set({
      name: 'sangita_admin_session',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (err: any) {
    console.error('Admin login error:', err);
    return NextResponse.json({ error: err.message || 'Authentication error' }, { status: 500 });
  }
}
