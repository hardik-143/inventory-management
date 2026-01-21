import React, { useState } from "react";
import { Plus, Minus, Heart, Star, ShoppingCart } from "lucide-react";
import { HomePageConfig } from "@/context/landingPageConfig.types";
import clsx from "clsx";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  unit: string;
  weight: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isOrganic?: boolean;
  isFavorite?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string, quantity: number) => void;
  onToggleFavorite?: (productId: string) => void;
  className?: string;
  cardsConfig: HomePageConfig["productCard"];
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleFavorite,
  className = "",
  cardsConfig,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
      onAddToCart?.(product.id, 1);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onAddToCart?.(product.id, newQuantity);
  };

  const getShadowClasses = () => {
    const shadows = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    };
    return shadows[cardsConfig.shadowSize];
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onAddToCart?.(product.id, newQuantity);
    }
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div
      className={clsx(
        `bg-white transition-all duration-300 border border-gray-100 overflow-hidden group`,
        className,
        getShadowClasses(),
      )}
      style={{
        padding: `${cardsConfig.padding}px`,
        borderRadius: cardsConfig.borderRadius,
      }}
    >
      {/* Image Container */}
      <div
        className="relative aspect-square bg-gray-50 overflow-hidden"
        style={{
          borderTopLeftRadius: cardsConfig.borderRadius - cardsConfig.padding,
          borderTopRightRadius: cardsConfig.borderRadius - cardsConfig.padding,
        }}
      >
        <div className="absolute top-0 pt-2 flex items-center justify-between w-full px-3 z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0))]">
          <div className="flex gap-3">
            {/* Discount Badge */}
            {discountPercentage > 0 && (
              <div className=" bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{discountPercentage}%
              </div>
            )}

            {/* Organic Badge */}
            {product.isOrganic && (
              <div className=" bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Organic
              </div>
            )}
          </div>
          {/* Favorite Button */}
          <button
            onClick={() => onToggleFavorite?.(product.id)}
            className=" p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors"
            style={{ right: product.isOrganic ? "4rem" : "0.75rem" }}
          >
            <Heart
              className={`w-4 h-4 ${
                product.isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400 hover:text-red-500"
              }`}
            />
          </button>
        </div>

        {/* Product Image */}
        <div className="relative w-full h-full">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-300 rounded"></div>
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/images/product/placeholder.jpg";
              setImageLoaded(true);
            }}
          />
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 ml-1">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 hover:text-teal-600 transition-colors cursor-pointer">
          {product.name}
        </h3>

        {/* Weight */}
        <p className="text-sm text-gray-500 mb-3">{product.weight}</p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-500">/{product.unit}</span>
        </div>

        {/* Add to Cart Button */}
        <div className="flex items-center mt-auto">
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full flex items-center justify-center bg-(--primary-color) hover:bg-(--hover-color) disabled:bg-gray-300 disabled:cursor-not-allowed text-(--light-shade)! font-medium py-2.5 px-4 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </button>
          ) : (
            <div className="w-full flex items-center justify-between bg-(--light-shade) border border-(--primary-color) rounded-lg p-1">
              <button
                onClick={handleDecrement}
                className="p-2 hover:bg-(--primary-color) text-(--primary-color)! hover:text-(--light-shade)! rounded-md transition-colors"
              >
                <Minus className="w-4 h-4  text-inherit transition-all duration-300 ease-linear" />
              </button>

              <span className="font-medium text-(--primary-color) px-2">
                {quantity}
              </span>

              <button
                onClick={handleIncrement}
                className="p-2 hover:bg-(--primary-color) text-(--primary-color)! hover:text-(--light-shade)! rounded-md transition-colors"
              >
                <Plus className="w-4 h-4 text-inherit transition-all duration-300 ease-linear" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
