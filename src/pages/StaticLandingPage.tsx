import { useState } from "react";
import { Menu, X, Search, Zap, CheckCircle, Settings } from "lucide-react";

export default function StaticLandingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-teal-600">FreshMart</h1>
            </div>

            {/* Navigation Menu (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#categories"
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Categories
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Contact
              </a>
            </nav>

            {/* Cart Button */}
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition hidden lg:block">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-1 right-1 bg-teal-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div
              className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="py-4 space-y-2">
                <a
                  href="#categories"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Categories
                </a>
                <a
                  href="#features"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24 bg-gradient-to-r from-teal-50 to-green-50 animate-fadeIn">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Fresh Groceries Delivered in 90 Minutes
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Shop from the comfort of your home and get fresh, high-quality
            groceries delivered to your doorstep with guaranteed freshness.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex bg-white shadow-xl rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 px-4 py-4 text-gray-700 placeholder-gray-500 focus:outline-none"
              />
              <button className="px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Shop Now
            </button>
            <button className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our wide range of fresh products across all categories
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fruits & Vegetables",
                count: "485 items",
                bgColor: "bg-red-100",
                icon: "🛒",
              },
              {
                title: "Dairy & Eggs",
                count: "186 items",
                bgColor: "bg-yellow-100",
                icon: "😊",
              },
              {
                title: "Meat & Fish",
                count: "142 items",
                bgColor: "bg-green-100",
                icon: "🌿",
              },
              {
                title: "Snacks & Beverages",
                count: "325 items",
                bgColor: "bg-orange-100",
                icon: "⚙️",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition p-6 text-center cursor-pointer hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.count}</p>
                <button className="text-teal-600 font-semibold hover:text-teal-700">
                  Browse →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose FreshMart?
            </h2>
            <p className="text-gray-600 text-lg">
              We provide the best shopping experience with quality and
              convenience
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your groceries delivered in just 90 minutes with our rapid
                delivery service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Fresh Quality
              </h3>
              <p className="text-gray-600">
                All our products are carefully selected and checked for
                freshness and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our dedicated customer support team is available round the clock
                to help you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="px-4 py-12 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Special Offer!</h2>
          <p className="text-xl mb-6 opacity-90">
            Get 20% off on your first order
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Claim Offer
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Over 3000+ satisfied customers trust FreshMart
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "California, USA",
                text: "FreshMart has completely changed how I shop for groceries. The quality is exceptional and delivery is incredibly fast. Highly recommended!",
              },
              {
                name: "Mike Chen",
                location: "New York, USA",
                text: "The 90-minute delivery is amazing! Fresh vegetables and fruits every time. I've saved so much time and the prices are competitive.",
              },
              {
                name: "Emily Rodriguez",
                location: "Texas, USA",
                text: "Customer service is top-notch! Had an issue with my first order and they resolved it immediately. Now I'm a regular customer.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Still Need Help?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get in touch with our support team and we'll be happy to assist you.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              ></textarea>
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-xl mb-4 text-teal-400">
                FreshMart
              </h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner for fresh groceries delivered in 90
                minutes.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  f
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  ⊙
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to get special offers and updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
                />
                <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-r-lg transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FreshMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
