# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Project: Sangita Handmade — Direct-to-Consumer (D2C) E-Commerce Platform

---

| **Document Attribute** | **Specification Details** |
| :--- | :--- |
| **Document Title** | Product Requirements Document (PRD) — Sangita Handmade |
| **Document Version** | 1.0.0 (Release-Ready Baseline) |
| **Date** | October 14, 2026 |
| **Status** | Approved for Technical Design / Ready for TRD |
| **Author / Roles** | Senior Product Manager, E-Commerce Solution Architect, Lead Web Developer |
| **Target Launch Window** | Q4 2026 (Phase 1 Baseline Launch) |
| **Document Scope** | Functional, Architectural, Operational, and Experience Specifications for Initial Release |

---

## 1. Executive Summary

**Sangita Handmade** is an artisanal, luxury boutique e-commerce brand operating in India, specializing in meticulously crafted pipe-cleaner flowers, everlasting handcrafted bouquets, personalized gift sets, and home decor items. 

The primary business objective is to transition from informal, manual social-media sales into an elegant, scalable, direct-to-consumer (D2C) web storefront that establishes brand credibility, delivers an effortless shopping experience, supports hybrid checkout (Online Gateway, UPI/QR, Cash on Delivery, and direct WhatsApp ordering), and simplifies order and inventory management through a unified admin control center.

This Product Requirements Document (PRD) outlines the end-to-end specifications for Phase 1 of the web platform. The build prioritizes maximum cost efficiency—utilizing modern serverless architecture and low-cost/free-tier tools—without compromising on luxury aesthetics, customer data protection, transaction safety, and seamless mobile usability.

---

## 2. Business Background & Problem Statement

### 2.1 Business Context
The Indian handmade gifts and floral decor market is experiencing rapid expansion, fueled by increasing consumer demand for sustainable, long-lasting alternatives to natural flowers, bespoke gifting options for birthdays, anniversaries, graduations, and corporate milestones, and aesthetic home accents. Sangita Handmade crafts premium, artisanal pipe-cleaner floral creations that remain pristine indefinitely, offering artistic and sentimental value far exceeding mass-produced plastic or short-lived cut flowers.

### 2.2 Core Problems Solved
1. **Friction in Manual Ordering:** Handling inquiries, stock checks, custom quotation requests, and payment screenshots across informal WhatsApp chats and Instagram Direct Messages is labor-intensive and prone to human error, missed messages, and order mix-ups.
2. **Lack of Centralized Inventory Control:** Without a single source of truth for stock quantities, handmade products risk overselling or showing inaccurate availability during high-demand festive seasons.
3. **Consumer Trust & Brand Image:** Social-commerce-only micro-brands frequently face customer hesitation regarding payment safety, parcel delivery certainty, and brand legitimacy. A dedicated boutique storefront with SSL, verified payment gateways, transparent delivery policies, and genuine customer reviews builds immediate consumer confidence.
4. **Custom Order Complexity:** Custom handmade bouquets require a structured intake mechanism for colors, themes, occasions, and budgets without cluttering standard instant-checkout items.

---

## 3. Product Vision & Success Metrics

### 3.1 Product Vision
To be India's most cherished and trusted digital boutique for handcrafted floral artistry and bespoke keepsake gifts—delivering an enchanting, reliable shopping experience where every creation is celebrated as a work of personal art.

### 3.2 Key Performance Indicators (KPIs) & Target Metrics

| Metric | Target (Phase 1 — First 90 Days Post-Launch) |
| :--- | :--- |
| **Mobile Responsiveness & Usability** | 100% core checkout flow completion rate on mobile screens |
| **Cart-to-Order Conversion Rate** | $\ge 3.5\%$ on direct storefront traffic |
| **Order Processing Time** | Admin fulfillment status updated within 24 hours of payment |
| **Stock Accuracy** | 0% overselling incidents (100% reservation integrity) |
| **Page Load Speed (LCP)** | $\le 2.5$ seconds on standard Indian 4G/5G mobile networks |
| **Custom Order Inquiry Response** | Inquiries reviewed and quoted within 12 business hours |

---

## 4. Target Customers & User Personas

### 4.1 Market Geography & Demographics
- **Geography:** Pan-India (Tier 1 metropolitan hubs, Tier 2 emerging cities, and Tier 3 towns with courier serviceability).
- **Age Demographic:** 18 – 45 years (Gen Z, young professionals, homemakers, event organizers).
- **Language Preferences:** English (primary interface language) and Hindi (first-class bilingual support).
- **Payment Preferences:** UPI (Google Pay, PhonePe, Paytm), Net Banking/Cards, and Cash on Delivery (COD).

### 4.2 Customer Personas

```
+----------------------------------------------------------------------------------------------------+
| PERSONA 1: "Aarav the Thoughtful Gifter"                                                           |
+----------------------------------------------------------------------------------------------------+
| Age: 26 | Location: Bengaluru | Device: Smartphone (iOS/Android)                                   |
| Needs: Needs an everlasting birthday bouquet for his partner that will not wilt during shipping.   |
| Pain Points: Anxious about fragile shipping, wants transparent delivery dates and quick checkout. |
| Behavior: Uses UPI exclusively; browses mobile gallery; values customer reviews and unboxing info. |
+----------------------------------------------------------------------------------------------------+
| PERSONA 2: "Pooja the Festive Home Stylist"                                                        |
+----------------------------------------------------------------------------------------------------+
| Age: 34 | Location: Jaipur | Device: Android Tablet / Mobile                                       |
| Needs: Unique handcrafted floral arrangements for Diwali and anniversary room styling.             |
| Pain Points: Prefers reading in Hindi or English, wants clear pricing, hesitates on upfront card   |
|              details, desires WhatsApp confirmation before dispatch.                               |
| Behavior: Prefers Cash on Delivery or WhatsApp-assisted ordering with photo references.            |
+----------------------------------------------------------------------------------------------------+
| PERSONA 3: "Sangita (Store Owner & Chief Artisan - Admin Persona)"                                 |
+----------------------------------------------------------------------------------------------------+
| Location: Home Studio, India | Device: Laptop & Mobile Phone                                       |
| Needs: Intuitive, zero-clutter portal to add new bouquet designs, change stock numbers, see orders |
|        instantly, print packing slips, paste courier tracking numbers, and manage custom briefs.   |
| Pain Points: Limited technical bandwidth; cannot manage complicated multi-tier e-commerce setups;  |
|              needs transparent revenue reporting without convoluted accounting jargon.             |
+----------------------------------------------------------------------------------------------------+
```

---

## 5. Scope & Feature Prioritization (MoSCoW Matrix)

Every requirement in this document is labeled with a clear priority code:
- **P0 (Must-Have / Essential):** Mandatory for Phase 1 baseline launch.
- **P1 (Should-Have / Important):** Critical operational and user experience polish; to be delivered alongside or immediately following P0.
- **P2 (Nice-to-Have / Deferred):** Post-launch enhancements reserved for future milestones.

### 5.1 In-Scope Features (Phase 1 Baseline)
- High-converting, luxury-styled responsive storefront (Bilingual EN/HI).
- Product catalog with search, category filtering, price range filter, and stock status filter.
- Product detail pages with studio photography galleries, descriptions, and WhatsApp inquiry triggers.
- Frictionless guest checkout (no compulsory registration) collecting essential Pan-India shipping details.
- Multi-channel checkout options: Secure Online Gateway (Cards/NetBanking/Wallets), UPI/QR flow, Cash on Delivery (COD), and direct WhatsApp order coordination.
- Dedicated Custom Order Request intake portal with reference image uploads.
- Secure Admin Dashboard for catalog CRUD, order fulfillment, stock adjustment, genuine review moderation, and sales summaries.
- Pan-India flat shipping charge logic and courier tracking number assignment.
- Genuine customer reviews module (moderated; no auto-publishing of unverified submissions).
- Static legal, compliance, and consumer protection policy pages.

