export const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

// Grouped categories to nest subcategories, to avoid a very long menu
export const groupedCategories = {
  Electronics: ["laptops", "smartphones", "tablets", "mobile-accessories"],
  Fashion: {
    Men: ["mens-shirts", "mens-shoes", "mens-watches"],
    Women: ["womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"],
    Accessories: ["sunglasses", "sports-accessories"],
  },
  "Beauty & Health": ["beauty", "skin-care", "fragrances"],
  "Home & Living": {
    "Furniture & Decor": ["furniture", "home-decoration"],
    "Kitchen & Accessories": ["kitchen-accessories"],
  },
  "Groceries & Food": ["groceries"],
  Automotive: ["vehicle", "motorcycle"],
};