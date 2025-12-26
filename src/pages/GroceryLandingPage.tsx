import React, { useState } from "react";
import HeroSection from "../components/grocery/HeroSection";
import OfferSlider from "../components/grocery/OfferSlider";
import CategorySidebar from "../components/grocery/CategorySidebar";
import ProductGrid from "../components/grocery/ProductGrid";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function GroceryLandingPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const handleSearch = (query: string, category: string) => {
    setSearchQuery(query);
    // In a real app, you might want to map the category to the internal category ID
    console.log("Search:", { query, category });
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsSidebarOpen(false); // Close mobile sidebar after selection
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header with Cart */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-teal-600">FreshMart</h1>
            </div>

            {/* Cart Button */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />

      {/* Offer Slider */}
      <OfferSlider />

      {/* Main Content */}
      <div className="mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-28">
              <CategorySidebar
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>

          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setIsSidebarOpen(false)}
              />

              {/* Sidebar */}
              <div className="relative w-80 max-w-sm bg-white h-full overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="font-semibold text-gray-900">Categories</h2>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <CategorySidebar
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            <ProductGrid category={activeCategory} searchQuery={searchQuery} />
          </div>
        </div>
      </div>

      {/* Floating Cart Summary (Mobile) */}
      {cartItemsCount > 0 && (
        <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
          <div className="bg-teal-600 text-white rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">
                  {cartItemsCount} items in cart
                </span>
                <div className="text-sm opacity-90">Total: $24.99</div>
              </div>
              <button className="bg-white text-teal-600 px-4 py-2 rounded-lg font-medium">
                View Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-teal-400">
                FreshMart
              </h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner for fresh groceries delivered in 90
                minutes.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>

            {/* <div>
              <h4 className="font-semibold mb-4">Download Our App</h4>
              <p className="text-gray-300 mb-4">
                Get the best deals and fastest delivery
              </p>
              <div className="space-y-2">
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-sm">
                  Download for iOS
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-sm block">
                  Download for Android
                </button>
              </div>
            </div> */}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FreshMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
