import ShopClient from '@/components/ShopClient';

export default function ShopPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-stevenson-green">Shop All Snacks</h1>
      <p className="text-stevenson-coolGray10">Use search and filters to quickly find candy, chips, sweets, and bundle deals.</p>
      <ShopClient />
    </div>
  );
}
