'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, Mail, KeyRound, Sparkles, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/admin';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Authentication failed. Please check your credentials.');
        setLoading(false);
        return;
      }

      // Success
      router.push(from);
      router.refresh();
    } catch (err) {
      setError('Network error connecting to authentication server.');
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginCard}>
      <div className={styles.topBack}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Back to Storefront</span>
        </Link>
      </div>

      <div className={styles.header}>
        <div className={styles.logoBadge}>
          <Sparkles size={20} className={styles.logoIcon} />
        </div>
        <h1 className={styles.title}>Artisan Admin Portal</h1>
        <p className={styles.subtitle}>Sangita Handmade Studio Management</p>
      </div>

      {error && (
        <div className={styles.errorBox}>
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="form-group">
          <label className="form-label">Admin Email</label>
          <div className={styles.inputWrap}>
            <Mail size={18} className={styles.fieldIcon} />
            <input
              type="email"
              placeholder="admin@sangitahandmade.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`form-control ${styles.inputWithIcon}`}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <div className={styles.inputWrap}>
            <KeyRound size={18} className={styles.fieldIcon} />
            <input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`form-control ${styles.inputWithIcon}`}
              autoComplete="current-password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '16px', padding: '14px' }}
        >
          <Lock size={16} />
          <span>{loading ? 'Authenticating...' : 'Sign In to Studio Dashboard'}</span>
        </button>
      </form>

      <div className={styles.demoNotice}>
        <strong>Default Studio Development Access:</strong>
        <p>
          Email: <code>admin@sangitahandmade.com</code><br />
          Password: <code>SangitaAdmin2026!</code>
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading Studio Portal...</div>}>
        <LoginFormContent />
      </Suspense>
    </div>
  );
}
