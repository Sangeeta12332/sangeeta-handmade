'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 3) {
      errs.name = 'Please provide your name (minimum 3 characters)';
    }
    if (!form.contact.trim() || form.contact.trim().length < 6) {
      errs.contact = 'Please provide a valid phone number or email address';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Please enter your message (minimum 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
    }, 600);
  };

  return (
    <div className={styles.container}>
      <div className="container" style={{ padding: '48px 16px 80px' }}>
        <div className={styles.header}>
          <span className={styles.badge}>Get in Touch</span>
          <h1 className={styles.title}>Contact Artisan Sangita</h1>
          <p className={styles.subtitle}>
            Have questions about a bouquet, bespoke wedding order, or shipping timeline? We'd love to assist you.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left Column: Direct Info */}
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoHeading}>Studio & Direct Support</h2>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <MessageCircle size={20} className={styles.infoIcon} />
                </div>
                <div>
                  <strong className={styles.itemTitle}>WhatsApp Support (Recommended)</strong>
                  <p className={styles.itemText}>Instant response for customized colors & quick updates.</p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.itemLink}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <Mail size={20} className={styles.infoIcon} />
                </div>
                <div>
                  <strong className={styles.itemTitle}>Email Address</strong>
                  <p className={styles.itemText}>For order queries, invoices, and corporate gifting.</p>
                  <a href="mailto:support@sangitahandmade.com" className={styles.itemLink}>
                    support@sangitahandmade.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <MapPin size={20} className={styles.infoIcon} />
                </div>
                <div>
                  <strong className={styles.itemTitle}>Studio Workshop</strong>
                  <p className={styles.itemText}>
                    Sangita Handmade Studio<br />
                    Indiranagar, Bengaluru, Karnataka 560038, India
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <Clock size={20} className={styles.infoIcon} />
                </div>
                <div>
                  <strong className={styles.itemTitle}>Studio Hours</strong>
                  <p className={styles.itemText}>
                    Monday – Saturday: 10:00 AM – 7:00 PM IST<br />
                    Sunday: Crafting & Studio Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              {isSent ? (
                <div className={styles.sentBox}>
                  <CheckCircle2 size={52} className={styles.sentCheck} />
                  <h3 className={styles.sentTitle}>Message Received with Love!</h3>
                  <p className={styles.sentDesc}>
                    Thank you, <strong>{form.name}</strong>. Artisan Sangita has received your inquiry and will reach out to you within 12 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setForm({ name: '', contact: '', subject: '', message: '' });
                    }}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className={styles.formHeading}>Send an Inquiry</h2>

                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ananya Roy"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`form-control ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone or Email *</label>
                    <input
                      type="text"
                      placeholder="e.g. 9876543210 or ananya@example.com"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className={`form-control ${errors.contact ? 'error' : ''}`}
                    />
                    {errors.contact && <span className="form-error">{errors.contact}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Custom Birthday Bouquet or Order Tracking Inquiry"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you have in mind or mention your Order ID..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`form-control ${errors.message ? 'error' : ''}`}
                      style={{ resize: 'vertical' }}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '12px' }}
                  >
                    <Send size={16} />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
