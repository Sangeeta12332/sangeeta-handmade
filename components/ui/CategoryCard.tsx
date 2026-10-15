'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types';
import { useLocale } from '@/context/LocaleContext';
import { ArrowUpRight } from 'lucide-react';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { locale } = useLocale();

  const name = locale === 'hi' ? category.name_hi : category.name_en;
  const desc = locale === 'hi' ? category.description_hi : category.description_en;

  const targetHref = category.slug === 'custom-orders' ? '/custom-order' : `/shop?category=${category.slug}`;

  return (
    <Link href={targetHref} className={styles.card}>
      <div className={styles.imageContainer}>
        {category.imageUrl ? (
          <Image
            src={category.imageUrl}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder} />
        )}
        <div className={styles.gradientOverlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.textWrap}>
          <h3 className={styles.name}>{name}</h3>
          {desc && <p className={styles.description}>{desc}</p>}
        </div>

        <div className={styles.actionCircle}>
          <ArrowUpRight size={18} />
        </div>
      </div>
    </Link>
  );
};
