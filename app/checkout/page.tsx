'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { items, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const router = useRouter();
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [pickupTime, setPickupTime] = useState('Lunch Period 5');
  const [notes, setNotes] = useState('');

  const handleReserve = (e: FormEvent) => {
    e.preventDefault();
    if (!name || items.length === 0) return;

    const orderId = `PS-${Date.now().toString().slice(-6)}`;
    const order = {
      orderId,
      name,
      grade,
      pickupTime,
      notes,
      items,
      subtotal: subtotal.toFixed(2),
      createdAt: new Date().toISOString()
    };

    const existingOrders = JSON.parse(localStorage.getItem('snack-shop-orders') || '[]');
    existingOrders.unshift(order);
    localStorage.setItem('snack-shop-orders', JSON.stringify(existingOrders));
    clearCart();
    router.push(`/order-success?orderId=${orderId}`);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="space-y-3 rounded-2xl bg-white p-5 shadow-card lg:col-span-2">
        <h1 className="text-3xl text-stevenson-green">Cart + Reserve Order</h1>
        {items.length === 0 ? (
          <p className="text-stevenson-coolGray10">
            Your cart is empty. <Link className="text-stevenson-blue underline" href="/shop">Browse snacks</Link>.
          </p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <article key={item.id} className="flex items-center justify-between rounded-xl border border-stevenson-coolGray2 p-3">
                <div>
                  <p className="font-semibold text-stevenson-green">{item.name}</p>
                  <p className="text-sm text-stevenson-coolGray10">${item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-full bg-stevenson-coolGray2 px-3 py-1">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full bg-stevenson-coolGray2 px-3 py-1">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="rounded-full bg-stevenson-red px-3 py-1 text-white">Remove</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4 rounded-2xl bg-white p-5 shadow-card">
        <h2 className="text-xl text-stevenson-green">Reserve Details</h2>
        <p className="font-semibold text-stevenson-red">
          Not affiliated with or endorsed by Stevenson High School / District 125. Student-run.
        </p>
        <form onSubmit={handleReserve} className="space-y-3">
          <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-stevenson-coolGray7 px-3 py-2" placeholder="Name" />
          <input value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full rounded-xl border border-stevenson-coolGray7 px-3 py-2" placeholder="Grade (optional)" />
          <select value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="w-full rounded-xl border border-stevenson-coolGray7 px-3 py-2">
            <option>Lunch Period 4</option>
            <option>Lunch Period 5</option>
            <option>Lunch Period 6</option>
            <option>After School (3:20-3:35 PM)</option>
          </select>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="h-24 w-full rounded-xl border border-stevenson-coolGray7 px-3 py-2" placeholder="Notes / allergy reminders" />
          <p className="font-bold text-stevenson-green">Subtotal: ${subtotal.toFixed(2)}</p>
          <button type="submit" className="w-full rounded-full bg-stevenson-green px-4 py-2 font-bold text-white">Submit Reserve Order</button>
        </form>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-card lg:col-span-3">
        <h2 className="text-xl text-stevenson-green">Pickup Rules</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-stevenson-coolGray10">
          <li>Pickup location: Arrange at school per rules (exact location shared in confirmation).</li>
          <li>Refund policy: Placeholder — requests reviewed for item issues or stock-outs.</li>
          <li>Allergy warning: Items may be processed in shared environments with nuts, dairy, and wheat.</li>
          <li>All orders and pickups are subject to school rules.</li>
        </ul>
      </section>
    </div>
  );
}
