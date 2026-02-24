import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'Stevenson Snack Shop (Student-Run)',
  description: 'Student-run snack reserve site for candy, chips, sweets, and bundles.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen bg-stevenson-coolGray2/20">
            <Header />
            <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
