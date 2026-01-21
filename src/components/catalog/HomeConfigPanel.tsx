import { useState } from "react";
import clsx from "clsx";
import { useHomePageConfig } from "../../hooks/useHomePageConfig";
import Accordion from "../config-panel/Accordion";
import BackgroundColorDropdown from "../config-panel/BackgroundColorDropdown";
import { colorSchemes } from "@/context/landingPageConfig.constants";
import { ColorScheme, HomePageConfig } from "@/context/landingPageConfig.types";

export default function HomeConfigPanel() {
  const { config, updateConfig, resetConfig, applyColorScheme } =
    useHomePageConfig();
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-lg"
        title="Customize Home Page"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Customize Home
      </button>

      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 z-51 transition-opacity duration-300",
          isPanelOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsPanelOpen(false)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Panel */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-full max-w-md bg-white shadow-2xl z-99 transition-transform duration-300 overflow-y-auto dark:bg-slate-900",
        )}
        style={{
          transform: isPanelOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Landing Page Configuration
            </h2>
            <button
              onClick={() => setIsPanelOpen(false)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-lg transition"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
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
                        Vertical Padding: {config.heroSection.verticalPadding}px
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

          <Accordion title="Product Cards">
            <>
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
              {/* padding */}
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
                setIsPanelOpen(false);
              }}
              className="w-full px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition font-medium"
            >
              Reset to Default
            </button>
          </section>

          <div className="h-4" />
        </div>
      </div>
    </>
  );
}
