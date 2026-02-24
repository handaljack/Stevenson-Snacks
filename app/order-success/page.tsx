'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function OrderSuccessPage() {
  const params = useSearchParams();
  const orderId = params.get('orderId');

  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-card">
      <p className="text-sm font-semibold text-stevenson-gold">Reserve Order Confirmed</p>
      <h1 className="mt-2 text-3xl text-stevenson-green">Thanks for your order!</h1>
      <p className="mt-4 text-stevenson-coolGray10">Your order ID is:</p>
      <p className="mt-1 text-2xl font-extrabold text-stevenson-green">{orderId ?? 'Pending'}</p>
      <p className="mt-4 text-sm text-stevenson-coolGray10">Your summary has been saved in this browser for demo purposes.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/shop" className="rounded-full bg-stevenson-green px-5 py-2 font-bold text-white">Continue Shopping</Link>
        <Link href="/checkout" className="rounded-full border border-stevenson-green px-5 py-2 font-bold text-stevenson-green">Back to Cart</Link>
      </div>
    </section>
  );
}
