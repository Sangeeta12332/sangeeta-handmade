export type Locale = 'en' | 'hi';

export interface ProductImage {
  url: string;
  alt_en: string;
  alt_hi: string;
  isMain: boolean;
  displayOrder: number;
}

export interface Product {
  _id: string;
  title_en: string;
  title_hi: string;
  slug: string;
  sku: string;
  description_en: string;
  description_hi: string;
  categoryId: string;
  categorySlug: string;
  categoryName_en?: string;
  categoryName_hi?: string;
  priceInInr: number;
  originalPriceInInr?: number;
  images: ProductImage[];
  stockQuantity: number;
  isPublished: boolean;
  isFeatured: boolean;
  productType: 'READY_MADE' | 'CUSTOMIZABLE';
  materials_en?: string;
  materials_hi?: string;
  dimensions_en?: string;
  dimensions_hi?: string;
  careGuide_en?: string;
  careGuide_hi?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  name_en: string;
  name_hi: string;
  slug: string;
  description_en?: string;
  description_hi?: string;
  imageUrl?: string;
  displayOrder: number;
  isActive: boolean;
}

export interface CartItem {
  productId: string;
  title_en: string;
  title_hi: string;
  slug: string;
  priceInInr: number;
  quantity: number;
  thumbnail: string;
  stockQuantity: number;
}

export interface CustomerAddress {
  fullName: string;
  mobileNumber: string;
  email?: string;
  houseStreet: string;
  localityArea: string;
  city: string;
  state: string;
  pinCode: string;
  deliveryInstructions?: string;
}

export interface OrderItemSnapshot {
  productId: string;
  title_en: string;
  title_hi: string;
  slug: string;
  sku: string;
  unitPrice: number;
  quantity: number;
  thumbnail: string;
  lineTotal: number;
}

export type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PROCESSING'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'RETURNED';

export type PaymentStatus =
  | 'PENDING'
  | 'PAID'
  | 'FAILED'
  | 'PENDING_COD'
  | 'REFUNDED';

export type PaymentMethod = 'GATEWAY' | 'UPI_QR' | 'COD' | 'WHATSAPP';

export interface Order {
  _id: string;
  orderId: string;
  customer: CustomerAddress;
  items: OrderItemSnapshot[];
  subtotal: number;
  shippingFee: number;
  discountAmount: number;
  totalAmount: number;
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  paymentDetails?: {
    gatewayName?: string;
    transactionId?: string;
    paymentId?: string;
    signatureVerified?: boolean;
    paidAt?: string;
  };
  courierDetails?: {
    partnerName?: string;
    trackingAwb?: string;
    trackingUrl?: string;
    dispatchedAt?: string;
    deliveredAt?: string;
  };
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomInquiry {
  _id: string;
  inquiryId: string;
  customerName: string;
  mobileNumber: string;
  creationType: string;
  occasion?: string;
  colorNotes: string;
  budgetRange?: string;
  deliveryDeadline: string;
  referenceImageUrl?: string;
  additionalNotes?: string;
  status: 'ENQUIRY_RECEIVED' | 'CONTACTED' | 'QUOTED' | 'CONVERTED_TO_ORDER' | 'DECLINED';
  agreedPriceInInr?: number;
  convertedOrderId?: string;
  adminNotes?: string;
  createdAt: string;
}

export interface Review {
  _id: string;
  productId: string;
  productTitle?: string;
  customerName: string;
  rating: number;
  reviewText: string;
  photoUrl?: string;
  isVerifiedPurchase: boolean;
  status: 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}

export interface StoreSettings {
  flatShippingFee: number;
  freeShippingThreshold?: number;
  isCodEnabled: boolean;
  currency: string;
  storePhonePlaceholder: string;
  storeEmailPlaceholder: string;
  storeAddressPlaceholder: string;
  instagramUrlPlaceholder: string;
  announcementText_en: string;
  announcementText_hi: string;
}
