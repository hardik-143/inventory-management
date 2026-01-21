import { useState } from "react";
import { Search } from "lucide-react";
import { HomePageConfig } from "@/context/landingPageConfig.types";

interface HeroSectionProps {
  content?: HomePageConfig["heroSection"];
}

// const categories = [
//   "Grocery",
//   "Fruits & Vegetables",
//   "Meat & Fish",
//   "Dairy",
//   "Snacks",
//   "Beverages",
// ];

export default function HeroSection({ content }: HeroSectionProps) {
  const {
    title,
    subtitle,
    searchBarPlaceholder: placeholder,
    showSearchBar,
  } = content || {};
  // const [selectedCategory, setSelectedCategory] = useState("Grocery");
  const [searchQuery, setSearchQuery] = useState("");
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const handleSearch = () => {
  //   onSearch?.(searchQuery, selectedCategory);
  // };

  return (
    <section
      className="relative  px-4 overflow-hidden"
      style={{
        color: content?.textColor,
        backgroundColor: content?.backgroundColor,
        paddingTop: `${content?.verticalPadding}px`,
        paddingBottom: `${content?.verticalPadding}px`,
      }}
    >
      {/* Decorative elements */}
      {/* <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-20">
        <div className="w-32 h-32 bg-green-200 rounded-full"></div>
        <div className="w-24 h-24 bg-orange-200 rounded-full mt-4"></div>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20">
        <div className="w-28 h-28 bg-pink-200 rounded-full"></div>
        <div className="w-20 h-20 bg-yellow-200 rounded-full mt-4"></div>
      </div> */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-inherit mb-4">
          {title || "Welcome to Our Store"}
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-inherit mb-8 max-w-2xl mx-auto opacity-75">
          {subtitle || "Find the best products here"}
        </p>
        {/* Search Bar */}
        {showSearchBar && (
          <div className="max-w-2xl mx-auto">
            <div
              className="flex bg-white shadow-xl overflow-hidden"
              style={{
                borderRadius: `${content?.searchBarRadius}px`,
              }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                // onKeyPress={handleKeyPress}
                placeholder={placeholder || "Search anything..."}
                className="flex-1 px-4 py-4 text-gray-700 placeholder-gray-500 focus:outline-none"
              />

              {/* Search Button */}
              <button
                // onClick={handleSearch}
                className="px-6 py-4 bg-(--primary-color) hover:bg-(--hover-color) text-(--light-shade)! transition-all duration-300 ease-linear"
              >
                <Search className="w-5 h-5 text-inherit" />
              </button>
            </div>
          </div>
        )}
        {/* Popular Searches */}
        {/* <div className="mt-6">
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
        </div> */}
      </div>
    </section>
  );
}
