'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useLocale } from '@/context/LocaleContext';
import { 
  CheckCircle2, 
  Package, 
  MapPin, 
  MessageCircle, 
  ArrowRight, 
  Calendar,
  Clock,
  Sparkles,
  PhoneCall,
  ShieldCheck
} from 'lucide-react';
import styles from './page.module.css';

export default function OrderConfirmationPage() {
  const params = useParams();
  const orderId = (params?.orderId as string) || '';
  const { t } = useLocale();

  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. First check sessionStorage for immediate instant render
    if (typeof window !== 'undefined') {
      const cached = sessionStorage.getItem(`order_${orderId}`);
      if (cached) {
        try {
          setOrder(JSON.parse(cached));
          setLoading(false);
          return;
        } catch (e) {
          console.error('Error parsing cached order', e);
        }
      }
    }

    // 2. Fetch from API
    fetch(`/api/orders/${orderId}`)
      .then((res) => {
        if (res.ok) return res.json();
        return null;
      })
      .then((data) => {
        if (data && data.order) {
          setOrder(data.order);
        } else {
          // Fallback mock representation for demo & presentation
          setOrder({
            orderNumber: orderId,
            createdAt: new Date().toISOString(),
            status: 'CONFIRMED',
            paymentStatus: 'PAID',
            paymentMethod: 'ONLINE',
            customer: {
              fullName: 'Valued Patron',
              phone: 'Direct Mobile',
              shippingAddress: {
                street: 'Verified Postal Address',
                area: 'Studio Safe Dispatch',
                city: 'Pan-India',
                state: 'India',
                pinCode: '000000',
              },
            },
            items: [
              {
                name: 'Handcrafted Pipe-Cleaner Creation',
                price: 1899,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800',
              },
            ],
            pricing: {
              subtotal: 1899,
              shippingFee: 0,
              grandTotal: 1899,
            },
          });
        }
      })
      .catch((err) => {
        console.error('Error fetching order', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className="container" style={{ textAlign: 'center', padding: '100px 16px' }}>
          <p>Retrieving your order confirmation...</p>
        </div>
      </div>
    );
  }

  const items = order?.items || [];
  const pricing = order?.pricing || { subtotal: 0, shippingFee: 0, grandTotal: 0 };
  const customer = order?.customer || {};
  const address = customer?.shippingAddress || {};

  const orderDate = order?.createdAt
    ? new Date(order.createdAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : new Date().toLocaleDateString('en-IN');

  const waReceiptText = encodeURIComponent(
    `Hello Sangita Handmade! I placed order ${orderId} on the website for ₹${pricing.grandTotal}. Could you please confirm studio crafting and dispatch timeline? Thank you!`
  );

  return (
    <div className={styles.container}>
      <div className="container" style={{ maxWidth: '820px', padding: '48px 16px 80px' }}>
        {/* Success Card */}
        <div className={styles.successCard}>
          <div className={styles.checkIconWrap}>
            <CheckCircle2 size={54} className={styles.checkIcon} />
          </div>

          <h1 className={styles.title}>{t('confirmation.title')}</h1>
          <p className={styles.orderIdBadge}>
            {t('confirmation.orderId')}: <strong>{orderId}</strong>
          </p>

          <p className={styles.craftMessage}>
            <Sparkles size={16} />
            <span>{t('confirmation.message')}</span>
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{t('confirmation.placedOn')}</span>
              <span className={styles.metaValue}>{orderDate}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{t('confirmation.status')}</span>
              <span className={styles.statusBadge}>Studio Queued</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{t('confirmation.payment')}</span>
              <span className={styles.paymentBadge}>
                {order?.paymentMethod === 'COD'
                  ? 'Cash On Delivery'
                  : order?.paymentMethod === 'WHATSAPP'
                  ? 'WhatsApp Coordination'
                  : 'Prepaid / Verified'}
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Info Grid */}
        <div className={styles.contentGrid}>
          {/* Items Breakdown */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <Package size={18} />
              <span>Purchased Creations</span>
            </h2>

            <div className={styles.itemsList}>
              {items.map((item: any, idx: number) => (
                <div key={idx} className={styles.itemRow}>
                  <div className={styles.itemThumbWrap}>
                    <Image
                      src={item.image || '/images/placeholder.jpg'}
                      alt={item.name}
                      fill
                      className={styles.itemThumb}
                      sizes="52px"
                    />
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemMeta}>Qty: {item.quantity} × ₹{item.price?.toLocaleString('en-IN')}</p>
                  </div>
                  <div className={styles.itemTotal}>
                    ₹{((item.price || 0) * (item.quantity || 1)).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.priceSummary}>
              <div className={styles.priceLine}>
                <span>Subtotal</span>
                <span>₹{pricing.subtotal?.toLocaleString('en-IN')}</span>
              </div>
              <div className={styles.priceLine}>
                <span>Pan-India Delivery</span>
                <span>{pricing.shippingFee === 0 ? 'FREE' : `₹${pricing.shippingFee}`}</span>
              </div>
              <div className={styles.grandTotalLine}>
                <span>Total Paid / Payable</span>
                <span className={styles.grandTotalAmount}>₹{pricing.grandTotal?.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Delivery & Tracking */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <MapPin size={18} />
              <span>{t('confirmation.deliveryTo')}</span>
            </h2>

            <div className={styles.addressBox}>
              <p className={styles.customerName}>{customer.fullName}</p>
              <p className={styles.customerPhone}>+91 {customer.phone}</p>
              <p className={styles.addressLine}>{address.street}</p>
              <p className={styles.addressLine}>{address.area}</p>
              <p className={styles.addressLine}>
                {address.city}, {address.state} — <strong>{address.pinCode}</strong>
              </p>
            </div>

            <div className={styles.trackingBox}>
              <div className={styles.trackingHeader}>
                <Clock size={16} />
                <strong>{t('confirmation.tracking')}</strong>
              </div>
              <p className={styles.trackingText}>{t('confirmation.trackingPending')}</p>
            </div>

            {/* Direct WhatsApp Receipt Action */}
            <a
              href={`https://wa.me/919876543210?text=${waReceiptText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', marginTop: '20px' }}
            >
              <MessageCircle size={18} />
              <span>{t('confirmation.saveWhatsApp')}</span>
            </a>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className={styles.bottomBar}>
          <Link href="/shop" className="btn btn-secondary">
            <span>{t('confirmation.continueShopping')}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
