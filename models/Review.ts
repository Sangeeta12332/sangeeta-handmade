import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IReview extends Document {
  productId?: mongoose.Types.ObjectId | string;
  productSlug: string;
  customerName: string;
  rating: number;
  comment: string;
  status: 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED';
  isVerifiedPurchase: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema<IReview>(
  {
    productId: { type: Schema.Types.Mixed },
    productSlug: { type: String, required: true, index: true },
    customerName: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['PENDING_APPROVAL', 'APPROVED', 'REJECTED'],
      default: 'PENDING_APPROVAL',
      index: true,
    },
    isVerifiedPurchase: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);

export default Review;
