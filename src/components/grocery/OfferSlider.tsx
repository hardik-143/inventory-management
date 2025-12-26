import React, { useState, useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight, Tag, Truck, Gift } from "lucide-react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

interface OfferCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  bgGradient: string;
  icon: React.ReactNode;
  href?: string;
}

const offers: OfferCard[] = [
  {
    id: "coupons",
    title: "Coupon Savings",
    description: "Up to 40% off everyday essentials",
    ctaText: "Shop Coupons",
    bgGradient: "from-orange-400 to-pink-500",
    icon: <Tag className="w-8 h-8" />,
    href: "/coupons",
  },
  {
    id: "delivery",
    title: "Free Delivery",
    description: "With selected items over $30",
    ctaText: "Save Now",
    bgGradient: "from-teal-400 to-blue-500",
    icon: <Truck className="w-8 h-8" />,
    href: "/free-delivery",
  },
  {
    id: "voucher",
    title: "Gift Voucher",
    description: "With personal care items",
    ctaText: "Shop Coupons",
    bgGradient: "from-purple-400 to-pink-500",
    icon: <Gift className="w-8 h-8" />,
    href: "/gift-voucher",
  },
  {
    id: "bulk",
    title: "Bulk Discounts",
    description: "Save more on family packs",
    ctaText: "Shop Bulk",
    bgGradient: "from-green-400 to-teal-500",
    icon: <Tag className="w-8 h-8" />,
    href: "/bulk-deals",
  },
  {
    id: "fresh",
    title: "Fresh Guarantee",
    description: "100% fresh or money back",
    ctaText: "Learn More",
    bgGradient: "from-lime-400 to-green-500",
    icon: <Truck className="w-8 h-8" />,
    href: "/fresh-guarantee",
  },
];

export default function OfferSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();

  const slidesToShow = useMemo(() => {
    if (windowWidth >= 1280) return 3;
    if (windowWidth >= 768 && windowWidth < 1280) return 2;
    if (windowWidth < 768) return 1;
    return 1;
  }, [windowWidth]);
  const maxIndex = Math.max(0, offers.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Special Offers & Services
          </h2>
          <p className="text-lg text-gray-600">
            Save more on your favorite products with our exclusive deals
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative px-4">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg rounded-full p-2 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider Content */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div
                    className={`relative bg-gradient-to-br ${offer.bgGradient} rounded-2xl p-6 text-white overflow-hidden group hover:scale-105 transition-transform duration-300`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute -right-4 -top-4 w-24 h-24 bg-white rounded-full"></div>
                      <div className="absolute -left-2 -bottom-2 w-16 h-16 bg-white rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-4">{offer.icon}</div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2">{offer.title}</h3>

                      {/* Description */}
                      <p className="text-white/90 mb-6 text-sm leading-relaxed">
                        {offer.description}
                      </p>

                      {/* CTA Button */}
                      <button
                        onClick={() =>
                          offer.href && (window.location.href = offer.href)
                        }
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                      >
                        {offer.ctaText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? "bg-teal-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
