export const products = [
  // Roses
  {
    id: 1,
    name: "Classic Red Rose Bouquet",
    category: "Roses",  // ← Must match button label exactly
    price: 29.99,
    image: "🌹",
    description: "A timeless bouquet of 12 premium red roses, perfect for expressing love.",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Pink Rose Elegance",
    category: "Roses",
    price: 34.99,
    image: "🌷",
    description: "Soft pink roses arranged in a beautiful glass vase.",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: "Golden Rose Luxury",
    category: "Roses",
    price: 49.99,
    image: "🌻",
    description: "Luxurious golden roses with a touch of elegance.",
    rating: 4.9,
    reviews: 56,
    inStock: true,
    featured: true
  },

  // Lilies
  {
    id: 4,
    name: "White Lily Serenity",
    category: "Lilies",  // ← Must match button label exactly
    price: 39.99,
    image: "🌺",
    description: "Peaceful white lilies that bring calm and beauty to any space.",
    rating: 4.7,
    reviews: 78,
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Stargazer Lily Collection",
    category: "Lilies",
    price: 44.99,
    image: "🌸",
    description: "Vibrant stargazer lilies with a delightful fragrance.",
    rating: 4.5,
    reviews: 92,
    inStock: true,
    featured: false
  },

  // Orchids
  {
    id: 6,
    name: "Purple Orchid Delight",
    category: "Orchids",  // ← Must match button label exactly
    price: 54.99,
    image: "🌿",
    description: "Exquisite purple orchids for a touch of sophistication.",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "White Orchid Beauty",
    category: "Orchids",
    price: 59.99,
    image: "🌱",
    description: "Elegant white orchids that symbolize purity and strength.",
    rating: 4.8,
    reviews: 45,
    inStock: false,
    featured: false
  },

  // Mixed
  {
    id: 8,
    name: "Seasonal Mixed Bouquet",
    category: "Mixed",  // ← Must match button label exactly
    price: 44.99,
    image: "💐",
    description: "A beautiful mix of seasonal flowers, hand-picked by our florists.",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: "Sunshine Collection",
    category: "Mixed",
    price: 39.99,
    image: "🌼",
    description: "Bright and cheerful flowers that bring sunshine to any day.",
    rating: 4.4,
    reviews: 134,
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: "Luxury Garden Box",
    category: "Mixed",
    price: 79.99,
    image: "🌳",
    description: "A premium collection of our finest blooms in a beautiful box.",
    rating: 5.0,
    reviews: 34,
    inStock: true,
    featured: true
  }
];

// Get all categories (unique)
export const categories = [...new Set(products.map(p => p.category))];

// Get featured products
export const getFeaturedProducts = () => products.filter(p => p.featured);

// Get products by category
export const getProductsByCategory = (category) => 
  products.filter(p => p.category === category);

// Get product by id
export const getProductById = (id) => products.find(p => p.id === id);