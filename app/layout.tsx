import type { Metadata } from 'next';
import './globals.css';
import { LocaleProvider } from '@/context/LocaleContext';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';

export const metadata: Metadata = {
  title: 'Sangita Handmade — Artisanal Everlasting Flowers & Bespoke Keepsakes',
  description: 'Shop premium handcrafted pipe-cleaner flowers, everlasting bouquets, personalized gift hampers, and home decor items made with love in India.',
  keywords: 'pipe cleaner flowers, handmade bouquets, everlasting flowers, custom gifts India, handmade wedding keepsakes, Sangita Handmade',
  openGraph: {
    title: 'Sangita Handmade — Artisanal Everlasting Flowers',
    description: 'Bespoke pipe-cleaner floral artistry and everlasting bouquets crafted in India.',
    url: 'https://sangitahandmade.com',
    siteName: 'Sangita Handmade',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          <CartProvider>
            <Header />
            <CartDrawer />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </CartProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