### 5.2 Out-of-Scope (Deferred to Phase 2 & Beyond)
- Multi-currency conversions (Platform is INR / ₹ only).
- Compulsory customer account creation and password logins.
- Complex automated coupon code/discount engines.
- Customer loyalty point/reward schemes.
- Multi-vendor marketplace capabilities.
- Automated third-party courier dispatch booking via carrier APIs (Tracking IDs will be entered manually by admin).
- Automated SMS marketing suites or paid email newsletters.
- Inventory cost-of-goods-sold (COGS) profit/loss balance sheet accounting.

---

## 6. Brand Identity & Design Direction

### 6.1 Brand Positioning
Sangita Handmade is positioned as a **luxurious, warm, boutique artisanal atelier**. The digital aesthetic must evoke the feeling of entering a high-end designer studio where every floral arrangement is crafted with devotion, patience, and artistic mastery.

### 6.2 Curated Brand Color System

```
+-----------------------------------------------------------------------------+
| HEX: #FFF8EF | Warm Cream        | Backgrounds, cards, soft page wrappers   |
+-----------------------------------------------------------------------------+
| HEX: #722F3E | Deep Burgundy     | Primary brand accents, headers, CTA fills|
+-----------------------------------------------------------------------------+
| HEX: #C6A15B | Muted Gold        | Badges, secondary highlights, borders    |
+-----------------------------------------------------------------------------+
| HEX: #1F1B18 | Dark Charcoal     | High-contrast body typography            |
+-----------------------------------------------------------------------------+
| HEX: #F3ECE1 | Muted Cream Alt   | Sub-section fills, input backgrounds     |
+-----------------------------------------------------------------------------+
| HEX: #2E6B44 | Studio Olive      | Success alerts, verified in-stock badges |
+-----------------------------------------------------------------------------+
```

### 6.3 Typography Hierarchy
- **Editorial Display / Headings:** Cormorant Garamond / Playfair Display (Serif) — conveying bespoke craftsmanship and elegance.
- **UI Elements, Navigation & Body:** Montserrat / Outfit / Inter (Sans-Serif) — modern, clean, highly legible at small sizes on budget mobile devices.
- **Indic Script Support (Hindi):** Noto Sans Devanagari or Rozha One paired seamlessly to maintain typographic harmony when toggling languages.

### 6.4 Visual Hierarchy & Aesthetic Standards
- **Authentic Product Imagery:** Clean, soft studio photography on cream/neutral backgrounds combined with lifestyle shots (hand-held, vase placement, gift packaging). No low-resolution, heavily filtered, or stock-photo imagery. AI-generated imagery must never be passed off as authentic products.
- **Micro-Interactions:** Gentle elevation on hover (200ms ease), smooth image zoom on product gallery inspection, non-intrusive drawer cart slide-in, and gold-hued focus outlines for accessible form navigation.
- **Accessibility Benchmark:** Strict adherence to WCAG 2.1 Level AA color contrast ratios (minimum 4.5:1 for body copy against the `#FFF8EF` background).

---

## 7. Functional Requirements (FR)

### 7.1 Header, Navigation & Global Elements

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-HDR-001** | P0 | **Brand Identity Header:** Display the official Sangita Handmade logo, primary navigation links (Shop, Bouquets, Flowers, Custom Orders, About, Contact), and sticky/fixed positioning on desktop and mobile. |
| **FR-HDR-002** | P0 | **Bilingual Language Switcher:** Global toggle (EN \| HI) visible in header across all viewports. Switching toggles all navigation labels, UI strings, checkout labels, and policy pages instantly without page reload or cart loss. |
| **FR-HDR-003** | P0 | **Real-Time Cart Drawer Trigger:** Displays shopping bag icon with a dynamic badge indicating total units currently in cart. Clicking opens an off-canvas drawer showing cart items, subtotal, and checkout CTA. |
| **FR-HDR-004** | P0 | **Global Product Search:** Search input bar supporting debounced live matching against product titles, categories, and descriptions. |
| **FR-HDR-005** | P0 | **Mobile Drawer Navigation:** Accessible hamburger menu for viewports $< 768\text{px}$, containing full categorized links, contact triggers, and language toggle. |

---

### 7.2 Homepage Experience

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-HP-001** | P0 | **Hero Showcase:** High-impact editorial hero banner featuring a signature handmade bouquet photograph, brand tagline ("Timeless Handcrafted Blooms & Bespoke Keepsakes"), and a primary CTA ("Explore Collection" $\rightarrow$ `/shop`) and secondary CTA ("Request Custom Bouquet" $\rightarrow$ `/custom-order`). |
| **FR-HP-002** | P0 | **Curated Category Grid:** Visual card navigation directing users to the 5 initial product categories: (1) Flowers, (2) Bouquets, (3) Custom Orders, (4) Gifts, and (5) Decor. |
| **FR-HP-003** | P0 | **Admin-Featured Products Carousel/Grid:** Showcase up to 8 products manually tagged as `isFeatured: true` by the admin, displaying image, title, price in INR, and quick "Add to Cart" or "View" action. |
| **FR-HP-004** | P0 | **Artisanal Story & Craftsmanship Section:** Editorial narrative detailing the handmade pipe-cleaner flower technique, long-lasting durability, non-wilting beauty, and personal care poured into each bouquet. |
| **FR-HP-005** | P0 | **Genuine Customer Testimonials Section:** Displays approved 5-star testimonials from verified buyers. If zero reviews exist in the system, this section must automatically collapse or display a warm placeholder: *"Handcrafted with love for homes across India. Genuine customer reviews will appear here soon."* (Never display fake reviews or statistics). |
| **FR-HP-006** | P0 | **Social Connection & WhatsApp Widget:** Prominent Instagram feed prompt (`[INSTAGRAM_URL]`) and persistent floating WhatsApp assistance button (`[BUSINESS_WHATSAPP]`) with pre-filled greeting. |
| **FR-HP-007** | P0 | **Compliance Footer:** Comprehensive footer containing copyright notice, quick navigation links, payment badges (UPI, Cards, NetBanking, COD), contact email (`[BUSINESS_EMAIL]`), business address (`[BUSINESS_ADDRESS]`), and mandatory legal policy links. |

---

### 7.3 Shop Catalog, Search & Filtering

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-SHP-001** | P0 | **Category Navigation:** Tabbed or sidebar filter allowing instant browsing of: All, Flowers, Bouquets, Custom Orders, Gifts, and Decor. |
| **FR-SHP-002** | P0 | **Multi-Facet Filtering:** Side panel/drawer filter supporting: (a) Price Range Slider (Min ₹ to Max ₹), (b) Stock Availability ("In Stock Only" checkbox), and (c) Category selector. |
| **FR-SHP-003** | P0 | **Catalog Sorting:** Dropdown sorting options: (1) Featured First, (2) Price: Low to High, (3) Price: High to Low, and (4) Newest Arrivals. |
| **FR-SHP-004** | P0 | **Product Card Specs:** Each card must present: High-res optimized thumbnail, hover alternate lifestyle image (if available), category pill, title, fixed price in INR formatted with ₹ symbol (e.g., ₹1,499), stock status badge, and "Add to Cart" button. |
| **FR-SHP-005** | P0 | **Zero-Results State:** Graceful fallback state when search or filters return no matches, offering a 1-click "Reset All Filters" button and WhatsApp inquiry link. |

