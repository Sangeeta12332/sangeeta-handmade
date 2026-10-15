import React from 'react';
import Link from 'next/link';
import { Sparkles, Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-cream)',
        padding: '32px 16px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '520px',
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '48px 32px',
          border: '1px solid var(--color-cream-border)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div
          style={{
            fontSize: '4.5rem',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-burgundy)',
            lineHeight: 1,
            marginBottom: '12px',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: '1.75rem',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-burgundy)',
            marginBottom: '12px',
          }}
        >
          A Petal Lost in the Wind
        </h1>
        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            marginBottom: '32px',
          }}
        >
          The handmade creation or page you are looking for might have been retired, moved, or never existed in our floral studio.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/shop" className="btn btn-primary">
            <ShoppingBag size={16} />
            <span>Explore Handcrafted Shop</span>
          </Link>
          <Link href="/" className="btn btn-secondary">
            <Home size={16} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
