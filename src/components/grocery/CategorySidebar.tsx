import React from "react";
import {
  Apple,
  Fish,
  Cookie,
  Heart,
  Home,
  Milk,
  ChefHat,
  ShoppingBasket,
  Sparkles,
  Baby,
  Zap,
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count?: number;
  isPopular?: boolean;
}

interface CategorySidebarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  className?: string;
}

const categories: Category[] = [
  {
    id: "all",
    name: "All Categories",
    icon: <ShoppingBasket className="w-5 h-5" />,
    count: 1250,
  },
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    icon: <Apple className="w-5 h-5" />,
    count: 485,
    isPopular: true,
  },
  {
    id: "meat-fish",
    name: "Meat & Fish",
    icon: <Fish className="w-5 h-5" />,
    count: 142,
  },
  {
    id: "snacks",
    name: "Snacks",
    icon: <Cookie className="w-5 h-5" />,
    count: 325,
    isPopular: true,
  },
  {
    id: "dairy",
    name: "Dairy",
    icon: <Milk className="w-5 h-5" />,
    count: 186,
  },
  {
    id: "cooking",
    name: "Cooking Essentials",
    icon: <ChefHat className="w-5 h-5" />,
    count: 298,
  },
  {
    id: "personal-care",
    name: "Personal Care",
    icon: <Sparkles className="w-5 h-5" />,
    count: 156,
    isPopular: true,
  },
  {
    id: "baby-care",
    name: "Baby Care",
    icon: <Baby className="w-5 h-5" />,
    count: 89,
  },
  {
    id: "health",
    name: "Health & Wellness",
    icon: <Heart className="w-5 h-5" />,
    count: 167,
  },
  {
    id: "home-cleaning",
    name: "Home & Cleaning",
    icon: <Home className="w-5 h-5" />,
    count: 134,
  },
  {
    id: "beverages",
    name: "Beverages",
    icon: <Zap className="w-5 h-5" />,
    count: 98,
  },
];

export default function CategorySidebar({
  activeCategory,
  onCategoryChange,
  className = "",
}: CategorySidebarProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-100 ${className}`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900 flex items-center">
          <ShoppingBasket className="w-5 h-5 mr-2 text-teal-600" />
          Categories
        </h3>
      </div>

      {/* Category List */}
      <div className="py-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors group ${
              activeCategory === category.id
                ? "bg-teal-50 border-r-2 border-teal-500"
                : ""
            }`}
          >
            <div className="flex items-center flex-1">
              <div
                className={`mr-3 transition-colors ${
                  activeCategory === category.id
                    ? "text-teal-600"
                    : "text-gray-500 group-hover:text-gray-700"
                }`}
              >
                {category.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center">
                  <span
                    className={`font-medium text-sm ${
                      activeCategory === category.id
                        ? "text-teal-900"
                        : "text-gray-900"
                    }`}
                  >
                    {category.name}
                  </span>

                  {category.isPopular && (
                    <span className="ml-2 px-1.5 py-0.5 bg-orange-100 text-orange-600 text-xs font-medium rounded">
                      Popular
                    </span>
                  )}
                </div>

                {category.count && (
                  <span className="text-xs text-gray-500 mt-0.5 block">
                    {category.count} items
                  </span>
                )}
              </div>
            </div>

            {/* Active Indicator */}
            {activeCategory === category.id && (
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Promotional Banner */}
      <div className="m-4 p-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-white">
        <h4 className="font-semibold text-sm mb-1">Special Offer!</h4>
        <p className="text-xs opacity-90 mb-2">
          Get 20% off on your first order
        </p>
        <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
}