---

### 7.4 Product Detail Page (PDP)

```
+----------------------------------------------------------------------------------------------------+
| TYPICAL PDP LAYOUT                                                                                 |
+----------------------------------------------------------------------------------------------------+
| [Home / Bouquets / Lavender Dreams Bouquet]                                                        |
|                                                                                                    |
| +-----------------------------------+  LAVENDER DREAMS PIPE-CLEANER BOUQUET                         |
| |                                   |  Category: Bouquets | In Stock: 5 available                  |
| |        MAIN STUDIO PHOTO          |  ----------------------------------------------------------- |
| |                                   |  ₹ 1,899 (Inclusive of all taxes)                            |
| +-----------------------------------+  ----------------------------------------------------------- |
| [Thumb 1] [Thumb 2] [Thumb 3]       |  Quantity: [-] [ 1 ] [+]                                     |
|                                     |  [ ADD TO CART ]    [ BUY NOW ]                              |
|                                     |  [ CHAT ON WHATSAPP ABOUT THIS PRODUCT ]                     |
|                                     |  ----------------------------------------------------------- |
|                                     |  Estimated Delivery: 4-7 business days across India          |
|                                     |  Handcrafted with premium pipe-cleaners & floral wire        |
|                                     |  Description & Dimensions tabs...                            |
+----------------------------------------------------------------------------------------------------+
```

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-PDP-001** | P0 | **Interactive Multi-Image Gallery:** Primary high-resolution viewer with thumbnail strip, swipeable carousel on mobile devices, and click-to-zoom modal for close-up craftsmanship inspection. |
| **FR-PDP-002** | P0 | **Pricing & Tax Transparency:** Display fixed price prominently in INR (₹) with the notice *"All taxes included. Flat shipping calculated at checkout."* |
| **FR-PDP-003** | P0 | **Real-Time Stock Status:** Dynamically display inventory indicator: "In Stock", "Only X Left — Order Soon", or "Out of Stock". If stock is zero, disable "Add to Cart" and "Buy Now" buttons and present an "Inquire on WhatsApp for Restock" button. |
| **FR-PDP-004** | P0 | **Quantity Selector:** Stepper input bounded by a minimum of 1 and maximum equal to current available stock count. |
| **FR-PDP-005** | P0 | **Add to Cart & Direct Buy Now Actions:** "Add to Cart" updates cart state and opens slide-over drawer; "Buy Now" adds selected item and immediately redirects customer directly to the Checkout step. |
| **FR-PDP-006** | P0 | **Direct WhatsApp Product Inquiry:** Dedicated button labeled *"Ask About This Item on WhatsApp"*. Clicking opens WhatsApp pre-populated with: *"Hello Sangita Handmade! I have a question about [Product Name] (Code: [Slug/ID], Price: ₹[Price]): [Link to PDP]"*. |
| **FR-PDP-007** | P0 | **Product Story, Dimensions & Care Information:** Tabbed or accordion sections for: (a) Detailed Description & Materials, (b) Approximate Dimensions & Weight, (c) Packaging & Gift Box Specifications, and (d) Cleaning & Care Guide (dusting tips for pipe-cleaner blooms). |
| **FR-PDP-008** | P0 | **Delivery Time Estimator:** Clear informational note explaining that each item is handmade, with typical dispatch in 2–3 business days and courier transit in 3–5 business days depending on customer PIN code. |

---

### 7.5 Shopping Cart & Guest Checkout

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-CRT-001** | P0 | **Session-Persistent Cart:** Cart contents (product ID, quantity, unit price, selected image) preserved across page navigations and browser refreshes using persistent client storage. |
| **FR-CRT-002** | P0 | **Cart Adjustments & Validation:** Real-time quantity increment/decrement, line-item removal, and automatic stock re-validation before proceeding to checkout. |
| **FR-CRT-003** | P0 | **Order Cost Breakdown:** Transparent summary showing: (1) Items Subtotal, (2) Flat Shipping Fee (configurable by admin), and (3) Grand Total in INR (₹). |
| **FR-CHK-001** | P0 | **Frictionless Guest Checkout:** No forced user registration or password setup required. Checkout flow is 100% accessible to guest shoppers. |
| **FR-CHK-002** | P0 | **Validated Customer Shipping Fields:** Form fields with strict client-side and server-side validation: <br>• **Full Name:** Required (min 3 chars).<br>• **Mobile Number:** Required (valid 10-digit Indian phone number: `^[6-9]\d{9}$`).<br>• **House / Flat / Building / Street:** Required.<br>• **Locality / Area / Landmark:** Required.<br>• **City / Town:** Required.<br>• **State / Union Territory:** Required (dropdown of all 28 states & 8 UTs).<br>• **PIN Code:** Required (valid 6-digit Indian PIN: `^[1-9][0-9]{5}$`).<br>• **Email Address:** Optional (validated format if provided for order receipts).<br>• **Special Delivery / Gift Instructions:** Optional text area (max 300 characters). |
| **FR-CHK-003** | P0 | **Configurable Flat Shipping Charge:** Transparent shipping calculation applied once per order (default flat fee defined by admin, e.g., ₹99, until final business rate is updated). |
| **FR-CHK-004** | P0 | **Pre-Order Review Step:** Comprehensive pre-payment order verification modal or page showing exact delivery address, itemized products, shipping fee, final payable amount, and clear policy agreement checkbox before payment execution. |

---

### 7.6 Payment Orchestration & Order Confirmation

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-PAY-001** | P0 | **Multiple Payment Methods Selection:** Customer can choose between: <br>1. **Online Payment Gateway** (Credit/Debit Cards, Net Banking, Wallets).<br>2. **Direct UPI / QR Code Payment** (Seamless UPI intent trigger or verified store QR).<br>3. **Cash on Delivery (COD)** (Pay in cash to courier upon physical arrival).<br>4. **Pay & Confirm via WhatsApp** (Assisted order finalization for hesitant shoppers). |
| **FR-PAY-002** | P0 | **Strict Decoupling of Order and Payment Statuses:** An order entity and a payment entity must have distinct, decoupled state machines. (e.g., An order can be `CONFIRMED` while payment is `PENDING` for COD, or `PAID` for gateway transactions). |
| **FR-PAY-003** | P0 | **Server-Side Gateway Verification:** Never trust client-side redirect status. Online transactions must be verified via secure server-side webhook signature validation and payment provider API query before setting payment status to `PAID`. |
| **FR-PAY-004** | P0 | **Unique Order Identifier:** Format: `SH-YYYY-XXXXX` (e.g., `SH-2026-10482`), generated immediately upon successful order creation. |
| **FR-PAY-005** | P0 | **Order Confirmation Page:** Instant confirmation screen displaying: Order ID, status overview, itemized receipt, delivery address, selected payment mode, courier dispatch timeline, and a one-click *"Save Order Receipt on WhatsApp"* button. |
| **FR-PAY-006** | P0 | **Payment Failure & Recovery Flow:** If gateway transaction fails or is cancelled by user, cart items remain preserved, order remains in `PAYMENT_PENDING`, and user is guided back to retry payment or switch to COD / WhatsApp order without re-typing their address. |
| **FR-PAY-007** | P0 | **Zero Sensitive Credential Storage:** No card numbers, CVVs, expiry dates, or UPI PINs shall ever touch or be stored in the Sangita Handmade application database. Gateway tokens and merchant secrets must reside solely in environment variables. |

---

