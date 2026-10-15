import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Truck, ShieldCheck, Clock, MapPin } from 'lucide-react';
import styles from '../info.module.css';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | Sangita Handmade',
  description: 'Pan-India shipping rates, delivery timelines, and transit packaging guarantees for Sangita Handmade floral creations.',
};

export default function ShippingPolicyPage() {
  return (
    <div className={styles.container}>
      <article className={styles.articleCard}>
        <header className={styles.header}>
          <span className={styles.badge}>Pan-India Fulfillment</span>
          <h1 className={styles.title}>Shipping & Delivery Policy</h1>
          <p className={styles.updatedDate}>Reliable, safe delivery to 19,000+ PIN codes across India</p>
        </header>

        <div className={styles.content}>
          <p>
            At <strong>Sangita Handmade</strong>, we understand that our handcrafted flowers and bouquets often mark birthdays, anniversaries, graduations, and cherished occasions. We take tremendous pride in packing each piece securely so it arrives in pristine, everlasting condition.
          </p>

          <div className={styles.highlightBox}>
            <strong>Free Shipping Benefit:</strong> All orders with a subtotal of <strong>₹1,999 or more</strong> qualify for automatic <strong>FREE Standard Pan-India Shipping</strong>. For orders under ₹1,999, a flat shipping fee of <strong>₹99</strong> is added at checkout.
          </div>

          <h2>1. Processing & Crafting Timelines</h2>
          <ul>
            <li>
              <strong>Ready-to-Ship Creations:</strong> Catalog products in stock are carefully packed and dispatched from our studio within <strong>24 to 48 hours</strong> (excluding Sundays and national holidays).
            </li>
            <li>
              <strong>Custom & Personalized Bouquets:</strong> Because each bespoke creation is shaped by hand, crafting takes <strong>3 to 7 business days</strong> depending on bouquet size and color complexity. We always confirm your target event date before accepting the order.
            </li>
          </ul>

          <h2>2. Estimated Courier Delivery Durations</h2>
          <p>Once dispatched from our studio, estimated transit times via our logistics partners are:</p>
          <ul>
            <li><strong>Metro Cities (Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata):</strong> 2 to 4 business days.</li>
            <li><strong>Tier 2 & Tier 3 Cities:</strong> 4 to 6 business days.</li>
            <li><strong>Northeast India, J&K, Remote PIN Codes:</strong> 6 to 9 business days.</li>
          </ul>

          <h2>3. Transit Safety & Bespoke Packaging Guarantee</h2>
          <p>
            Pipe-cleaner flowers require careful structural protection during transit. Each bouquet is:
          </p>
          <ul>
            <li>Secured inside rigid, crush-resistant double-corrugated shipping boxes.</li>
            <li>Cushioned with eco-friendly honeycomb wrap and moisture-resistant florist tissue.</li>
            <li>Anchored at the stem base so flowers cannot shift or compress against box walls.</li>
          </ul>

          <h2>4. Tracking Your Order</h2>
          <p>
            As soon as your shipment is picked up by our courier partner (Bluedart, Delhivery, DTDC, or Speed Post), you will receive a tracking link via SMS, Email, and WhatsApp. You can follow your parcel live from our studio to your doorstep.
          </p>

          <h2>5. Non-Delivery or Delayed Shipments</h2>
          <p>
            If a courier delivery attempt fails due to customer unavailability, incorrect contact phone, or access restrictions, the courier will make up to two additional re-attempts. Please ensure your 10-digit mobile number provided during checkout is active and reachable.
          </p>
        </div>
      </article>
    </div>
  );
}
