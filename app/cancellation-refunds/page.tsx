import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, CheckCircle, RefreshCw, MessageCircle } from 'lucide-react';
import styles from '../info.module.css';

export const metadata: Metadata = {
  title: 'Return, Refund & Cancellation Policy | Sangita Handmade',
  description: 'Understand cancellation windows, transit damage replacement guarantee, and refund procedures at Sangita Handmade.',
};

export default function CancellationRefundsPage() {
  return (
    <div className={styles.container}>
      <article className={styles.articleCard}>
        <header className={styles.header}>
          <span className={styles.badge}>Fair & Clear Terms</span>
          <h1 className={styles.title}>Cancellation, Return & Refund Policy</h1>
          <p className={styles.updatedDate}>Dedicated to authentic customer satisfaction and artisan integrity</p>
        </header>

        <div className={styles.content}>
          <p>
            At <strong>Sangita Handmade</strong>, every flower, petal, and leaf is hand-twisted with patience and care. We want you to love your everlasting botanical arrangement. Please read our policy below regarding order cancellations, returns, and transit damage replacements.
          </p>

          <div className={styles.highlightBox}>
            <strong>Transit Damage Guarantee:</strong> In the rare event that your handcrafted package arrives crushed or structurally damaged during transit, we provide a <strong>100% Free Replacement or Full Refund</strong>. Simply report it with an unboxing video within 48 hours of delivery.
          </div>

          <h2>1. Cancellation Policy</h2>
          <ul>
            <li>
              <strong>Standard Catalog Orders:</strong> You can cancel your order free of charge within <strong>12 hours of placement</strong> or before the item has been packed and handed over to the courier. Once dispatched, an order cannot be cancelled in transit.
            </li>
            <li>
              <strong>Custom & Personalized Orders:</strong> Custom commissions require dedicated artisan time and specialized material preparation. Custom orders may only be cancelled prior to the commencement of crafting (within 12 hours of payment). Once wire twisting or florist assembly has started, custom orders cannot be cancelled.
            </li>
          </ul>

          <h2>2. Returns & Replacements</h2>
          <p>
            Because our items are fragile handmade artistic creations, we do not accept arbitrary returns for change of mind. However, we accept replacement requests under the following conditions:
          </p>
          <ul>
            <li><strong>Transit Damage:</strong> Structural breakage, torn petals, or crushed pots caused during courier transit.</li>
            <li><strong>Incorrect Item Received:</strong> If the product received significantly differs from your confirmed order specification.</li>
          </ul>

          <h2>3. How to Report Transit Damage</h2>
          <ol>
            <li>Record a continuous, unedited <strong>unboxing video</strong> as you open the sealed outer courier parcel.</li>
            <li>Take 2 to 3 clear photos highlighting the damaged area.</li>
            <li>
              Send the video, photos, and your Order ID (e.g., <code>SH-2026-XXXXX</code>) to our WhatsApp support at <strong>+91 98765 43210</strong> or email us at <strong>support@sangitahandmade.com</strong> within <strong>48 hours of parcel delivery</strong>.
            </li>
            <li>Our artisan will review your claim within 24 business hours and promptly ship a replacement or issue a full refund.</li>
          </ol>

          <h2>4. Refund Processing Time</h2>
          <p>
            Approved refunds are credited directly back to the original source account (UPI, Credit/Debit Card, or Bank Account) via our payment gateway within <strong>5 to 7 business days</strong>. For COD orders, refunds are processed via UPI or direct IMPS transfer to your designated account.
          </p>
        </div>
      </article>
    </div>
  );
}