### 7.7 Custom Order Request System

Because bespoke pipe-cleaner floral creations require manual consultation on color palettes, stems, theme, and delivery urgency, custom requests follow a dedicated inquiry-to-order pipeline.

```
+----------------------------------------------------------------------------------------------------+
| CUSTOM ORDER WORKFLOW PIPELINE                                                                     |
+----------------------------------------------------------------------------------------------------+
| [Customer Submits Form]  --> Status: "ENQUIRY_RECEIVED" (No payment collected upfront)            |
|            |                                                                                       |
|            v                                                                                       |
| [Admin Reviews in Dashboard] --> Checks feasibility, material availability & delivery date         |
|            |                                                                                       |
|            v                                                                                       |
| [WhatsApp Consultation]  --> Discusses nuances, shares color swatches, agrees on final price       |
|            |                                                                                       |
|            v                                                                                       |
| [Admin Generates Custom Order] --> Creates invoice / private checkout link / records payment       |
|            |                                                                                       |
|            v                                                                                       |
| [Handmade Crafting Begins] --> Status: "IN_CRAFTING" (Customer notified on WhatsApp)               |
+----------------------------------------------------------------------------------------------------+
```

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-CST-001** | P0 | **Dedicated Custom Order Intake Form:** Accessible via `/custom-order` with structured fields: <br>• Full Customer Name (Required)<br>• Mobile / WhatsApp Number (Required)<br>• Product / Creation Type (Dropdown: Bridal Bouquet, Birthday Bouquet, Anniversary Keepsake, Single Stem Flowers, Decorative Pot, Car Mirror Charm, Other Custom Creation)<br>• Target Occasion (Text input: e.g., Graduation, Wedding, Housewarming)<br>• Preferred Color Palette & Design Notes (Text area: e.g., "Lavender, pastel pink, and ivory baby's breath")<br>• Estimated Budget Range in INR (Dropdown: Under ₹1,000, ₹1,000–₹2,000, ₹2,000–₹3,500, Above ₹3,500)<br>• Required In-Hand Delivery Date (Date picker: minimum 7 calendar days from current date)<br>• Reference Photo Upload (Optional: Accepts JPG/PNG/WEBP up to 5MB)<br>• Additional Notes / Personalization Text (Optional). |
| **FR-CST-002** | P0 | **Enquiry Classification & Disclaimer:** Clear notice on form submission: *"Custom orders are reviewed manually by artisan Sangita. This is an inquiry, not an instant charge. We will contact you via WhatsApp within 12 hours with a design consultation and final quotation."* |
| **FR-CST-003** | P0 | **Admin Custom Request Queue:** Inquiries appear in an isolated "Custom Inquiries" dashboard view with direct WhatsApp one-click action linking to the customer's phone number with request details pre-populated. |

---

### 7.8 Genuine Customer Reviews & Social Proof

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-REV-001** | P0 | **Authentic Review Submission Form:** Accessible on product pages and post-purchase confirmation, capturing: Customer Name, Rating (1 to 5 Stars), Written Review, and Optional Real Photo upload. |
| **FR-REV-002** | P0 | **Mandatory Moderation Workflow:** All submitted reviews enter status `PENDING_APPROVAL`. No review appears publicly on the storefront until the admin explicitly clicks "Approve" in the dashboard. |
| **FR-REV-003** | P0 | **Review Integrity Policy:** Strict prohibition of seeded/fabricated testimonials, fake customer counters, or artificial hype badges. If no approved reviews exist for a product, display: *"Be the first to review this handcrafted creation!"* |

---

### 7.9 Legal, Compliance & Information Pages

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-LEG-001** | P0 | **Privacy Policy Page (`/privacy-policy`):** Explicitly explains how customer names, phone numbers, delivery addresses, and optional emails are stored solely for order fulfillment; states that data is never sold; details payment gateway processing. Contains placeholder `[BUSINESS_EMAIL]`. |
| **FR-LEG-002** | P0 | **Terms & Conditions Page (`/terms`):** Covers intellectual property of artisanal designs, handmade variation disclaimers (each piece is unique), order acceptance, and limitation of liability. |
| **FR-LEG-003** | P0 | **Shipping & Delivery Policy (`/shipping-policy`):** Details Pan-India delivery scope, 2–3 day crafting/dispatch window, 3–7 day courier transit estimates, flat shipping fees, and courier tracking instructions. |
| **FR-LEG-004** | P0 | **Return, Refund & Cancellation Policy (`/cancellation-refunds`):** Clearly details distinct workflows for ready-made vs. custom items; compliant with Indian Consumer Protection (E-Commerce) Rules, 2020. |
| **FR-LEG-005** | P0 | **Contact Us Page (`/contact`):** Includes interactive inquiry form, WhatsApp link (`[BUSINESS_WHATSAPP]`), official email (`[BUSINESS_EMAIL]`), studio operating hours, and mailing address placeholder (`[BUSINESS_ADDRESS]`). |

---

### 7.10 Bilingual Localization Architecture (English & Hindi)

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-LOC-001** | P0 | **Default Language Setting:** English is the default locale (`en`). User's selected language is stored in local storage/cookie so repeat visits respect their preference. |
| **FR-LOC-002** | P0 | **System-Wide String Localization:** All UI buttons, checkout labels, validation errors, navigation items, status pills, and policy headers must have 1-to-1 parity in Hindi (`hi`). |
| **FR-LOC-003** | P1 | **Dual-Language Product Catalog Fields:** Product database schema supports `name_en`, `name_hi`, `description_en`, and `description_hi` to render tailored content based on the active locale. |

---

## 8. Admin Dashboard Requirements

The admin dashboard (`/admin`) is a protected, authenticated interface engineered exclusively for the store owner/artisan (Sangita) to oversee business operations without technical friction.

### 8.1 Authentication & Security (`/admin/login`)
- **FR-ADM-001 (P0):** Secure single-admin authentication using salted and hashed credentials, protected by session cookies (`httpOnly`, `Secure`, `SameSite=Strict`).
- **FR-ADM-002 (P0):** Automated brute-force lockout: Account temporarily throttled after 5 consecutive failed login attempts.
- **FR-ADM-003 (P0):** Middleware-enforced authorization: Any unauthenticated request to `/admin/*` or `/api/admin/*` must immediately be blocked and redirected to the login view with HTTP 401/403.

---

### 8.2 Product & Catalog Management (`/admin/products`)

```
+----------------------------------------------------------------------------------------------------+
| ADMIN PRODUCT MANAGEMENT PANEL                                                                     |
+----------------------------------------------------------------------------------------------------+
| [ + Add New Product ]   Search Products: [__________]   Filter: [All Categories v]                 |
|                                                                                                    |
| Photo    Title               Category    Price    Stock   Featured   Status      Actions           |
| [Img]    Lavender Bouquet    Bouquets    ₹1,899   5       [★ Yes]    [Published] [Edit] [Delete]   |
| [Img]    Pastel Tulip Stem   Flowers     ₹349     12      [☆ No ]    [Published] [Edit] [Delete]   |
| [Img]    Graduation Gift Set Gifts       ₹2,499   0       [☆ No ]    [Draft    ] [Edit] [Delete]   |
+----------------------------------------------------------------------------------------------------+
```

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-ADM-004** | P0 | **Product Creation & Editing:** Form allowing admin to input Title, Slug (auto-generated from title or custom), Category, Fixed Price in INR, Inventory Quantity, Description, Materials, and Dimensions. |
| **FR-ADM-005** | P0 | **Multiple Photo Upload & Reordering:** Supports uploading up to 6 photos per product, setting a primary thumbnail, and re-arranging gallery sequence. Supported formats: JPG, PNG, WEBP. |
| **FR-ADM-006** | P0 | **Visibility & Featured Toggles:** Instant toggles for: (a) `isPublished` (Draft vs. Publicly visible) and (b) `isFeatured` (featured on homepage). |
| **FR-ADM-007** | P0 | **Product Deletion & Archiving:** Safe deletion with confirmation modal. If an existing order references the product, system performs a soft-archive rather than hard-deleting the database record. |
| **FR-ADM-008** | P1 | **Category Management:** Create, rename, or remove product categories dynamically through the admin dashboard. |

