# UI/UX DESIGN BRIEF & DESIGN SYSTEM SPECIFICATION (UI_UX_BRIEF)
## Project: Sangita Handmade — Direct-to-Consumer (D2C) E-Commerce Platform

---

| **Document Attribute** | **Specification Details** |
| :--- | :--- |
| **Document Title** | UI/UX Design Brief & Design System Specification (UI_UX_BRIEF) |
| **Document Version** | 1.0.0 (Release Baseline) |
| **Date** | October 14, 2026 |
| **Status** | Approved for Interface Styling & Frontend Component Engineering |
| **Author / Roles** | Senior UI/UX Designer, E-Commerce Experience Specialist, Visual Brand Architect |
| **Companion Documents**| [`PRD.md`](file:///c:/Users/DELL/OneDrive/Documents/sangita%20handmade/PRD.md), [`TRD.md`](file:///c:/Users/DELL/OneDrive/Documents/sangita%20handmade/TRD.md), [`APP_FLOW.md`](file:///c:/Users/DELL/OneDrive/Documents/sangita%20handmade/APP_FLOW.md) |
| **Target Viewports** | Mobile Phones (360px–428px), Tablets (768px–1024px), Desktop/Laptops (1280px–1920px) |

---

## 1. Purpose and Relationship to Existing Planning Documents

### 1.1 Purpose of this Document
The **UI/UX Design Brief (UI_UX_BRIEF.md)** establishes the complete visual identity, aesthetic direction, design system tokens, typography rules, layout hierarchies, component patterns, interaction behaviors, and accessibility benchmarks for **Sangita Handmade**.

It serves as the bridge between functional/technical requirements and user perception, translating business goals into a warm, luxurious, boutique-style direct-to-consumer digital atelier.

### 1.2 Relationship to PRD, TRD, and APP_FLOW
- **Fidelity to [`PRD.md`](file:///c:/Users/DELL/OneDrive/Documents/sangita%20handmade/PRD.md):** Strictly adopts the confirmed brand palette (Warm Cream `#FFF8EF`, Deep Burgundy `#722F3E`, Muted Gold `#C6A15B`), the five initial categories (*Flowers, Bouquets, Custom Orders, Gifts, Decor*), guest checkout simplicity, authentic photography rules, and bilingual English/Hindi presentation.
- **Fidelity to [`TRD.md`](file:///c:/Users/DELL/OneDrive/Documents/sangita%20handmade/TRD.md):** Implements CSS custom properties that map 1-to-1 with Vanilla CSS design tokens, respects Next.js Server/Client component boundaries, and coordinates responsive image delivery (`next/image`).
- **Fidelity to [`APP_FLOW.md`](file:///c:/Users/DELL/OneDrive/Documents/sangita%20handmade/APP_FLOW.md):** Accommodates all user flows, step-by-step guest checkout progression, multi-channel payment states, custom-order inquiry intake, admin management views, and error-recovery screens.
- **Respect for Unresolved Decisions:** Preserves documented placeholders (`[BUSINESS_WHATSAPP]`, `[BUSINESS_EMAIL]`, `[BUSINESS_ADDRESS]`, `[INSTAGRAM_URL]`) and handles configurable parameters (e.g., flat shipping rate) without inventing unconfirmed business rules.

---

## 2. Brand Personality and Core Design Principles

### 2.1 Brand Personality Profile
Sangita Handmade is not a mass-market retail aggregator. It is an **intimate, artisanal floral atelier**.

```
+----------------------------------------------------------------------------------------------------+
| BRAND PERSONALITY ATTRIBUTES                                                                       |
+----------------------------------------------------------------------------------------------------+
| 1. Artisanal & Devotional | Every flower is sculpted by hand; the design breathes patience and care|
| 2. Elegant & Luxurious    | Refined serif headings, gold accents, generous breathing room, no clutter|
| 3. Warm & Welcoming       | Cream foundations evoke domestic warmth, heartfelt gifting, and romance |
| 4. Transparent & Trustworthy | Clear fixed prices in INR (₹), real stock badges, authentic photos |
| 5. Culturally Resonant    | Naturally balances modern international elegance with Indian sensibilities|
+----------------------------------------------------------------------------------------------------+
```

### 2.2 Core Design Principles
1. **Boutique Elegance Over Marketplace Clutter:** Avoid dense, screaming discount banners, flashing badges, or countdown timers. Emphasize generous white/cream space, subtle borders, and editorial typography.
2. **Authenticity Over Stock Fluff:** Every image must showcase genuine handcrafted pipe-cleaner creations. Never substitute artificial AI renders or generic stock flower photography.
3. **Tactile Digital Craftsmanship:** Soft drop shadows, rounded pill containers, smooth micro-interactions (200ms ease), and delicate gold hover rings recreate the sensation of opening a high-end luxury gift package.
4. **Mobile-First Luxury:** More than 75% of Indian e-commerce shoppers browse via smartphones. Mobile layouts must feel bespoke and airy, with thumb-friendly controls ($\ge 44\times 44\text{px}$) and zero horizontal scrolling.
5. **Frictionless Reassurance:** Guest checkout eliminates registration fatigue; clear delivery estimates and instant WhatsApp triggers provide continuous human reassurance.

---

## 3. Target Users and Their Visual/Design Needs

```
+----------------------------------------------------------------------------------------------------+
| TARGET USER DESIGN EXPECTATIONS                                                                    |
+----------------------------------------------------------------------------------------------------+
| Persona                  | Key Visual & Interaction Needs                                          |
| :----------------------- | :---------------------------------------------------------------------- |
| **Thoughtful Gifters**   | • Instant appreciation of floral beauty & packaging quality             |
| (Birthdays, Anniversaries| • High-res zoom to inspect intricate pipe-cleaner petal details         |
| Graduations)             | • Transparent Pan-India shipping dates and delivery estimators          |
|                          | • 1-tap "Buy Now" and seamless UPI payment triggers                     |
| ------------------------ | ----------------------------------------------------------------------- |
| **Home Stylists &**      | • Harmonious room styling & scale context (vase photos, hand-held scale)|
| **Festive Shoppers**     | • Intuitive bilingual switcher (English <-> Hindi) with zero layout shifts|
| (Diwali, Weddings)       | • Reassuring Cash on Delivery (COD) and WhatsApp inquiry options        |
| ------------------------ | ----------------------------------------------------------------------- |
| **Artisan Sangita**      | • Crisp, uncluttered administrative dashboard                            |
| (Store Owner & Maker)    | • Clear status pills, legible order tables, and simple photo uploaders   |
|                          | • High-contrast data presentation without confusing financial jargon   |
+----------------------------------------------------------------------------------------------------+
```

---

## 4. Visual Direction, Moodboard & Atmosphere

### 4.1 Aesthetic Concept: "The Modern Artisanal Atelier"
The visual identity pairs the old-world tactile grace of botanical illustrations with the clean, minimalist geometry of high-end direct-to-consumer lifestyle brands (e.g., luxury perfumeries, boutique ceramic studios).

- **Background Atmosphere:** Warm, soft, sunlit cream backgrounds (`#FFF8EF`) that mimic heavy watercolor paper or linen studio packaging, replacing harsh cold white (`#FFFFFF`).
- **Accent Weight:** Rich, velvety deep burgundy (`#722F3E`) provides regal contrast for primary headings, call-to-action buttons, and header accents.
- **Luminosity:** Muted, burnished gold (`#C6A15B`) adds subtle radiance for badges, delicate divider rules, icon strokes, and hover highlights.
- **Imagery Mood:** Soft, diffused natural daylight; warm cream and beige studio surfaces; real human hands holding bouquets; close-ups of fuzzy, velvety chenille pipe-cleaner texture.

---

## 5. Color System & Usage Rules

### 5.1 Primary Brand Palette

```
+----------------------------------------------------------------------------------------------------+
| SANGITA HANDMADE — MASTER BRAND COLOR SYSTEM                                                       |
+----------------------------------------------------------------------------------------------------+
| Swatch | Color Name       | Hex Code  | RGB / HSL            | WCAG Contrast on #FFF8EF | Primary UI Role                 |
| :---:  | :--------------- | :-------- | :------------------- | :----------------------: | :------------------------------ |
| [Cr]   | **Warm Cream**   | `#FFF8EF` | rgb(255, 248, 239)   | N/A (Canvas Base)        | Default page background, cards  |
| [Bg]   | **Deep Burgundy**| `#722F3E` | rgb(114, 47, 62)     | 8.1:1 (Passes AAA)       | Primary CTAs, brand headings    |
| [Gd]   | **Muted Gold**   | `#C6A15B` | rgb(198, 161, 91)    | 2.1:1 (Fails small text) | Badges, borders, decorative fills|
+----------------------------------------------------------------------------------------------------+
```

### 5.2 Functional Supporting Palette
To ensure strict accessibility (WCAG 2.1 AA) and clear feedback states without violating brand harmony, the following functional tokens are integrated:

```
+----------------------------------------------------------------------------------------------------+
| FUNCTIONAL SUPPORTING TOKENS                                                                       |
+----------------------------------------------------------------------------------------------------+
| Token Name         | Hex Code  | Purpose & Placement Rules                                         |
| :----------------- | :-------- | :----------------------------------------------------------------- |
| `Charcoal Copy`    | `#1F1B18` | Primary body typography, pricing figures, form field input values |
| `Muted Slate`      | `#615852` | Secondary body text, timestamps, breadcrumbs, placeholder copy     |
| `Soft Cream Fill`  | `#F3ECE1` | Card hover fills, secondary table row striping, input background  |
| `Border Ivory`     | `#EADBCC` | Delicate 1px dividers, card outlines, form field idle borders      |
| `Burgundy Hover`   | `#5A2430` | Interactive hover/active state for primary burgundy buttons        |
| `Gold Hover`       | `#B08D47` | Interactive hover state for secondary gold borders & icon triggers|
| `Studio Olive`     | `#2E6B44` | In-Stock indicators, payment confirmed status, success alerts     |
| `Amber Gold`       | `#A46E13` | Low-Stock warning badge ("Only 2 Left"), pending status pills      |
| `Crimson Alert`    | `#9B2226` | Out-of-Stock badge, form validation error text, destructive alerts |
| `WhatsApp Green`   | `#25D366` | Dedicated WhatsApp chat trigger icon & brand badge                 |
+----------------------------------------------------------------------------------------------------+
```

### 5.3 Strict Color Usage Rules
- **Rule 1 (Gold Contrast Defense):** Never use `#C6A15B` (Muted Gold) for small text copy against `#FFF8EF`. Gold is strictly reserved for solid badge backgrounds with dark text, icon glyphs $\ge 24\text{px}$, or decorative container borders.
- **Rule 2 (Hierarchy of Action):** 
  - Primary Action (Add to Cart, Buy Now, Place Order) $\rightarrow$ Deep Burgundy (`#722F3E`) fill with Warm Cream (`#FFF8EF`) text.
  - Secondary Action (View Details, Filter Toggle, Cancel) $\rightarrow$ Transparent fill with Deep Burgundy or Muted Gold 1px border.
  - Social / Instant Inquiry $\rightarrow$ WhatsApp Green (`#25D366`) with white glyph.

---

## 6. Typography & Text Hierarchy

### 6.1 Font Family Pairings
- **Editorial Headings (English):** **Cormorant Garamond** (Google Font, Serif). Evokes classical boutique craftsmanship, luxury perfumery, and botanical grace.
  - *Fallback:* `Playfair Display`, `Baskerville`, `Georgia`, `serif`.
- **UI Elements, Navigation & Body (English):** **Montserrat** / **Inter** (Google Font, Sans-Serif). Clean, geometric, legible at tiny mobile sizes with excellent numeric legibility for prices.
  - *Fallback:* `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`.
- **Indic Script & Bilingual Headings (Hindi):** **Rozha One** (for dramatic Hindi editorial headings) paired with **Noto Sans Devanagari** (for clean Hindi body copy, buttons, and form labels).
  - *Fallback:* `Mangal`, `Arial Unicode MS`, `sans-serif`.

### 6.2 Typographic Scale (Desktop & Mobile)

```
+----------------------------------------------------------------------------------------------------+
| TYPOGRAPHY SCALE SPECIFICATION                                                                     |
+----------------------------------------------------------------------------------------------------+
| Element / Role      | Desktop Size | Mobile Size | Weight      | Line Height | Font Family         |
| :------------------ | :----------: | :---------: | :---------: | :---------: | :------------------ |
| **Hero Display H1** | 56px (3.5rem)| 36px (2.25r)| SemiBold 600| 1.15        | Cormorant Garamond  |
| **Page Title H2**   | 38px (2.37r)| 28px (1.75r)| SemiBold 600| 1.25        | Cormorant Garamond  |
| **Section Title H3**| 28px (1.75r)| 22px (1.37r)| Medium 500  | 1.30        | Cormorant Garamond  |
| **Card Heading H4** | 20px (1.25r)| 18px (1.12r)| SemiBold 600| 1.40        | Montserrat          |
| **Body Large**      | 18px (1.12r)| 16px (1.00r)| Regular 400 | 1.60        | Montserrat          |
| **Body Regular**    | 15px (0.93r)| 14px (0.87r)| Regular 400 | 1.55        | Montserrat          |
| **Price Display**   | 24px (1.50r)| 20px (1.25r)| Bold 700    | 1.20        | Montserrat          |
| **Button Label**    | 14px (0.87r)| 14px (0.87r)| SemiBold 600| 1.00        | Montserrat (Caps)   |
| **Caption / Badge** | 12px (0.75r)| 11px (0.68r)| Medium 500  | 1.30        | Montserrat          |
| **Devanagari Body** | 16px (1.00r)| 15px (0.93r)| Regular 400 | 1.65        | Noto Sans Devanagari|
+----------------------------------------------------------------------------------------------------+
```

---

## 7. Spacing, Sizing, Borders, Shadows & Radii

### 7.1 Spacing Matrix (8-Point Grid System)
All padding, margin, and layout gap dimensions derive from a strict **8-point geometric scale**:

```
+----------------------------------------------------------------------------------------------------+
| SPACING SYSTEM SCALE                                                                               |
+----------------------------------------------------------------------------------------------------+
| Token      | Value | Primary Application                                                           |
| :--------- | :---: | :---------------------------------------------------------------------------- |
| `space-1`  | 4px   | Micro spacing: badge padding, icon-to-label gap                               |
| `space-2`  | 8px   | Compact spacing: form field inner vertical padding, thumbnail gaps            |
| `space-3`  | 12px  | Component spacing: card inner padding on mobile, pill button horizontal pad   |
| `space-4`  | 16px  | Standard spacing: container gutters on mobile, card content separation         |
| `space-5`  | 24px  | Medium spacing: grid gap on tablet, card padding on desktop                   |
| `space-6`  | 32px  | Large spacing: product detail split-column gap, section subtitle margin       |
| `space-7`  | 48px  | Major spacing: desktop grid gaps, form group separations                      |
| `space-8`  | 64px  | Section spacing: homepage vertical section rhythm on mobile                   |
| `space-9`  | 96px  | Hero & major landmark spacing: homepage section rhythm on desktop             |
+----------------------------------------------------------------------------------------------------+
```

### 7.2 Corner Radius System
- **`radius-pill` (9999px):** Category tabs, status badges, quantity counter capsules, search input wrapper.
- **`radius-md` (8px):** Product cards, input fields, modals, cart drawer containers.
- **`radius-lg` (16px):** Featured hero cards, craftsmanship story spotlight, gift packaging banners.
- **`radius-sharp` (0px / 2px):** Reserved for luxury editorial borders or photo thumbnail frames.

### 7.3 Elevation & Shadow Palette
To emulate the delicate depth of physical artisanal gift boxes:
- **`shadow-card`:** `0 4px 14px rgba(114, 47, 62, 0.06)` (Soft, warm burgundy-tinted ambient glow).
- **`shadow-hover`:** `0 10px 24px rgba(114, 47, 62, 0.12)` (Gentle lift upon card hover).
- **`shadow-drawer`:** `-6px 0 28px rgba(31, 27, 24, 0.16)` (Cart slide-over drawer backdrop).
- **`shadow-modal`:** `0 16px 40px rgba(31, 27, 24, 0.22)` (Image zoom and confirmation dialogs).

---

## 8. Responsive Breakpoints & Fluid Grid System

```
+----------------------------------------------------------------------------------------------------+
| RESPONSIVE BREAKPOINT SPECIFICATION                                                                |
+----------------------------------------------------------------------------------------------------+
| Breakpoint Key | Min Width | Target Devices                 | Layout Columns | Max Container Width |
| :------------- | :-------: | :----------------------------- | :------------: | :-----------------: |
| **`xs`**       | 360px     | Budget Android (e.g. Galaxy A)  | 1 Column Grid   | 100% (16px gutters)  |
| **`sm`**       | 480px     | Modern Large Smartphones       | 2 Column Grid   | 100% (16px gutters)  |
| **`md`**       | 768px     | Tablets (Portrait), Foldables   | 2-3 Col Grid    | 720px (24px gutters) |
| **`lg`**       | 1024px    | Tablets (Landscape), Laptops   | 3-4 Col Grid    | 960px (32px gutters) |
| **`xl`**       | 1280px    | Desktop Monitors               | 4 Column Grid   | 1200px (Auto margin) |
| **`2xl`**      | 1536px    | Large Ultra-Wide Screens        | 4-5 Col Grid    | 1360px (Auto margin) |
+----------------------------------------------------------------------------------------------------+
```

---

## 9. Global Navigation & Header/Footer Design

### 9.1 Header Architecture

```
+----------------------------------------------------------------------------------------------------+
| DESKTOP HEADER LAYOUT (> 1024px)                                                                   |
+----------------------------------------------------------------------------------------------------+
|  [ SANGITA HANDMADE ]    Shop All   Bouquets   Flowers   Custom   Gifts   Decor    [Q] [EN|HI] [B:2]|
+----------------------------------------------------------------------------------------------------+
| MOBILE HEADER LAYOUT (< 1024px)                                                                    |
+----------------------------------------------------------------------------------------------------+
|  [ = ] Hamburger            [ SANGITA HANDMADE ]                   [Q] Search   [EN|HI]   [B:2] Bag|
+----------------------------------------------------------------------------------------------------+
```

- **Visual Styling:** Background `#FFF8EF` with a delicate bottom border `1px solid #EADBCC`. Sticky positioning with `backdrop-filter: blur(8px)`.
- **Brand Logo:** Elegant typographic serif mark *"Sangita Handmade"* accompanied by a fine-line gold pipe-cleaner petal motif.
- **Language Switcher UI:**
  - Pill-shaped toggle with segmented control: `[ EN | HI ]`.
  - Active locale styled with solid burgundy fill (`#722F3E`) and cream text (`#FFF8EF`).
  - Inactive locale styled in muted slate with soft hover.
- **Cart Bag Trigger:** Gold-accented shopping bag icon with a solid burgundy badge (`min-width: 18px`, `height: 18px`, `border-radius: 9px`) showing the live item count.
- **Mobile Off-Canvas Navigation Drawer:**
  - Slides in smoothly from left (250ms ease).
  - Contains full categorized links with warm gold divider lines.
  - Features quick-access WhatsApp assistance button and studio operating hours at the drawer base.

### 9.2 Compliance & Brand Footer Architecture
- **Background:** Rich Deep Burgundy (`#722F3E`) with Warm Cream typography (`#FFF8EF`) and subtle Gold section headings (`#C6A15B`).
- **Column 1: Brand Atelier:** Mission statement on sustainable, everlasting floral artistry; handmade disclaimer (*"Every petal shaped with love in India"*).
- **Column 2: Collections:** Direct navigation to Flowers, Bouquets, Custom Keepsakes, Gifts, Decor.
- **Column 3: Customer Care & Policies:** Links to `/shipping-policy`, `/cancellation-refunds`, `/privacy-policy`, `/terms`, `/contact`.
- **Column 4: Connect & Support:** Direct WhatsApp button (`[BUSINESS_WHATSAPP]`), Email link (`[BUSINESS_EMAIL]`), Instagram handle (`[INSTAGRAM_URL]`), and physical studio address placeholder (`[BUSINESS_ADDRESS]`).
- **Bottom Bar:** Accepted payment icons (UPI, RuPay, Visa, MasterCard, NetBanking, COD) and copyright notice.

---

## 10. Homepage Layout & Section Hierarchy

```
+----------------------------------------------------------------------------------------------------+
| HOMEPAGE SECTION VISUAL HIERARCHY                                                                  |
+----------------------------------------------------------------------------------------------------+
| 1. GLOBAL ANNOUNCEMENT BAR   | "Handcrafted Blooms Delivered Pan-India. Flat Shipping on All Orders"|
| 2. HERO SHOWCASE             | 50/50 Split (Desktop) / Stacked (Mobile)                           |
|                              | Left: Editorial Headline + Subtitle + Primary/Secondary CTAs        |
|                              | Right: Authentic Studio Bouquet Photo with Gold Frame Highlight     |
| 3. CATEGORY SHOWCASE STRIP   | 5 Visual Cards: Flowers, Bouquets, Custom Orders, Gifts, Decor      |
| 4. CURATED ARTISAN CREATIONS | 4-Column Grid of Admin-Featured Bouquets with Quick Add Triggers    |
| 5. CRAFTSMANSHIP SPOTLIGHT   | Editorial 2-Column Banner: "The Art of the Pipe-Cleaner Bloom"       |
| 6. GENUINE SOCIAL PROOF      | 3-Column Approved Customer Reviews (Collapses gracefully if 0)      |
| 7. BESPOKE INVITATION BANNER | Wide Banner: "Have a Dream Color Palette? Request a Custom Creation"|
| 8. INSTAGRAM & WHATSAPP ROW  | Live Social Connect Strip                                            |
| 9. GLOBAL COMPLIANCE FOOTER  | Full 4-Column Boutique Footer                                       |
+----------------------------------------------------------------------------------------------------+
```

---

## 11. Shop Catalog, Product Cards & Filter Design

### 11.1 Product Card Visual Design

```
+-------------------------------------------------------+
| +---------------------------------------------------+ |
| | [In Stock Pill]                 [Category: Bouquets]| |
| |                                                   | |
| |             AUTHENTIC PRODUCT PHOTO               | |
| |            (1:1 or 4:5 Studio Portrait)           | |
| |                                                   | |
| +---------------------------------------------------+ |
|                                                       |
|  Lavender Dreams Pipe-Cleaner Bouquet                 |
|  Everlasting handmade floral arrangement              |
|                                                       |
|  ₹1,899  (Taxes incl.)                                |
|                                                       |
|  [ ADD TO CART (Burgundy) ]     [ QUICK VIEW (Gold) ] |
+-------------------------------------------------------+
```

- **Card Container:** Background `#FFF8EF`, border `1px solid #EADBCC`, corner radius `8px`.
- **Hover Micro-Interaction:** Subtle elevation lift (`transform: translateY(-4px)`, shadow transition 200ms ease).
- **Image Aspect Ratio:** Strictly 4:5 portrait or 1:1 square with `object-fit: cover`.
- **Stock Badging:**
  - *In Stock:* Studio Olive capsule (`#2E6B44` background, white text, 11px semi-bold).
  - *Low Stock:* Amber Gold capsule (`#A46E13` background, white text: `"Only 3 Left"`).
  - *Sold Out:* Crimson Alert capsule (`#9B2226` background, white text: `"Sold Out"`).

### 11.2 Shop Filtering & Search Interface
- **Desktop Sidebar:** Clean, un-collapsible left rail (260px width) with category checkboxes, dynamic double-handled price slider (₹300 – ₹5,000), and an "In Stock Only" toggle.
- **Mobile Filter Drawer:** Fixed bottom bar trigger: `[ Filter & Sort (2) ]`. Clicking slides up a full-height touch sheet with large touch sliders and an instant `"Show 14 Results"` primary button.
- **Sort Dropdown:** Minimalist select box: *Featured First, Price: Low to High, Price: High to Low, Newest Arrivals*.

---

## 12. Product Detail Page (PDP) Layout

```
+----------------------------------------------------------------------------------------------------+
| PRODUCT DETAIL PAGE LAYOUT (Desktop Viewport > 1024px)                                             |
+----------------------------------------------------------------------------------------------------+
| [Home / Bouquets / Lavender Dreams]                                                                |
|                                                                                                    |
| +-------------------------+ +--------------------------------------------------------------------+ |
| | [Thumb 1]               | | LAVENDER DREAMS PIPE-CLEANER BOUQUET                               | |
| | [Thumb 2]  MAIN STUDIO  | | Category: Bouquets | Status: [In Stock — Ready to Dispatch]        | |
| | [Thumb 3]  PHOTO VIEWER | | ------------------------------------------------------------------ | |
| |                         | | ₹1,899 (Inclusive of all taxes. Flat shipping at checkout)         | |
| | [Click to Expand Zoom]  | | ------------------------------------------------------------------ | |
| +-------------------------+ | Quantity:  [-] [ 1 ] [+]                                           | |
|                             | [ ADD TO CART (Primary Burgundy) ]    [ BUY NOW (Secondary Gold) ] | |
|                             | [ CHAT ON WHATSAPP ABOUT THIS CREATION (Green Pill) ]              | |
|                             | ------------------------------------------------------------------ | |
|                             | Delivery: Dispatched in 2-3 business days across India             | |
|                             | Description | Materials & Care | Packaging Details (Tabs)          | |
+----------------------------------------------------------------------------------------------------+
```

### Mobile PDP Adaptation ($< 768\text{px}$)
- Image gallery transforms into a **full-width swipeable touch carousel** with circular pagination dots.
- Sticky Bottom Action Bar: A fixed bottom bar pins to the mobile screen containing the current price, a quantity stepper, and a primary `"Add to Cart"` button to maximize conversion without forcing full-page scrolling.

---

## 13. Shopping Cart & Guest Checkout Design

### 13.1 Slide-Over Cart Drawer UI
- **Positioning:** Fixed right-side panel (420px width on desktop; 100% width on mobile) anchored over a 40% opacity charcoal backdrop.
- **Header:** *"Your Floral Bag (X items)"* with an accessible close button (`X`).
- **Line Item Cards:** 
  - 80x80px rounded product thumbnail.
  - Title, unit price, and subtotal.
  - Interactive stepper: `[-] 1 [+]` with instant visual disabled state when upper stock limit is hit.
  - Remove trash button with immediate item fade-out.
- **Drawer Footer:**
  - Clear itemized math: Subtotal + Flat Shipping Fee = Grand Total.
  - Primary CTA: `"Proceed to Checkout"` (Full width, Deep Burgundy).

### 13.2 Guest Checkout Step-by-Step UI

```
+----------------------------------------------------------------------------------------------------+
| GUEST CHECKOUT INTERFACE DESIGN                                                                    |
+----------------------------------------------------------------------------------------------------+
| STEP 1: CUSTOMER & PAN-INDIA DELIVERY ADDRESS                                                      |
| +------------------------------------------------------------------------------------------------+ |
| | Full Name: [ Pooja Sharma                                    ]                                 | |
| | Mobile Number: [ +91 ] [ 9876543210                          ] (Strict 10-digit validation)    | |
| | House / Flat / Street: [ 402, Lotus Greens, 5th Cross        ]                                 | |
| | Locality / Area: [ Indiranagar                               ]                                 | |
| | City: [ Bengaluru                ]  State: [ Karnataka    v]  PIN: [ 560038 ]                  | |
| | Email (Optional): [ pooja@example.com                        ]                                 | |
| | Delivery Notes (Optional): [ Please pack with extra lavender tissue for birthday             ] | |
| +------------------------------------------------------------------------------------------------+ |
|                                                                                                    |
| STEP 2: REVIEW & PAYMENT SELECTION                                                                 |
| +------------------------------------------------------------------------------------------------+ |
| | ( ) Online Payment / Instant UPI (Razorpay / Cashfree)                                         | |
| |     [ GPay ] [ PhonePe ] [ Paytm ] [ Cards ] [ NetBanking ]                                    | |
| | ( ) Cash on Delivery (COD) — Pay in cash upon doorstep delivery                                | |
| | ( ) Confirm & Pay via WhatsApp — Assisted ordering & direct QR chat                            | |
| +------------------------------------------------------------------------------------------------+ |
|                                                                                                    |
| ORDER TOTAL: Items (₹1,899) + Flat Shipping (₹99) = ₹1,998                                         |
| [ PLACE ORDER & PAY (Burgundy Button) ]                                                           |
+----------------------------------------------------------------------------------------------------+
```

---

## 14. Custom-Order Experience Design

```
+----------------------------------------------------------------------------------------------------+
| BESPOKE ORDER INTAKE INTERFACE (/custom-order)                                                     |
+----------------------------------------------------------------------------------------------------+
|  [ HEADER: "Craft Your Dream Bespoke Bouquet" ]                                                    |
|  "Every creation is custom-shaped by artisan Sangita. Tell us your vision below."                  |
|                                                                                                    |
|  * NOTICE BANNER: "Submitting this form logs an inquiry, not an immediate charge. We will consult  |
|    with you on WhatsApp with color swatches and exact pricing within 12 business hours."           |
|                                                                                                    |
|  1. Your Name & WhatsApp Number: [____________________] [____________________]                     |
|  2. Creation Type: [ Dropdown: Bridal Keepsake / Birthday Bouquet / Single Stems / Decor ]        |
|  3. Target Occasion: [ e.g. Wedding Anniversary, Graduation, Mother's Day ]                        |
|  4. Color Palette & Aesthetic Notes: [ Textarea: Describe preferred colors & flowers ]            |
|  5. Estimated Budget Range: [ Under ₹1,000 | ₹1,000-₹2,000 | ₹2,000-₹3,500 | Above ₹3,500 ]        |
|  6. Required Delivery Date: [ Date Picker: Must be >= 7 days in advance ]                          |
|  7. Reference Photo (Optional): [ Drag & Drop Area: JPG, PNG, WebP up to 5MB ]                     |
|                                                                                                    |
|  [ SUBMIT CUSTOM ORDER INQUIRY (Deep Burgundy) ]                                                   |
+----------------------------------------------------------------------------------------------------+
```

---

## 15. Order Confirmation & Tracking Interfaces

```
+----------------------------------------------------------------------------------------------------+
| ORDER CONFIRMATION & RECEIPT INTERFACE (/checkout/confirmation/[orderId])                          |
+----------------------------------------------------------------------------------------------------+
|  [ SUCCESS CHECKMARK GLYPH (Studio Olive) ]                                                        |
|  ORDER CONFIRMED! — ORDER ID: SH-2026-10482                                                        |
|  Thank you, Pooja! Your handmade floral creation is now scheduled for studio crafting.            |
|                                                                                                    |
|  +---------------------------------------+ +-----------------------------------------------------+ |
|  | ORDER STATUS: Confirmed               | | DELIVERY ADDRESS:                                   | |
|  | PAYMENT: Paid via UPI (₹1,998)        | | Pooja Sharma (+91 9876543210)                       | |
|  | ESTIMATED DISPATCH: Within 2-3 Days   | | 402, Lotus Greens, Indiranagar, Bengaluru - 560038  | |
|  +---------------------------------------+ +-----------------------------------------------------+ |
|                                                                                                    |
|  COURIER TRACKING PIPELINE:                                                                        |
|  [X] Order Confirmed  -->  [O] In Studio Crafting  -->  [ ] Handed to Courier  -->  [ ] Delivered |
|                                                                                                    |
|  * "Tracking AWB and carrier link will appear here as soon as parcel is handed to Delhivery."      |
|                                                                                                    |
|  [ SAVE ORDER RECEIPT ON WHATSAPP ]        [ CONTINUE BROWSING ATELIER ]                           |
+----------------------------------------------------------------------------------------------------+
```

---

## 16. Admin Dashboard & Operations UI Design

The admin dashboard (`/admin`) is visually distinct from the consumer storefront—prioritizing high-density data legibility, rapid status toggles, clear tabular views, and safe destructive actions.

### 16.1 Admin Layout Shell
- **Sidebar (240px width, Charcoal `#1F1B18` background):**
  - Brand header: *"Sangita Admin"*.
  - Navigation links with clear icons: *Dashboard*, *Products*, *Orders*, *Custom Inquiries*, *Reviews*, *Settings*.
  - Logout trigger at sidebar base.
- **Top Bar (Cream `#FFF8EF` background):**
  - Breadcrumb trails (e.g., `Admin / Orders / SH-2026-10482`).
  - Active artisan avatar indicator.
  - One-click `"View Live Storefront"` link.

### 16.2 Order Management Table & Detail Inspector

```
+----------------------------------------------------------------------------------------------------+
| ADMIN ORDER INSPECTOR VIEW (/admin/orders/[id])                                                    |
+----------------------------------------------------------------------------------------------------+
| Order ID: SH-2026-10482 | Date: Oct 14, 2026 | Total: ₹1,998                                       |
|                                                                                                    |
| Customer: Pooja Sharma (+91 9876543210)                                                            |
| Address: 402, Lotus Greens, Indiranagar, Bengaluru, Karnataka - 560038                             |
|                                                                                                    |
| ORDER STATUS CONTROLS:                                                                             |
| Current Status: [ CONFIRMED v ]  (Options: PENDING, CONFIRMED, PROCESSING, DISPATCHED, DELIVERED)  |
| Payment Status: [ PAID (Verified via Razorpay HMAC) ]                                              |
|                                                                                                    |
| COURIER DISPATCH DATA:                                                                             |
| Partner Name: [ Delhivery            ]  AWB Number: [ 12849104821          ]                       |
| Tracking URL: [ https://www.delhivery.com/track/package/12849104821                               ] |
| [ ATTACH COURIER TRACKING & MARK DISPATCHED ]                                                      |
|                                                                                                    |
| INTERNAL STUDIO NOTES:                                                                             |
| [ Customer requested light lavender ribbon wrap. Packed with scented floral card.                ] |
| [ SAVE NOTES ]                                                                                     |
+----------------------------------------------------------------------------------------------------+
```

---

## 17. Form Controls, Validation States & Interaction Feedback

### 17.1 Input Field Visual Specifications
- **Idle State:** Background `#FFF8EF`, border `1px solid #EADBCC`, text `#1F1B18`, padding `12px 16px`, corner radius `8px`.
- **Focus State:** Border `1.5px solid #722F3E`, outline `2px solid rgba(198, 161, 91, 0.35)` (Gold ambient focus ring).
- **Error State:** Border `1.5px solid #9B2226`, background `#FFF2F2`, helper error text rendered below field in Crimson `#9B2226` (12px font).
- **Disabled State:** Background `#F3ECE1`, border `1px solid #E0D6C8`, text `#9E958F`, cursor `not-allowed`.

### 17.2 Button Interaction States

```
+----------------------------------------------------------------------------------------------------+
| BUTTON INTERACTION MATRIX                                                                          |
+----------------------------------------------------------------------------------------------------+
| State       | Primary Button (Burgundy Fill) | Secondary Button (Gold Outline) | WhatsApp Button   |
| :---------- | :----------------------------- | :------------------------------ | :---------------- |
| **Default** | Bg: `#722F3E`, Text: `#FFF8EF` | Bg: Trans, Border: `#C6A15B`    | Bg: `#25D366`, Wht|
| **Hover**   | Bg: `#5A2430` (Darkens 10%)    | Bg: `#FFF8EF`, Border: `#B08D47`| Bg: `#20BA5A`     |
| **Active**  | Bg: `#461B24`, Scale: `0.98`   | Scale: `0.98`                   | Scale: `0.98`     |
| **Focus**   | Ring: `2px solid #C6A15B`      | Ring: `2px solid #722F3E`       | Ring: `2px Green` |
| **Loading** | Spinner replaces text          | Spinner replaces text           | Spinner           |
| **Disabled**| Bg: `#D8CFCA`, Text: `#8E847F` | Border: `#D8CFCA`, Text: `#8E84`| Bg: `#C5E8D1`     |
+----------------------------------------------------------------------------------------------------+
```

---

## 18. Product Photography & Visual Asset Standards

### 18.1 Master Photography Directives
- **Zero Synthetic Media:** AI-generated images, synthetic renders, or commercial fresh flower stock photos must **never** be presented as handmade products created by Sangita Handmade.
- **Lighting & Tone:** Warm, indirect daylight or clean 5000K studio softbox lighting. Soft shadows only; no stark black camera flash cutouts.
- **Studio Master Image (Image 1):** Centered product on seamless Warm Cream or soft ivory paper. The complete floral silhouette must be visible with zero edge clipping.
- **Context & Scale Lifestyle Shots (Images 2–4):**
  - Held in human hands to communicate physical stem scale.
  - Placed inside a clear glass or ceramic tabletop vase.
  - Wrapped in signature boutique craft paper with satin ribbon.
  - Close-up macro shot showcasing the fuzzy, intricate chenille wire petal twists.
- **Asset Storage & Formats:** Initial assets in `public/images/products/`; production uploads via Cloudinary. Optimized to `.webp` format at 80% quality, with max dimension 1600px width.

---

## 19. Accessibility & Inclusive Design (WCAG 2.1 AA Compliance)

1. **Color Contrast Benchmarks:**
   - Burgundy `#722F3E` on Cream `#FFF8EF`: **8.1:1** (Exceeds WCAG AAA 7:1 standard).
   - Charcoal `#1F1B18` on Cream `#FFF8EF`: **14.2:1** (Exceeds WCAG AAA standard).
   - Muted Gold `#C6A15B` is restricted to decorative elements, borders, and dark-text pills; never used for body text.
2. **Accessible Touch Targets:** All buttons, quantity steppers, cart icons, and mobile menu toggles have a minimum physical hit area of **$44 \times 44\text{px}$**.
3. **Focus Indicators:** Interactive components support high-contrast visible focus rings (`2px solid #C6A15B` with 2px offset).
4. **Semantic HTML & Screen Reader Support:** Meaningful `alt` text on every image (e.g., *"Pastel pink handcrafted pipe-cleaner tulip stem in craft wrapping"*), accessible ARIA roles for drawer cart (`role="dialog"`, `aria-modal="true"`), and `aria-live` announcements on cart updates.
5. **Reduced Motion Support:** Respects user preference via `@media (prefers-reduced-motion: reduce)`, disabling non-essential slide animations and replacing them with instant opacity toggles.

---

## 20. English & Hindi Bilingual Localization Considerations

- **Devanagari Font Rendering:** Hindi typography rendered using **Noto Sans Devanagari** and **Rozha One**. These fonts have a slightly taller ascender/descender envelope than Latin fonts; form inputs and button containers must utilize flexible line heights (`line-height: 1.6`) to prevent character clipping.
- **Text Expansion Margins:** Hindi text often expands by **$15\% \text{ to } 25\%$** compared to English (e.g., *"Add to Cart"* $\rightarrow$ *"कार्ट में जोड़ें"*; *"Guest Checkout"* $\rightarrow$ *"गेस्ट चेकआउट"*). All buttons and navigation pills must use fluid horizontal padding (`padding: 10px 20px`) and flexbox layouts rather than fixed pixel widths.
- **State Preservation:** Toggling between languages must maintain the active cart contents, active form inputs, and scroll position.

---

## 21. Reusable Component Inventory

The following 18 modular UI components constitute the Sangita Handmade design system:

```
+----------------------------------------------------------------------------------------------------+
| REUSABLE UI COMPONENT INVENTORY                                                                    |
+----------------------------------------------------------------------------------------------------+
| Component Name         | Key Props / Configuration               | Primary Placement               |
| :--------------------- | :-------------------------------------- | :------------------------------ |
| **`Header`**           | `locale, cartCount, onSearchClick`      | Global layout header            |
| **`Footer`**           | `locale, policies`                      | Global layout footer            |
| **`LanguageSwitcher`** | `currentLocale, onChange`               | Header, Mobile Drawer           |
| **`ProductCard`**      | `product, onAddToCart, onQuickView`     | Shop Catalog, Featured Grid     |
| **`PriceDisplay`**     | `amountInInr, taxIncludedNotice`        | ProductCard, PDP, Cart          |
| **`StockBadge`**       | `quantity, isPublished`                 | ProductCard, PDP, Admin Tables  |
| **`Button`**           | `variant (primary/secondary/wa), size`  | Across all interactive screens  |
| **`QuantityStepper`**  | `value, min, max, onChange`             | PDP, Cart Drawer, Checkout      |
| **`GalleryViewer`**    | `images, title`                         | PDP                             |
| **`CartDrawer`**       | `isOpen, items, onClose, onCheckout`    | Global Drawer Overlay           |
| **`InputField`**       | `label, name, error, required, type`    | Checkout, Custom Order, Admin   |
| **`SelectDropdown`**   | `label, options, value, onChange`       | Checkout (State), Admin Category|
| **`StatusPill`**       | `status (order / payment status)`       | Admin Orders, Order Confirmation|
| **`EmptyState`**       | `title, description, actionButton`     | Zero Search, Empty Cart         |
| **`ConfirmModal`**     | `isOpen, title, onConfirm, onCancel`    | Admin Deletion, Item Removal    |
| **`StatCard`**         | `title, value, subtitle, icon`          | Admin Dashboard Reports         |
| **`DataTable`**        | `columns, data, actions`                | Admin Products, Admin Orders    |
| **`ToastAlert`**       | `type (success/error), message`         | Global Notification Toasts      |
+----------------------------------------------------------------------------------------------------+
```

---

## 22. Design Acceptance Criteria

The user interface design shall be deemed approved for implementation when the following verification benchmarks are confirmed:

- [ ] **Palette Consistency:** 100% of consumer storefront pages utilize the official brand colors (`#FFF8EF`, `#722F3E`, `#C6A15B`) without generic raw primaries.
- [ ] **Accessibility Contrast:** All body copy against cream backgrounds passes WCAG AA contrast (minimum 4.5:1). Gold is never used for small text.
- [ ] **Mobile Responsiveness:** Viewports at 360px, 390px, 768px, 1024px, and 1440px render without horizontal scrolling or text overlap.
- [ ] **Bilingual Integrity:** Switching to Hindi does not cause button overflow, text clipping, or broken layouts.
- [ ] **Honest Product Imagery:** Main product cards and PDPs present authentic photography; no synthetic AI or fake stock photos are used.
- [ ] **Distinct Admin Atmosphere:** The `/admin` portal features a clean, high-density, functional design clearly differentiated from the consumer boutique.
- [ ] **Transparent Pricing:** All customer touchpoints clearly display fixed prices in INR (₹) and transparent flat shipping charges.

---

## 23. Assumptions, Unresolved Decisions & Dependencies

In accordance with [`PRD.md`](file:///c:/Users/DELL/OneDrive/Documents/sangita%20handmade/PRD.md), [`TRD.md`](file:///c:/Users/DELL/OneDrive/Documents/sangita%20handmade/TRD.md), and [`APP_FLOW.md`](file:///c:/Users/DELL/OneDrive/Documents/sangita%20handmade/APP_FLOW.md), the following items are architected with flexible placeholders/defaults and require confirmation from store owner Sangita before production deployment:

| # | Item / Parameter | UI_UX_BRIEF Baseline Setting | Owner Confirmation Required Before Launch |
| :---: | :--- | :--- | :--- |
| **1** | **Flat Shipping Rate** | Displays ₹99 on cart & checkout | Confirm live flat rate or free threshold (e.g., Free above ₹1,999). |
| **2** | **Payment Gateway** | Razorpay / Cashfree styling | Confirm active merchant KYC approval for live payments. |
| **3** | **Official Contact Info** | Placeholders (`[BUSINESS_WHATSAPP]`, etc.) | Provide live WhatsApp phone number and support email address. |
| **4** | **Studio Address** | Placeholder `[BUSINESS_ADDRESS]` | Provide official physical address for footer and invoices. |
| **5** | **Instagram Profile** | Placeholder `[INSTAGRAM_URL]` | Provide active Instagram handle URL. |
| **6** | **Courier Partners** | Tracking link placeholder formats | Confirm primary carrier (Delhivery, India Post, Shiprocket). |
| **7** | **Production Domain** | Vercel default domain | Confirm custom domain registration (e.g., `sangitahandmade.com`). |

---

*End of UI/UX Design Brief & Design System Specification (UI_UX_BRIEF.md) — Sangita Handmade*
