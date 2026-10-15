import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICustomInquiry extends Document {
  inquiryNumber: string;
  customerName: string;
  phone: string;
  creationType: string;
  occasion?: string;
  colors: string;
  budget?: string;
  requiredDate: string;
  referenceImage?: string;
  notes?: string;
  status: 'NEW' | 'CONSULTING' | 'QUOTED' | 'ACCEPTED' | 'CONVERTED_TO_ORDER' | 'DECLINED';
  adminNotes?: string;
  quoteAmount?: number;
  convertedOrderId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CustomInquirySchema = new Schema<ICustomInquiry>(
  {
    inquiryNumber: { type: String, required: true, unique: true, index: true },
    customerName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true, index: true },
    creationType: { type: String, required: true },
    occasion: { type: String, trim: true },
    colors: { type: String, required: true },
    budget: { type: String },
    requiredDate: { type: String, required: true },
    referenceImage: { type: String },
    notes: { type: String },
    status: {
      type: String,
      enum: ['NEW', 'CONSULTING', 'QUOTED', 'ACCEPTED', 'CONVERTED_TO_ORDER', 'DECLINED'],
      default: 'NEW',
      index: true,
    },
    adminNotes: { type: String },
    quoteAmount: { type: Number },
    convertedOrderId: { type: String },
  },
  {
    timestamps: true,
  }
);

const CustomInquiry: Model<ICustomInquiry> =
  mongoose.models.CustomInquiry ||
  mongoose.model<ICustomInquiry>('CustomInquiry', CustomInquirySchema);

export default CustomInquiry;
