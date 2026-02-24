'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/checkout', label: 'Reserve Order' }
];

export default function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-stevenson-coolGray2 bg-stevenson-green text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stevenson-gold text-stevenson-green">🍬</div>
          <div>
            <p className="text-lg font-extrabold">Patriot Snack Stop</p>
            <p className="text-xs text-stevenson-coolGray2">Student-run at SHS</p>
          </div>
        </Link>

        <nav className="hidden gap-5 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'text-stevenson-gold' : 'text-white hover:text-stevenson-coolGray2'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/checkout" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-stevenson-green">
          Cart ({itemCount})
        </Link>
      </div>
    </header>
  );
}
