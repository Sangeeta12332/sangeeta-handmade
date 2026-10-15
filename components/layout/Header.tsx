'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/context/LocaleContext';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu, X, MessageCircle, Sparkles, ChevronRight } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { locale, setLocale, t } = useLocale();
  const { itemCount, openCartDrawer } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'hi' : 'en');
  };

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/shop', label: t('nav.shop') },
    { href: '/shop?category=bouquets', label: t('nav.bouquets') },
    { href: '/shop?category=flowers', label: t('nav.flowers') },
    { href: '/custom-order', label: t('nav.custom'), highlight: true },
    { href: '/shop?category=gifts', label: t('nav.gifts') },
    { href: '/shop?category=decor', label: t('nav.decor') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className={styles.announcementBar}>
        <div className="container">
          <div className={styles.announcementContent}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>{t('announcement.text')}</span>
            <Sparkles size={14} className={styles.sparkleIcon} />
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            {/* Mobile Hamburger Button */}
            <button
              className={styles.mobileMenuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Brand Logo */}
            <Link href="/" className={styles.logoContainer}>
              <span className={styles.brandMain}>Sangita</span>
              <span className={styles.brandSub}>Handmade</span>
              <span className={styles.brandTag}>Artisanal Atelier</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className={styles.desktopNav}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.activeNavLink : ''} ${link.highlight ? styles.highlightNavLink : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className={styles.rightActions}>
              {/* Language Switcher Pill */}
              <button
                className={styles.langToggle}
                onClick={toggleLanguage}
                title="Switch Language / भाषा बदलें"
              >
                <span className={locale === 'en' ? styles.langActive : ''}>EN</span>
                <span className={styles.langDivider}>|</span>
                <span className={locale === 'hi' ? styles.langActive : ''}>HI</span>
              </button>

              {/* Direct WhatsApp Quick Contact */}
              <a
                href="https://wa.me/919876543210?text=Hello%20Sangita%20Handmade!%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waHeaderBtn}
                title="Chat on WhatsApp"
              >
                <MessageCircle size={18} />
                <span className={styles.waText}>WhatsApp</span>
              </a>

              {/* Shopping Bag Trigger with Live Counter */}
              <button
                className={styles.cartButton}
                onClick={openCartDrawer}
                aria-label={`Shopping bag with ${itemCount} items`}
              >
                <ShoppingBag size={22} />
                {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={() => setIsMobileMenuOpen(false)}>
          <div className={styles.mobileMenuDrawer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mobileMenuHeader}>
              <div className={styles.mobileLogo}>
                <span className={styles.brandMain}>Sangita</span>
                <span className={styles.brandSub}>Handmade</span>
              </div>
              <button
                className={styles.closeDrawerBtn}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className={styles.mobileLangBar}>
              <span>Language / भाषा:</span>
              <button
                className={`${styles.mobileLangBtn} ${locale === 'en' ? styles.mobileLangBtnActive : ''}`}
                onClick={() => setLocale('en')}
              >
                English
              </button>
              <button
                className={`${styles.mobileLangBtn} ${locale === 'hi' ? styles.mobileLangBtnActive : ''}`}
                onClick={() => setLocale('hi')}
              >
                हिंदी
              </button>
            </div>

            <nav className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} className={styles.arrowIcon} />
                </Link>
              ))}
            </nav>

            <div className={styles.mobileMenuFooter}>
              <a
                href="https://wa.me/919876543210?text=Hello%20Sangita%20Handmade!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', marginBottom: '12px' }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <p className={styles.mobileStudioNote}>
                Handcrafted with love for homes across India.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
