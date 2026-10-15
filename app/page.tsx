'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/context/LocaleContext';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS } from '@/lib/mockData';
import { ProductCard } from '@/components/ui/ProductCard';
import { CategoryCard } from '@/components/ui/CategoryCard';
import {
  Sparkles,
  ArrowRight,
  Heart,
  ShieldCheck,
  Truck,
  MessageCircle,
  Instagram,
  CheckCircle2,
  Calendar,
  Palette,
  PackageCheck
} from 'lucide-react';
import styles from './page.module.css';

export default function HomePage() {
  const { t } = useLocale();

  const featuredProducts = INITIAL_PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className={styles.homeContainer}>
      {/* 1. Full-Screen Hero Showcase */}
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          {/* Left Side: Brand Identity, Heading, Description, and Action Buttons */}
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <Sparkles size={14} className={styles.goldSparkle} />
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
            <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>

            {/* Primary & Secondary Call to Actions */}
            <div className={styles.heroCtaGroup}>
              <Link
                href="/shop"
                className={`btn ${styles.heroShopBtn}`}
                id="hero-shop-now-btn"
                aria-label="Shop Now - Browse our handcrafted bouquets"
              >
                <span>Shop Now</span>
                <ArrowRight size={18} className={styles.heroShopBtnIcon} aria-hidden="true" />
              </Link>
              <Link href="/custom-order" className="btn btn-gold">
                <span>{t('hero.ctaCustom')}</span>
              </Link>
              <a href="#categories" className="btn btn-secondary">
                <span>Explore Collections</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className={styles.heroTrustStrip}>
              <div className={styles.heroTrustItem}>
                <Heart size={16} className={styles.heroTrustIcon} />
                <span>{t('hero.trustTag1')}</span>
              </div>
              <div className={styles.heroTrustItem}>
                <Truck size={16} className={styles.heroTrustIcon} />
                <span>{t('hero.trustTag2')}</span>
              </div>
              <div className={styles.heroTrustItem}>
                <ShieldCheck size={16} className={styles.heroTrustIcon} />
                <span>{t('hero.trustTag3')}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Large Prominent Bouquet Showcase */}
          <div className={styles.heroMediaWrapper}>
            <div className={styles.heroFrame}>
              <Image
                src="/images/sangita-hero.png"
                alt="Sangita Handmade signature everlasting sunflower bouquet at sunset"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curated Categories */}
      <section className={styles.sectionCategories} id="categories">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitleBadge}>{t('categories.subtitle')}</span>
            <h2 className={styles.sectionTitle}>{t('categories.title')}</h2>
          </div>

          <div className={styles.categoryGrid}>
            {INITIAL_CATEGORIES.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Creations */}
      <section className={styles.sectionFeatured}>
        <div className="container">
          <div className={styles.sectionHeaderFlex}>
            <div>
              <span className={styles.sectionSubtitleBadge}>{t('featured.subtitle')}</span>
              <h2 className={styles.sectionTitle}>{t('featured.title')}</h2>
            </div>
            <Link href="/shop" className={styles.viewAllLink}>
              <span>{t('featured.viewAll')}</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Craftsmanship Story */}
      <section className={styles.sectionStory}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyMedia}>
              <div className={styles.storyImageContainer}>
                <Image
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000&auto=format&fit=crop"
                  alt="Artisan sculpting handmade pipe-cleaner petals"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.storyImage}
                />
              </div>
            </div>

            <div className={styles.storyContent}>
              <span className={styles.storyBadge}>{t('story.badge')}</span>
              <h2 className={styles.storyTitle}>{t('story.title')}</h2>
              <p className={styles.storyP}>{t('story.p1')}</p>
              <p className={styles.storyP}>{t('story.p2')}</p>

              <div className={styles.storyFeatures}>
                <div className={styles.storyFeatureItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>{t('story.bullet1')}</span>
                </div>
                <div className={styles.storyFeatureItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>{t('story.bullet2')}</span>
                </div>
                <div className={styles.storyFeatureItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>{t('story.bullet3')}</span>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <Link href="/custom-order" className="btn btn-primary">
                  <span>{t('customBanner.cta')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Custom Order Invitation Banner */}
      <section className={styles.customBannerSection}>
        <div className="container">
          <div className={styles.customBannerCard}>
            <div className={styles.customBannerContent}>
              <div className={styles.bannerTagRow}>
                <span className={styles.bannerTag}><Palette size={14} /> Bespoke Colors</span>
                <span className={styles.bannerTag}><Calendar size={14} /> Planned Deadlines</span>
                <span className={styles.bannerTag}><PackageCheck size={14} /> Gift Packaged</span>
              </div>
              <h2 className={styles.bannerTitle}>{t('customBanner.title')}</h2>
              <p className={styles.bannerSubtitle}>{t('customBanner.subtitle')}</p>
              <div className={styles.bannerCtaGroup}>
                <Link href="/custom-order" className="btn btn-primary">
                  {t('customBanner.cta')}
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Sangita%20Handmade!%20I%20am%20interested%20in%20a%20custom%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Genuine Customer Reviews Section */}
      <section className={styles.sectionReviews}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitleBadge}>{t('reviews.subtitle')}</span>
            <h2 className={styles.sectionTitle}>{t('reviews.title')}</h2>
          </div>

          {/* Genuine reviews status: shows authentic empty message as per PRD */}
          <div className={styles.reviewsEmptyBox}>
            <Heart size={32} className={styles.reviewsHeartIcon} />
            <p className={styles.reviewsEmptyText}>{t('reviews.emptyMessage')}</p>
            <div style={{ marginTop: '16px' }}>
              <Link href="/contact" className="btn btn-secondary">
                {t('reviews.writeReview')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social & Studio Connect */}
      <section className={styles.sectionSocial}>
        <div className="container">
          <div className={styles.socialBox}>
            <div className={styles.socialHeader}>
              <Instagram size={28} className={styles.instaIcon} />
              <h3 className={styles.socialTitle}>Follow Our Atelier on Instagram</h3>
              <p className={styles.socialDesc}>
                Behind the scenes, new flower reveals, and custom order styling videos.
              </p>
              <a
                href="https://instagram.com/sangitahandmade"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginTop: '12px' }}
              >
                <span>@sangitahandmade</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
