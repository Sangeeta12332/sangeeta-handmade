'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Package, 
  ShoppingBag, 
  Sparkles, 
  MessageSquare, 
  Settings, 
  LogOut, 
  CheckCircle, 
  Clock, 
  Truck, 
  ExternalLink,
  Plus,
  Save,
  MessageCircle,
  Eye,
  AlertCircle
} from 'lucide-react';
import { MOCK_PRODUCTS, DEFAULT_STORE_SETTINGS } from '@/lib/mockData';
import styles from './page.module.css';

export default function AdminDashboardPage() {
  const router = useRouter();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'inquiries' | 'reviews' | 'settings'>('orders');

  // Data states
  const [orders, setOrders] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>(MOCK_PRODUCTS);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>(DEFAULT_STORE_SETTINGS);

  const [loading, setLoading] = useState(true);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // New Product Modal / Form State
  const [newProduct, setNewProduct] = useState({
    name: '',
    slug: '',
    price: '',
    stock: '10',
    categorySlug: 'bouquets',
    description: '',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
  });

  // Load Admin Data
  useEffect(() => {
    async function loadData() {
      try {
        // Fetch Orders
        const ordRes = await fetch('/api/orders');
        if (ordRes.ok) {
          const ordData = await ordRes.json();
          if (ordData.orders) setOrders(ordData.orders);
        }

        // Fetch Inquiries
        const inqRes = await fetch('/api/custom-inquiry');
        if (inqRes.ok) {
          const inqData = await inqRes.json();
          if (inqData.inquiries) setInquiries(inqData.inquiries);
        }

        // Fetch Reviews (all reviews including pending)
        const revRes = await fetch('/api/reviews?all=true');
        if (revRes.ok) {
          const revData = await revRes.json();
          if (revData.reviews) setReviews(revData.reviews);
        }

        // Fetch Settings
        const setRes = await fetch('/api/admin/settings');
        if (setRes.ok) {
          const setData = await setRes.json();
          if (setData.settings) setSettings(setData.settings);
        }
      } catch (err) {
        console.error('Error fetching admin data:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const showNotification = (msg: string) => {
    setActionSuccess(msg);
    setTimeout(() => setActionSuccess(null), 3500);
  };

  // Update Order Status
  const handleUpdateOrderStatus = async (orderNumber: string, status: string) => {
    try {
      const res = await fetch(`/api/admin/orders/${orderNumber}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderStatus: status }),
      });

      if (res.ok) {
        setOrders((prev) =>
          prev.map((o) => (o.orderNumber === orderNumber ? { ...o, orderStatus: status } : o))
        );
        showNotification(`Order ${orderNumber} updated to ${status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Add Tracking to Order
  const handleAddTracking = async (orderNumber: string, courier: string, trackingNumber: string) => {
    try {
      const res = await fetch(`/api/admin/orders/${orderNumber}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderStatus: 'SHIPPED',
          courier,
          trackingNumber,
          trackingUrl: `https://track.delhivery.com/?id=${trackingNumber}`,
        }),
      });

      if (res.ok) {
        setOrders((prev) =>
          prev.map((o) =>
            o.orderNumber === orderNumber
              ? {
                  ...o,
                  orderStatus: 'SHIPPED',
                  tracking: { courier, trackingNumber },
                }
              : o
          )
        );
        showNotification(`Courier tracking attached to order ${orderNumber}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Create Product
  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const payload = {
      name: newProduct.name,
      slug: newProduct.slug || newProduct.name.toLowerCase().replace(/\s+/g, '-'),
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
      categorySlug: newProduct.categorySlug,
      description: newProduct.description || 'Artisan handcrafted flower creation.',
      images: [newProduct.image],
      isFeatured: newProduct.isFeatured,
    };

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        setProducts((prev) => [data.product, ...prev]);
        showNotification(`Product "${payload.name}" added to catalog.`);
        setNewProduct({
          name: '',
          slug: '',
          price: '',
          stock: '10',
          categorySlug: 'bouquets',
          description: '',
          image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800',
          isFeatured: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Moderate Review
  const handleModerateReview = async (reviewId: string, status: 'APPROVED' | 'REJECTED') => {
    try {
      const res = await fetch('/api/reviews', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reviewId, status }),
      });

      if (res.ok) {
        setReviews((prev) =>
          prev.map((r) => (r._id === reviewId ? { ...r, status } : r))
        );
        showNotification(`Review marked as ${status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Save Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        showNotification('Store settings saved successfully!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const totalRevenue = orders.reduce((acc, o) => acc + (o.pricing?.grandTotal || 0), 0);
  const pendingOrders = orders.filter((o) => o.orderStatus === 'CONFIRMED' || o.orderStatus === 'CRAFTING');

  return (
    <div className={styles.adminContainer}>
      {/* Top Bar */}
      <header className={styles.topHeader}>
        <div className={styles.brandRow}>
          <div className={styles.brandBadge}>
            <Sparkles size={16} />
            <span>Sangita Handmade Studio</span>
          </div>
          <span className={styles.adminRole}>Master Artisan Admin</span>
        </div>

        <div className={styles.headerActions}>
          <Link href="/" target="_blank" className={styles.viewStoreBtn}>
            <Eye size={15} />
            <span>Storefront</span>
          </Link>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <LogOut size={15} />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Floating Action Banner */}
      {actionSuccess && (
        <div className={styles.toastNotice}>
          <CheckCircle size={18} />
          <span>{actionSuccess}</span>
        </div>
      )}

      <div className={styles.dashboardBody}>
        {/* Metric Cards */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Total Orders</span>
            <span className={styles.metricValue}>{orders.length}</span>
            <span className={styles.metricSub}>{pendingOrders.length} crafting in studio</span>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Total Gross Sales</span>
            <span className={styles.metricValue}>₹{totalRevenue.toLocaleString('en-IN')}</span>
            <span className={styles.metricSub}>Across all payment modes</span>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Custom Inquiries</span>
            <span className={styles.metricValue}>{inquiries.length}</span>
            <span className={styles.metricSub}>Bespoke creations requested</span>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Customer Reviews</span>
            <span className={styles.metricValue}>{reviews.length}</span>
            <span className={styles.metricSub}>Moderated genuine feedback</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNav}>
          <button
            onClick={() => setActiveTab('orders')}
            className={`${styles.tabBtn} ${activeTab === 'orders' ? styles.tabBtnActive : ''}`}
          >
            <Package size={17} />
            <span>Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`${styles.tabBtn} ${activeTab === 'products' ? styles.tabBtnActive : ''}`}
          >
            <ShoppingBag size={17} />
            <span>Products & Stock ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`${styles.tabBtn} ${activeTab === 'inquiries' ? styles.tabBtnActive : ''}`}
          >
            <Sparkles size={17} />
            <span>Custom Orders ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`${styles.tabBtn} ${activeTab === 'reviews' ? styles.tabBtnActive : ''}`}
          >
            <MessageSquare size={17} />
            <span>Reviews ({reviews.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`${styles.tabBtn} ${activeTab === 'settings' ? styles.tabBtnActive : ''}`}
          >
            <Settings size={17} />
            <span>Store Settings</span>
          </button>
        </div>

        {/* Tab Content 1: Orders */}
        {activeTab === 'orders' && (
          <div className={styles.tabSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Studio Orders</h2>
              <span className={styles.countBadge}>{orders.length} Records</span>
            </div>

            {orders.length === 0 ? (
              <div className={styles.emptyCard}>No orders placed yet.</div>
            ) : (
              <div className={styles.ordersList}>
                {orders.map((ord) => (
                  <div key={ord.orderNumber} className={styles.orderCard}>
                    <div className={styles.orderCardHead}>
                      <div>
                        <strong className={styles.orderIdText}>{ord.orderNumber}</strong>
                        <span className={styles.orderTime}>
                          {new Date(ord.createdAt || Date.now()).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      <div className={styles.badgesWrap}>
                        <span className={styles.statusBadge}>{ord.orderStatus}</span>
                        <span className={styles.paymentBadge}>{ord.paymentStatus} ({ord.paymentMethod})</span>
                      </div>
                    </div>

                    <div className={styles.orderBodyGrid}>
                      {/* Customer Info */}
                      <div className={styles.orderCustomerCol}>
                        <strong className={styles.colTitle}>Customer & Delivery:</strong>
                        <p className={styles.custName}>{ord.customer?.fullName}</p>
                        <p className={styles.custPhone}>+91 {ord.customer?.phone}</p>
                        <p className={styles.custAddress}>
                          {ord.customer?.shippingAddress?.street}, {ord.customer?.shippingAddress?.area},{' '}
                          {ord.customer?.shippingAddress?.city}, {ord.customer?.shippingAddress?.state} —{' '}
                          <strong>{ord.customer?.shippingAddress?.pinCode}</strong>
                        </p>
                        {ord.customerNotes && (
                          <p className={styles.custNotes}>
                            <strong>Gift / Instructions:</strong> {ord.customerNotes}
                          </p>
                        )}
                      </div>

                      {/* Items */}
                      <div className={styles.orderItemsCol}>
                        <strong className={styles.colTitle}>Purchased Creations:</strong>
                        {ord.items?.map((it: any, idx: number) => (
                          <div key={idx} className={styles.orderItemLine}>
                            <span>{it.quantity} × {it.name}</span>
                            <strong>₹{(it.price * it.quantity).toLocaleString('en-IN')}</strong>
                          </div>
                        ))}
                        <div className={styles.orderTotalLine}>
                          <span>Total Amount:</span>
                          <span className={styles.totalSum}>
                            ₹{ord.pricing?.grandTotal?.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Studio Action Controls */}
                      <div className={styles.orderActionsCol}>
                        <strong className={styles.colTitle}>Studio Status & Fulfillment:</strong>
                        <select
                          value={ord.orderStatus}
                          onChange={(e) => handleUpdateOrderStatus(ord.orderNumber, e.target.value)}
                          className="form-control"
                          style={{ marginBottom: '8px' }}
                        >
                          <option value="CONFIRMED">CONFIRMED (Studio Queued)</option>
                          <option value="CRAFTING">CRAFTING (Wire Twisting & Flora Assembly)</option>
                          <option value="SHIPPED">SHIPPED (Handed to Courier)</option>
                          <option value="DELIVERED">DELIVERED</option>
                          <option value="CANCELLED">CANCELLED</option>
                        </select>

                        {/* Courier Quick Attach */}
                        <div className={styles.trackingActionBox}>
                          <input
                            type="text"
                            placeholder="Courier Name (e.g. Delhivery, Bluedart)"
                            defaultValue={ord.tracking?.courier || ''}
                            id={`courier_${ord.orderNumber}`}
                            className="form-control"
                            style={{ fontSize: '0.8125rem', marginBottom: '6px' }}
                          />
                          <input
                            type="text"
                            placeholder="Tracking AWB Number"
                            defaultValue={ord.tracking?.trackingNumber || ''}
                            id={`tracking_${ord.orderNumber}`}
                            className="form-control"
                            style={{ fontSize: '0.8125rem', marginBottom: '6px' }}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const c = (document.getElementById(`courier_${ord.orderNumber}`) as HTMLInputElement)?.value;
                              const tr = (document.getElementById(`tracking_${ord.orderNumber}`) as HTMLInputElement)?.value;
                              if (c && tr) handleAddTracking(ord.orderNumber, c, tr);
                            }}
                            className="btn btn-secondary"
                            style={{ width: '100%', fontSize: '0.8125rem', padding: '6px' }}
                          >
                            <Truck size={14} />
                            <span>Save Tracking & Mark Shipped</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab Content 2: Products */}
        {activeTab === 'products' && (
          <div className={styles.tabSection}>
            <div className={styles.productsLayout}>
              {/* Left Column: Product List */}
              <div className={styles.productsListCol}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>Handcrafted Catalog</h2>
                  <span className={styles.countBadge}>{products.length} Products</span>
                </div>

                <div className={styles.productsGrid}>
                  {products.map((p) => (
                    <div key={p.id || p._id} className={styles.productAdminCard}>
                      <div className={styles.pThumbWrap}>
                        <Image
                          src={(p.images && p.images[0]) || '/images/placeholder.jpg'}
                          alt={p.name}
                          fill
                          className={styles.pThumb}
                          sizes="72px"
                        />
                      </div>
                      <div className={styles.pInfo}>
                        <strong className={styles.pName}>{p.name}</strong>
                        <span className={styles.pCategory}>{p.categorySlug}</span>
                        <div className={styles.pMetaRow}>
                          <span className={styles.pPrice}>₹{p.price.toLocaleString('en-IN')}</span>
                          <span className={styles.pStock}>Stock: {p.stock} units</span>
                          {p.isFeatured && <span className={styles.pFeaturedBadge}>Featured</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Add Product */}
              <div className={styles.addProductCol}>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>
                    <Plus size={18} />
                    <span>Add New Handcrafted Item</span>
                  </h3>

                  <form onSubmit={handleCreateProduct}>
                    <div className="form-group">
                      <label className="form-label">Product Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Lavender Dream Keepsake Bouquet"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Category *</label>
                      <select
                        value={newProduct.categorySlug}
                        onChange={(e) => setNewProduct({ ...newProduct, categorySlug: e.target.value })}
                        className="form-control"
                      >
                        <option value="bouquets">Everlasting Bouquets</option>
                        <option value="flowers">Single Stems & Bunches</option>
                        <option value="gifts">Personalized Gifts</option>
                        <option value="decor">Home & Tabletop Decor</option>
                      </select>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div className="form-group">
                        <label className="form-label">Price (INR ₹) *</label>
                        <input
                          type="number"
                          placeholder="1899"
                          value={newProduct.price}
                          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Initial Stock *</label>
                        <input
                          type="number"
                          placeholder="10"
                          value={newProduct.stock}
                          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Image URL</label>
                      <input
                        type="url"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Description</label>
                      <textarea
                        rows={3}
                        placeholder="Artisan description of materials, colors, and floral composition..."
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        className="form-control"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                      <Plus size={16} />
                      <span>Publish to Storefront</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Custom Inquiries */}
        {activeTab === 'inquiries' && (
          <div className={styles.tabSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Custom Order Inquiries</h2>
              <span className={styles.countBadge}>{inquiries.length} Inquiries</span>
            </div>

            {inquiries.length === 0 ? (
              <div className={styles.emptyCard}>No custom inquiries received yet.</div>
            ) : (
              <div className={styles.inquiriesGrid}>
                {inquiries.map((inq) => {
                  const waReplyText = encodeURIComponent(
                    `Hello ${inq.customerName}! This is artisan Sangita regarding your custom inquiry ${inq.inquiryNumber} for a ${inq.creationType}. I would love to share color swatches and finalize your design!`
                  );

                  return (
                    <div key={inq.inquiryNumber} className={styles.inquiryCard}>
                      <div className={styles.inquiryHead}>
                        <div>
                          <strong className={styles.inquiryId}>{inq.inquiryNumber}</strong>
                          <span className={styles.inquiryType}>{inq.creationType}</span>
                        </div>
                        <span className={styles.statusBadge}>{inq.status}</span>
                      </div>

                      <div className={styles.inquiryBody}>
                        <p><strong>Customer:</strong> {inq.customerName} (+91 {inq.phone})</p>
                        <p><strong>Occasion:</strong> {inq.occasion || 'General Gifting'}</p>
                        <p><strong>Colors / Flowers:</strong> {inq.colors}</p>
                        <p><strong>Budget:</strong> {inq.budget || 'Not specified'}</p>
                        <p><strong>Target Delivery:</strong> {inq.requiredDate}</p>
                        {inq.notes && <p><strong>Notes:</strong> {inq.notes}</p>}
                      </div>

                      <div className={styles.inquiryActions}>
                        <a
                          href={`https://wa.me/91${inq.phone}?text=${waReplyText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp"
                          style={{ width: '100%', fontSize: '0.875rem' }}
                        >
                          <MessageCircle size={16} />
                          <span>Reply to Customer on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab Content 4: Reviews */}
        {activeTab === 'reviews' && (
          <div className={styles.tabSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Genuine Customer Reviews Moderation</h2>
              <span className={styles.countBadge}>{reviews.length} Reviews</span>
            </div>

            {reviews.length === 0 ? (
              <div className={styles.emptyCard}>No customer reviews submitted yet.</div>
            ) : (
              <div className={styles.reviewsList}>
                {reviews.map((rev) => (
                  <div key={rev._id} className={styles.reviewCard}>
                    <div className={styles.reviewHead}>
                      <div>
                        <strong>{rev.customerName}</strong>
                        <span className={styles.reviewProduct}>On product: {rev.productSlug}</span>
                      </div>
                      <div className={styles.reviewStars}>
                        {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                        <span className={`${styles.statusBadge} ${rev.status === 'APPROVED' ? styles.statusApproved : ''}`}>
                          {rev.status}
                        </span>
                      </div>
                    </div>

                    <p className={styles.reviewText}>"{rev.comment}"</p>

                    <div className={styles.reviewActions}>
                      {rev.status !== 'APPROVED' && (
                        <button
                          onClick={() => handleModerateReview(rev._id, 'APPROVED')}
                          className="btn btn-primary"
                          style={{ fontSize: '0.8125rem', padding: '6px 14px' }}
                        >
                          <CheckCircle size={14} />
                          <span>Approve & Publish</span>
                        </button>
                      )}
                      {rev.status !== 'REJECTED' && (
                        <button
                          onClick={() => handleModerateReview(rev._id, 'REJECTED')}
                          className="btn btn-secondary"
                          style={{ fontSize: '0.8125rem', padding: '6px 14px' }}
                        >
                          <span>Reject / Hide</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab Content 5: Store Settings */}
        {activeTab === 'settings' && (
          <div className={styles.tabSection} style={{ maxWidth: '680px' }}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Settings size={18} />
                <span>Storefront & Studio Settings</span>
              </h2>

              <form onSubmit={handleSaveSettings}>
                <div className="form-group">
                  <label className="form-label">Announcement Banner Text</label>
                  <input
                    type="text"
                    value={settings.announcement || ''}
                    onChange={(e) => setSettings({ ...settings, announcement: e.target.value })}
                    className="form-control"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">WhatsApp Number (e.g. 919876543210)</label>
                    <input
                      type="text"
                      value={settings.whatsapp || ''}
                      onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Support Email</label>
                    <input
                      type="email"
                      value={settings.email || ''}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      className="form-control"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">Flat Shipping Fee (INR ₹)</label>
                    <input
                      type="number"
                      value={settings.shippingFee || 99}
                      onChange={(e) => setSettings({ ...settings, shippingFee: Number(e.target.value) })}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Free Shipping Threshold (INR ₹)</label>
                    <input
                      type="number"
                      value={settings.freeShippingThreshold || 1999}
                      onChange={(e) => setSettings({ ...settings, freeShippingThreshold: Number(e.target.value) })}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Studio Postal Address</label>
                  <textarea
                    rows={2}
                    value={settings.address || ''}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                  <Save size={16} />
                  <span>Save All Settings</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
