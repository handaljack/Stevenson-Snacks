export type Category = 'Candy' | 'Chips' | 'Sweets' | 'Bundles';

export type Product = {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  tags: string[];
  image: string;
  bestSeller?: boolean;
  deal?: boolean;
};

export const products: Product[] = [
  { id: 'c1', name: 'Sour Rainbow Bites', category: 'Candy', description: 'Tangy chewy strips packed in a lunch-size pouch.', price: 1.75, tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80', bestSeller: true },
  { id: 'c2', name: 'Chocolate Peanut Cups', category: 'Candy', description: 'Two creamy cups with rich chocolate shell.', price: 1.5, tags: ['nut-warning'], image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80' },
  { id: 'c3', name: 'Minty Chocolate Squares', category: 'Candy', description: 'Cool mint center in crisp chocolate.', price: 1.5, tags: ['gluten-free'], image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80' },
  { id: 'c4', name: 'Fruit Chew Mix', category: 'Candy', description: 'Assorted fruit chews with no artificial colors.', price: 1.25, tags: ['gluten-free'], image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=800&q=80' },
  { id: 'c5', name: 'Caramel Pop Drops', category: 'Candy', description: 'Crunchy candy shell and buttery caramel core.', price: 1.25, tags: ['contains-dairy'], image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=800&q=80' },
  { id: 'c6', name: 'Gummy Bear Cup', category: 'Candy', description: 'Mini cup loaded with classic gummies.', price: 1.0, tags: ['gelatin'], image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80' },

  { id: 'ch1', name: 'Classic Sea Salt Chips', category: 'Chips', description: 'Crispy kettle chips with balanced salt.', price: 1.5, tags: ['vegan', 'gluten-free'], image: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?auto=format&fit=crop&w=800&q=80', bestSeller: true },
  { id: 'ch2', name: 'Cheddar Crunch Chips', category: 'Chips', description: 'Bold cheddar flavor in every bite.', price: 1.75, tags: ['contains-dairy'], image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80' },
  { id: 'ch3', name: 'Spicy Lime Chips', category: 'Chips', description: 'A tangy kick for spice fans.', price: 1.75, tags: ['vegan'], image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80', deal: true },
  { id: 'ch4', name: 'BBQ Ridged Chips', category: 'Chips', description: 'Smoky sweet BBQ ridges.', price: 1.5, tags: ['vegan'], image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80' },
  { id: 'ch5', name: 'Baked Sour Cream Crisps', category: 'Chips', description: 'Light baked snack with sour cream onion.', price: 1.5, tags: ['contains-dairy'], image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80' },
  { id: 'ch6', name: 'Tortilla Nacho Minis', category: 'Chips', description: 'Crunchy mini nacho triangles.', price: 1.25, tags: ['gluten-free'], image: 'https://images.unsplash.com/photo-1619740455993-9e6123f056f7?auto=format&fit=crop&w=800&q=80' },

  { id: 's1', name: 'Chocolate Chip Cookie', category: 'Sweets', description: 'Soft baked cookie with melty chips.', price: 1.5, tags: ['contains-dairy', 'contains-wheat'], image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80', bestSeller: true },
  { id: 's2', name: 'Brownie Square', category: 'Sweets', description: 'Fudgy brownie dusted with cocoa.', price: 1.75, tags: ['contains-dairy', 'contains-wheat'], image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80' },
  { id: 's3', name: 'Rice Crispy Treat', category: 'Sweets', description: 'Classic marshmallow cereal square.', price: 1.25, tags: ['gluten-free'], image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80' },
  { id: 's4', name: 'Cinnamon Sugar Churro Bites', category: 'Sweets', description: 'Mini churro bites with cinnamon sparkle.', price: 1.75, tags: ['contains-wheat'], image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80', deal: true },
  { id: 's5', name: 'Vanilla Yogurt Pretzels', category: 'Sweets', description: 'Sweet and salty yogurt-coated twists.', price: 1.5, tags: ['contains-dairy', 'contains-wheat'], image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80' },
  { id: 's6', name: 'Mini Donut Pack', category: 'Sweets', description: 'Three powdered mini donuts.', price: 1.5, tags: ['contains-wheat'], image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80' },

  { id: 'b1', name: 'Sweet Tooth Combo', category: 'Bundles', description: 'Cookie + gummy cup + sea salt chips (save $0.50).', price: 3.5, tags: ['bundle-deal', 'nut-warning'], image: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=800&q=80', bestSeller: true, deal: true },
  { id: 'b2', name: 'Crunch Time Bundle', category: 'Bundles', description: 'BBQ chips + brownie + fruit chew mix.', price: 3.75, tags: ['bundle-deal'], image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80' },
  { id: 'b3', name: 'Lunch Period Power Pack', category: 'Bundles', description: 'Nacho minis + mint squares + rice crispy treat.', price: 3.25, tags: ['bundle-deal', 'gluten-free-option'], image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=800&q=80' },
  { id: 'b4', name: 'After Practice Snack Set', category: 'Bundles', description: 'Cheddar chips + donut pack + caramel drops.', price: 3.95, tags: ['bundle-deal', 'contains-dairy'], image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80', deal: true },
  { id: 'b5', name: 'Share-With-A-Friend Box', category: 'Bundles', description: 'Two candy picks, two chips, and two sweet bites.', price: 6.5, tags: ['bundle-deal', 'nut-warning'], image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80' },
  { id: 'b6', name: 'Study Session Sampler', category: 'Bundles', description: 'Balanced sweet + savory assortment for long study nights.', price: 4.25, tags: ['bundle-deal'], image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80' }
];

export const categories: Category[] = ['Candy', 'Chips', 'Sweets', 'Bundles'];
