import React, { useState } from "react";
import HeroSection from "../../components/grocery/HeroSection";
import CategorySidebar from "../../components/grocery/CategorySidebar";
import ProductGrid from "../../components/grocery/ProductGrid";
import { Menu, X } from "lucide-react";
import { useHomePageConfig } from "../../hooks/useHomePageConfig";
import clsx from "clsx";
import { ColorScheme, colorSchemes } from "@/context/common";
import Accordion from "@/components/builder-panel/Accordion";
import BackgroundColorDropdown from "@/components/builder-panel/BackgroundColorDropdown";
import { HomePageConfig } from "@/context/landingPageConfig.types";

export default function LandingPage() {
  const { config, updateConfig, resetConfig, applyColorScheme } =
    useHomePageConfig();
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsSidebarOpen(false); // Close mobile sidebar after selection
  };

  const getHeaderStylesClasses = () => {
    switch (config.navbar.type) {
      case "floating":
        return "sticky top-19 px-4";
      case "sticky":
        return "sticky top-19 border-b border-gray-300/50 bg-gray-25";
      case "static":
        return "border-b border-gray-300/50 bg-gray-25";
      default:
        return "";
    }
  };

  return (
    <div className="flex gap-4 md:gap-6 min-h-[calc(100vh-76px)] max-lg:min-h-[calc(100vh-65px)] relative">
      <div
        className="relative z-10 flex min-h-dvh w-full flex-col"
        style={
          {
            "--primary-color": config.primaryColor,
            "--accent-color": config.accentColor,
            "--hover-color": config.hoverColor,
            "--active-color": config.activeColor,
            "--secondary-color": config.secondaryColor,
            "--light-shade": config.lightShade,
            "--product-section-bg": config.productsSection.backgroundColor,
            "--product-card-gap": `${
              config.productsSection.gapBetweenCards ?? 16
            }px`,
            backgroundColor:
              config.navbar.type == "floating"
                ? config.heroSection.backgroundColor
                : undefined,

            // backgroundColor: config.galleryBackgroundColor,
            // color: config.textColor,
          } as React.CSSProperties
        }
      >
        {/* Sticky Header with Cart */}

        {config.navbar.show && (
          <header
            className={`z-50  ${getHeaderStylesClasses()}`}
            style={{
              // backgroundColor: config.backgroundColor,
              // borderColor: config.borderColor,
              height: `${config.navbar.height}px`,
              display: "flex",
              alignItems: "center",
              // backgroundColor:
              //   config.navbar.type == "floating"
              //     ? config.heroSection.backgroundColor
              //     : undefined,
            }}
          >
            <div
              className={`max-w-7xl mx-auto px-4 w-full ${config.navbar.type === "floating" ? "bg-white border border-gray-300/50 h-full max-h-19 min-h-12 max-w-7xl mx-auto w-full rounded-[50px] px-8" : ""}`}
            >
              <div className="flex items-center justify-between h-full">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg transition"
                  // style={{
                  //   color: config.textColor,
                  // }}
                >
                  <Menu className="w-6 h-6" />
                </button>

                {/* Logo */}
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold mb-0! text-(--primary-color)">
                    FreshMart
                  </h1>
                </div>

                {/* Search Bar */}
                {/* {config.showSearchBar && (
                <div className="hidden md:flex flex-1 mx-8">
                  <input
                    type="text"
                    placeholder={config.searchBarPlaceholder}
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{
                      backgroundColor: config.backgroundColor,
                      borderColor: config.borderColor,
                      color: config.textColor,
                    }}
                  />
                </div>
              )} */}

                {/* Cart Button */}
                {/* <button
                className="relative p-2 rounded-lg"
                style={{
                  color: config.textColor,
                }}
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemsCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    style={{
                      backgroundColor: config.primaryColor,
                    }}
                  >
                    {cartItemsCount}
                  </span>
                )}
              </button> */}
              </div>
            </div>
          </header>
        )}

        {/* Hero Section */}
        {config.heroSection.show && (
          <HeroSection content={config.heroSection} />
        )}

        {/* Offer Slider */}
        {/* <OfferSlider /> */}

        {/* Main Content */}
        <section className="mx-auto px-4 py-8 bg-(--product-section-bg) w-full">
          <div className="max-w-7xl mx-auto px-4 w-full ">
            <div className="flex gap-8">
              {config.productsSection.showCategoryMenu && (
                <>
                  {/* Desktop Sidebar */}
                  <div className="hidden lg:block w-75 shrink-0">
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
                          <h2 className="font-semibold text-gray-900">
                            Categories
                          </h2>
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
                </>
              )}

              {/* Product Grid */}
              <div className="flex-1 min-w-0">
                <ProductGrid
                  category={activeCategory}
                  cardsConfig={config.productCard}
                  // searchQuery={searchQuery}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Floating Cart Summary (Mobile) */}
        {/* {cartItemsCount > 0 && (
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
      )} */}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
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
      {/* <HomeConfigPanel /> */}
      <div className="min-w-[360px]">
        <div
          className={clsx(
            "shadow-xl border sticky  bg-white top-[calc(76px+24px)] max-lg:top-[calc(65px+24px)] max-md:top-[calc(65px+16px)] border-gray-300 rounded-lg  transition-transform duration-300 overflow-y-auto translate-x-0 max-h-[calc(100vh-76px-48px)] max-lg:max-h-[calc(100vh-65px-48px)] max-md:max-h-[calc(100vh-65px-32px)]",
          )}
        >
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Landing Page Configuration
              </h2>
            </div>

            {/* Color Scheme Selection */}
            <section className="space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Color Scheme
              </h3>
              <div className="flex flex-wrap gap-5">
                {Object.entries(colorSchemes).map(([scheme, colors]) => (
                  <div
                    className="relative group"
                    style={
                      {
                        "--main-color": colors.primary,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className={`absolute left-0 top-0 z-1 w-10 h-10 scale-[1.2] rounded-[9px] border-2 border-transparent transition-all duration-200 group-hover:border-(--main-color)! ${config.accentColor === colors.primary ? "border-(--main-color)!" : ""}`}
                    ></span>
                    <button
                      key={colors.primary}
                      // onClick={() =>
                      //   updateConfig({ accentColor: colors.primary })
                      // }
                      onClick={() => applyColorScheme(scheme as ColorScheme)}
                      className="w-10 relative z-9 h-10 rounded-lg transition transform border-none"
                      style={{
                        backgroundColor: colors.primary,
                      }}
                    />
                  </div>
                  // <button
                  //   key={scheme}
                  //   onClick={() => applyColorScheme(scheme as ColorScheme)}
                  //   className={clsx(
                  //     "p-3 rounded-lg border-2 transition",
                  //     config.colorScheme === scheme
                  //       ? "border-blue-500 shadow-md"
                  //       : "border-transparent dark:border-slate-700",
                  //   )}
                  //   title={scheme}
                  //   style={{
                  //     backgroundColor: colors.primary,
                  //   }}
                  // />
                ))}
              </div>
            </section>

            <hr />

            {/* Dynamic Accordion Sections */}
            <Accordion title="Navbar Settings">
              <>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.navbar.show}
                    onChange={(e) =>
                      updateConfig({
                        navbar: {
                          ...config.navbar,
                          show: e.target.checked,
                        },
                      })
                    }
                    className="w-4 h-4"
                  />
                  <span className="text-slate-900 dark:text-white">
                    Show Navbar
                  </span>
                </label>
                {config.navbar.show && (
                  <>
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                        Navbar Height: {config.navbar.height}px
                      </label>

                      <input
                        type="range"
                        min="48"
                        max="96"
                        value={config.navbar.height}
                        onChange={(e) =>
                          updateConfig({
                            navbar: {
                              ...config.navbar,
                              height: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                        Navbar Type
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={config.navbar.type}
                          onChange={(e) =>
                            updateConfig({
                              navbar: {
                                ...config.navbar,
                                type: e.target
                                  .value as HomePageConfig["navbar"]["type"],
                              },
                            })
                          }
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white mt-1"
                        >
                          <option value="floating">Floating</option>

                          <option value="sticky">Sticky</option>
                          <option value="static">Static</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </>
            </Accordion>
            <Accordion title="Banner Section">
              <>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.heroSection.show}
                      onChange={(e) =>
                        updateConfig({
                          heroSection: {
                            ...config.heroSection,
                            show: e.target.checked,
                          },
                        })
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-slate-900 dark:text-white">
                      Show Banner Section
                    </span>
                  </label>
                  {config.heroSection.show && (
                    <>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-slate-900">
                          Background Color
                        </h3>
                        <BackgroundColorDropdown
                          selectedColor={config.heroSection.backgroundColor}
                          // onColorSelect={(color) =>
                          //   updateConfig({
                          //     heroSection: {
                          //       ...config.heroSection,
                          //       backgroundColor: color,
                          //     },
                          //   })
                          // }
                          onSelect={(colorObj: {
                            value: string;
                            textColor: string;
                          }) => {
                            updateConfig({
                              heroSection: {
                                ...config.heroSection,
                                backgroundColor: colorObj.value,
                                textColor: colorObj.textColor,
                              },
                            });
                          }}
                        />
                      </div>
                      <div className="space-y-4">
                        {/* verticalPadding */}
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                          Vertical Padding: {config.heroSection.verticalPadding}
                          px
                        </label>
                        <input
                          type="range"
                          min="80"
                          max="300"
                          value={config.heroSection.verticalPadding}
                          onChange={(e) =>
                            updateConfig({
                              heroSection: {
                                ...config.heroSection,
                                verticalPadding: Number(e.target.value),
                              },
                            })
                          }
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                          Title Text
                        </label>
                        <input
                          type="text"
                          value={config.heroSection.title}
                          placeholder="Welcome to Our Store"
                          onChange={(e) =>
                            updateConfig({
                              heroSection: {
                                ...config.heroSection,
                                title: e.target.value,
                              },
                            })
                          }
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white mt-1"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mt-4">
                          Subtitle Text
                        </label>
                        <textarea
                          value={config.heroSection.subtitle}
                          placeholder="Find the best products here"
                          onChange={(e) =>
                            updateConfig({
                              heroSection: {
                                ...config.heroSection,
                                subtitle: e.target.value,
                              },
                            })
                          }
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white mt-1"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={config.heroSection.showSearchBar}
                            onChange={(e) =>
                              updateConfig({
                                heroSection: {
                                  ...config.heroSection,
                                  showSearchBar: e.target.checked,
                                },
                              })
                            }
                            className="w-4 h-4"
                          />
                          Show Search Bar
                        </label>
                      </div>
                      {config.heroSection.showSearchBar && (
                        <>
                          <div className="space-y-4">
                            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                              Search Bar Placeholder
                            </label>
                            <input
                              type="text"
                              value={config.heroSection.searchBarPlaceholder}
                              onChange={(e) =>
                                updateConfig({
                                  heroSection: {
                                    ...config.heroSection,
                                    searchBarPlaceholder: e.target.value,
                                  },
                                })
                              }
                              placeholder="Search anything..."
                              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white mt-1"
                            />
                          </div>
                          {/* searchBarRadius */}
                          <div className="space-y-4">
                            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                              Search Bar Border Radius:{" "}
                              {config.heroSection.searchBarRadius}px
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="32"
                              value={config.heroSection.searchBarRadius}
                              onChange={(e) =>
                                updateConfig({
                                  heroSection: {
                                    ...config.heroSection,
                                    searchBarRadius: Number(e.target.value),
                                  },
                                })
                              }
                              className="w-full"
                            />
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </>
            </Accordion>

            <Accordion title="Product Section">
              <>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.productsSection.showCategoryMenu}
                      onChange={(e) =>
                        updateConfig({
                          productsSection: {
                            ...config.productsSection,
                            showCategoryMenu: e.target.checked,
                          },
                        })
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-slate-900 dark:text-white">
                      Show Category Menu
                    </span>
                  </label>
                </div>
                <hr />
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                    Border Radius: {config.productCard.borderRadius}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="32"
                    value={config.productCard.borderRadius}
                    onChange={(e) =>
                      updateConfig({
                        productCard: {
                          ...config.productCard,
                          borderRadius: Number(e.target.value),
                        },
                      })
                    }
                    className="w-full"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-slate-900">
                    Shadow Size
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["none", "sm", "md", "lg", "xl"].map((size) => (
                      <button
                        key={size}
                        onClick={() =>
                          updateConfig({
                            productCard: {
                              ...config.productCard,
                              shadowSize:
                                size as HomePageConfig["productCard"]["shadowSize"],
                            },
                          })
                        }
                        className={clsx(
                          "px-3 py-2 rounded-lg font-medium transition capitalize",
                          config.productCard.shadowSize === size
                            ? "bg-(--primary-color) text-white!"
                            : "bg-slate-200 text-slate-900! hover:bg-slate-300",
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                    Padding: {config.productCard.padding}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="32"
                    value={config.productCard.padding}
                    onChange={(e) =>
                      updateConfig({
                        productCard: {
                          ...config.productCard,
                          padding: Number(e.target.value),
                        },
                      })
                    }
                    className="w-full"
                  />
                </div>
                <div className="space-y-4">
                  {/* gapBetweenCards */}
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                    Gap Between Cards:{" "}
                    {config.productsSection.gapBetweenCards ?? 16}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="64"
                    value={config.productsSection.gapBetweenCards ?? 16}
                    onChange={(e) =>
                      updateConfig({
                        productsSection: {
                          ...config.productsSection,
                          gapBetweenCards: Number(e.target.value),
                        },
                      })
                    }
                    className="w-full"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">
                    Gallery Background Color
                  </h3>
                  <BackgroundColorDropdown
                    selectedColor={config.productsSection.backgroundColor}
                    onColorSelect={(color) =>
                      updateConfig({
                        productsSection: {
                          ...config.productsSection,
                          backgroundColor: color,
                        },
                      })
                    }
                  />
                </div>
              </>
            </Accordion>

            {/* Theme Selection */}
            {/* <section className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Theme
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => applyDarkTheme()}
                className={clsx(
                  "flex-1 px-3 py-2 rounded-lg font-medium transition",
                  config.theme === "dark"
                    ? "bg-blue-500 text-white"
                    : "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white"
                )}
              >
                Dark
              </button>
              <button
                onClick={() => applyLightTheme()}
                className={clsx(
                  "flex-1 px-3 py-2 rounded-lg font-medium transition",
                  config.theme === "light"
                    ? "bg-blue-500 text-white"
                    : "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white"
                )}
              >
                Light
              </button>
            </div>
          </section> */}

            {/* Background Color */}
            {/* <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">
              Gallery Background Color
            </h3>
            <BackgroundColorDropdown
              selectedColor={config.galleryBackgroundColor}
              onColorSelect={(color) =>
                updateConfig({ galleryBackgroundColor: color })
              }
            />
          </section> */}
            {/* <section className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Background Color
            </label>
            <input
              type="color"
              value={config.backgroundColor}
              onChange={(e) =>
                updateConfig({ backgroundColor: e.target.value })
              }
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </section> */}

            {/* Text Color */}
            {/* <section className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Text Color
            </label>
            <input
              type="color"
              value={config.textColor}
              onChange={(e) => updateConfig({ textColor: e.target.value })}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </section> */}

            {/* Hover Color */}
            {/* <section className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Hover Color
            </label>
            <input
              type="color"
              value={config.hoverColor}
              onChange={(e) => updateConfig({ hoverColor: e.target.value })}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </section> */}

            {/* Active Color */}
            {/* <section className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Active Color
            </label>
            <input
              type="color"
              value={config.activeColor}
              onChange={(e) => updateConfig({ activeColor: e.target.value })}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </section> */}

            {/* Sections Visibility */}
            {/* <section className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Show Sections
            </h3>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showEcommerceMetrics}
                onChange={(e) =>
                  updateConfig({ showEcommerceMetrics: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Ecommerce Metrics
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showMonthlySalesChart}
                onChange={(e) =>
                  updateConfig({ showMonthlySalesChart: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Monthly Sales Chart
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showMonthlyTarget}
                onChange={(e) =>
                  updateConfig({ showMonthlyTarget: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Monthly Target
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showStatisticsChart}
                onChange={(e) =>
                  updateConfig({ showStatisticsChart: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Statistics Chart
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showDemographicCard}
                onChange={(e) =>
                  updateConfig({ showDemographicCard: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Demographic Card
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showRecentOrders}
                onChange={(e) =>
                  updateConfig({ showRecentOrders: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Recent Orders
              </span>
            </label>
          </section> */}

            {/* Header and Banner Options */}
            {/* <section className="space-y-4"> */}
            {/* <h3 className="font-semibold text-slate-900 dark:text-white">
              Header & Banner
            </h3> */}

            {/* <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showNavbar}
                onChange={(e) => updateConfig({ showNavbar: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Show Navbar
              </span>
            </label> */}

            {/* <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={config.showSearchBar}
              onChange={(e) =>
                updateConfig({ showSearchBar: e.target.checked })
              }
              className="w-4 h-4"
            />
            <span className="text-slate-900 dark:text-white">
              Show Search Bar
            </span>
          </label>

          {config.showSearchBar && (
            <input
              type="text"
              value={config.searchBarPlaceholder}
              onChange={(e) =>
                updateConfig({ searchBarPlaceholder: e.target.value })
              }
              placeholder="Search placeholder"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          )} */}

            {/* <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Navbar Height: {config.navbarHeight}px
            </label>
            <input
              type="range"
              min="48"
              max="96"
              value={config.navbarHeight}
              onChange={(e) =>
                updateConfig({ navbarHeight: Number(e.target.value) })
              }
              className="w-full"
            /> */}
            {/* </section> */}

            {/* Layout Options */}
            {/* <section className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Layout
            </h3>
            <Select
              options={[
                { value: "default", label: "Default" },
                { value: "compact", label: "Compact" },
                { value: "spacious", label: "Spacious" },
              ]}
              defaultValue={config.layout}
              onChange={(value) =>
                updateConfig({
                  layout: value as "default" | "compact" | "spacious",
                })
              }
              className="w-full"
            />
          </section> */}

            {/* Card Settings */}
            {/* <section className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Card Border Radius: {config.cardBorderRadius}px
            </label>
            <input
              type="range"
              min="0"
              max="24"
              value={config.cardBorderRadius}
              onChange={(e) =>
                updateConfig({ cardBorderRadius: Number(e.target.value) })
              }
              className="w-full mb-4"
            />

            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Card Padding: {config.cardPadding}
            </label>
            <input
              type="range"
              min="2"
              max="12"
              value={config.cardPadding}
              onChange={(e) =>
                updateConfig({ cardPadding: Number(e.target.value) })
              }
              className="w-full mb-4"
            />

            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Gap Size: {config.gapSize}
            </label>
            <input
              type="range"
              min="2"
              max="12"
              value={config.gapSize}
              onChange={(e) =>
                updateConfig({ gapSize: Number(e.target.value) })
              }
              className="w-full mb-4"
            />
          </section> */}

            {/* Shadow Size */}
            {/* <section className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Card Shadow
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {["none", "sm", "md", "lg", "xl"].map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    updateConfig({
                      cardShadow: size as "none" | "sm" | "md" | "lg" | "xl",
                    })
                  }
                  className={clsx(
                    "px-3 py-2 rounded-lg font-medium transition",
                    config.cardShadow === size
                      ? "bg-blue-500 text-white"
                      : "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white",
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </section> */}

            {/* Typography */}
            {/* <section className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Typography
            </h3>

            <Select
              options={[
                { value: "poppins", label: "Poppins" },
                { value: "montserrat", label: "Montserrat" },
                { value: "lexend", label: "Lexend" },
                { value: "roboto", label: "Roboto" },
                { value: "open-sans", label: "Open Sans" },
                { value: "outfit", label: "Outfit" },
              ]}
              defaultValue={config.fontFamily}
              onChange={(value) =>
                updateConfig({
                  fontFamily: value as
                    | "poppins"
                    | "montserrat"
                    | "lexend"
                    | "roboto"
                    | "open-sans"
                    | "outfit",
                })
              }
              className="w-full mb-4"
            />

            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Heading Font Size: {config.headingFontSize}px
            </label>
            <input
              type="range"
              min="16"
              max="32"
              value={config.headingFontSize}
              onChange={(e) =>
                updateConfig({ headingFontSize: Number(e.target.value) })
              }
              className="w-full mb-4"
            />

            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Body Font Size: {config.bodyFontSize}px
            </label>
            <input
              type="range"
              min="12"
              max="18"
              value={config.bodyFontSize}
              onChange={(e) =>
                updateConfig({ bodyFontSize: Number(e.target.value) })
              }
              className="w-full"
            />
          </section> */}

            {/* Effects */}
            {/* <section className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Effects
            </h3>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.enableHoverEffect}
                onChange={(e) =>
                  updateConfig({ enableHoverEffect: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Enable Hover Effect
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.enableTransitions}
                onChange={(e) =>
                  updateConfig({ enableTransitions: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Enable Transitions
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.enableAnimations}
                onChange={(e) =>
                  updateConfig({ enableAnimations: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900 dark:text-white">
                Enable Animations
              </span>
            </label>

            {config.enableHoverEffect && (
              <>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                  Hover Scale: {config.hoverScaleAmount.toFixed(2)}x
                </label>
                <input
                  type="range"
                  min="1"
                  max="1.1"
                  step="0.01"
                  value={config.hoverScaleAmount}
                  onChange={(e) =>
                    updateConfig({
                      hoverScaleAmount: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </>
            )}

            {config.enableTransitions && (
              <>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                  Transition Duration: {config.transitionDuration}ms
                </label>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="50"
                  value={config.transitionDuration}
                  onChange={(e) =>
                    updateConfig({
                      transitionDuration: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </>
            )}
          </section> */}

            {/* Reset Button */}
            <section className="space-y-4">
              <button
                onClick={() => {
                  resetConfig();
                }}
                className="w-full px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition font-medium"
              >
                Reset to Default
              </button>
            </section>

            <div className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