---

### 8.3 Order Management & Courier Tracking (`/admin/orders`)

| Requirement ID | Priority | Description & Acceptance Rules |
| :--- | :---: | :--- |
| **FR-ADM-009** | P0 | **Comprehensive Order Registry:** View all orders with filters by: Order Status, Payment Status, Payment Method, Date Range, and Customer Mobile Number. |
| **FR-ADM-010** | P0 | **Detailed Order Inspector:** Displays ordered line-items, photos, quantities, customer shipping address, mobile number, delivery notes, and verified payment method. |
| **FR-ADM-011** | P0 | **Order Status Transition Controls:** Admin can transition orders strictly according to allowed status flow: `PENDING` $\rightarrow$ `CONFIRMED` $\rightarrow$ `PROCESSING` $\rightarrow$ `DISPATCHED` $\rightarrow$ `DELIVERED` (or `CANCELLED` / `REFUNDED`). |
| **FR-ADM-012** | P0 | **Courier Tracking Assignment:** Dedicated fields on order detail: (a) Courier Partner Name (e.g., India Post, Delhivery, DTDC, BlueDart), (b) Tracking AWB / Consignment Number, and (c) Live Tracking URL. Saving sends an automated or 1-click WhatsApp tracking alert. |
| **FR-ADM-013** | P0 | **Internal Admin Notes:** Private notes area on each order for internal studio coordination (e.g., *"Customer requested extra lavender ribbon; craft by Thursday"*), hidden from public order lookups. |

---

### 8.4 Custom Inquiries & Review Moderation (`/admin/custom-orders` & `/admin/reviews`)
- **FR-ADM-014 (P0):** View all custom order inquiries with customer reference images, requested delivery deadlines, and occasion details. Includes a one-click WhatsApp action to initiate consultation.
- **FR-ADM-015 (P0):** Review Moderation Queue: Table of submitted customer reviews with ratings and text. Admin can click "Approve" (makes public) or "Reject" (removes from public queue).

---

### 8.5 Business Analytics & Sales Reporting (`/admin/reports`)
- **FR-ADM-016 (P0):** **Transparent Financial Metrics:** Display Daily, Weekly, and Monthly aggregated statistics:
  - **Gross Order Value:** Total value of all placed orders.
  - **Collected Revenue:** Sum of successfully captured payments (Online + delivered COD).
  - **Pending Payments:** Outstanding balance on uncaptured COD or pending transfers.
  - **Refund Totals:** Total value of processed refunds.
  - *Strict Rule:* Never label Gross Revenue or Collected Payments as "Profit" because material costs, packaging expenses, and courier fees are not tracked in Phase 1.
- **FR-ADM-017 (P0):** **Bestselling Products Summary:** Ranks items by total units sold to help the artisan plan inventory and raw material purchases.
- **FR-ADM-018 (P0):** **Order Status Pipeline Metrics:** Card counters showing orders currently: `Pending Review`, `In Crafting`, `Ready to Dispatch`, and `In Transit`.

---

### 8.6 Global Store Configuration (`/admin/settings`)
- **FR-ADM-019 (P0):** Configure the store-wide flat shipping charge in INR (e.g., ₹99, or ₹0 for promotional periods).
- **FR-ADM-020 (P0):** Update public store operating details: WhatsApp number, support email, studio address, and Instagram profile URL.

---

## 9. Non-Functional Requirements (NFR)

### 9.1 Performance & Responsiveness

| Requirement ID | Specification & Benchmark |
| :--- | :--- |
| **NFR-PERF-001** | **Core Web Vitals Benchmark:** Largest Contentful Paint (LCP) $\le 2.5\text{s}$, First Input Delay (FID) / INP $\le 200\text{ms}$, Cumulative Layout Shift (CLS) $\le 0.1$ on standard mobile 4G/5G connections. |
| **NFR-PERF-002** | **Image Optimization:** All product images automatically served in modern next-generation formats (WEBP/AVIF) with responsive `srcset` and lazy loading for off-screen images. |
| **NFR-PERF-003** | **Lightweight Client Bundle:** Initial JavaScript bundle size kept under 180KB gzipped by utilizing server components, avoiding heavy client libraries, and pruning unused CSS. |

---

### 9.2 Accessibility & Usability (WCAG 2.1 AA)

