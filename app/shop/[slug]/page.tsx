'use client';

import React, { useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { useCart } from '@/context/CartContext';
import { INITIAL_PRODUCTS } from '@/lib/mockData';
import {
  ShoppingBag,
  Zap,
  MessageCircle,
  Truck,
  Heart,
  ChevronRight,
  Plus,
  Minus,
  Sparkles,
  ShieldCheck,
  Package
} from 'lucide-react';
import styles from './page.module.css';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { locale, t } = useLocale();
  const { addItem } = useCart();
  const router = useRouter();

  const product = INITIAL_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'materials' | 'care' | 'pkg'>('desc');

  const title = locale === 'hi' ? product.title_hi : product.title_en;
  const description = locale === 'hi' ? product.description_hi : product.description_en;
  const materials = locale === 'hi' ? (product.materials_hi || product.materials_en) : product.materials_en;
  const dimensions = locale === 'hi' ? (product.dimensions_hi || product.dimensions_en) : product.dimensions_en;
  const careGuide = locale === 'hi' ? (product.careGuide_hi || product.careGuide_en) : product.careGuide_en;

  const currentImage = product.images[selectedImageIndex] || product.images[0];
  const isSoldOut = product.stockQuantity <= 0;
  const isLowStock = product.stockQuantity > 0 && product.stockQuantity <= 3;

  const handleAddToCart = () => {
    if (isSoldOut) return;
    addItem(product, quantity);
  };

  const handleBuyNow = () => {
    if (isSoldOut) return;
    addItem(product, quantity);
    router.push('/checkout');
  };

  const waMessage = encodeURIComponent(
    `Hello Sangita Handmade! I have a question about ${product.title_en} (SKU: ${product.sku}, Price: ₹${product.priceInInr}): https://sangitahandmade.com/shop/${product.slug}`
  );

  return (
    <div className={styles.pdpContainer}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">{t('nav.home')}</Link>
          <ChevronRight size={14} className={styles.bcArrow} />
          <Link href="/shop">{t('nav.shop')}</Link>
          <ChevronRight size={14} className={styles.bcArrow} />
          <Link href={`/shop?category=${product.categorySlug}`}>{product.categoryName_en || product.categorySlug}</Link>
          <ChevronRight size={14} className={styles.bcArrow} />
          <span className={styles.bcCurrent}>{title}</span>
        </nav>

        {/* Main Product Layout */}
        <div className={styles.pdpGrid}>
          {/* Left: Gallery Viewer */}
          <div className={styles.galleryArea}>
            <div className={styles.mainViewer}>
              {currentImage?.url ? (
                <Image
                  src={currentImage.url}
                  alt={currentImage.alt_en || title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.mainImg}
                />
              ) : (
                <div className={styles.placeholderImg} />
              )}
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className={styles.thumbStrip}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`${styles.thumbBtn} ${idx === selectedImageIndex ? styles.thumbActive : ''}`}
                    onClick={() => setSelectedImageIndex(idx)}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <Image
                      src={img.url}
                      alt={img.alt_en || title}
                      width={80}
                      height={80}
                      className={styles.thumbImg}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Purchase Actions */}
          <div className={styles.detailsArea}>
            <div className={styles.categoryPillRow}>
              <span className={styles.categoryPill}>{product.categoryName_en || product.categorySlug}</span>
              <span className={styles.skuText}>SKU: {product.sku}</span>
            </div>

            <h1 className={styles.productTitle}>{title}</h1>

            {/* Price Box */}
            <div className={styles.priceContainer}>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>₹{product.priceInInr}</span>
                {product.originalPriceInInr && product.originalPriceInInr > product.priceInInr && (
                  <span className={styles.originalPrice}>₹{product.originalPriceInInr}</span>
                )}
              </div>
              <span className={styles.taxesNotice}>
                {t('product.taxesIncluded')} • {t('product.shippingNote')}
              </span>
            </div>

            {/* Stock Availability Pill */}
            <div className={styles.stockStatusBox}>
              {isSoldOut ? (
                <span className="badge badge-sold-out">{t('product.soldOut')}</span>
              ) : isLowStock ? (
                <span className="badge badge-low-stock">
                  {t('product.lowStock')} (Only {product.stockQuantity} ready in studio)
                </span>
              ) : (
                <span className="badge badge-in-stock">{t('product.inStock')}</span>
              )}
            </div>

            {/* Quantity Stepper & Add to Cart */}
            {!isSoldOut ? (
              <div className={styles.purchaseControls}>
                <div className={styles.quantityRow}>
                  <span className={styles.qtyLabel}>Quantity:</span>
                  <div className={styles.stepper}>
                    <button
                      className={styles.stepperBtn}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className={styles.stepperValue}>{quantity}</span>
                    <button
                      className={styles.stepperBtn}
                      onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                      disabled={quantity >= product.stockQuantity}
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className={styles.actionButtons}>
                  <button className="btn btn-primary" onClick={handleAddToCart} style={{ flex: 1 }}>
                    <ShoppingBag size={18} />
                    <span>{t('product.addToCart')}</span>
                  </button>

                  <button className="btn btn-gold" onClick={handleBuyNow} style={{ flex: 1 }}>
                    <Zap size={18} />
                    <span>{t('product.buyNow')}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.soldOutBox}>
                <p>This handcrafted piece is currently sold out.</p>
                <a
                  href={`https://wa.me/919876543210?text=Hello%20Sangita%20Handmade!%20When%20will%20${product.title_en}%20be%20restocked?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  Inquire on WhatsApp for Restock
                </a>
              </div>
            )}

            {/* Direct WhatsApp Product Inquiry */}
            <a
              href={`https://wa.me/919876543210?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', marginTop: '12px' }}
            >
              <MessageCircle size={18} />
              <span>{t('product.askWhatsApp')}</span>
            </a>

            {/* Delivery Estimation Box */}
            <div className={styles.deliveryBox}>
              <Truck size={20} className={styles.deliveryIcon} />
              <div>
                <h4 className={styles.deliveryTitle}>Pan-India Delivery</h4>
                <p className={styles.deliveryText}>{t('product.deliveryEstimate')}</p>
              </div>
            </div>

            {/* Accordion / Tabbed Details */}
            <div className={styles.tabsContainer}>
              <div className={styles.tabHeaders}>
                <button
                  className={`${styles.tabHeaderBtn} ${activeTab === 'desc' ? styles.tabHeaderActive : ''}`}
                  onClick={() => setActiveTab('desc')}
                >
                  Description
                </button>
                <button
                  className={`${styles.tabHeaderBtn} ${activeTab === 'materials' ? styles.tabHeaderActive : ''}`}
                  onClick={() => setActiveTab('materials')}
                >
                  Materials
                </button>
                <button
                  className={`${styles.tabHeaderBtn} ${activeTab === 'care' ? styles.tabHeaderActive : ''}`}
                  onClick={() => setActiveTab('care')}
                >
                  Care Guide
                </button>
                <button
                  className={`${styles.tabHeaderBtn} ${activeTab === 'pkg' ? styles.tabHeaderActive : ''}`}
                  onClick={() => setActiveTab('pkg')}
                >
                  Packaging
                </button>
              </div>

              <div className={styles.tabBody}>
                {activeTab === 'desc' && (
                  <div className={styles.tabContent}>
                    <p>{description}</p>
                    <div className={styles.tabHighlightRow}>
                      <Sparkles size={16} className={styles.tabIcon} />
                      <span>Every flower is bent, twisted, and shaped by hand. Slight natural variations make each piece an authentic original.</span>
                    </div>
                  </div>
                )}

                {activeTab === 'materials' && (
                  <div className={styles.tabContent}>
                    <p><strong>Craft Materials:</strong> {materials || 'High-density velvet chenille wire, floral wire core, floral stem tape.'}</p>
                    {dimensions && <p style={{ marginTop: '8px' }}><strong>Dimensions:</strong> {dimensions}</p>}
                  </div>
                )}

                {activeTab === 'care' && (
                  <div className={styles.tabContent}>
                    <p>{careGuide || 'Never requires water or sunlight. To clean, gently dust with a soft, clean dry cosmetic brush or use a hair dryer on the lowest cool setting.'}</p>
                  </div>
                )}

                {activeTab === 'pkg' && (
                  <div className={styles.tabContent}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Package size={18} color="var(--color-burgundy)" />
                      <strong>Bespoke Boutique Gift Box:</strong>
                    </div>
                    <p>Carefully nested in archival tissue paper, secured inside an impact-resistant shipping box, and tied with a gold ribbon. Perfect for direct gifting to loved ones.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Genuine Customer Reviews Section */}
        <div style={{ marginTop: '48px', background: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '32px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-burgundy)', marginBottom: '4px' }}>
                Customer Reviews
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Authentic handcrafted feedback from patrons across India.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px' }}>
            {/* Reviews List */}
            <div>
              <div style={{ background: '#FFFDF9', border: '1px dashed var(--color-gold)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
                <p style={{ color: 'var(--color-charcoal)', fontSize: '0.9375rem', marginBottom: '8px' }}>
                  <strong>First to cherish this creation?</strong>
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', margin: 0 }}>
                  Every piece is hand-twisted with patience. Share your thoughts below once your package arrives!
                </p>
              </div>
            </div>

            {/* Leave a Review Form */}
            <div style={{ background: '#FAFAF7', borderRadius: 'var(--radius-md)', padding: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-burgundy)', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                Write a Review
              </h3>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formEl = e.currentTarget;
                  const name = (formEl.elements.namedItem('reviewerName') as HTMLInputElement).value;
                  const rating = (formEl.elements.namedItem('reviewerRating') as HTMLSelectElement).value;
                  const comment = (formEl.elements.namedItem('reviewerComment') as HTMLTextAreaElement).value;

                  if (!name || !comment) return;

                  try {
                    const res = await fetch('/api/reviews', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        productSlug: params.slug,
                        customerName: name,
                        rating: Number(rating),
                        comment,
                      }),
                    });

                    if (res.ok) {
                      alert('Thank you! Your review has been submitted for studio moderation.');
                      formEl.reset();
                    }
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label className="form-label" style={{ fontSize: '0.8125rem' }}>Your Name *</label>
                  <input type="text" name="reviewerName" required placeholder="e.g. Swati Rao" className="form-control" style={{ fontSize: '0.875rem' }} />
                </div>

                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label className="form-label" style={{ fontSize: '0.8125rem' }}>Rating *</label>
                  <select name="reviewerRating" defaultValue="5" className="form-control" style={{ fontSize: '0.875rem' }}>
                    <option value="5">★★★★★ (5/5 Exceptional Craft)</option>
                    <option value="4">★★★★☆ (4/5 Great Art)</option>
                    <option value="3">★★★☆☆ (3/5 Good)</option>
                    <option value="2">★★☆☆☆ (2/5 Average)</option>
                    <option value="1">★☆☆☆☆ (1/5 Needs Attention)</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label className="form-label" style={{ fontSize: '0.8125rem' }}>Your Thoughts *</label>
                  <textarea name="reviewerComment" required rows={3} placeholder="How was the floral texture, colors, and transit packaging?" className="form-control" style={{ fontSize: '0.875rem', resize: 'vertical' }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '0.875rem', padding: '10px' }}>
                  Submit for Moderation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
