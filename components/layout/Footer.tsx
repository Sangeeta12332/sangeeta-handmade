'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { MessageCircle, Mail, MapPin, Instagram, Heart, ShieldCheck, Truck, Clock } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { t } = useLocale();

  return (
    <footer className={styles.footer}>
      {/* Brand Trust Feature Strip */}
      <div className={styles.trustStrip}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustIconWrap}>
                <Heart size={20} />
              </div>
              <div>
                <h4 className={styles.trustTitle}>100% Handcrafted</h4>
                <p className={styles.trustDesc}>Every petal sculpted by artisan Sangita</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIconWrap}>
                <Clock size={20} />
              </div>
              <div>
                <h4 className={styles.trustTitle}>Everlasting Blooms</h4>
                <p className={styles.trustDesc}>Never wilts, fades, or requires water</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIconWrap}>
                <Truck size={20} />
              </div>
              <div>
                <h4 className={styles.trustTitle}>Pan-India Shipping</h4>
                <p className={styles.trustDesc}>Carefully packaged in bespoke gift boxes</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIconWrap}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className={styles.trustTitle}>Safe Payments</h4>
                <p className={styles.trustDesc}>UPI, Online Gateway & Cash on Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={styles.mainFooter}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Column 1: Brand Info */}
            <div className={styles.footerColBrand}>
              <div className={styles.footerLogo}>
                <span className={styles.brandMain}>Sangita</span>
                <span className={styles.brandSub}>Handmade</span>
              </div>
              <p className={styles.footerBrandDesc}>
                {t('footer.brandDesc')}
              </p>
              <div className={styles.socialRow}>
                <a
                  href="https://instagram.com/sangitahandmade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Collections */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>{t('footer.collections')}</h4>
              <ul className={styles.colList}>
                <li><Link href="/shop?category=bouquets">{t('nav.bouquets')}</Link></li>
                <li><Link href="/shop?category=flowers">{t('nav.flowers')}</Link></li>
                <li><Link href="/custom-order">{t('nav.custom')}</Link></li>
                <li><Link href="/shop?category=gifts">{t('nav.gifts')}</Link></li>
                <li><Link href="/shop?category=decor">{t('nav.decor')}</Link></li>
                <li><Link href="/shop">{t('nav.shop')}</Link></li>
              </ul>
            </div>

            {/* Column 3: Customer Care & Policies */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>{t('footer.customerCare')}</h4>
              <ul className={styles.colList}>
                <li><Link href="/shipping-policy">Shipping & Delivery</Link></li>
                <li><Link href="/cancellation-refunds">Cancellation & Refunds</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/contact">Contact & Support</Link></li>
                <li><Link href="/admin/login">Artisan Admin Portal</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Studio Info */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>{t('footer.connect')}</h4>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <MessageCircle size={16} className={styles.contactIcon} />
                  <span>WhatsApp: +91 98765 43210</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={16} className={styles.contactIcon} />
                  <span>contact@sangitahandmade.com</span>
                </div>
                <div className={styles.contactItem}>
                  <MapPin size={16} className={styles.contactIcon} />
                  <span>Studio Sangita, Bengaluru, India</span>
                </div>
              </div>

              <div className={styles.waPromptBox}>
                <span className={styles.waPromptText}>Need a custom color combination?</span>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Sangita%20Handmade!%20I%20want%20to%20discuss%20a%20custom%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waPromptLink}
                >
                  <MessageCircle size={14} />
                  <span>Chat with Artisan Sangita</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Payment Badges */}
          <div className={styles.bottomBar}>
            <p className={styles.copyrightText}>{t('footer.copyright')}</p>
            <div className={styles.paymentMethods}>
              <span className={styles.payBadge}>UPI / QR</span>
              <span className={styles.payBadge}>Google Pay</span>
              <span className={styles.payBadge}>PhonePe</span>
              <span className={styles.payBadge}>Paytm</span>
              <span className={styles.payBadge}>RuPay</span>
              <span className={styles.payBadge}>Visa / Master</span>
              <span className={styles.payBadge}>Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
