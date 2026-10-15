import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'sangita-handmade-secure-artisan-jwt-secret-key-32chars';
const secretKey = new TextEncoder().encode(JWT_SECRET);

export interface AdminTokenPayload {
  userId: string;
  email: string;
  role: 'SUPER_ADMIN' | 'MANAGER';
}

/**
 * Hash plaintext password using bcrypt with salt rounds = 10
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

/**
 * Compare candidate password with stored hash
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Generate a signed JWT valid for 7 days
 */
export async function signAdminToken(payload: AdminTokenPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secretKey);
}

/**
 * Verify a JWT string
 */
export async function verifyAdminToken(token: string): Promise<AdminTokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload as unknown as AdminTokenPayload;
  } catch (error) {
    return null;
  }
}

/**
 * Helper to get current authenticated admin from HTTP-only cookie
 */
export async function getCurrentAdmin(): Promise<AdminTokenPayload | null> {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('sangita_admin_session')?.value;
    if (!token) return null;
    return await verifyAdminToken(token);
  } catch (err) {
    return null;
  }
}
