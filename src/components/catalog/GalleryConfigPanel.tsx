import { useState } from "react";
import clsx from "clsx";
import { useGalleryConfig } from "@/hooks/useGalleryConfig";
import { GalleryConfig } from "@/context/galleryConfig.types";
import Select from "@/components/form/Select";
import Input from "@/components/form/input/InputField";
import BackgroundColorDropdown from "../config-panel/BackgroundColorDropdown";

export default function GalleryConfigPanel() {
  const { config, updateConfig, applyLightTheme, applyDarkTheme, resetConfig } =
    useGalleryConfig();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-lg"
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
        Customize
      </button>

      {/* Panel */}
      <div
        className={clsx(
          "fixed inset-0 z-51 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-full max-w-md bg-white shadow-2xl z-99 transition-transform duration-300 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Gallery Settings
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-slate-100 text-slate-900! rounded-lg transition"
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

          {/* Theme Selection */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">Theme</h3>
            <div className="flex gap-2">
              <button
                onClick={applyLightTheme}
                className={clsx(
                  "flex-1 px-4 py-2 rounded-lg font-medium transition",
                  config.theme === "light"
                    ? "bg-blue-500 text-white!"
                    : "bg-slate-200 text-slate-900! hover:bg-slate-300",
                )}
              >
                ☀️&nbsp;&nbsp; Light
              </button>
              <button
                onClick={applyDarkTheme}
                className={clsx(
                  "flex-1 px-4 py-2 rounded-lg font-medium transition",
                  config.theme === "dark"
                    ? "bg-blue-500 text-white!"
                    : "bg-slate-200 text-slate-900 hover:bg-slate-300",
                )}
              >
                🌙&nbsp;&nbsp; Dark
              </button>
            </div>
          </section>

          {/* Gallery Background Color */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">
              Gallery Background Color
            </h3>
            <BackgroundColorDropdown
              selectedColor={config.galleryBackgroundColor}
              onColorSelect={(color) =>
                updateConfig({ galleryBackgroundColor: color })
              }
            />
          </section>

          {/* Card Style */}
          {/* <section className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Card Style
            </h3>
            <select
              value={config.cardStyle}
              onChange={(e) =>
                updateConfig({
                  cardStyle: e.target.value as any,
                })
              }
              className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900"
            >
              <option value="glass">Glass Morphism</option>
              <option value="soft">Soft</option>
              <option value="outline">Outline</option>
              <option value="filled">Filled</option>
            </select>
          </section> */}

          {/* Accent Color */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">Accent Color</h3>
            <div className="flex flex-wrap gap-5">
              {[
                "rgb(59, 130, 246)",
                "rgb(34, 197, 94)",
                "rgb(249, 115, 22)",
                "rgb(239, 68, 68)",
                "rgb(168, 85, 247)",
                "rgb(14, 165, 233)",
              ].map((color) => (
                <div
                  className="relative group"
                  style={
                    {
                      "--main-color": color,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className="absolute left-0 top-0 z-1 w-10 h-10 scale-[1.2] rounded-[9px] border-2 border-transparent transition-all duration-200 group-hover:border-(--main-color)"
                    style={{
                      borderColor:
                        config.accentColor === color ? "rgb(15, 23, 42)" : "",
                    }}
                  ></span>
                  <button
                    key={color}
                    onClick={() => updateConfig({ accentColor: color })}
                    className="w-10 relative z-9 h-10 rounded-lg transition transform border-none"
                    style={{
                      backgroundColor: color,
                      // borderColor:
                      //   config.accentColor === color
                      //     ? "rgb(15, 23, 42)"
                      //     : undefined,
                      // borderWidth:
                      //   config.accentColor === color ? "3px" : undefined,
                    }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Font Family */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">Font Family</h3>
            <Select
              options={[
                { value: "outfit", label: "Outfit" },
                { value: "montserrat", label: "Montserrat" },
                { value: "lexend", label: "Lexend" },
                { value: "poppins", label: "Poppins" },
                { value: "roboto", label: "Roboto" },
                { value: "open-sans", label: "Open Sans" },
              ]}
              defaultValue={config.fontFamily}
              onChange={(value) =>
                updateConfig({
                  fontFamily: value as GalleryConfig["fontFamily"],
                })
              }
              className="w-full"
            />
          </section>

          {/* Grid Layout */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">Layout</h3>
            <Select
              options={[
                { value: "grid", label: "Grid" },
                { value: "masonry", label: "Masonry" },
                // { value: "carousel", label: "Carousel" },
              ]}
              defaultValue={config.layout}
              onChange={(value) =>
                updateConfig({
                  layout: value as GalleryConfig["layout"],
                })
              }
              className="w-full mb-3"
            />
          </section>
          {config.layout === "grid" && (
            <section>
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-slate-900">
                  Columns: {config.gridColumns}
                </label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={config.gridColumns}
                  onChange={(e) =>
                    updateConfig({ gridColumns: Number(e.target.value) })
                  }
                  className="w-full"
                />
              </div>
            </section>
          )}

          {/* Gap Size */}
          <section className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900">
              Horizontal Gap: {config.horizontalGap}
            </label>
            <input
              type="range"
              min="2"
              max="8"
              value={config.horizontalGap}
              onChange={(e) =>
                updateConfig({ horizontalGap: Number(e.target.value) })
              }
              className="w-full"
            />

            <label className="block text-sm font-semibold text-slate-900 mt-4">
              Vertical Gap: {config.verticalGap}
            </label>
            <input
              type="range"
              min="2"
              max="8"
              value={config.verticalGap}
              onChange={(e) =>
                updateConfig({ verticalGap: Number(e.target.value) })
              }
              className="w-full"
            />
          </section>

          {/* Border Radius */}
          <section className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900">
              Border Radius: {config.borderRadius}px
            </label>
            <input
              type="range"
              min="0"
              max="32"
              value={config.borderRadius}
              onChange={(e) =>
                updateConfig({ borderRadius: Number(e.target.value) })
              }
              className="w-full"
            />
          </section>

          {/* Shadow Size */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">Shadow Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {["none", "sm", "md", "lg", "xl"].map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    updateConfig({
                      shadowSize: size as GalleryConfig["shadowSize"],
                    })
                  }
                  className={clsx(
                    "px-3 py-2 rounded-lg font-medium transition capitalize",
                    config.shadowSize === size
                      ? "bg-blue-500 text-white!"
                      : "bg-slate-200 text-slate-900! hover:bg-slate-300",
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </section>

          {/* Card Aspect Ratio */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">Card Aspect Ratio</h3>
            <Select
              options={[
                { value: "5/6", label: "5:6 (Portrait)" },
                { value: "4/5", label: "4:5 (Tall)" },
                { value: "1/1", label: "1:1 (Square)" },
                { value: "16/9", label: "16:9 (Wide)" },
              ]}
              defaultValue={config.cardAspectRatio}
              onChange={(value) =>
                updateConfig({
                  cardAspectRatio: value as GalleryConfig["cardAspectRatio"],
                })
              }
              className="w-full"
            />
          </section>

          {/* Font Sizes */}
          <section className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900">
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

            <label className="block text-sm font-semibold text-slate-900">
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
          </section>

          {/* Direction */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">Direction</h3>
            <div className="flex gap-2">
              <button
                onClick={() => updateConfig({ direction: "ltr" })}
                className={clsx(
                  "flex-1 px-4 py-2 rounded-lg font-medium transition",
                  config.direction === "ltr"
                    ? "bg-blue-500 text-white!"
                    : "bg-slate-200 text-slate-900! hover:bg-slate-300",
                )}
              >
                LTR (Left to Right)
              </button>
              <button
                onClick={() => updateConfig({ direction: "rtl" })}
                className={clsx(
                  "flex-1 px-4 py-2 rounded-lg font-medium transition",
                  config.direction === "rtl"
                    ? "bg-blue-500 text-white!"
                    : "bg-slate-200 text-slate-900! hover:bg-slate-300",
                )}
              >
                RTL (Right to Left)
              </button>
            </div>
          </section>

          {/* Toggle Features */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">Features</h3>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showBuyButton}
                onChange={(e) =>
                  updateConfig({ showBuyButton: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900">Show Buy Button</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showAutoShareBadge}
                onChange={(e) =>
                  updateConfig({ showAutoShareBadge: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900">Show Auto-share Badge</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showIndexNumber}
                onChange={(e) =>
                  updateConfig({ showIndexNumber: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900">Show Index Number</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.enableHoverScale}
                onChange={(e) =>
                  updateConfig({ enableHoverScale: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900">Enable Hover Scale</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.enableHoverGradient}
                onChange={(e) =>
                  updateConfig({ enableHoverGradient: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900">Enable Hover Gradient</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.enableImageZoom}
                onChange={(e) =>
                  updateConfig({ enableImageZoom: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-slate-900">Enable Image Zoom</span>
            </label>
          </section>

          {/* Additional Customizations */}
          <section className="space-y-4">
            <h3 className="font-semibold text-slate-900">Advanced Settings</h3>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Buy Button Text
              </label>
              <Input
                type="text"
                value={config.buyButtonText}
                onChange={(e) =>
                  updateConfig({ buyButtonText: e.target.value })
                }
                className="w-full text-slate-900!"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Heading Font Weight: {config.headingFontWeight}
              </label>
              <Select
                options={[
                  { value: "600", label: "600 - Semibold" },
                  { value: "700", label: "700 - Bold" },
                  { value: "800", label: "800 - Extra Bold" },
                ]}
                defaultValue={config.headingFontWeight.toString()}
                onChange={(value) =>
                  updateConfig({
                    headingFontWeight: Number(
                      value,
                    ) as GalleryConfig["headingFontWeight"],
                  })
                }
                className="w-full"
              />
            </div>

            {/* <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Card Opacity: {Math.round(config.cardOpacity * 100)}%
              </label>
              <input
                type="range"
                min="0.3"
                max="1"
                step="0.1"
                value={config.cardOpacity}
                onChange={(e) =>
                  updateConfig({ cardOpacity: Number(e.target.value) })
                }
                className="w-full"
              />
            </div> */}

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Card Padding: {config.cardPadding}
              </label>
              <input
                type="range"
                min="0"
                max="8"
                value={config.cardPadding}
                onChange={(e) =>
                  updateConfig({ cardPadding: Number(e.target.value) })
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Hover Scale: {(config.hoverScaleAmount ?? 1.05).toFixed(2)}x
              </label>
              <input
                type="range"
                min="1"
                max="1.2"
                step="0.05"
                value={config.hoverScaleAmount ?? 1.05}
                onChange={(e) =>
                  updateConfig({ hoverScaleAmount: Number(e.target.value) })
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Caption Lines: {config.captionLines}
              </label>
              <input
                type="range"
                min="1"
                max="4"
                value={config.captionLines}
                onChange={(e) =>
                  updateConfig({
                    captionLines: Number(
                      e.target.value,
                    ) as GalleryConfig["captionLines"],
                  })
                }
                className="w-full"
              />
            </div>
          </section>

          {/* Reset Button */}
          <section>
            <button
              onClick={resetConfig}
              className="w-full px-4 py-3 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
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
