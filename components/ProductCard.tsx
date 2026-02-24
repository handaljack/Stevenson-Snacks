'use client';

import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1">
      <div className="relative h-40">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
        {product.deal && (
          <span className="absolute left-2 top-2 rounded-full bg-stevenson-red px-2 py-1 text-xs font-bold text-white">Deals</span>
        )}
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg text-stevenson-green">{product.name}</h3>
          <p className="font-bold text-stevenson-gold">${product.price.toFixed(2)}</p>
        </div>
        <p className="text-sm text-stevenson-coolGray10">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-stevenson-coolGray2 px-2 py-1 text-xs font-semibold text-stevenson-green">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full rounded-full bg-stevenson-green px-4 py-2 font-semibold text-white hover:bg-stevenson-blue"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
