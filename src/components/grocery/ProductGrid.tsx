import React, { useState, useMemo } from "react";
import ProductCard, { Product } from "./ProductCard";
import { Grid, List, Filter, SortAsc } from "lucide-react";
import { HomePageConfig } from "@/context/landingPageConfig.types";

interface ProductGridProps {
  category: string;
  searchQuery?: string;
  className?: string;
  cardsConfig: HomePageConfig["productCard"];
}

// Sample product data
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Organic Bananas",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop&auto=format",
    price: 2.99,
    originalPrice: 3.99,
    unit: "lb",
    weight: "2-3 lbs",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    isOrganic: true,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Farm Fresh Strawberries",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop&auto=format",
    price: 4.49,
    unit: "container",
    weight: "1 lb container",
    rating: 4.7,
    reviewCount: 92,
    inStock: true,
    isOrganic: true,
    isFavorite: true,
  },
  {
    id: "3",
    name: "Whole Milk Gallon",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop&auto=format",
    price: 3.79,
    unit: "gallon",
    weight: "1 gallon",
    rating: 4.3,
    reviewCount: 156,
    inStock: true,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Sourdough Bread Loaf",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop&auto=format",
    price: 2.99,
    originalPrice: 3.49,
    unit: "loaf",
    weight: "24 oz",
    rating: 4.6,
    reviewCount: 73,
    inStock: true,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Free Range Chicken Breast",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=300&fit=crop&auto=format",
    price: 8.99,
    unit: "lb",
    weight: "1-2 lbs",
    rating: 4.4,
    reviewCount: 84,
    inStock: true,
    isFavorite: false,
  },
  {
    id: "6",
    name: "Mixed Salad Greens",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=300&fit=crop&auto=format",
    price: 3.49,
    unit: "bag",
    weight: "5 oz bag",
    rating: 4.2,
    reviewCount: 67,
    inStock: false,
    isOrganic: true,
    isFavorite: false,
  },
  {
    id: "7",
    name: "Greek Yogurt Cups",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop&auto=format",
    price: 5.99,
    originalPrice: 7.99,
    unit: "pack",
    weight: "4-pack",
    rating: 4.5,
    reviewCount: 112,
    inStock: true,
    isFavorite: true,
  },
  {
    id: "8",
    name: "Avocados (Pack of 4)",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop&auto=format",
    price: 4.99,
    unit: "pack",
    weight: "4 pieces",
    rating: 4.1,
    reviewCount: 95,
    inStock: true,
    isOrganic: true,
    isFavorite: false,
  },
  {
    id: "9",
    name: "Organic Baby Spinach",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop&auto=format",
    price: 2.79,
    unit: "bag",
    weight: "5 oz bag",
    rating: 4.6,
    reviewCount: 88,
    inStock: true,
    isOrganic: true,
    isFavorite: false,
  },
  {
    id: "11",
    name: "Honey Crisp Apples",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop&auto=format",
    price: 3.99,
    unit: "lb",
    weight: "2-3 lbs",
    rating: 4.7,
    reviewCount: 134,
    inStock: true,
    isFavorite: false,
  },
  {
    id: "12",
    name: "Cheddar Cheese Block",
    image:
      "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=300&h=300&fit=crop&auto=format",
    price: 4.49,
    unit: "block",
    weight: "8 oz",
    rating: 4.4,
    reviewCount: 76,
    inStock: true,
    isFavorite: false,
  },
];

// const sortOptions = [
//   { value: "relevance", label: "Most Relevant" },
//   { value: "price-low", label: "Price: Low to High" },
//   { value: "price-high", label: "Price: High to Low" },
//   { value: "rating", label: "Highest Rated" },
//   { value: "newest", label: "Newest First" },
// ];

// const filterOptions = [
//   { value: "all", label: "All Products" },
//   { value: "organic", label: "Organic Only" },
//   { value: "on-sale", label: "On Sale" },
//   { value: "in-stock", label: "In Stock Only" },
// ];

export default function ProductGrid({
  // category,
  // searchQuery = "",
  className = "",
  cardsConfig,
}: ProductGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  // const [sortBy, setSortBy] = useState("relevance");
  // const [filterBy, setFilterBy] = useState("all");
  // const [showFilters, setShowFilters] = useState(false);

  // console.log("ProductGrid props:", { category, searchQuery }, sampleProducts);
  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const products = [...sampleProducts];

    // Apply search filter
    // if (searchQuery) {
    //   products = products.filter((product) =>
    //     product.name.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
    // }

    // // Apply category filter (simplified for demo)
    // if (category !== "all") {
    //   // In a real app, products would have category IDs
    //   // For demo, we'll show all products regardless of category
    // }

    // // Apply additional filters
    // switch (filterBy) {
    //   case "organic":
    //     products = products.filter((p) => p.isOrganic);
    //     break;
    //   case "on-sale":
    //     products = products.filter(
    //       (p) => p.originalPrice && p.originalPrice > p.price
    //     );
    //     break;
    //   case "in-stock":
    //     products = products.filter((p) => p.inStock);
    //     break;
    // }

    // // Apply sorting
    // switch (sortBy) {
    //   case "price-low":
    //     products.sort((a, b) => a.price - b.price);
    //     break;
    //   case "price-high":
    //     products.sort((a, b) => b.price - a.price);
    //     break;
    //   case "rating":
    //     products.sort((a, b) => b.rating - a.rating);
    //     break;
    //   case "newest":
    //     // In a real app, you'd sort by creation date
    //     products.reverse();
    //     break;
    // }

    return products;
  }, []);

  const handleAddToCart = (productId: string, quantity: number) => {
    console.log(`Added product ${productId} with quantity ${quantity} to cart`);
    // In a real app, this would update global cart state
  };

  const handleToggleFavorite = (productId: string) => {
    console.log(`Toggled favorite for product ${productId}`);
    // In a real app, this would update the product's favorite status
  };

  return (
    <div className={`${className}`}>
      {/* Header with controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        {/* <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {category === "all" ? "All Products" : "Products"}
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            {filteredProducts.length} products found
          </p>
        </div> */}

        {/* <div className="flex items-center space-x-3"> */}
        {/* Filter Button */}
        {/* <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button> */}

        {/* Sort Dropdown */}
        {/* <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}

        {/* View Toggle */}
        {/* bg-gray-100 */}
        {/* <div className="flex border bg-gray-100 border-gray-500 rounded-[10px] p-1 gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-gray-200"
            }`}
          >
            <Grid className={`w-4 h-4`} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-gray-200"
            }`}
          >
            <List className={`w-4 h-4`} />
          </button>
        </div> */}
      </div>
      {/* </div> */}

      {/* Filters Row */}
      {/* {showFilters && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setFilterBy(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filterBy === filter.value
                    ? "bg-teal-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      )} */}

      {/* Product Grid */}
      <div
        className={`grid gap-(--product-card-gap) ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            className={viewMode === "list" ? "flex-row flex" : ""}
            cardsConfig={cardsConfig}
          />
        ))}
      </div>

      {/* Load More Button */}
      {/* {filteredProducts.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-teal-600 hover:bg-teal-700 !text-white font-medium px-8 py-3 rounded-lg transition-colors">
            Load More Products
          </button>
        </div>
      )} */}

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Grid className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
