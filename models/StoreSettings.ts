import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStoreSettings extends Document {
  businessName: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  shippingFee: number;
  freeShippingThreshold: number;
  isCodEnabled: boolean;
  announcement?: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const StoreSettingsSchema = new Schema<IStoreSettings>(
  {
    businessName: { type: String, default: 'Sangita Handmade' },
    phone: { type: String, default: '+91 98765 43210' },
    whatsapp: { type: String, default: '919876543210' },
    email: { type: String, default: 'support@sangitahandmade.com' },
    address: { type: String, default: 'Indiranagar, Bengaluru, Karnataka 560038, India' },
    shippingFee: { type: Number, default: 99 },
    freeShippingThreshold: { type: Number, default: 1999 },
    isCodEnabled: { type: Boolean, default: true },
    announcement: { type: String, default: 'Handcrafted with Love in India • Free Delivery on Orders Above ₹1,999' },
    socialLinks: {
      instagram: { type: String, default: 'https://instagram.com/sangitahandmade' },
      facebook: { type: String, default: 'https://facebook.com/sangitahandmade' },
      youtube: { type: String, default: 'https://youtube.com/@sangitahandmade' },
    },
  },
  {
    timestamps: true,
  }
);

const StoreSettings: Model<IStoreSettings> =
  mongoose.models.StoreSettings ||
  mongoose.model<IStoreSettings>('StoreSettings', StoreSettingsSchema);

export default StoreSettings;
