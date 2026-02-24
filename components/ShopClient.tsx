'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/data/products';

export default function ShopClient() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(10);
  const [tag, setTag] = useState('all');

  const tags = useMemo(() => ['all', ...new Set(products.flatMap((product) => product.tags))], []);

  const filtered = products.filter((product) => {
    const matchesQuery = `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    const matchesPrice = product.price <= maxPrice;
    const matchesTag = tag === 'all' || product.tags.includes(tag);
    return matchesQuery && matchesCategory && matchesPrice && matchesTag;
  });

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-4 shadow-card">
        <div className="grid gap-4 md:grid-cols-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search snacks..."
            className="rounded-xl border border-stevenson-coolGray7 px-3 py-2"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-stevenson-coolGray7 px-3 py-2">
            <option>All</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select value={tag} onChange={(e) => setTag(e.target.value)} className="rounded-xl border border-stevenson-coolGray7 px-3 py-2">
            {tags.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label className="flex flex-col rounded-xl border border-stevenson-coolGray7 px-3 py-2 text-sm">
            Max price: ${maxPrice.toFixed(2)}
            <input type="range" min={1} max={10} step={0.25} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
          </label>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
