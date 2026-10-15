'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { Sparkles, MessageCircle, CheckCircle2, Upload, AlertCircle, Calendar } from 'lucide-react';
import styles from './page.module.css';

export default function CustomOrderPage() {
  const { t } = useLocale();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: 'Everlasting Handcrafted Bouquet',
    occasion: '',
    colors: '',
    budget: '₹2,000 – ₹3,500',
    date: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);

  // Minimum date: 7 calendar days from today
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 7);
  const minDateString = minDate.toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 3) {
      newErrors.name = 'Please enter your full name (minimum 3 characters)';
    }
    if (!form.phone || !/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)';
    }
    if (!form.colors.trim() || form.colors.trim().length < 10) {
      newErrors.colors = 'Please provide more details about your preferred colors and flowers (minimum 10 characters)';
    }
    if (!form.date) {
      newErrors.date = 'Please select your required delivery date (at least 7 days in advance)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      const generatedId = `CI-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedInquiryId(generatedId);
      setIsSubmitting(false);
    }, 800);
  };

  if (submittedInquiryId) {
    const waText = encodeURIComponent(
      `Hello Artisan Sangita! I just submitted custom order inquiry ${submittedInquiryId} for a ${form.type} (${form.occasion}). Preferred colors: ${form.colors}. Required by: ${form.date}.`
    );

    return (
      <div className={styles.container}>
        <div className="container" style={{ maxWidth: '680px', padding: '64px 16px' }}>
          <div className={styles.successCard}>
            <div className={styles.successIconWrap}>
              <CheckCircle2 size={48} className={styles.successCheck} />
            </div>
            <h1 className={styles.successTitle}>{t('custom.successTitle')}</h1>
            <p className={styles.successIdBadge}>Inquiry ID: <strong>{submittedInquiryId}</strong></p>
            <p className={styles.successDesc}>{t('custom.successMessage')}</p>

            <div className={styles.summaryBox}>
              <p><strong>Customer:</strong> {form.name} ({form.phone})</p>
              <p><strong>Creation:</strong> {form.type}</p>
              <p><strong>Occasion:</strong> {form.occasion || 'General Gifting'}</p>
              <p><strong>Required Date:</strong> {form.date}</p>
              <p><strong>Budget:</strong> {form.budget}</p>
            </div>

            <div className={styles.successActions}>
              <a
                href={`https://wa.me/919876543210?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageCircle size={18} />
                <span>Chat Directly on WhatsApp Now</span>
              </a>

              <Link href="/shop" className="btn btn-secondary" style={{ width: '100%', marginTop: '10px' }}>
                Browse Ready-Made Creations
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className="container" style={{ maxWidth: '800px', padding: '48px 16px' }}>
        <div className={styles.headerBox}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Bespoke Handmade Art</span>
          </div>
          <h1 className={styles.title}>{t('custom.title')}</h1>
          <p className={styles.subtitle}>{t('custom.subtitle')}</p>
        </div>

        {/* Essential Notice Banner */}
        <div className={styles.noticeBanner}>
          <AlertCircle size={20} className={styles.noticeIcon} />
          <p className={styles.noticeText}>{t('custom.notice')}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.formCard}>
          <div className={styles.formGrid}>
            {/* Name */}
            <div className="form-group">
              <label className="form-label">{t('custom.name')} *</label>
              <input
                type="text"
                placeholder="e.g. Pooja Sharma"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`form-control ${errors.name ? 'error' : ''}`}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            {/* WhatsApp Phone */}
            <div className="form-group">
              <label className="form-label">{t('custom.phone')} *</label>
              <input
                type="tel"
                placeholder="10-digit mobile (e.g. 9876543210)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`form-control ${errors.phone ? 'error' : ''}`}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>
          </div>

          <div className={styles.formGrid}>
            {/* Creation Type */}
            <div className="form-group">
              <label className="form-label">{t('custom.type')} *</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="form-control"
              >
                <option value="Everlasting Handcrafted Bouquet">Everlasting Handcrafted Bouquet</option>
                <option value="Single Stems / Flower Bunch">Single Stems / Flower Bunch</option>
                <option value="Personalized Keepsake Gift Set">Personalized Keepsake Gift Set</option>
                <option value="Decorative Tabletop Pot">Decorative Tabletop Pot</option>
                <option value="Bridal Wedding Keepsake">Bridal Wedding Keepsake</option>
                <option value="Other Custom Pipe-Cleaner Creation">Other Custom Creation</option>
              </select>
            </div>

            {/* Occasion */}
            <div className="form-group">
              <label className="form-label">{t('custom.occasion')}</label>
              <input
                type="text"
                placeholder="e.g. 1st Wedding Anniversary, Birthday, Graduation"
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                className="form-control"
              />
            </div>
          </div>

          {/* Color Palette & Notes */}
          <div className="form-group">
            <label className="form-label">{t('custom.colors')} *</label>
            <textarea
              rows={3}
              placeholder={t('custom.colorsPlaceholder')}
              value={form.colors}
              onChange={(e) => setForm({ ...form, colors: e.target.value })}
              className={`form-control ${errors.colors ? 'error' : ''}`}
              style={{ minHeight: '84px', resize: 'vertical' }}
            />
            {errors.colors && <span className="form-error">{errors.colors}</span>}
          </div>

          <div className={styles.formGrid}>
            {/* Budget Range */}
            <div className="form-group">
              <label className="form-label">{t('custom.budget')}</label>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="form-control"
              >
                <option value="Under ₹1,000">Under ₹1,000</option>
                <option value="₹1,000 – ₹2,000">₹1,000 – ₹2,000</option>
                <option value="₹2,000 – ₹3,500">₹2,000 – ₹3,500</option>
                <option value="Above ₹3,500">Above ₹3,500 (Grand Keepsake)</option>
              </select>
            </div>

            {/* Required Delivery Date */}
            <div className="form-group">
              <label className="form-label">{t('custom.date')} *</label>
              <input
                type="date"
                min={minDateString}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={`form-control ${errors.date ? 'error' : ''}`}
              />
              {errors.date && <span className="form-error">{errors.date}</span>}
            </div>
          </div>

          {/* Reference Photo Upload (Mock placeholder) */}
          <div className="form-group">
            <label className="form-label">{t('custom.photo')}</label>
            <div className={styles.uploadArea}>
              <Upload size={24} className={styles.uploadIcon} />
              <span className={styles.uploadMainText}>Click or drag a reference image here</span>
              <span className={styles.uploadSubText}>{t('custom.photoNote')}</span>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="form-group">
            <label className="form-label">{t('custom.notes')}</label>
            <textarea
              rows={2}
              placeholder="Any special wrapping preferences, card message, or vase sizing notes..."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="form-control"
              style={{ minHeight: '64px', resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{ width: '100%', marginTop: '16px' }}
          >
            {isSubmitting ? t('custom.submitting') : t('custom.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
