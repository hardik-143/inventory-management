import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onSearch?: (query: string, category: string) => void;
}

const categories = [
  "Grocery",
  "Fruits & Vegetables",
  "Meat & Fish",
  "Dairy",
  "Snacks",
  "Beverages",
];

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("Grocery");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = () => {
    onSearch?.(searchQuery, selectedCategory);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-20">
        <div className="w-32 h-32 bg-green-200 rounded-full"></div>
        <div className="w-24 h-24 bg-orange-200 rounded-full mt-4"></div>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20">
        <div className="w-28 h-28 bg-pink-200 rounded-full"></div>
        <div className="w-20 h-20 bg-yellow-200 rounded-full mt-4"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Groceries Delivered in{" "}
          <span className="text-teal-600">90 Minutes</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get your healthy foods & snacks delivered at your doorstep all day
          everyday
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-4 py-4 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors border-r border-gray-200"
              >
                <span className="font-medium">{selectedCategory}</span>
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-1 z-50 min-w-48">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search your products from here"
              className="flex-1 px-4 py-4 text-gray-700 placeholder-gray-500 focus:outline-none"
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-6">
          <span className="text-gray-600 mr-4">Popular searches:</span>
          {[
            "Organic Vegetables",
            "Fresh Fruits",
            "Dairy Products",
            "Snacks",
          ].map((term) => (
            <button
              key={term}
              onClick={() => {
                setSearchQuery(term);
                onSearch?.(term, selectedCategory);
              }}
              className="inline-block bg-white/80 hover:bg-white text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
