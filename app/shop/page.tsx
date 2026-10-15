'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale } from '@/context/LocaleContext';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS } from '@/lib/mockData';
import { ProductCard } from '@/components/ui/ProductCard';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import styles from './page.module.css';

function ShopContent() {
  const { t } = useLocale();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(3500);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState<boolean>(false);

  // Sync category param if URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  // Multi-facet filtering and sorting
  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }
      // In-stock match
      if (inStockOnly && product.stockQuantity <= 0) {
        return false;
      }
      // Price range match
      if (product.priceInInr > maxPrice) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitleEn = product.title_en.toLowerCase().includes(query);
        const matchTitleHi = product.title_hi.toLowerCase().includes(query);
        const matchDesc = product.description_en.toLowerCase().includes(query);
        if (!matchTitleEn && !matchTitleHi && !matchDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceInInr - b.priceInInr;
      if (sortBy === 'price-high') return b.priceInInr - a.priceInInr;
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      // default: featured
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, maxPrice, inStockOnly, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setMaxPrice(3500);
    setInStockOnly(false);
    setSortBy('featured');
  };

  return (
    <div className={styles.shopContainer}>
      {/* Shop Header */}
      <div className={styles.shopHeader}>
        <div className="container">
          <span className={styles.headerSubtitle}>{t('shop.subtitle')}</span>
          <h1 className={styles.headerTitle}>{t('shop.title')}</h1>

          {/* Quick Category Tabs Bar */}
          <div className={styles.categoryTabs}>
            <button
              className={`${styles.tabBtn} ${selectedCategory === 'all' ? styles.tabBtnActive : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {t('shop.allCategories')}
            </button>
            {INITIAL_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                className={`${styles.tabBtn} ${selectedCategory === cat.slug ? styles.tabBtnActive : ''}`}
                onClick={() => setSelectedCategory(cat.slug)}
              >
                {t(`categories.${cat.slug === 'custom-orders' ? 'custom' : cat.slug}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '64px' }}>
        {/* Controls Bar: Search, Mobile Filter Trigger, Sort */}
        <div className={styles.controlsBar}>
          <div className={styles.searchBox}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search handcrafted flowers, bouquets, gifts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.controlsRight}>
            {/* Mobile Filter Toggle */}
            <button
              className={styles.mobileFilterToggle}
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            >
              <SlidersHorizontal size={16} />
              <span>Filters</span>
            </button>

            {/* Sort Select */}
            <div className={styles.sortWrapper}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="featured">{t('shop.sortFeatured')}</option>
                <option value="price-low">{t('shop.sortPriceLow')}</option>
                <option value="price-high">{t('shop.sortPriceHigh')}</option>
                <option value="newest">{t('shop.sortNewest')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content: Sidebar Filters + Products Grid */}
        <div className={styles.shopLayout}>
          {/* Desktop Left Rail Filters */}
          <aside className={`${styles.filterRail} ${isMobileFiltersOpen ? styles.mobileFiltersActive : ''}`}>
            <div className={styles.filterGroup}>
              <div className={styles.filterTitleRow}>
                <h3 className={styles.filterGroupTitle}>{t('shop.filters')}</h3>
                <button onClick={handleResetFilters} className={styles.resetBtn} title="Reset">
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Price Slider */}
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                <span>Max Price:</span>
                <span className={styles.priceHighlight}>₹{maxPrice}</span>
              </label>
              <input
                type="range"
                min="400"
                max="3500"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.priceRangeLabels}>
                <span>₹400</span>
                <span>₹3,500</span>
              </div>
            </div>

            {/* Stock Availability */}
            <div className={styles.filterGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxText}>{t('shop.inStockOnly')}</span>
              </label>
            </div>

            {/* Close button on mobile */}
            {isMobileFiltersOpen && (
              <button
                className="btn btn-primary"
                onClick={() => setIsMobileFiltersOpen(false)}
                style={{ width: '100%', marginTop: '16px' }}
              >
                Apply Filters
              </button>
            )}
          </aside>

          {/* Product Grid Area */}
          <main className={styles.productsArea}>
            <div className={styles.resultsCountBar}>
              <span>{t('shop.showingResults', { count: filteredProducts.length })}</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className={styles.noResultsBox}>
                <h3 className={styles.noResultsTitle}>{t('shop.noResults')}</h3>
                <p className={styles.noResultsDesc}>
                  Try clearing your search query, increasing your price range, or clearing filters.
                </p>
                <button className="btn btn-primary" onClick={handleResetFilters}>
                  {t('shop.resetFilters')}
                </button>
              </div>
            ) : (
              <div className={styles.productsGrid}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '48px 0' }}>Loading collection...</div>}>
      <ShopContent />
    </Suspense>
  );
}
