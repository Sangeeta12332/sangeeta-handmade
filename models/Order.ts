import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IOrderItem {
  productId?: mongoose.Types.ObjectId | string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  lineTotal: number;
}

export interface IOrderCustomer {
  fullName: string;
  phone: string;
  email?: string;
  shippingAddress: {
    street: string;
    area: string;
    city: string;
    state: string;
    pinCode: string;
  };
}

export interface IOrderPricing {
  subtotal: number;
  shippingFee: number;
  grandTotal: number;
}

export interface IOrderTracking {
  courier?: string;
  trackingNumber?: string;
  trackingUrl?: string;
  shippedAt?: Date;
}

export interface IOrder extends Document {
  orderNumber: string;
  orderStatus: 'PENDING' | 'CONFIRMED' | 'CRAFTING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  paymentStatus: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
  paymentMethod: 'ONLINE' | 'COD' | 'WHATSAPP';
  customer: IOrderCustomer;
  items: IOrderItem[];
  pricing: IOrderPricing;
  customerNotes?: string;
  adminNotes?: string;
  tracking?: IOrderTracking;
  deliveredAt?: Date;
  cancelledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>(
  {
    productId: { type: Schema.Types.Mixed },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    image: { type: String, default: '/images/placeholder.jpg' },
    lineTotal: { type: Number, required: true },
  },
  { _id: false }
);

const OrderCustomerSchema = new Schema<IOrderCustomer>(
  {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    shippingAddress: {
      street: { type: String, required: true },
      area: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pinCode: { type: String, required: true },
    },
  },
  { _id: false }
);

const OrderPricingSchema = new Schema<IOrderPricing>(
  {
    subtotal: { type: Number, required: true },
    shippingFee: { type: Number, required: true, default: 0 },
    grandTotal: { type: Number, required: true },
  },
  { _id: false }
);

const OrderTrackingSchema = new Schema<IOrderTracking>(
  {
    courier: { type: String, trim: true },
    trackingNumber: { type: String, trim: true },
    trackingUrl: { type: String, trim: true },
    shippedAt: { type: Date },
  },
  { _id: false }
);

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: { type: String, required: true, unique: true, index: true },
    orderStatus: {
      type: String,
      enum: ['PENDING', 'CONFIRMED', 'CRAFTING', 'SHIPPED', 'DELIVERED', 'CANCELLED'],
      default: 'CONFIRMED',
      index: true,
    },
    paymentStatus: {
      type: String,
      enum: ['PENDING', 'PAID', 'FAILED', 'REFUNDED'],
      default: 'PENDING',
      index: true,
    },
    paymentMethod: {
      type: String,
      enum: ['ONLINE', 'COD', 'WHATSAPP'],
      default: 'ONLINE',
    },
    customer: { type: OrderCustomerSchema, required: true },
    items: { type: [OrderItemSchema], required: true },
    pricing: { type: OrderPricingSchema, required: true },
    customerNotes: { type: String },
    adminNotes: { type: String },
    tracking: { type: OrderTrackingSchema },
    deliveredAt: { type: Date },
    cancelledAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
