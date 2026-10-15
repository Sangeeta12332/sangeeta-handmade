import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  sku?: string;
  description: string;
  shortDescription?: string;
  price: number;
  originalPrice?: number;
  stock: number;
  categoryId?: mongoose.Types.ObjectId;
  categorySlug: string;
  images: string[];
  tags: string[];
  isFeatured: boolean;
  isActive: boolean;
  materials?: string[];
  careInstructions?: string;
  dimensions?: string;
  weightGrams?: number;
  craftTimeDays?: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    sku: { type: String, trim: true, sparse: true },
    description: { type: String, required: true },
    shortDescription: { type: String, trim: true },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, min: 0 },
    stock: { type: Number, required: true, default: 0, min: 0 },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
    categorySlug: { type: String, required: true, index: true },
    images: { type: [String], required: true, default: [] },
    tags: { type: [String], default: [] },
    isFeatured: { type: Boolean, default: false, index: true },
    isActive: { type: Boolean, default: true, index: true },
    materials: { type: [String], default: [] },
    careInstructions: { type: String },
    dimensions: { type: String },
    weightGrams: { type: Number },
    craftTimeDays: { type: Number, default: 2 },
  },
  {
    timestamps: true,
  }
);

// Prevent re-compilation during hot reload
const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
