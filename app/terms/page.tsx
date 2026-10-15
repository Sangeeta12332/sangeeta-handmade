import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../info.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sangita Handmade',
  description: 'Terms of service and customer agreement for purchasing handmade creations from Sangita Handmade.',
};

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <article className={styles.articleCard}>
        <header className={styles.header}>
          <span className={styles.badge}>Customer Agreement</span>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.updatedDate}>Effective date: October 2026 • Sangita Handmade (India)</p>
        </header>

        <div className={styles.content}>
          <p>
            Please read these Terms and Conditions carefully before placing an order on <strong>Sangita Handmade</strong>. By purchasing any handcrafted pipe-cleaner flower, bouquet, or personalized gift from our website or coordinating via WhatsApp, you agree to be bound by these terms.
          </p>

          <div className={styles.highlightBox}>
            <strong>Nature of Handcrafted Art:</strong> Every single item at Sangita Handmade is made by hand using premium chenille stems, florist tapes, and delicate embellishments. Slight organic variations in petal shaping, height, and subtle color hues are hallmarks of genuine artisan craftsmanship, not defects.
          </div>

          <h2>1. Product Pricing & Availability</h2>
          <p>
            All prices are listed in Indian Rupees (INR, ₹). Prices for ready-made catalog creations are inclusive of applicable taxes, with shipping calculated at checkout. We reserve the right to revise catalog prices based on raw material costs without retroactive impact on already-confirmed orders.
          </p>

          <h2>2. Order Acceptance & Guest Checkout</h2>
          <p>
            When you place an order, you will receive an on-screen Order Confirmation number (e.g., <code>SH-2026-XXXXX</code>). We reserve the right to decline or cancel orders in cases of incorrect inventory data, undeliverable remote PIN codes, or unverified Cash on Delivery requests.
          </p>

          <h2>3. Custom & Personalized Orders</h2>
          <ul>
            <li>Custom order requests submitted via our website form are inquiries, not automatic financial contracts.</li>
            <li>Artisan Sangita personally reviews feasibility, color swatches, and timeline before generating a firm price quote.</li>
            <li>Custom crafting commences only after advance payment confirmation. Due to the bespoke nature of customized items, once crafting has begun, custom orders cannot be cancelled.</li>
          </ul>

          <h2>4. Payments & Security</h2>
          <p>
            We accept Online Prepaid Payments (UPI, Cards, NetBanking), direct WhatsApp bank transfers, and Cash on Delivery (COD) for select postal PIN codes. For high-value COD orders, our studio may place a brief verification call prior to dispatch.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All original photography, bespoke floral arrangement designs, branding, logos, and written guides displayed on this website are the intellectual property of Sangita Handmade. Unauthorized reproduction or commercial re-use without written consent is strictly prohibited.
          </p>

          <h2>6. Governing Law & Jurisdiction</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
          </p>
        </div>
      </article>
    </div>
  );
}
