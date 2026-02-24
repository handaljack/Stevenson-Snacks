# Patriot Snack Stop (Student-Run)

Modern, mobile-first Next.js website for a student-run snack shop serving candy, chips, sweets, and bundle deals.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Customize catalog and prices

Edit `data/products.ts`:
- Add/update products (name, category, description, price, dietary tags, image).
- Toggle `bestSeller` and `deal` badges.
- Update categories if needed.

## Reserve order flow details

- Cart state is handled with `context/CartContext.tsx`.
- Checkout form creates an order ID and stores order summaries in browser `localStorage` key: `snack-shop-orders`.
- Cart persistence uses `localStorage` key: `snack-shop-cart`.

## Compliance note

This project includes clear disclaimers that it is **not affiliated with or endorsed by Stevenson High School / District 125** and is **student-run**.
