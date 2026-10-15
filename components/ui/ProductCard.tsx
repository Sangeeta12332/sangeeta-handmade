'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useLocale } from '@/context/LocaleContext';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Check } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { locale, t } = useLocale();
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = React.useState(false);

  const title = locale === 'hi' ? product.title_hi : product.title_en;
  const categoryName = locale === 'hi' ? (product.categoryName_hi || product.categorySlug) : (product.categoryName_en || product.categorySlug);
  const mainImage = product.images.find((img) => img.isMain) || product.images[0];
  const altText = locale === 'hi' ? (mainImage?.alt_hi || title) : (mainImage?.alt_en || title);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.stockQuantity <= 0) return;

    addItem(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const isLowStock = product.stockQuantity > 0 && product.stockQuantity <= 3;
  const isSoldOut = product.stockQuantity <= 0;

  return (
    <div className={styles.card}>
      <Link href={`/shop/${product.slug}`} className={styles.imageLink}>
        <div className={styles.imageContainer}>
          {mainImage?.url ? (
            <Image
              src={mainImage.url}
              alt={altText}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={styles.productImage}
            />
          ) : (
            <div className={styles.placeholderImage} />
          )}

          {/* Stock Badge Overlay */}
          <div className={styles.badgesOverlay}>
            {isSoldOut ? (
              <span className="badge badge-sold-out">{t('product.soldOut')}</span>
            ) : isLowStock ? (
              <span className="badge badge-low-stock">
                {t('product.lowStock')} ({product.stockQuantity})
              </span>
            ) : (
              <span className="badge badge-in-stock">{t('product.inStock')}</span>
            )}

            {product.isFeatured && (
              <span className="badge badge-gold">Artisan Choice</span>
            )}
          </div>
        </div>
      </Link>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <div className={styles.categoryRow}>
          <span className={styles.categoryPill}>{categoryName}</span>
          <span className={styles.skuTag}>{product.sku}</span>
        </div>

        <Link href={`/shop/${product.slug}`} className={styles.titleLink}>
          <h3 className={styles.title}>{title}</h3>
        </Link>

        {/* Pricing Row */}
        <div className={styles.priceRow}>
          <div className={styles.priceContainer}>
            <span className={styles.priceCurrent}>₹{product.priceInInr}</span>
            {product.originalPriceInInr && product.originalPriceInInr > product.priceInInr && (
              <span className={styles.priceOriginal}>₹{product.originalPriceInInr}</span>
            )}
          </div>
          <span className={styles.taxNotice}>{t('product.taxesIncluded')}</span>
        </div>

        {/* Action Button */}
        <button
          className={`${styles.addBtn} ${justAdded ? styles.addBtnSuccess : ''}`}
          onClick={handleAddToCart}
          disabled={isSoldOut}
        >
          {justAdded ? (
            <>
              <Check size={16} />
              <span>Added to Bag</span>
            </>
          ) : isSoldOut ? (
            <span>{t('product.soldOut')}</span>
          ) : (
            <>
              <ShoppingBag size={16} />
              <span>{t('product.addToCart')}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
