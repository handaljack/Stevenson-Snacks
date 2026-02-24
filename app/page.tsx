import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/data/products';

const testimonials = [
  { name: 'Maya, Senior', quote: 'I can reserve snacks before 4th period and pick up fast at lunch. Huge time saver.' },
  { name: 'Ethan, Sophomore', quote: 'Bundles are actually affordable, and everything is clear about allergens.' },
  { name: 'Nora, Junior', quote: 'Great for club meeting days when everyone needs a quick snack.' }
];

const faqs = [
  'When can I pick up my order?',
  'Can I change my order after submitting?',
  'How are allergy warnings displayed?'
];

export default function Home() {
  const bestSellers = products.filter((item) => item.bestSeller).slice(0, 4);

  return (
    <div className="space-y-10">
      <section className="pattern-bg rounded-3xl bg-stevenson-green px-6 py-10 text-white shadow-card md:px-10">
        <p className="serif-accent text-stevenson-gold">Student-run • Fast pickup • Fair prices</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Snack Shop at Stevenson</h1>
        <p className="mt-4 max-w-2xl text-stevenson-coolGray2">
          Reserve candy, chips, sweets, and bundles in seconds. Built for lunch periods, club meetings, and after-practice cravings.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/shop" className="rounded-full bg-stevenson-gold px-5 py-3 font-bold text-stevenson-green">
            Shop Snacks
          </Link>
          <Link href="/checkout" className="rounded-full border border-white px-5 py-3 font-bold text-white">
            Reserve Order
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl text-stevenson-green">Best Sellers</h2>
          <span className="rounded-full bg-stevenson-gold px-3 py-1 text-xs font-bold text-stevenson-green">Top picks this week</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <Link key={category} href="/shop" className="rounded-2xl bg-white p-5 shadow-card">
            <h3 className="text-xl text-stevenson-green">{category}</h3>
            <p className="text-sm text-stevenson-coolGray10">Explore {category.toLowerCase()} options.</p>
          </Link>
        ))}
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-card">
        <h2 className="text-2xl text-stevenson-green">How it works</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {['Browse + add to cart', 'Reserve with your name + pickup time', 'Grab snacks at approved pickup spot'].map((step, idx) => (
            <div key={step} className="rounded-xl border border-stevenson-coolGray2 p-4">
              <p className="text-sm font-bold text-stevenson-gold">Step {idx + 1}</p>
              <p className="font-semibold text-stevenson-green">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-2xl bg-white p-5 shadow-card">
            <p className="serif-accent text-stevenson-warmGray">“{item.quote}”</p>
            <p className="mt-3 text-sm font-bold text-stevenson-green">{item.name}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-card">
        <h2 className="text-2xl text-stevenson-green">FAQ Preview</h2>
        <ul className="mt-4 space-y-2 text-stevenson-coolGray10">
          {faqs.map((item) => (
            <li key={item} className="rounded-lg bg-stevenson-coolGray2/40 p-3">{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
