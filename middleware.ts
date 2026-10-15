import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || process.env.ADMIN_JWT_SECRET || 'sangita-handmade-secure-artisan-jwt-secret-key-32chars';
const secretKey = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect admin pages and admin APIs
  const isAdminPage = pathname.startsWith('/admin') && pathname !== '/admin/login';
  const isAdminApi = pathname.startsWith('/api/admin') && !pathname.startsWith('/api/admin/auth');

  if (isAdminPage || isAdminApi) {
    const token = request.cookies.get('sangita_admin_session')?.value;

    let isAuthenticated = false;

    if (token) {
      try {
        await jwtVerify(token, secretKey);
        isAuthenticated = true;
      } catch (err) {
        isAuthenticated = false;
      }
    }

    if (!isAuthenticated) {
      if (isAdminApi) {
        return NextResponse.json(
          { error: 'Unauthorized administrative access' },
          { status: 401 }
        );
      }

      // Redirect to admin login page
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
