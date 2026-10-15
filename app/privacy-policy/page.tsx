import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../info.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sangita Handmade',
  description: 'Understand how Sangita Handmade protects and respects your personal data in accordance with Indian IT laws.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <article className={styles.articleCard}>
        <header className={styles.header}>
          <span className={styles.badge}>Trust & Transparency</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updatedDate}>Last updated: October 2026 • In compliance with IT Act, 2000 (India)</p>
        </header>

        <div className={styles.content}>
          <p>
            Welcome to <strong>Sangita Handmade</strong>. We cherish the trust you place in us when sharing your personal information to purchase our handmade pipe-cleaner flowers, everlasting bouquets, and customized gifts. This Privacy Policy outlines how we collect, use, and safeguard your details.
          </p>

          <div className={styles.highlightBox}>
            <strong>Our Core Privacy Promise:</strong> We do not sell, rent, or trade your personal phone number, shipping address, or email to third-party telemarketers or advertising networks. Your information is used strictly to craft and deliver your orders.
          </div>

          <h2>1. Information We Collect</h2>
          <p>When you browse our catalog or place an order via Guest Checkout, we collect:</p>
          <ul>
            <li><strong>Contact details:</strong> Full name, 10-digit Indian mobile number, and optional email address.</li>
            <li><strong>Delivery address:</strong> House/flat number, street, locality/landmark, city, state, and 6-digit postal PIN code.</li>
            <li><strong>Customization preferences:</strong> Requested flower varieties, color palettes, event dates, and reference images shared via our Custom Order intake form or WhatsApp.</li>
            <li><strong>Order transaction data:</strong> Purchased items, payment mode (Online, COD, WhatsApp), and order timestamps.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your personal information solely for legitimate operational purposes:</p>
          <ul>
            <li>To handcraft, pack, and ship your ordered botanical creations to your destination across India.</li>
            <li>To dispatch shipping notifications, courier tracking links, and delivery coordination updates via SMS and WhatsApp.</li>
            <li>To consult with you regarding bespoke custom orders and verify personalized designs.</li>
            <li>To process refunds or resolve customer support inquiries.</li>
          </ul>

          <h2>3. Payment Security & Third-Party Gateways</h2>
          <p>
            We adhere to strict financial security practices. When making an online payment, your transactions are processed through RBI-authorized payment aggregators (e.g., Razorpay, Cashfree). 
            <strong>Sangita Handmade never stores, views, or has access to your Credit/Debit Card numbers, CVV, or UPI PINs.</strong>
          </p>

          <h2>4. Data Retention & Cookies</h2>
          <p>
            We use essential local storage cookies solely to maintain your active shopping bag items and your language preference (English/Hindi). We do not deploy invasive third-party cross-site trackers.
          </p>

          <h2>5. Contact Our Privacy Lead</h2>
          <p>
            If you have any questions regarding your data or wish to request the deletion of your order contact history, please reach out to us at:
          </p>
          <ul>
            <li>Email: <a href="mailto:support@sangitahandmade.com">support@sangitahandmade.com</a></li>
            <li>WhatsApp Support: +91 98765 43210</li>
            <li>Studio: Sangita Handmade Studio, Bengaluru, Karnataka, India</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
