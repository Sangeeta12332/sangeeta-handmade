import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const response = NextResponse.json({
    success: true,
    message: 'Admin session terminated',
  });

  response.cookies.delete('sangita_admin_session');
  return response;
}
