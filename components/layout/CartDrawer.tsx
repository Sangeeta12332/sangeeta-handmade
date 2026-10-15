'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useLocale } from '@/context/LocaleContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import styles from './CartDrawer.module.css';

export const CartDrawer: React.FC = () => {
  const { items, isCartDrawerOpen, closeCartDrawer, updateQuantity, removeItem, subtotal, itemCount } = useCart();
  const { locale, t } = useLocale();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCartDrawer();
    };
    if (isCartDrawerOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isCartDrawerOpen, closeCartDrawer]);

  if (!isCartDrawerOpen) return null;

  const shippingFee = subtotal >= 1999 || subtotal === 0 ? 0 : 99;
  const grandTotal = subtotal + shippingFee;

  return (
    <div className={styles.drawerBackdrop} onClick={closeCartDrawer}>
      <div className={styles.drawerPanel} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className={styles.drawerHeader}>
          <div className={styles.headerTitleWrap}>
            <ShoppingBag size={20} className={styles.bagIcon} />
            <h3 className={styles.drawerTitle}>
              {t('cart.title')} <span className={styles.itemCountBadge}>({itemCount})</span>
            </h3>
          </div>
          <button
            className={styles.closeBtn}
            onClick={closeCartDrawer}
            aria-label="Close cart drawer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className={styles.shippingBarContainer}>
          {subtotal >= 1999 ? (
            <span className={styles.shippingQualified}>
              🎉 You have qualified for <strong>FREE Pan-India Shipping!</strong>
            </span>
          ) : (
            <span className={styles.shippingNotice}>
              Add <strong>₹{1999 - subtotal}</strong> more to get <strong>FREE Shipping!</strong>
            </span>
          )}
          <div className={styles.progressBarTrack}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${Math.min(100, (subtotal / 1999) * 100)}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className={styles.itemsList}>
          {items.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIconWrap}>
                <ShoppingBag size={48} />
              </div>
              <h4 className={styles.emptyTitle}>{t('cart.empty')}</h4>
              <p className={styles.emptyDesc}>{t('cart.emptySubtitle')}</p>
              <button
                className="btn btn-primary"
                onClick={closeCartDrawer}
                style={{ marginTop: '16px' }}
              >
                {t('cart.continueShopping')}
              </button>
            </div>
          ) : (
            items.map((item) => {
              const title = locale === 'hi' ? item.title_hi : item.title_en;
              return (
                <div key={item.productId} className={styles.cartItem}>
                  <div className={styles.itemImageWrapper}>
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        alt={title}
                        width={74}
                        height={74}
                        className={styles.itemImage}
                      />
                    ) : (
                      <div className={styles.imagePlaceholder} />
                    )}
                  </div>

                  <div className={styles.itemDetails}>
                    <h4 className={styles.itemTitle}>{title}</h4>
                    <span className={styles.itemPrice}>₹{item.priceInInr}</span>

                    <div className={styles.itemActions}>
                      <div className={styles.stepper}>
                        <button
                          className={styles.stepBtn}
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className={styles.stepValue}>{item.quantity}</span>
                        <button
                          className={styles.stepBtn}
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          disabled={item.quantity >= item.stockQuantity}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.productId)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {item.quantity >= item.stockQuantity && (
                      <span className={styles.stockNotice}>Max stock reached</span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Summary & Checkout CTA */}
        {items.length > 0 && (
          <div className={styles.drawerFooter}>
            <div className={styles.calcRow}>
              <span>{t('cart.subtotal')}</span>
              <span className={styles.amount}>₹{subtotal}</span>
            </div>

            <div className={styles.calcRow}>
              <span>{t('cart.shipping')}</span>
              <span className={styles.amount}>
                {shippingFee === 0 ? (
                  <span className={styles.freeBadge}>{t('cart.shippingFree')}</span>
                ) : (
                  `₹${shippingFee}`
                )}
              </span>
            </div>

            <div className={styles.divider} />

            <div className={styles.totalRow}>
              <span>{t('cart.total')}</span>
              <span className={styles.grandTotal}>₹{grandTotal}</span>
            </div>

            <Link
              href="/checkout"
              className="btn btn-primary"
              onClick={closeCartDrawer}
              style={{ width: '100%', marginTop: '14px' }}
            >
              <span>{t('cart.checkout')}</span>
              <ArrowRight size={18} />
            </Link>

            <p className={styles.guaranteeText}>
              🔒 Secure Checkout | Taxes included | Pan-India Delivery
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