| Requirement ID | Specification & Benchmark |
| :--- | :--- |
| **NFR-A11Y-001** | **Keyboard Operability:** Entire checkout, cart drawer, search modal, and navigation fully navigable via standard keyboard inputs (`Tab`, `Enter`, `Space`, `Escape`). |
| **NFR-A11Y-002** | **Color Contrast Compliance:** All text elements and interactive button fills maintain at least 4.5:1 contrast against `#FFF8EF` background. |
| **NFR-A11Y-003** | **Screen Reader Optimization:** Meaningful, descriptive `alt` tags on all product photography (e.g., *"Artisanal pink and cream pipe-cleaner rose bouquet in wrapping"*), semantic HTML5 (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`), and ARIA attributes on modals and drawers. |

---

### 9.3 Security, Data Protection & Customer Privacy

| Requirement ID | Specification & Benchmark |
| :--- | :--- |
| **NFR-SEC-001** | **Transport Security:** Mandatory HTTPS/TLS 1.3 across all routes with HTTP Strict Transport Security (HSTS) headers enabled. |
| **NFR-SEC-002** | **Zero Hardcoded Secrets:** All API keys, database connection strings, JWT signing secrets, and webhook secrets stored exclusively in encrypted environment variables (`.env.local` / platform secrets). Zero secrets committed to Git repositories. |
| **NFR-SEC-003** | **Payment Card Industry (PCI) Compliance:** Zero storage or handling of raw card numbers, CVVs, or UPI PINs. All payment credential handling is delegated entirely to RBI-authorized payment aggregators. |
| **NFR-SEC-004** | **Input Sanitization & Injection Defense:** Server-side input sanitization across all forms (search, checkout address, custom order form, admin inputs) to prevent Cross-Site Scripting (XSS), SQL/NoSQL Injection, and Prototype Pollution. |
| **NFR-SEC-005** | **Rate Limiting & Abuse Prevention:** API routes (checkout submission, custom order uploads, review posting, login attempts) protected by IP-based sliding-window rate limiting to prevent spam, carding attacks, or Denial of Service. |
| **NFR-SEC-006** | **Secure File Upload Validation:** Uploads on custom order or review forms restricted to image MIME types (`image/jpeg`, `image/png`, `image/webp`), sanitized filenames, and strict 5MB file-size limits. |

---

### 9.4 Reliability, Concurrency & Data Integrity

| Requirement ID | Specification & Benchmark |
| :--- | :--- |
| **NFR-REL-001** | **Atomic Inventory Reservation:** Inventory decrement must occur inside an atomic, safe transaction at the point of order creation/payment authorization to strictly prevent overselling during concurrent checkouts. |
| **NFR-REL-002** | **Webhook Idempotency:** Payment gateway webhooks must record processed transaction IDs (`transaction_id`) to ensure duplicate webhook notifications do not trigger multiple inventory reductions or duplicate receipts. |
| **NFR-REL-003** | **Session & Cart Persistence:** Cart state survives page refreshes and tab closures using resilient local client storage. |

---

## 10. End-to-End User Journeys

### 10.1 Journey 1: Ready-Made Bouquet Purchase (Online Gateway / UPI)

```
[Customer lands on Homepage]
             |
             v
[Filters by "Bouquets" & views "Lavender Dreams Bouquet" (₹1,899)]
             |
             v
[Inspects studio photos & clicks "Buy Now"]
             |
             v
[Arrives at Guest Checkout: Fills Mobile, Name, Address & PIN code]
             |
             v
[Selects "Online Payment / UPI" -> Sees Total: ₹1,899 + ₹99 Flat Shipping = ₹1,998]
             |
             v
[Completes payment securely via Gateway / UPI Intent]
             |
             v
[Server verifies webhook signature -> Deducts 1 unit from stock -> Creates Order SH-2026-10482]
             |
             v
[Customer lands on Order Confirmation Page with receipt & tracking preview]
```

---

### 10.2 Journey 2: Cash on Delivery (COD) Purchase

```
[Customer adds 2x "Pastel Tulip Stem" (₹698) to Cart]
             |
             v
[Enters Guest Checkout & inputs shipping address in Delhi]
             |
             v
[Selects "Cash on Delivery (COD)" as payment method]
             |
             v
[Clicks "Place COD Order" -> System validates address & reserves stock]
             |
             v
[Order created: Order Status = "CONFIRMED", Payment Status = "PENDING_COD"]
             |
             v
[Confirmation screen advises customer to keep exact cash ready upon delivery]
             |
             v
[Admin reviews order in dashboard, packs items, dispatches via courier, adds AWB]
             |
             v
[Courier delivers package & collects ₹797 (₹698 + ₹99 shipping)]
             |
             v
[Admin marks order as "DELIVERED" and Payment as "PAID"]
```

---

### 10.3 Journey 3: Custom Order Request & Consultation

```
[Customer clicks "Custom Orders" in Header]
             |
             v
[Fills intake form: Occasion = Anniversary, Palette = "Dusty Rose & Gold", Budget = "₹2,000-₹3,500"]
             |
             v
[Attaches reference photo of bedroom aesthetic -> Submits Form]
             |
             v
[Screen confirms: "Enquiry Received! Artisan Sangita will WhatsApp you within 12h"]
             |
             v
[Admin receives inquiry in Dashboard -> Clicks "Contact Customer on WhatsApp"]
             |
             v
[Artisan & customer finalize design -> Custom checkout link or UPI payment arranged]
             |
             v
[Status updated to "IN_CRAFTING" -> Bouquet created and dispatched]
```

---

## 11. Product & Order Lifecycle State Machines

### 11.1 Product Lifecycle

```
[ DRAFT ] 
    |
    v (Admin completes details & clicks "Publish")
[ PUBLISHED / ACTIVE ] <-----------------+
    |                                    |
    |-- (Stock reaches 0)                | (Admin restocks quantity)
    v                                    |
[ OUT OF STOCK (Visible, buy disabled) ]-+
    |
    v (Admin decides to retire product)
[ ARCHIVED / UNPUBLISHED ]
```

---

### 11.2 Order Status Lifecycle

```
               [ ORDER CREATED ]
                      |
        +-------------+-------------+
        |                           |
        v                           v
  (Online Payment)                (COD)
        |                           |
[ PAYMENT AUTHORIZED ]      [ ORDER CONFIRMED ]
        |                           |
        +-------------+-------------+
                      |
                      v
             [ ORDER CONFIRMED ]
                      |
                      v
            [ IN CRAFTING / PACKING ]
                      |
                      v
       [ DISPATCHED / IN TRANSIT ] (Courier AWB Attached)
                      |
                      v
             [ DELIVERED ]
                      |
       +--------------+--------------+
       |                             |
       v (If damaged / valid claim)  v (Normal completion)
 [ RETURN REQUESTED ]           [ CLOSED ]
       |
       v
 [ RETURNED & REFUNDED ]
```

*Cancellation Branch:* An order in `ORDER CREATED`, `ORDER CONFIRMED`, or `IN CRAFTING` (ready-made only) can transition to `CANCELLED` if requested before dispatch.

---

### 11.3 Payment Status Lifecycle

```
[ PENDING ] 
    |
    +---> (Gateway payment captures successfully) ------> [ PAID ]
    |                                                         |
    +---> (Gateway transaction fails or user drops) ----> [ FAILED ]
    |                                                         |
    +---> (COD Order placed, pending cash collection) -> [ PENDING_COD ]
    |                                                         |
    |                                              (Courier collects cash)
    |                                                         |
    |                                                         v
    |                                                      [ PAID ]
    |
    +---> (Refund issued due to cancellation/damage) ----> [ REFUNDED ]
```

---

## 12. Business Rules & Edge Cases

### 12.1 Inventory Concurrency & Stock Reservation
- **Rule BR-INV-001 (Zero Overselling):** When a user begins online checkout, the system verifies available stock. Stock is atomically decremented upon order creation. If two shoppers attempt to purchase the final unit simultaneously, the first database transaction to succeed reserves the unit; the second shopper is presented with an alert: *"We're sorry! Another customer just purchased the last available unit of this handcrafted item."*
- **Rule BR-INV-002 (Inventory Restoration on Failed Checkout):** If an order is created with an online gateway but payment fails or the session expires after 30 minutes without successful webhook confirmation, the order transitions to `EXPIRED`/`CANCELLED` and the reserved inventory is automatically released back to available stock.
- **Rule BR-INV-003 (Inventory Restoration on Cancellation):** If an order is cancelled prior to courier dispatch, the system immediately restores the product's inventory count.

### 12.2 Price Stability in Active Carts
- **Rule BR-PRC-001:** If the admin updates a product's price in the dashboard while a customer has it in their active cart drawer, the cart must re-validate prices against the database at the start of the checkout step. The customer is alerted if a price has changed before they authorize payment.

### 12.3 Idempotent Payment Callbacks
- **Rule BR-PAY-001:** Payment gateway webhooks frequently retry delivery. The backend must check the unique gateway payment ID. If the transaction has already been processed and marked `PAID`, subsequent callbacks must immediately respond with HTTP 200 OK without re-reducing stock or triggering duplicate notifications.

### 12.4 COD Order Safeguards
- **Rule BR-COD-001:** To minimize Return-to-Origin (RTO) courier losses on COD orders, COD is restricted to orders where the customer enters a valid 10-digit mobile number and full street address. The admin retains the ability to place a quick phone call to verify high-value COD orders ($> ₹2,500$) before dispatch.

---

## 13. Payment, Shipping, Cancellation & Refund Policies

### 13.1 Payment Policies
- **Accepted Modes:** UPI (PhonePe, GPay, Paytm, BHIM), Debit/Credit Cards (Visa, Mastercard, RuPay), Net Banking, Cash on Delivery, and direct WhatsApp payment coordination.
- **Currency:** All transactions conducted exclusively in Indian Rupees (₹ / INR).
- **Security:** Fully compliant with RBI digital payment directives. No sensitive card data stored.

### 13.2 Pan-India Shipping & Delivery Rules
- **Delivery Scope:** All serviceable PIN codes across India.
- **Flat Shipping Rate:** A transparent flat shipping rate (configurable in admin, baseline placeholder: ₹99 per order) is added to the subtotal regardless of order size during Phase 1.
- **Dispatch Timeline:** Ready-made items dispatch within 2–3 business days. Custom orders dispatch according to the individual agreement (typically 5–7 business days).
- **Courier Transit:** 3–7 business days post-dispatch, subject to courier operations and regional logistics.
- **Tracking:** Once dispatched, the admin attaches the courier name and tracking AWB. Customers can view their tracking number and direct courier tracking URL on their order status page.

### 13.3 Cancellation Rules
- **Ready-Made Products:** Cancellations permitted free of charge at any time **before** the parcel has been handed over to the courier (Order status is `PENDING`, `CONFIRMED`, or `IN CRAFTING`). Once `DISPATCHED`, cancellation is no longer possible and the package must follow the return procedure.
- **Custom / Bespoke Products:** Because materials and floral stems are cut, shaped, and assembled specifically to the customer's bespoke specifications, cancellation is permitted **only within 12 hours** of order confirmation or before physical crafting commences. Once crafting is underway, custom orders cannot be cancelled.

### 13.4 Returns, Replacements & Refunds
- **Handmade Variation Disclaimer:** As each floral creation is handmade, slight natural variations in petal curvature, wire positioning, and wrapping compared to catalog photos are inherent to artisanal craftsmanship and do not constitute defects.
- **Transit Damage or Incorrect Item:** If a product arrives damaged in transit or an incorrect design was delivered, the customer must report the issue within **48 hours of delivery** via WhatsApp (`[BUSINESS_WHATSAPP]`) or email (`[BUSINESS_EMAIL]`) accompanied by clear unboxing photos/videos showing the damaged parcel and item.
- **Replacement Workflow:** Upon admin verification of damage, Sangita Handmade will prioritize a complimentary replacement crafted and dispatched at zero extra cost to the customer.
- **Refund Workflow:** If a replacement cannot be provided (e.g., raw material unavailable), a full refund is initiated to the customer's original payment method (or UPI for COD orders) within 5–7 business days.
- **Statutory Consumer Rights:** Nothing in this policy restricts or removes mandatory consumer protection rights under the Consumer Protection Act, 2019 and Consumer Protection (E-Commerce) Rules, 2020.

---

## 14. Content, Asset & Photography Standards

### 14.1 Photography Guidelines
- **Real Studio Master Shots:** Main product images must be actual, authentic photographs of bouquets crafted by artisan Sangita. Shot on clean neutral, ivory, or soft cream surfaces under balanced natural or studio lighting.
- **Lifestyle & Scale Context:** Secondary images should depict the bouquet held in hands, placed in a decorative vase on a tabletop, or packaged in the boutique gift box to give clear perception of physical dimensions and scale.
- **No Deceptive Media:** Zero use of stock photos of real fresh flowers or artificial AI renders disguised as handmade pipe-cleaner flowers. What the customer sees in the gallery must faithfully represent what is physically packaged and shipped.

### 14.2 Brand Voice & Editorial Tone
- **Tone:** Warm, inviting, artistic, elegant, and reassuringly personal.
- **Key Brand Themes:** Handcrafted devotion, everlasting blooms, heartfelt gifting, bespoke floral keepsakes.

### 14.3 System Placeholder Conventions
Until production accounts, phone lines, and physical addresses are formally provisioned, the application and PRD strictly utilize standardized, identifiable placeholders:

| Placeholder Variable | Production Purpose |
| :--- | :--- |
| `[BUSINESS_WHATSAPP]` | Official business WhatsApp phone number for inquiries & orders |
| `[BUSINESS_EMAIL]` | Dedicated customer support email address |
| `[BUSINESS_ADDRESS]` | Physical studio/registered workshop address in India |
| `[INSTAGRAM_URL]` | Official Instagram profile link of Sangita Handmade |

---

## 15. Technical Decisions & Architectural Direction

*Note: This PRD outlines product-level architecture; detailed low-level schemas and configurations are specified in the accompanying Technical Requirements Document (TRD).*

### 15.1 Preferred Technical Stack
- **Frontend & Web Framework:** **Next.js (React)** with App Router. Delivers superior server-side rendering (SSR) for fast initial load, optimal SEO indexing, and built-in API routes.
- **Styling Architecture:** Vanilla CSS / Modular CSS with CSS Custom Properties encoding the brand design tokens (`#FFF8EF`, `#722F3E`, `#C6A15B`) for clean, ultra-fast, zero-bloat styling without framework overhead.
- **Backend & Data Persistence:** Next.js Server Actions and Route Handlers paired with **MongoDB and Mongoose ODM**. MongoDB provides flexible document modeling for products with variable image arrays, bilingual strings, and nested order records.
- **Version Control & Repository:** GitHub.
- **Deployment & Hosting:** **Vercel** (Hobby/Pro tier) for zero-maintenance global CDN delivery, automated SSL, and fast serverless edge execution.
- **Database Hosting:** **MongoDB Atlas** (M0 free tier for development/initial launch; seamlessly upgradeable as order volume scales).

### 15.2 Integration Classification (Local vs. External)

```
+----------------------------------------------------------------------------------------------------+
| INTEGRATION DEPENDENCY CLASSIFICATION                                                             |
+----------------------------------------------------------------------------------------------------+
| LAYER 1: LOCAL / SELF-CONTAINED (Fully functional without external paid contracts)                  |
| - Complete Storefront, Bilingual UI (EN/HI), Search & Filter Engine                               |
| - Session-Persistent Shopping Cart & Guest Checkout Address Forms                                 |
| - Cash on Delivery (COD) & Pay on WhatsApp Checkout Mechanisms                                    |
| - Custom Order Intake Form (Stored locally in MongoDB with local image upload handling)            |
| - Full Admin Dashboard: Product CRUD, Order Status Management, Reviews Moderation, Sales Summaries |
| - Local Static Policies (Privacy, Terms, Shipping, Refunds)                                        |
+----------------------------------------------------------------------------------------------------+
| LAYER 2: EXTERNAL DEPENDENCIES (Requires Owner Accounts / Credentials for Live Operations)         |
| - Online Payment Gateway: Razorpay / Cashfree API keys (Test mode available locally; live requires|
|   merchant KYC approval)                                                                           |
| - WhatsApp Business Integration: Deep links (`wa.me`) work free & instantly; automated cloud API   |
|   requires Meta Business verification                                                              |
| - Courier Partner / Aggregator: Delhivery, Shiprocket, or India Post Speed Post (Manual AWB entry  |
|   works without API; automated courier pickup requires merchant carrier account)                   |
| - Production Custom Domain: DNS mapping on Vercel (e.g., `sangitahandmade.com`)                    |
+----------------------------------------------------------------------------------------------------+
```

---

## 16. Assumptions & Unresolved Business Decisions

The following items represent operational and commercial decisions that require explicit confirmation from store owner Sangita before production deployment:

| # | Topic / Decision Area | Current PRD Working Baseline | Owner Confirmation Required Before Launch |
| :---: | :--- | :--- | :--- |
| **1** | **Flat Shipping Rate** | Set to ₹99 across India | Confirm whether flat rate is ₹79, ₹99, ₹149, or free above a threshold (e.g., Free above ₹1,999). |
| **2** | **Online Payment Gateway** | Architecture supports Razorpay or Cashfree | Confirm which gateway merchant account is registered and approved with business KYC. |
| **3** | **Business Contact Details** | Using `[BUSINESS_WHATSAPP]` and `[BUSINESS_EMAIL]` | Provide actual active WhatsApp number and customer support email address. |
| **4** | **Studio Address** | Using `[BUSINESS_ADDRESS]` | Provide official city, state, and studio address for compliance footer and invoices. |
| **5** | **Instagram Profile** | Using `[INSTAGRAM_URL]` | Provide active Instagram handle URL. |
| **6** | **Initial Product Catalog** | 5 initial categories identified | Provide final product titles, high-res photos, descriptions, and fixed prices in INR. |
| **7** | **Courier Partner** | Manual AWB tracking links | Confirm primary courier partner used for parcels (India Post, Shiprocket, Delhivery, etc.). |
| **8** | **Production Web Domain** | Deploys initially to Vercel subdomain | Confirm if custom domain (e.g., `sangitahandmade.com` / `.in`) has been purchased. |

---

## 17. Acceptance Criteria for Phase 1 Release

The platform shall be deemed ready for Phase 1 release only when all of the following acceptance criteria pass verification:

### 17.1 Storefront & Catalog
- [ ] Homepage renders completely with luxury aesthetics, hero banner, category grid, and brand craftsmanship story.
- [ ] Bilingual switcher toggles entire UI between English and Hindi with 100% string coverage and zero broken layouts.
- [ ] Catalog filter accurately filters items by category, price slider, and in-stock availability.
- [ ] Product detail page displays high-res image gallery, fixed INR price, real-time stock indicator, and functional "Add to Cart" and "Buy Now" buttons.
- [ ] WhatsApp product inquiry button opens WhatsApp with pre-filled product title, price, and URL.

### 17.2 Cart & Checkout
- [ ] Cart updates item quantities, prevents selecting quantities exceeding available stock, and calculates totals accurately.
- [ ] Guest checkout captures and validates all required Indian address fields (Mobile 10 digits, PIN 6 digits, State, City, Street).
- [ ] Flat shipping fee displays transparently before final order placement.

### 17.3 Payments & Orders
- [ ] Online gateway transactions verify server-side via webhook signatures before order is marked `PAID`.
- [ ] Duplicate webhook callbacks are rejected safely without duplicate inventory reductions (Idempotency verified).
- [ ] Cash on Delivery (COD) orders successfully place with `CONFIRMED` order status and `PENDING_COD` payment status.
- [ ] Custom Order form accepts inquiries, validates fields, safely uploads reference images, and notifies customer that an inquiry was logged.
- [ ] Unique Order ID (`SH-YYYY-XXXXX`) generated and displayed on confirmation page with printable receipt.

### 17.4 Admin Operations
- [ ] Admin login is protected by secure authentication and session management; unauthorized access to `/admin` routes is blocked.
- [ ] Admin can create, edit, unpublish, and delete products with image uploads and stock settings.
- [ ] Admin can view full order records, change order status according to permitted state transitions, and attach courier tracking AWB numbers and URLs.
- [ ] Review moderation workflow functions: submitted reviews remain hidden until admin explicitly approves them.
- [ ] Sales report displays gross sales, collected revenue, and order counts accurately without confusing revenue with profit.

### 17.5 Compliance & Security
- [ ] All 5 legal pages (`/privacy-policy`, `/terms`, `/shipping-policy`, `/cancellation-refunds`, `/contact`) are published and linked from the footer.
- [ ] Zero API keys or secrets are committed to the code repository.
- [ ] Page load speed meets performance targets (LCP $\le 2.5\text{s}$ on mobile 4G/5G).

---

## 18. Testing & Launch-Readiness Checklist

```
+----------------------------------------------------------------------------------------------------+
| LAUNCH-READINESS VERIFICATION AUDIT                                                                |
+----------------------------------------------------------------------------------------------------+
| [ ] 1. Functional Cross-Device Testing: Chrome, Safari, Firefox on Android, iOS, Windows, Mac      |
| [ ] 2. Viewport Responsiveness: Verified at 360px, 390px, 412px, 768px, 1024px, 1440px             |
| [ ] 3. Language Parity: Verified all English & Hindi translations across navigation and forms     |
| [ ] 4. Payment Sandbox Testing: 5 successful test orders on Gateway + 2 failed transaction retries  |
| [ ] 5. COD Verification: End-to-end COD checkout placed, reviewed in admin, and status transitioned|
| [ ] 6. Inventory Concurrency: Verified that out-of-stock items cannot be purchased                 |
| [ ] 7. Custom Order Intake: Form tested with 4MB test image; verified in admin queue               |
| [ ] 8. Review Moderation: Test review submitted; confirmed invisible until admin approval         |
| [ ] 9. Placeholder Audit: Checked that all temporary placeholders are documented in Section 16     |
| [ ] 10. Security Audit: Form validation, XSS prevention, rate limiting, and HTTP headers verified |
| [ ] 11. SEO & Metadata: Page titles, OpenGraph meta tags, and favicon configured                   |
| [ ] 12. Backup & Recovery: MongoDB Atlas automated backups verified active                         |
+----------------------------------------------------------------------------------------------------+
```

---

## 19. Future Enhancements Roadmap (Post-Launch)

### Phase 2: Enhanced Promotions & Logistics
- **Discount & Coupon Code Engine:** Support for percentage discounts, flat festive vouchers (e.g., `DIWALI100`), and minimum-spend rules.
- **Automated Courier API Integration:** Direct integration with Shiprocket or Delhivery API to generate shipping labels and courier pickups automatically from the admin dashboard.
- **WhatsApp Cloud API Automated Alerts:** Automated transactional WhatsApp messages sent to customers at each milestone: Order Confirmed, Dispatched with Tracking Link, and Delivered.

### Phase 3: Customer Accounts & Personalization
- **Optional Customer Accounts:** OTP-based mobile login allowing repeat customers to view past order history and save multiple delivery addresses.
- **Wishlist & Gift Registry:** Ability for customers to save favorite bouquets for upcoming anniversaries or birthdays.
- **Interactive Bouquet Customizer:** Visual 3D or 2D flower builder allowing customers to mix-and-match individual pipe-cleaner stems into a virtual vase before ordering.

---

## 20. Glossary of Terms

| Term | Definition in Sangita Handmade Context |
| :--- | :--- |
| **AWB (Air Waybill)** | The unique tracking number issued by the courier partner (e.g., Delhivery, India Post) to track parcel transit. |
| **Cash on Delivery (COD)** | Payment method where the customer pays physical cash or courier UPI QR upon receiving the parcel at their doorstep. |
| **Core Web Vitals** | Standardized performance metrics established by Google (LCP, FID/INP, CLS) measuring real-world user page speed and stability. |
| **Decoupled Order/Payment** | Architectural design where order existence and payment completion are distinct entities, allowing orders to exist as pending or COD without premature assumptions of payment. |
| **Idempotency** | The property of an API or webhook handler to produce identical results regardless of how many times the exact same request is received (preventing double billing or duplicate stock reduction). |
| **Pipe-Cleaner Flowers** | Artisanal flowers crafted by bending, twisting, and sculpting chenille wire stems and floral tape into delicate, everlasting, realistic floral arrangements. |
| **RTO (Return to Origin)** | A scenario in e-commerce where a parcel cannot be delivered by the courier (e.g., customer unavailable or rejected COD) and is returned to the seller. |
| **Slug** | The URL-friendly identifier for a product (e.g., `lavender-dreams-bouquet` in `sangitahandmade.com/products/lavender-dreams-bouquet`). |
| **WCAG 2.1 AA** | Web Content Accessibility Guidelines Level AA standards ensuring digital interfaces are accessible to individuals with visual or motor impairments. |

---

*End of Product Requirements Document (PRD) — Sangita Handmade*
