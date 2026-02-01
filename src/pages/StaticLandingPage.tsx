import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  BarChart3,
  Clock,
  Users,
  FileText,
  TrendingUp,
  Lock,
  Cloud,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react";

export default function StaticLandingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-200"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                InvoiceHub
              </h1>
            </div>

            {/* Navigation Menu (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a
                href="#features"
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Pricing
              </a>
              <a
                href="#integrations"
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Integrations
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Contact
              </a>
            </nav>

            {/* Sign In Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-all duration-200">
                Sign In
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white! rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Try Free
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm animate-fadeIn"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div
              className="fixed inset-y-0 left-0 w-64 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <nav className="py-4 space-y-2">
                <a
                  href="#features"
                  className="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#integrations"
                  className="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Integrations
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Contact
                </a>
              </nav>
              <div className="p-4 border-t border-gray-200 space-y-3">
                <button className="w-full px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-all duration-200">
                  Sign In
                </button>
                <button className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white! rounded-lg font-semibold">
                  Try Free
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 hover:border-blue-300 transition-colors"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-700">
              ✨ Trusted by 5000+ Businesses
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Invoice & Stock Management
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Made Effortless
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Automate your invoicing, manage inventory in real-time, and scale
            your business with our comprehensive SaaS platform designed for
            modern enterprises.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white! font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto sm:mx-0">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 active:scale-95">
              Schedule Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600 pt-8 border-t border-white/50"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="px-4 py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage invoices and inventory in one
              unified platform
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Invoice Management",
                description:
                  "Create, send, and track invoices with automated reminders. Supports recurring billing and custom templates.",
                icon: FileText,
              },
              {
                title: "Real-Time Stock Control",
                description:
                  "Track inventory across multiple locations with live updates and low-stock alerts.",
                icon: BarChart3,
              },
              {
                title: "Automated Analytics",
                description:
                  "Get actionable insights with detailed reports on sales, expenses, and inventory trends.",
                icon: TrendingUp,
              },
              {
                title: "Multi-User Collaboration",
                description:
                  "Invite team members with role-based permissions and track all changes in real-time.",
                icon: Users,
              },
              {
                title: "Cloud-Based Solution",
                description:
                  "Access your data anywhere, anytime with our secure cloud infrastructure.",
                icon: Cloud,
              },
              {
                title: "Mobile App",
                description:
                  "Manage invoices and inventory on-the-go with our native iOS and Android apps.",
                icon: Smartphone,
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="px-4 py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business. No hidden fees.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$49",
                period: "/month",
                description: "Perfect for freelancers and small businesses",
                features: [
                  "Up to 100 invoices/month",
                  "Basic inventory tracking",
                  "Email support",
                  "1 user account",
                  "Basic reports",
                ],
                cta: "Start Free Trial",
                highlighted: false,
              },
              {
                name: "Professional",
                price: "$149",
                period: "/month",
                description: "For growing businesses with multiple users",
                features: [
                  "Unlimited invoices",
                  "Advanced inventory management",
                  "Priority email & chat support",
                  "Up to 5 user accounts",
                  "Advanced analytics & reports",
                  "API access",
                ],
                cta: "Start Free Trial",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                description: "For large-scale operations",
                features: [
                  "Everything in Professional",
                  "Unlimited user accounts",
                  "24/7 phone support",
                  "Custom integrations",
                  "Dedicated account manager",
                  "On-premise option",
                ],
                cta: "Contact Sales",
                highlighted: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative rounded-2xl transition-all duration-300 group ${
                  plan.highlighted
                    ? "border-2 border-blue-600 bg-white shadow-2xl -translate-y-4"
                    : "border border-gray-200 bg-white shadow-sm hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white! hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl"
                        : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {plan.cta}
                  </button>
                  <div className="space-y-4 mt-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="px-4 py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Connect with Your Favorite Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seamless integrations with popular platforms to streamline your
              workflow
            </p>
          </div>

          {/* Integration Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Stripe",
              "PayPal",
              "Quickbooks",
              "Shopify",
              "Zapier",
              "Google Drive",
              "Slack",
              "Square",
            ].map((integration, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🔗</span>
                </div>
                <p className="font-semibold text-gray-900">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Loved by Business Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers say about transforming their operations
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                role: "CEO, TechVision Solutions",
                text: "InvoiceHub transformed how we manage invoicing and inventory. We reduced manual work by 70% and improved accuracy significantly.",
              },
              {
                name: "Priya Patel",
                role: "Operations Manager, RetailCo",
                text: "The real-time stock management feature helped us avoid stockouts completely. Our inventory costs dropped by 40% in the first month.",
              },
              {
                name: "Amit Verma",
                role: "Founder, QuickStartup",
                text: "Best investment we made for our business. The platform is intuitive, powerful, and the customer support is outstanding.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600">
              Questions? Reach out to our team or start your free trial
              immediately
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white text-gray-900 placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white text-gray-900 placeholder-gray-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
              <select className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white text-gray-900">
                <option>Select your business type...</option>
                <option>Retail</option>
                <option>Manufacturing</option>
                <option>Services</option>
                <option>Consulting</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Tell us about your needs"
                rows={5}
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white text-gray-900 placeholder-gray-500 resize-none"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white! font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quick Response
              </h3>
              <p className="text-gray-600 text-sm">
                Get answers within 2 hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Data Security
              </h3>
              <p className="text-gray-600 text-sm">
                Enterprise-grade encryption
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Setup</h3>
              <p className="text-gray-600 text-sm">Up and running in minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 opacity-95 max-w-2xl mx-auto">
            Join thousands of businesses already using InvoiceHub to streamline
            their operations
          </p>
          <button className="bg-white text-gray-900! px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95">
            Start Your 14-Day Free Trial
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  InvoiceHub
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Simplify your invoicing and inventory management with our
                powerful cloud-based platform.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="text-sm">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="text-sm">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>

            {/* Column 2 - Product */}
            <div>
              <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></span>
                Product
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></span>
                Company
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></span>
                Legal
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Compliance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-500 text-sm">
              <p className="mb-2">
                &copy; 2024 InvoiceHub. All rights reserved.
              </p>
              <p className="text-xs">Made for modern business excellence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
