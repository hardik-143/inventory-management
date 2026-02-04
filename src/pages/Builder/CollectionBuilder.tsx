import BackgroundColorDropdown from "@/components/builder-panel/BackgroundColorDropdown";
import RangeInput from "@/components/form/form-elements/RangeInput";
import Checkbox from "@/components/form/input/Checkbox";
// import Input from "@/components/form/input/InputField";
import Select from "@/components/form/Select";
import { CollectionConfig } from "@/context/colllection/collecitonConfig.types";
import { getBackgroundColor } from "@/context/common";
import { initialCollection } from "@/data/collection";
import {
  getAspectRatioClass,
  getFontFamilyClass,
  getGridColsClass,
  getShadowClasses,
  getTextColor,
} from "@/helpers/builderHelper";
import { useCollectionConfig } from "@/hooks/useCollectionConfig";
import clsx from "clsx";
import {
  AlignHorizontalSpaceBetween,
  AlignVerticalSpaceBetween,
} from "lucide-react";
import React, { useEffect, useMemo } from "react";

export default function CollectionBuilder() {
  const { config, updateConfig, applyLightTheme, applyDarkTheme, resetConfig } =
    useCollectionConfig();

  const backgroundColor = useMemo(() => {
    return config.pageBackgroundColor ?? getBackgroundColor(config.theme);
  }, [config.pageBackgroundColor, config.theme]);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);
  return (
    <div className="flex gap-4 md:gap-6 min-h-[calc(100vh-76px)] max-lg:min-h-[calc(100vh-65px)] relative">
      <div
        className={clsx(
          "relative z-10 flex min-h-dvh w-full flex-col",
          getTextColor(config.theme),
        )}
      >
        <div
          className={clsx(
            "mx-auto grid max-w-7xl",
            `grid-cols-1`,
            getGridColsClass(config.gridColumns),
          )}
          style={{
            direction: config.direction as "ltr" | "rtl",
            columnGap: `${config.horizontalGap * 0.25}rem`,
            rowGap: `${config.verticalGap * 0.25}rem`,
          }}
        >
          {initialCollection.map((item, index) => (
            <article
              key={item.id}
              className={clsx(
                "group relative overflow-hidden rounded-lg transition flex flex-col bg-white",
                getShadowClasses(config.shadowSize),
              )}
              style={{
                borderRadius: `${config.borderRadius}px`,
                backgroundColor: config.cardBackgroundColor,
                borderColor: config.cardBorderColor,
                color: config.textColor,
              }}
            >
              <div
                className={clsx(
                  "relative overflow-hidden",
                  getAspectRatioClass(config.imageAspectRatio),
                )}
              >
                <img
                  src={item.preview}
                  alt={item.name}
                  className={clsx(
                    "h-full w-full object-cover transition-transform duration-500",
                    config.enableHoverScale && "group-hover:scale-105",
                  )}
                  loading="lazy"
                />
                {config.enableHoverGradient && (
                  <div
                    className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), transparent)`,
                    }}
                  />
                )}
              </div>
              <div
                className={clsx(
                  "relative space-y-3 px-5 pb-6 pt-5 flex flex-col grow",
                  getFontFamilyClass(config.fontFamily),
                )}
                style={{
                  padding: `${config.cardPadding * 0.25}rem`,
                }}
              >
                {config.showProductId ? (
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] opacity-75">
                    {/* {config.showAutoShareBadge && (
                      <span>{item.autoShare ? "Auto-share" : "Manual"}</span>
                    )} */}
                    {config.showIndexNumber && (
                      <span>#{String(index + 1).padStart(2, "0")}</span>
                    )}
                  </div>
                ) : null}
                <h2
                  className="font-semibold leading-tight"
                  style={{
                    fontSize: `${config.headingFontSize}px`,
                    fontWeight: config.headingFontWeight,
                  }}
                >
                  {item.name}
                </h2>
                {config.showCaption && item.caption && (
                  <p
                    className="opacity-75 m-0!"
                    style={{
                      fontSize: `${config.bodyFontSize}px`,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: config.captionLines,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.caption}
                  </p>
                )}
                {/* {config.showBuyButton && (
                  <button
                    className="mt-auto! w-full px-4 py-2 rounded-lg font-medium transition"
                    style={{
                      backgroundColor: config.accentColor,
                      color: "white",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.8";
                      e.currentTarget.style.transform = `scale(${config.hoverScaleAmount})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {config.buyButtonText}
                  </button>
                )} */}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="min-w-[360px]">
        <div
          className={clsx(
            "shadow-xl border sticky  bg-white top-[calc(76px+24px)] max-lg:top-[calc(65px+24px)] max-md:top-[calc(65px+16px)] border-gray-300 rounded-lg  transition-transform duration-300 overflow-y-auto translate-x-0 max-h-[calc(100vh-76px-48px)] max-lg:max-h-[calc(100vh-65px-48px)] max-md:max-h-[calc(100vh-65px-32px)]",
          )}
        >
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                Collection Builder
              </h2>
              {/* <button
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
              </button> */}
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
                  {/* ☀️&nbsp;&nbsp;  */}
                  Light
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
                  {/* 🌙&nbsp;&nbsp;  */}
                  Dark
                </button>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="font-semibold text-slate-900">
                Page Background Color
              </h3>
              <BackgroundColorDropdown
                selectedColor={config.pageBackgroundColor}
                onColorSelect={(color) =>
                  updateConfig({ pageBackgroundColor: color })
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
            {/* <section className="space-y-4">
              <h3 className="font-semibold text-slate-900">Accent Color</h3>
              <div className="flex flex-wrap gap-5">
                {Object.values(colorSchemes).map((scheme) => {
                  const color = scheme.primary;
                  return (
                    <div
                      className="relative group"
                      style={
                        {
                          "--main-color": color,
                        } as React.CSSProperties
                      }
                    >
                      <span
                        className={`absolute left-0 top-0 z-1 w-10 h-10 scale-[1.2] rounded-[9px] border-2 border-transparent transition-all duration-200 group-hover:border-(--main-color) ${config.accentColor === color ? "border-(--main-color)!" : "border-transparent"}`}
                      ></span>
                      <button
                        key={color}
                        onClick={() => updateConfig({ accentColor: color })}
                        className="w-10 relative z-9 h-10 rounded-lg transition transform border-none"
                        style={{
                          backgroundColor: color,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </section> */}

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
                  { value: "inter", label: "Inter" },
                ]}
                defaultValue={config.fontFamily}
                onChange={(value) =>
                  updateConfig({
                    fontFamily: value as CollectionConfig["fontFamily"],
                  })
                }
                className="w-full"
              />
            </section>

            <section>
              {/* <div className="space-y-4">
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
              </div> */}
              <RangeInput
                label="Number of Columns"
                min={2}
                max={4}
                value={config.gridColumns}
                onChange={(value) => updateConfig({ gridColumns: value })}
              />
            </section>

            {/* Gap Size */}
            <section>
              <RangeInput
                label={
                  <div className="flex gap-2 items-center">
                    <AlignHorizontalSpaceBetween className="w-5 h-5" />
                    Horizontal Gap Between Cards
                  </div>
                }
                min={2}
                max={8}
                value={config.horizontalGap}
                onChange={(value) => updateConfig({ horizontalGap: value })}
              />
            </section>
            <section>
              <RangeInput
                label={
                  <div className="flex gap-2 items-center">
                    <AlignVerticalSpaceBetween className="w-5 h-5" />
                    Vertical Gap Between Cards
                  </div>
                }
                min={2}
                max={8}
                value={config.verticalGap}
                onChange={(value) => updateConfig({ verticalGap: value })}
              />
            </section>

            {/* Border Radius */}
            <section className="space-y-4">
              <RangeInput
                label="Border Radius"
                min={0}
                max={32}
                value={config.borderRadius}
                onChange={(value) => updateConfig({ borderRadius: value })}
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
                        shadowSize: size as CollectionConfig["shadowSize"],
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

            <section className="space-y-4">
              <h3 className="font-semibold text-slate-900">
                Image Aspect Ratio
              </h3>
              <Select
                options={[
                  { value: "5/6", label: "5:6 (Portrait)" },
                  { value: "4/5", label: "4:5 (Tall)" },
                  { value: "1/1", label: "1:1 (Square)" },
                  { value: "16/9", label: "16:9 (Wide)" },
                ]}
                defaultValue={config.imageAspectRatio}
                onChange={(value) =>
                  updateConfig({
                    imageAspectRatio:
                      value as CollectionConfig["imageAspectRatio"],
                  })
                }
                className="w-full"
              />
            </section>

            {/* Font Sizes */}
            <section>
              <RangeInput
                label={`Heading Font Size`}
                min={16}
                max={32}
                value={config.headingFontSize}
                onChange={(value) => updateConfig({ headingFontSize: value })}
              />
            </section>
            <section>
              <RangeInput
                label={`Body Font Size`}
                min={12}
                max={18}
                value={config.bodyFontSize}
                onChange={(value) => updateConfig({ bodyFontSize: value })}
              />
            </section>

            {/* Direction */}
            {/* <section className="space-y-4">
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
            </section> */}

            {/* Toggle Features */}
            <section className="space-y-4">
              <h3 className="font-semibold text-slate-900">Features</h3>
              {/* <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.showBuyButton}
                  onChange={(e) =>
                    updateConfig({ showBuyButton: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <span className="text-slate-900">Show Buy Button</span>
              </label> */}
              {/* <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.showAutoShareBadge}
                  onChange={(e) =>
                    updateConfig({ showAutoShareBadge: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <span className="text-slate-900">Show Auto-share Badge</span>
              </label> */}
              {/* <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.showIndexNumber}
                  onChange={(e) =>
                    updateConfig({ showIndexNumber: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <span className="text-slate-900">Show Index Number</span>
              </label> */}
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  onChange={(val) => updateConfig({ enableHoverScale: val })}
                  checked={config.enableHoverScale}
                  className="w-4 h-4"
                />
                <span className="text-slate-900">Enable Hover Scale</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  onChange={(val) => updateConfig({ enableHoverGradient: val })}
                  checked={config.enableHoverGradient}
                  className="w-4 h-4"
                />
                <span className="text-slate-900">Enable Hover Gradient</span>
              </label>
              {/* <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  onChange={(val) => updateConfig({ enableImageZoom: val })}
                  checked={config.enableImageZoom}
                  className="w-4 h-4"
                />
                <span className="text-slate-900">Enable Image Zoom</span>
              </label> */}
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  onChange={(val) => updateConfig({ showProductId: val })}
                  checked={config.showProductId}
                  className="w-4 h-4"
                />
                <span className="text-slate-900">Show Product Id</span>
              </label>
            </section>

            {/* Additional Customizations */}
            <section>
              {/* <h3 className="font-semibold text-slate-900">
                Advanced Settings
              </h3> */}
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Heading Font Weight
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[600, 700, 800].map((weight) => (
                  <button
                    key={weight}
                    onClick={() =>
                      updateConfig({
                        headingFontWeight:
                          weight as CollectionConfig["headingFontWeight"],
                      })
                    }
                    className={clsx(
                      "px-3 py-2 rounded-lg font-medium transition",
                      config.headingFontWeight === weight
                        ? "bg-blue-500 text-white!"
                        : "bg-slate-200 text-slate-900! hover:bg-slate-300",
                    )}
                  >
                    {weight}
                  </button>
                ))}
              </div>
              {/* <Select
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
                      ) as CollectionConfig["headingFontWeight"],
                    })
                  }
                  className="w-full"
                /> */}

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
            </section>
            <section>
              <RangeInput
                label="Card Padding"
                min={0}
                max={8}
                value={config.cardPadding}
                onChange={(value) => updateConfig({ cardPadding: value })}
              />
            </section>
            {/* <section>
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
            </section> */}
            {/* <section>
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
                      ) as CollectionConfig["captionLines"],
                    })
                  }
                  className="w-full"
                />
              </div>
            </section> */}

            {/* Reset Button */}
            <section className="pt-4">
              <button
                onClick={resetConfig}
                className="w-full px-4 py-3 rounded-lg bg-red-500 text-white! font-medium hover:bg-red-600 transition-all duration-200 ease-linear"
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
